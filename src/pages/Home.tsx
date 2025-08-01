import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, Users, Hand, Target } from 'lucide-react';
import TodaysVerse from '@/components/TodaysVerse';
import heroImage from '@/assets/hero-image.jpg';
import { FaPrayingHands } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative">
      {/* Unified Background for Header and Hero */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 h-screen"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-70"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 z-10">
        {/* Floating Orbs */}
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
        <div className="floating-orb floating-orb-3"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
              <span className="gradient-text-primary entrance-slide-left">Welcome to</span>
              <span className="block gradient-text-accent font-extrabold  entrance-slide-right stagger-1 animated-gradient-text ">MPC Youth Fellowship</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white font-bold max-w-2xl mx-auto leading-relaxed drop-shadow-md entrance-slide-left stagger-2">
              Where Love for God Leads to a Life of Purpose
            </p>
            
            <div className="glass-morphism rounded-2xl p-8 mb-8 relative overflow-hidden entrance-slide-right stagger-3">
              <div className=" absolute inset-0 rounded-2xl"></div>
              <blockquote className="text-lg md:text-xl italic mb-4 font-bold text-white relative z-10">
                {/* "Because he loves me," says the Lord, "I will rescue him; I will protect him, for he acknowledges my name." */}
                அவன் என்னிடத்தில் வாஞ்சையாயிருக்கிறபடியால் அவனை விடுவிப்பேன்; என் நாமத்தை அவன் அறிந்திருக்கிறபடியால் அவனை உயர்ந்த அடைக்கலத்திலே வைப்பேன்.
              </blockquote>
              <cite className="gradient-text-accent font-bold text-lg relative z-10">— சங்கீதம் : 91 : 14</cite>
            </div>

            <Link to="/pray-for-me">
              <Button size="lg" className="text-lg px-10 py-5 group border-0 text-white font-bold rounded-2xl entrance-fade-up stagger-4">
                <Heart className="w-5 h-5 mr-2" />
                Pray for Me
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

      </section>

      {/* Today's Verse Section */}
      <div className="relative z-10 bg-background">
        <TodaysVerse />
      </div>

      {/* Quick Info Section */}
      <section className="py-20 bg-background relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl modern-card-gradient shadow-lg hover-lift relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold  mb-3 gradient-text-accent">Fellowship</h3>
              <p className="text-muted-foreground leading-relaxed">
                Join us every 2nd and 4th Sunday for worship and fellowship
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl modern-card-gradient shadow-lg hover-lift relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                <FaPrayingHands className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold  mb-3 gradient-text-accent">Prayer</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of prayer and community support
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl modern-card-gradient shadow-lg hover-lift relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold  mb-3 gradient-text-accent">Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
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