import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import transformImg from "@/assets/transformation.jpg";
import { Helmet } from "react-helmet-async";
import Counter from "@/components/Counter";
import { useReviews } from "@/hooks/useReviews";
import ReviewCarousel from "@/components/ReviewCarousel";
import { Loader2 } from "lucide-react";


const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Results = () => {
  const { data: reviews, isLoading, error } = useReviews();
  
  return (
  <Layout>

    <Helmet>
      <title>Results | Success Stories | Arise Awuake Flow</title>

      <meta
        name="description"
        content="See real success stories of students who improved communication skills, gained confidence, and achieved career growth with Arise Awuake Flow training programmes."
      />
      <meta
        name="keywords"
        content="communication training, success stories, confidence building, interview skills, public speaking, career growth, Arise Awuake Flow"
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
              { val: 1000, suffix: "+", label: "Students Trained" },
              { val: 95, suffix: "%", label: "Success Rate" },
              { val: 500, suffix: "+", label: "Placements Assisted" },
              { val: 50, suffix: "+", label: "Corporate Workshops" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-bold text-gradient-gold">
                  <Counter value={s.val} suffix={s.suffix} />
                </p>
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
        <SectionHeading title="Transformation Stories" subtitle="Before & After — the power of Arise Awuake" />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "https://www.youtube.com/embed/yck2h6h3_Bo",
            "https://www.youtube.com/embed/ZXLrCoPiihU",
            "https://www.youtube.com/embed/PYhD_S-GVfY"
          ].map((url, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="aspect-[4/5] rounded-xl overflow-hidden border border-border bg-card shadow-lg"
            >
              <iframe
                width="100%"
                height="100%"
                src={url}
                title={`Student Testimonial ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Google Reviews */}
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-[2.5rem] font-bold mb-2 text-gradient-gold py-2 leading-tight md:leading-normal">
            Happy Students - Google Reviews
          </h2>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground animate-pulse">Fetching real stories from Google...</p>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-destructive font-medium mb-2">Oops! Something went wrong.</p>
            <p className="text-muted-foreground text-sm">We couldn't load the reviews right now. Please try again later.</p>
          </div>
        ) : (
          <ReviewCarousel reviews={reviews} />
        )}
      </div>
    </section>

    {/* Group photo */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div {...fadeUp}>
          <img
            src={transformImg}
            alt="Arise Awuake students celebrating"
            className="rounded-2xl border border-border w-full"
            loading="lazy"
          />
          <p className="text-center text-muted-foreground text-sm mt-4">
            Our students celebrating after completing the Public Speaking Mastery programme
          </p>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </Layout>
  );
};

export default Results;
