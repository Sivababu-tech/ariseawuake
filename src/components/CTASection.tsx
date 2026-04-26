import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-20 bg-gradient-gold relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,hsl(0_0%_0%/0.3))]" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 text-center relative z-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Start Your Transformation Today
      </h2>
      <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
        Take the first step towards becoming a confident communicator. Book your free demo session now.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/919573340708"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background text-foreground px-8 py-3 rounded-md font-semibold hover:bg-background/90 transition-colors"
        >
          WhatsApp Us
        </a>
        <a
          href="tel:+919573340708"
          className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors"
        >
          Call Now
        </a>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
