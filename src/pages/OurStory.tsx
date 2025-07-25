import { useEffect, useRef } from 'react';
import fellowshipImage from '@/assets/fellowship-image.jpg';
import heroImage from '@/assets/hero-image.jpg';

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
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
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
            <div>
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
            <div className="fade-in-right">
              <img
                src={fellowshipImage}
                alt="MPC Youth Fellowship"
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
            <div className="order-2 lg:order-1 fade-in-left">
              <img
                src={heroImage}
                alt="Journey of Faith"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
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
            <div>
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
            <div className="fade-in-right">
              <div className="bg-gradient-to-br from-secondary to-accent p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Our Weekly Gatherings</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Prayer and Worship
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Bible Study
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Fellowship Time
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Community Service
                  </li>
                </ul>
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
            <div className="order-2 lg:order-1 fade-in-left">
              <div className="bg-primary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To spread God's love and light in our institutions, homes, and communities 
                  through service, outreach, and bold faith. This is more than a fellowship — 
                  it's a mission to impact the world for Jesus.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
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