import { Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 text-secondary" />
              <div>
                <p>Pattarivilai</p>
                <p>Thalakulam Post</p>
                <p>Kanyakumari</p>
                <p>Tamil Nadu</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-secondary" />
              <p>aslinjoelr@gmail.com</p>
            </div>
          </div>

          {/* Fellowship Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Fellowship Times</h3>
            <p className="text-primary-foreground/90">
              Every 2nd and 4th Sunday
            </p>
            <p className="text-primary-foreground/90">
              2:00 PM - 3:00 PM
            </p>
            <p className="text-primary-foreground/90">
              MPC Church, Meippanin Pathai
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="flex items-center space-x-2 text-primary-foreground hover:text-secondary transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span>Instagram</span>
              </a>
            </div> */}
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@MPC_Youths"
                className="flex items-center space-x-2 text-primary-foreground hover:text-secondary transition-colors"
              >
                <Youtube className="w-6 h-6" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 MPC Youth Fellowship. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 mt-2">
            "Because he loves me, says the Lord, I will rescue him; I will protect him, for he acknowledges my name." — Psalm 91:14
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;