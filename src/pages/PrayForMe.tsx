import { useState } from 'react';
import { Send, Heart, BookOpen, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import prayerImage from '@/assets/prayer-image.jpg';

const PrayForMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    prayerRequest: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 1. Make the handleSubmit function async
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.prayerRequest.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and prayer request.",
        variant: "destructive",
      });
      return;
    }

    // 2. Send the data to your Formspree endpoint
    try {
      const response = await fetch('https://formspree.io/f/xldlbovn', { // <-- REPLACE WITH YOUR URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show success message
        toast({
          title: "Prayer request submitted",
          description: "Thank you for sharing. We will keep you in our prayers.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          prayerRequest: ''
        });
      } else {
        // Handle server errors
        throw new Error('Failed to submit the form.');
      }
    } catch (error) {
      // Handle network errors
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Could not submit your prayer request. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const inspirationalVerses = [

    

    {
      verse: "அவன் என்னை நோக்கிக் கூப்பிடுவான், நான் அவனுக்கு மறுஉத்தரவு அருளிச்செய்வேன்; ஆபத்தில் நானே அவனோடிருந்து, அவனைத் தப்புவித்து, அவனைக் கனப்படுத்துவேன்.",
      reference: "சங்கீதம் 91:15"
    },
    {
      verse: "என் நாமத்தினாலே நீங்கள் எதைக்கேட்டாலும் அதை நான் செய்வேன்.",
      reference: "யோவான் 14:14"
    },
    {
      verse: "கேளுங்கள், அப்பொழுது உங்களுக்குக் கொடுக்கப்படும்; தேடுங்கள், அப்பொழுது கண்டடைவீர்கள்; தட்டுங்கள் அப்பொழுது உங்களுக்குத் திறக்கப்படும்.",
      reference: "மத்தேயு 7:7"
    }
  ];

  const prayerCategories = [
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: "Personal & Family",
      description: "Health, relationships, guidance, and family matters"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Spiritual Growth",
      description: "Faith, wisdom, spiritual battles, and calling"
    },
    {
      icon: <Send className="w-6 h-6 text-secondary" />,
      title: "Others & Community",
      description: "Friends, community, missions, and global concerns"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header with Verse */}
      <section 
        className="py-16 pt-32 text-white relative z-10"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--mpc-dark-blue)), hsl(var(--mpc-light-blue)))'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Prayer Request</h1>
          <div className="max-w-3xl mx-auto">
            <Quote className="w-8 h-8 mx-auto mb-4 text-white/80" />
            <blockquote className="text-xl md:text-2xl font-light italic mb-4 text-white/90">
                மேலும், நீங்கள் விசுவாசமுள்ளவர்களாய் ஜெபத்திலே எவைகளைக் கேட்பீர்களோ அவைகளையெல்லாம் பெறுவீர்கள் என்றார்.
            </blockquote>
            <cite className="text-lg text-white/80">மத்தேயு 21:22</cite>
          </div>
        </div>
      </section>

      {/* Prayer Categories
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Prayer Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prayerCategories.map((category, index) => (
              <Card key={index} className="card-hover border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-lg font-semibold">
                    {category.icon}
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Prayer Request Form */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="md:order-2">
              <img
                src={prayerImage}
                alt="Prayer Request"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:order-1">
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-primary">
                    Send to MPC Prayer Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Your Email (Optional)</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="prayerRequest">Prayer Request</Label>
                      <Textarea
                        id="prayerRequest"
                        name="prayerRequest"
                        value={formData.prayerRequest}
                        onChange={handleInputChange}
                        placeholder="Share your prayer request here..."
                        className="resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full hover:bg-red-500 transition-colors">
                      🕊️ Pray with Me
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Verses */}
      <section className="py-12 verse-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Inspirational Verses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspirationalVerses.map((verse, index) => (
              <Card key={index} className="card-hover border-0 shadow-md">
                <CardContent className="text-center">
                  <Quote className="w-8 h-8 mx-auto mb-4 text-secondary" />
                  <blockquote className="text-lg italic mb-4">
                    {verse.verse}
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">
                    {verse.reference}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayForMe;