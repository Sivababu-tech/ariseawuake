import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Target, Users, Star, ArrowRight, Mic, Shield, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import founderImg from "@/assets/founder.jpg";
import transformImg from "@/assets/transformation.jpg";
import ContactMapSection from "@/components/ContactMapSection";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,   // run only once
    threshold: 0.3,      // 30% visible
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const problems = [
  { icon: MessageCircle, text: "Fear to speak English in public" },
  { icon: Shield, text: "Lack of confidence in interviews & presentations" },
  { icon: Mic, text: "Stage fear holding you back from opportunities" },
  { icon: Users, text: "Struggling to communicate ideas effectively" },
];

const programs = [
  {
    title: "Public Speaking Mastery",
    desc: "Overcome stage fear and become a powerful speaker",
    icon: Mic,
    for: "Students & Professionals",
  },
  {
    title: "Confidence Building",
    desc: "Transform your self-belief and personality",
    icon: Shield,
    for: "Anyone lacking confidence",
  },
  {
    title: "Communication Skills",
    desc: "Master English communication for career growth",
    icon: MessageCircle,
    for: "Job Seekers & Professionals",
  },
  {
    title: "Leadership Development",
    desc: "Develop leadership qualities and influence",
    icon: TrendingUp,
    for: "Aspiring Leaders",
  },
];

const testimonials = [
  { name: "Priya S.", role: "Software Engineer", text: "I went from trembling on stage to confidently presenting to 200+ people. Shiwa sir's coaching changed my career." },
  { name: "Karthik R.", role: "MBA Student", text: "My interview skills improved dramatically. I got placed in my dream company thanks to Arise Awake." },
  { name: "Deepa M.", role: "Teacher", text: "I was afraid to speak in English. Now I conduct workshops in English confidently. Thank you Shiwa sir!" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-display font-medium tracking-widest uppercase text-sm mb-4"
        >
          Arise Awake Personality Development
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-[3.5rem] font-bold leading-tight mb-6"
        >
          Transform Your{" "}
          <span className="text-gradient-gold">Confidence</span>
          <br />& <span className="text-gradient-gold">Communication</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          For students, job seekers & professionals — Learn from{" "}
          <span className="text-primary font-semibold">Shiwa G Shankar</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-lg shadow-gold hover:opacity-90 transition-opacity"
          >
            Book Free Demo
          </a>
          <Link
            to="#"
            className="border border-primary/50 text-primary px-8 py-3.5 rounded-md font-semibold text-lg hover:bg-primary/10 transition-colors"
          >
            Explore Programs
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Problem */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Does This Sound Like You?"
          subtitle="You're not alone. Thousands face these challenges every day."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <p.icon size={22} className="text-primary" />
              </div>
              <p className="text-logo-gray text-sm">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Solution */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <SectionHeading title="The Arise Awake Solution" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            At Arise Awake, we don't just teach — we <span className="text-primary font-semibold">transform</span>.
            Our proven methodology has helped 1000+ individuals overcome their fears, build unshakable confidence,
            and master the art of public speaking.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { num: 1000, suffix: "+", label: "Students Transformed" },
              { num: 5, suffix: "+", label: "Years of Impact" },
              { num: 95, suffix: "%", label: "Success Rate" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-gradient-gold">
                  <CountUp end={s.num} suffix={s.suffix} />
                </p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Founder Mini */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
          <img
            src={founderImg}
            alt="Shiwa G Shankar"
            className="w-64 h-64 rounded-full object-cover border-4 border-primary/30 shadow-gold"
            loading="lazy"
            width={256}
            height={256}
          />
          <div>
            <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-2">Meet the Founder</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Shiwa G Shankar</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A passionate personality development trainer and public speaking coach who has transformed the lives of
              thousands of students and professionals. His mission: to make every individual speak with confidence.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Know His Story <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Programs Preview */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Programs" subtitle="Designed for real-world transformation" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 hover:shadow-gold transition-all group"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon size={20} className="text-primary" />
              </div>
              <h4 className="font-bold text-lg mb-2">{p.title}</h4>
              <p className="text-muted-foreground text-sm mb-3">{p.desc}</p>
              <p className="text-primary text-xs font-medium">For: {p.for}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="#"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            View All Programs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Transformation */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <SectionHeading title="Transformations" subtitle="Real stories. Real results." />
        <motion.div {...fadeUp} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {[
                { before: "Afraid to speak in public", after: "Confidently addresses audiences of 200+" },
                { before: "Struggled with English", after: "Fluent English communicator" },
                { before: "Failed multiple interviews", after: "Placed in dream company" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-1 bg-destructive/10 text-destructive rounded-md p-3 text-sm text-center">
                    {t.before}
                  </div>
                  <ArrowRight size={16} className="text-primary shrink-0" />
                  <div className="flex-1 bg-primary/10 text-primary rounded-md p-3 text-sm text-center font-medium">
                    {t.after}
                  </div>
                </div>
              ))}
            </div>
            <img
              src={transformImg}
              alt="Student transformations"
              className="rounded-lg border border-border"
              loading="lazy"
              width={600}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="What Our Students Say" />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-logo-gray text-sm italic mb-4">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <ContactMapSection />
    {/* <CTASection /> */}
  </Layout>
);

export default Index;
