import { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import fellowshipImage from '@/assets/fellowship-image.jpg';
import bibleStudyImage from '@/assets/bible-study-image.jpg';
import communityServiceImage from '@/assets/community-service-image.jpg';
import whoWeAreImage from '@/assets/who_we_are.jpg';
import livingWithPurposeImage from '@/assets/living_with_purpose.jpg';

const OurStory = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              
              // Enhanced scroll animations
              const leftElements = entry.target.querySelectorAll('.section-animate-left');
              const rightElements = entry.target.querySelectorAll('.section-animate-right');
              
              leftElements.forEach((el, idx) => {
                setTimeout(() => {
                  el.classList.remove('translate-x-[-100px]', 'opacity-0');
                  el.classList.add('translate-x-0', 'opacity-100');
                }, idx * 200);
              });
              
              rightElements.forEach((el, idx) => {
                setTimeout(() => {
                  el.classList.remove('translate-x-[100px]', 'opacity-0');
                  el.classList.add('translate-x-0', 'opacity-100');
                }, idx * 200);
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header with Gradient - matching home page style */}
      <section 
        className="py-16 pt-32 text-white relative z-10"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--mpc-dark-blue)), hsl(var(--mpc-light-blue)))'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            The journey of faith, friendship, and purpose that defines MPC Youth Fellowship
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="py-16 fade-in-left"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="transform transition-all duration-1000 translate-x-[-100px] opacity-0 section-animate-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                MPC Youth Fellowship is a vibrant group of young boys from Meippanin Pathai Church (MPC), 
                started in 2022. We're united by our love for Jesus and a desire to grow stronger in faith. 
                Our community is built on friendship, worship, and purpose.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Together, we walk the path of Christ with passion and joy, supporting each other through 
                life's challenges and celebrating God's goodness in our lives.
              </p>
            </div>
            <div className="transform transition-all duration-1000 translate-x-[100px] opacity-0 section-animate-right hover:scale-105">
              <img
                src={whoWeAreImage}
                alt="MPC Youth Fellowship - Who We Are"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey of Faith */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="py-16 bg-gradient-to-r from-secondary/10 to-accent/10 fade-in-right"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 transform transition-all duration-1000 translate-x-[-100px] opacity-0 section-animate-left">
              <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/9gnLKsRsbQU"
                  title="Our Journey of Faith"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="order-1 lg:order-2 transform transition-all duration-1000 translate-x-[100px] opacity-0 section-animate-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Journey of Faith
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In my pain, I cried out, thinking my story had ended. But God never abandons His own. 
                He didn't forget me — and I now trust Him as the One who heals, restores, and makes 
                all things new.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This journey has taught us that even in our darkest moments, God's light shines 
                brightest. Our fellowship is a testament to His faithfulness and love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growing in Faith */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-16 fade-in-left"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="transform transition-all duration-1000 translate-x-[-100px] opacity-0 section-animate-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Growing in Faith
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We help each other grow closer to Jesus through prayer, worship, and learning God's Word. 
                Our goal is to build a strong spiritual foundation in every young heart.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe faith is a journey, and we're here to walk it together. Every meeting is a 
                step forward in knowing Christ more and understanding His purpose for our lives.
              </p>
            </div>
            <div className="transform transition-all duration-1000 translate-x-[100px] opacity-0 section-animate-right">
              <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/Gnp3VDFfazg"
                  title="Growing in Faith"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living with Purpose */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="py-16 bg-gradient-to-r from-accent/10 to-secondary/10 fade-in-right"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 transform transition-all duration-1000 translate-x-[-100px] opacity-0 section-animate-left hover:scale-105">
              <img
                src={livingWithPurposeImage}
                alt="Living with Purpose"
                className="rounded-lg shadow-xl w-full h-auto hover:shadow-2xl transition-shadow"
              />
            </div>
            <div className="order-1 lg:order-2 transform transition-all duration-1000 translate-x-[100px] opacity-0 section-animate-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Living with Purpose
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We're not just growing—we're going! We're called to spread God's love and light 
                in our institutions, homes, and communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through service, outreach, and bold faith, we aim to impact the world for Jesus. 
                This is more than a fellowship — it's a mission that transforms lives and communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
