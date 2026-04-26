import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logos.png";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="Arise Awuake" className="h-12 mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Personality Development & Public Speaking Academy by Shiwa G Shankar. Transforming lives through confidence and communication.
          </p>
        </div>

        <div>
          <h4 className="text-primary font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Founder", "Programmes", "Results", "Contact"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-primary font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <span>+91 95733 40708</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <span>ariseawuake@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-primary mt-0.5" />
              <span className="text-[10px] leading-tight">Back Side Of Lakshmi Towers Apartment, 3/3, JNF Road, Proddatur, AP 516360</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Arise Awuake. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
