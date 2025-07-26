import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import prayerImage from '@/assets/prayer-image.jpg';

const PrayForMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    prayerRequest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mjkowynk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', prayerRequest: '' });
        toast({
          title: "Prayer Request Submitted",
          description: "We will pray for you. God bless!",
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit prayer request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto text-center shadow-xl">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                We Will Pray for You
              </h2>
              <p className="text-muted-foreground mb-6">
                Thank you for sharing your prayer request with us. Our fellowship will lift you up in prayer.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="w-full"
              >
                Submit Another Prayer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header with Verse */}
      <section className="py-16 pt-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Prayer Request</h1>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl italic mb-4 leading-relaxed">
              "Cast all your anxiety on Him because He cares for you."
            </blockquote>
            <cite className="text-secondary font-semibold text-lg">— 1 Peter 5:7</cite>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <Card className="shadow-xl border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-accent" />
                    Share Your Prayer Request
                  </CardTitle>
                  <p className="text-muted-foreground">
                    We believe in the power of prayer. Share your request with us and we'll pray for you.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-primary font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Your name (optional)"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-primary font-medium">
                        Email <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="prayerRequest" className="text-primary font-medium">
                        Prayer Request <span className="text-accent">*</span>
                      </Label>
                      <Textarea
                        id="prayerRequest"
                        name="prayerRequest"
                        value={formData.prayerRequest}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="mt-2"
                        placeholder="Please share what you would like us to pray for..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-lg py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Prayer...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Prayer Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={prayerImage}
                  alt="Person in prayer"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="py-16 bg-gradient-to-r from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            You Are Not Alone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our fellowship believes in the power of community prayer. When you share your 
            request with us, you join a family that will stand with you in faith, believing 
            for God's best in your life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrayForMe;