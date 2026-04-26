import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contact = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Get In Touch"
            subtitle="Ready to start your transformation? Reach out to us today."
          />

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
            {/* Contact Info */}
            <motion.div {...fadeUp} className="space-y-6 flex flex-col h-full">
              <div className="flex-none">
                <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919573340708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MessageCircle size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">WhatsApp</p>
                      <p className="text-muted-foreground text-sm">+91 95733 40708</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919573340708"
                    className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Call Us</p>
                      <p className="text-muted-foreground text-sm">+91 95733 40708</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <p className="text-muted-foreground text-sm">ariseawuake@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Address</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        Back Side Of Lakshmi Towers Apartment, 3/3, JNF Road, Jammalamadugu, Proddatur Rd, opposite to Haryana Jilebi Centre, Proddatur, Andhra Pradesh 516360
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border min-h-[200px] flex-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.2282339512394!2d78.5487548!3d14.756167600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb478a3612144dd%3A0xe5e2c400bcef2d27!2sArise%20Awuake%20%22%20Communication%20Skills%20%26%20Personality%20Development%20Training%20Centre!5e0!3m2!1sen!2sin!4v1777185973246!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Arise Awake Location"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="h-full">
              <ContactForm 
                title="Send Us a Message" 
                subtitle="Fill in your details and we'll get back to you within 24 hours"
                className="h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default Contact;
