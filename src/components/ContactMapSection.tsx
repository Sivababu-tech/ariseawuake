import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import SectionHeading from "@/components/SectionHeading";
import transformImg from "@/assets/transformation.jpg";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

const ContactMapSection = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                "service_3wddawj",
                "template_wvh7vxw",
                {
                    name: form.name,
                    phone: form.phone,
                    email: form.email,
                    message: form.message,
                },
                "S6UibsgFuWSmK343S"
            )
            .then(() => {
                setSubmitted(true);
                setForm({
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                });
            })
            .catch(() => {
                alert("Email failed");
            });
    };

    return (
        <section id="contact" className="py-20 bg-card">
            <div className="container mx-auto px-4">

                {/* SAME HEADING STYLE */}
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Ready to start your transformation? Reach out to us today."
                />

                {/* SAME GRID + WIDTH */}
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                    {/* LEFT SIDE (MAP - SAME CARD STYLE) */}
                    <motion.div {...fadeUp} className="w-full h-full">
                        <div className="relative w-full h-[500px] md:h-[100%] rounded-xl overflow-hidden border border-border">

                            <img
                                src={transformImg}
                                alt="Arise Awake Location"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Optional overlay (like hero section) */}
                            <div className="absolute inset-0 bg-black/30"></div>

                        </div>
                    </motion.div>

                    {/* RIGHT SIDE (FORM - EXACT SAME DESIGN) */}
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                        <div className="bg-card border border-border rounded-xl p-6 md:p-8">

                            <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>
                            <p className="text-muted-foreground text-sm mb-6">
                                Fill in your details and we'll get back to you within 24 hours
                            </p>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <h4 className="text-lg font-bold mb-2">Message Sent!</h4>
                                    <p className="text-muted-foreground text-sm">
                                        We'll get back to you soon. Thank you!
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">

                                    <div>
                                        <label className="text-sm font-medium mb-1.5 block">
                                            Your Name *
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            value={form.name}
                                            onChange={(e) =>
                                                setForm({ ...form, name: e.target.value })
                                            }
                                            className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium mb-1.5 block">
                                            Phone Number *
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) =>
                                                setForm({ ...form, phone: e.target.value })
                                            }
                                            className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium mb-1.5 block">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={form.email}
                                            onChange={(e) =>
                                                setForm({ ...form, email: e.target.value })
                                            }
                                            className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium mb-1.5 block">
                                            Message *
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={form.message}
                                            onChange={(e) =>
                                                setForm({ ...form, message: e.target.value })
                                            }
                                            className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                                            placeholder="I'm interested in..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-gold text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        Send Message
                                    </button>

                                </form>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactMapSection;