import { useEffect, useState } from 'react';
import { Calendar, Clock, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HandHeart } from 'lucide-react';


// --- CORRECTED HELPER FUNCTION ---
/**
 * Calculates the next fellowship date (2nd or 4th Sunday).
 * - Displays "Today" or "Tomorrow" if applicable.
 * - After the day ends, it automatically finds the next date on reload.
 * @returns {string} A formatted string like "Today", "Tomorrow", or "August 10, Sunday".
 */
const getUpcomingFellowshipDate = (): string => {
  // Helper to find all Sundays for a given month and year
  const getSundays = (year: number, month: number): Date[] => {
    const dates: Date[] = [];
    const d = new Date(year, month, 1);
    d.setHours(0, 0, 0, 0); // Set time to 0 for consistent date comparisons
    while (d.getMonth() === month) {
      if (d.getDay() === 0) { // 0 = Sunday
        dates.push(new Date(d));
      }
      d.setDate(d.getDate() + 1);
    }
    return dates;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to the beginning of the day

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  let searchDate = new Date(); // Start searching from the current month

  // Loop for up to 12 months to find the next valid date
  for (let i = 0; i < 12; i++) {
    const year = searchDate.getFullYear();
    const month = searchDate.getMonth();
    const sundaysInMonth = getSundays(year, month);

    const potentialDates: Date[] = [];
    if (sundaysInMonth.length >= 2) {
      potentialDates.push(sundaysInMonth[1]); // 2nd Sunday
    }
    if (sundaysInMonth.length >= 4) {
      potentialDates.push(sundaysInMonth[3]); // 4th Sunday
    }

    // Find the first potential date that is on or after today
    for (const upcomingDate of potentialDates) {
      if (upcomingDate >= today) {
        if (upcomingDate.getTime() === today.getTime()) return "Today";
        if (upcomingDate.getTime() === tomorrow.getTime()) return "Tomorrow";

        // --- THIS IS THE FIX ---
        // Use formatToParts for reliable date formatting
        const options: Intl.DateTimeFormatOptions = {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        };
        const formatter = new Intl.DateTimeFormat('en-IN', options);
        const parts = formatter.formatToParts(upcomingDate);
        
        // Find each part by its type to safely build the string
        const day = parts.find(p => p.type === 'day')?.value;
        const month = parts.find(p => p.type === 'month')?.value;
        const weekday = parts.find(p => p.type === 'weekday')?.value;

        return `${month} ${day}, ${weekday}`; // e.g., "August 10, Sunday"
      }
    }

    // If no date is found, move to the first day of the next month
    searchDate = new Date(year, month + 1, 1);
  }

  return "Date to be announced"; // Fallback
};


const Events = () => {
  // Use state to hold the events data, which will be updated
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Weekly Fellowship Gathering",
      date: "Calculating...", // Placeholder text
      time: "2:00 PM - 3:00 PM",
      location: "MPC Church",
      description: "Join us for our regular fellowship meetings where we come together for worship, prayer, Bible study, and community building. All young people are welcome!",
      type: "Regular",
      icon: <Users className="w-6 h-6" />,
      showButton: false ,
      buttonIcon:""
    },
    {
      id: 2,
      title: "Christmas Charity Drive",
      date: "December 2025",
      time: "Throughout the month",
      location: "Community Outreach",
      description: "During the Christmas festival, we're organizing a charity drive to help those in need . Join us in spreading God's love through service and donations.",
      type: "Special",
      icon: <Heart className="w-6 h-6" />,
      showButton: true ,
      buttonText:"Donate",
      buttonIcon: <HandHeart className="mr-2 h-9 w-9" /> 
    },
    {
      id: 3,
      title: "Bible Study Series",
      date: "Ongoing",
      time: "Mathew : 4 - 6",
      location: "MPC Church",
      description: "We're currently studying specific chapters from the Bible. Come grow in God's Word with us as we explore scripture together and learn from each other.",
      type: "Study",
      icon: <Calendar className="w-6 h-6" />,
      showButton: false ,
      buttonIcon:""
      }
  ]);

const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // useEffect hook to update the date when the component mounts
  useEffect(() => {
    const fellowshipDate = getUpcomingFellowshipDate();
    setEvents(currentEvents =>
      currentEvents.map(event =>
        event.id === 1 ? { ...event, date: fellowshipDate } : event
      )
    );
  }, []); // Empty dependency array means this runs once on mount


  return (
    <div className="min-h-screen bg-background">
      {/* Header with Gradient */}
      <section 
        className="py-16 pt-32 text-white relative z-10"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--mpc-dark-blue)), hsl(var(--mpc-light-blue)))'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Events</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join us in fellowship, worship, and community service as we grow together in faith
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gray-50 min-h-[400px]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Upcoming Events</h2>
          {events.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No events available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card 
                  key={event.id} 
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="text-blue-600">{event.icon}</div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                          event.type === 'Regular' ? 'bg-green-500' :
                          event.type === 'Special' ? 'bg-red-500' :
                          'bg-blue-500'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 font-bold leading-tight">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="font-medium text-gray-700">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="font-medium text-gray-700">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="font-medium text-gray-700">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {event.description}
                    </p>
                      {/* {event.showButton && (
                    <Button 
                      className="w-full bg-blue-600 hover:bg-red-700 text-white font-medium "
                    >
                      {event.buttonText} {event.buttonIcon}
                    </Button>
                    )} */}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Want to Join Our Fellowship?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We welcome all young people who want to grow in faith and fellowship. 
            Come as you are and be part of our community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="px-8 hover:bg-red-500 transition-colors" onClick={scrollToFooter}>
              Contact Us
            </Button>
            {/* <Button size="lg" variant="outline" className="px-8 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all">
              Learn More
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;

