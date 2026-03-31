import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Mic, Shield, MessageCircle, TrendingUp, Users, BookOpen, ArrowRight, CheckCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const programs = [
  {
    icon: Mic,
    title: "Public Speaking Mastery",
    desc: "Conquer stage fear and become a powerful, impactful speaker. Learn to captivate any audience with confidence.",
    forWhom: "Students, Professionals, Entrepreneurs",
    duration: "8 Weeks",
    outcomes: ["Overcome stage fear completely", "Deliver speeches with confidence", "Master body language & voice modulation", "Handle Q&A sessions effortlessly"],
  },
  {
    icon: Shield,
    title: "Confidence Building Program",
    desc: "Build unshakable self-confidence that transforms every area of your life — from interviews to relationships.",
    forWhom: "Anyone lacking self-confidence",
    duration: "6 Weeks",
    outcomes: ["Develop a powerful self-image", "Overcome social anxiety", "Build assertiveness skills", "Project confidence in any situation"],
  },
  {
    icon: MessageCircle,
    title: "English Communication Skills",
    desc: "Master English speaking for professional success. Think in English, speak fluently, and communicate with impact.",
    forWhom: "Job Seekers, Working Professionals",
    duration: "10 Weeks",
    outcomes: ["Speak fluent, confident English", "Excel in interviews & group discussions", "Professional email & presentation skills", "Expand vocabulary naturally"],
  },
  {
    icon: TrendingUp,
    title: "Leadership & Personality Development",
    desc: "Develop the personality and leadership traits that set you apart. Become someone people look up to.",
    forWhom: "Aspiring Leaders, Managers",
    duration: "8 Weeks",
    outcomes: ["Develop executive presence", "Master persuasion & influence", "Lead teams with confidence", "Build a magnetic personality"],
  },
  {
    icon: Users,
    title: "Campus to Corporate",
    desc: "Bridge the gap between college and career. Get industry-ready with communication, grooming, and interview skills.",
    forWhom: "College Students, Fresh Graduates",
    duration: "4 Weeks",
    outcomes: ["Ace campus placements", "Master group discussions", "Professional grooming & etiquette", "Resume & LinkedIn optimization"],
  },
  {
    icon: BookOpen,
    title: "Weekend Workshops",
    desc: "Intensive weekend workshops for rapid skill-building. Perfect for busy professionals who want quick transformation.",
    forWhom: "Working Professionals",
    duration: "2 Days",
    outcomes: ["Intensive hands-on practice", "Immediate skill improvement", "Networking with like-minded individuals", "Certificate of completion"],
  },
];

const Programs = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Programs"
          subtitle="Each program is designed for real-world results. We focus on transformation, not just information."
        />

        <div className="space-y-8 max-w-5xl mx-auto">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <p.icon size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold">{p.title}</h3>
                      <span className="text-primary text-sm font-semibold bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {p.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{p.desc}</p>
                    <p className="text-sm text-foreground/60 mb-4">
                      <span className="text-primary font-medium">For:</span> {p.forWhom}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {p.outcomes.map((o, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle size={14} className="text-primary shrink-0" />
                          {o}
                        </div>
                      ))}
                    </div>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Enquire Now <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Programs;
