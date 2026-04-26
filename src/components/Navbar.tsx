import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logos.png";
import EnquiryPopup from "./EnquiryPopup";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Founder", path: "/founder" },
  { label: "Programmes", path: "/programs" },
  { label: "Results", path: "/results" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Arise Awuake" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-foreground/70"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <EnquiryPopup programName="Book Free Demo (Navbar)">
            <button
              className="bg-gradient-gold text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book Free Demo
            </button>
          </EnquiryPopup>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium tracking-wide border-b border-border/50 ${location.pathname === link.path ? "text-primary" : "text-foreground/70"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <EnquiryPopup programName="Book Free Demo (Mobile Navbar)">
            <button
              onClick={() => setOpen(false)}
              className="block w-full mt-4 text-center bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold"
            >
              Book Free Demo
            </button>
          </EnquiryPopup>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
