import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import emailjs from "emailjs-com";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      "service_3wddawj",       // your service ID
      "template_wvh7vxw",      // your template ID
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: form.message,
      },
      "S6UibsgFuWSmK343S"      // your public key
    )
    .then((res) => {
      console.log("SUCCESS", res);
      alert("Email sent successfully");
      setSubmitted(true);
    })
    .catch((err) => {
      console.log("FAILED", err);
      alert("Email failed");
    });
};

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Get In Touch"
            subtitle="Ready to start your transformation? Reach out to us today."
          />

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div {...fadeUp} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MessageCircle size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">WhatsApp</p>
                      <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Call Us</p>
                      <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <p className="text-muted-foreground text-sm">info@ariseawake.in</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Location</p>
                      <p className="text-muted-foreground text-sm">Arise Awake Academy, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAw!5e0!3m2!1sen!2sin!4v1234567890"
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
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill in your details and we'll get back to you within 24 hours
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-primary" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground text-sm">We'll get back to you soon. Thank you!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="I'm interested in..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-gold text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                    >
                      Send Message via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default Contact;
