import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import transformImg from "@/assets/transformation.jpg";
import ContactForm from "./ContactForm";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

const ContactMapSection = () => {
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
                        <ContactForm />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactMapSection;