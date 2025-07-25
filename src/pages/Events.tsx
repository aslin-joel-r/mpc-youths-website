import { Calendar, Clock, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Weekly Fellowship Gathering",
      date: "Every 2nd & 4th Sunday",
      time: "2:00 PM - 3:00 PM",
      location: "MPC Church",
      description: "Join us for our regular fellowship meetings where we come together for worship, prayer, Bible study, and community building. All young people are welcome!",
      type: "Regular",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Christmas Charity Drive",
      date: "December 2024",
      time: "Throughout the month",
      location: "Community Outreach",
      description: "During the Christmas festival, we're organizing a charity drive to help the poor in our community. Join us in spreading God's love through service and donations.",
      type: "Special",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Bible Study Series",
      date: "Ongoing",
      time: "During Fellowship",
      location: "MPC Church",
      description: "We're currently studying specific chapters from the Bible. Come grow in God's Word with us as we explore scripture together and learn from each other.",
      type: "Study",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  const getCardColor = (type: string) => {
    switch (type) {
      case 'Regular':
        return 'border-secondary';
      case 'Special':
        return 'border-accent';
      case 'Study':
        return 'border-primary';
      default:
        return 'border-border';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Regular':
        return 'bg-secondary text-white';
      case 'Special':
        return 'bg-accent text-white';
      case 'Study':
        return 'bg-primary text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Events</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join us in fellowship, worship, and community service as we grow together in faith
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card 
                key={event.id} 
                className={`card-hover ${getCardColor(event.type)} border-l-4 section-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 text-primary">
                      {event.icon}
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-foreground">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-4 font-medium">
                    {event.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white font-semibold"
                  >
                    More Info
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <Button size="lg" variant="default" className="px-8">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;