interface Props {
  title: string;
  subtitle?: string;
  gold?: boolean;
}

const SectionHeading = ({ title, subtitle, gold = true }: Props) => (
  <div className="text-center mb-12">
    <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${gold ? "text-gradient-gold" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
  </div>
);

export default SectionHeading;
