import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, Users, Hand, Target } from 'lucide-react';
import TodaysVerse from '@/components/TodaysVerse';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Unified Background for Header and Hero */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-70"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 z-10">
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="section-fade-in animate">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
              <span className="gradient-text-primary">Welcome to</span>
              <span className="block gradient-text-accent font-extrabold">MPC Youth Fellowship</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white font-bold max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Where Love for God Leads to a Life of Purpose
            </p>
            
            <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/30 shadow-lg">
              <blockquote className="text-lg md:text-xl italic mb-4 font-bold text-white">
                "Because he loves me," says the Lord, "I will rescue him; I will protect him, for he acknowledges my name."
              </blockquote>
              <cite className="gradient-text-accent font-bold text-lg">— Psalm 91:14</cite>
            </div>

            <Link to="/pray-for-me">
              <Button size="lg" className="text-lg px-8 py-4 card-hover group bg-red-600 hover:bg-red-700 text-white red-glow border-0">
                <Heart className="w-5 h-5 mr-2" />
                Pray for Me
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Today's Verse Section */}
      <div className="relative z-10 bg-background">
        <TodaysVerse />
      </div>

      {/* Quick Info Section */}
      <section className="py-16 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card shadow-md card-hover hover:shadow-xl transition-all hover:border-red-500">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Fellowship</h3>
              <p className="text-muted-foreground">
                Join us every 2nd and 4th Sunday for worship and fellowship
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card shadow-md card-hover hover:shadow-xl transition-all hover:border-red-500">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Hand className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Prayer</h3>
              <p className="text-muted-foreground">
                We believe in the power of prayer and community support
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card shadow-md card-hover hover:shadow-xl transition-all hover:border-red-500">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Purpose</h3>
              <p className="text-muted-foreground">
                Living with purpose and spreading God's love in our community
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;