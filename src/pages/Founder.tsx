import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import founderImg from "@/assets/founder-siva.jpeg";
import heroBg from "@/assets/herosection-bg.jpg";
import { Award, BookOpen, Heart, Target, Users } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const milestones = [
  { year: "Early Life", text: "Like many, Shiwa struggled with communication and confidence during his school and college years. Speaking in public was his biggest fear." },
  { year: "The Turning Point", text: "A single workshop on public speaking changed everything. Shiwa realized that confidence is not born — it's built. He committed to mastering the art." },
  { year: "The Journey", text: "Years of rigorous self-training, mentorship, and real-world practice transformed him into a confident speaker and trainer." },
  { year: "Arise Awuake", text: "Fueled by his own transformation, Shiwa founded Arise Awuake to help others overcome the same fears he once faced." },
  { year: "Today", text: "Over 1000+ students transformed, countless success stories, and a mission that grows stronger every day." },
];

const values = [
  { icon: Heart, title: "Passion", desc: "Every session is driven by genuine care for student growth" },
  { icon: Target, title: "Results-Focused", desc: "We measure success by your transformation, not hours taught" },
  { icon: Users, title: "Community", desc: "Join a supportive family of confident communicators" },
  { icon: BookOpen, title: "Continuous Learning", desc: "Always evolving methods to deliver the best training" },
];

const Founder = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <img
            src={founderImg}
            alt="Shiwa G Shankar"
            className="w-64 h-64 md:w-80 md:h-80 aspect-square rounded-2xl object-cover object-top border-4 border-primary/20 shadow-gold"
            loading="lazy"
          />
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Founder & Lead Trainer</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Shiwa G <span className="text-gradient-gold">Shankar</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A passionate personality development trainer, public speaking coach, and the driving force behind
              Arise Awuake. His mission is simple yet powerful: to help every individual find their voice and
              speak with confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Journey */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading title="The Journey" subtitle="From fear to empowerment — a story of transformation" />
        <div className="max-w-3xl mx-auto space-y-0">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary shrink-0 mt-1.5" />
                {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-primary/20" />}
              </div>
              <div className="pb-10">
                <h4 className="text-primary font-bold text-lg mb-1">{m.year}</h4>
                <p className="text-muted-foreground leading-relaxed">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div {...fadeUp}>
          <Award size={48} className="text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "My mission is to ensure no one stays silent because of <span className="text-gradient-gold">fear</span>"
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every person has a voice worth hearing. Shiwa believes that the ability to communicate confidently
            is not a talent — it's a skill that can be learned. Through Arise Awuake, he has created a safe space
            where individuals shed their fears and discover the confident communicator within.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading title="What Drives Us" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-lg p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={22} className="text-primary" />
              </div>
              <h4 className="font-bold mb-2">{v.title}</h4>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Personal Message */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div {...fadeUp} className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gradient-gold mb-4">A Message from Shiwa</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed italic">
            <p>
              "When I look back at my journey, I see a young man who was terrified of speaking in front of
              even 5 people. Today, I train hundreds to speak confidently on any stage."
            </p>
            <p>
              "If you're reading this and you feel that fear — the sweaty palms, the racing heart, the
              trembling voice — I want you to know: I've been there. And I promise you, it gets better."
            </p>
            <p>
              "Come to Arise Awuake not just for a course, but for a transformation. I'll personally ensure
              you walk out as a different person — a confident, powerful communicator."
            </p>
          </div>
          <p className="text-primary font-semibold mt-6">— Shiwa G Shankar</p>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Founder;
