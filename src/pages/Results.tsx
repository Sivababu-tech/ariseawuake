import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import transformImg from "@/assets/transformation.jpg";
import { Star, ArrowRight, Quote } from "lucide-react";
import { Helmet } from "react-helmet-async";



const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const transformations = [
  {
    name: "Priya Subramanian",
    before: "Couldn't speak a single sentence in English without stammering. Avoided all social situations.",
    after: "Now confidently presents technical projects in English to international clients. Got promoted to team lead.",
    role: "Software Engineer, Chennai",
  },
  {
    name: "Karthik Ramanathan",
    before: "Failed 12 interviews due to poor communication. Lost confidence completely.",
    after: "Cleared his dream company interview with flying colors. Now earns 3x his previous salary.",
    role: "MBA Graduate, Bangalore",
  },
  {
    name: "Deepa Mohan",
    before: "Afraid to speak in staff meetings. Passed up multiple promotion opportunities.",
    after: "Now conducts workshops for 100+ teachers. Recognized as the best trainer in her school.",
    role: "School Teacher, Coimbatore",
  },
  {
    name: "Arjun Krishnan",
    before: "Severe stage fear. Trembled even during college presentations.",
    after: "Won state-level public speaking competition. Now mentors juniors in his college.",
    role: "Engineering Student, Madurai",
  },
];

const testimonials = [
  { name: "Sanjay V.", role: "Business Owner", text: "Shiwa sir doesn't just teach — he transforms. My entire team went through his program and our client presentations improved dramatically." },
  { name: "Lakshmi K.", role: "HR Manager", text: "I've recommended Arise Awake to over 50 professionals. Every single one came back thanking me. The results speak for themselves." },
  { name: "Rahul D.", role: "College Student", text: "I joined as a shy introvert. Three months later, I was hosting our college cultural fest. Shiwa sir believed in me when I didn't believe in myself." },
  { name: "Meera S.", role: "Homemaker", text: "I thought confidence was only for professionals. Shiwa sir showed me that every woman deserves to speak up. Now I confidently participate in community meetings." },
  { name: "Vijay R.", role: "IT Professional", text: "The weekend workshop alone changed my perspective. I went from avoiding meetings to volunteering for presentations. Best investment I ever made." },
  { name: "Anitha P.", role: "Nurse", text: "Communication with patients and doctors improved so much after the program. I feel respected and heard now. Thank you Arise Awake!" },
];

const Results = () => (
  <Layout>

    <Helmet>
      <title>Results | Success Stories | Arise Awake Flow</title>

      <meta
        name="description"
        content="See real success stories of students who improved communication skills, gained confidence, and achieved career growth with Arise Awake Flow training programs."
      />
      <meta
        name="keywords"
        content="communication training, success stories, confidence building, interview skills, public speaking, career growth, Arise Awake Flow"
      />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://techyora.in/results" />
    </Helmet>
    {/* Hero */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <motion.div {...fadeUp}>
          <SectionHeading
            title="Real Results. Real Lives Changed."
            subtitle="Don't take our word for it. See the transformations that speak louder than any promise."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-10">
            {[
              { num: "1000+", label: "Students Trained" },
              { num: "95%", label: "Success Rate" },
              { num: "500+", label: "Placements Assisted" },
              { num: "50+", label: "Corporate Workshops" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-bold text-gradient-gold">{s.num}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Transformation Stories */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Transformation Stories" subtitle="Before & After — the power of Arise Awake" />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h4 className="font-bold text-lg mb-1">{t.name}</h4>
              <p className="text-primary text-xs font-medium mb-4">{t.role}</p>
              <div className="space-y-3">
                <div className="bg-destructive/10 rounded-lg p-3">
                  <p className="text-xs text-destructive font-semibold mb-1">BEFORE</p>
                  <p className="text-sm text-foreground/70">{t.before}</p>
                </div>
                <div className="flex justify-center">
                  <ArrowRight size={16} className="text-primary rotate-90" />
                </div>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-xs text-primary font-semibold mb-1">AFTER</p>
                  <p className="text-sm text-foreground/80 font-medium">{t.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Group photo */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div {...fadeUp}>
          <img
            src={transformImg}
            alt="Arise Awake students celebrating"
            className="rounded-2xl border border-border w-full"
            loading="lazy"
          />
          <p className="text-center text-muted-foreground text-sm mt-4">
            Our students celebrating after completing the Public Speaking Mastery program
          </p>
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Student Testimonials" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <Quote size={20} className="text-primary/30 mb-3" />
              <p className="text-foreground/80 text-sm italic mb-4">{t.text}</p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Results;
