import { Brain, Target, Heart, Globe } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import RoboticToggle from "@/components/RoboticToggle";

const values = [
  { icon: Brain, title: "Innovation First", desc: "We push boundaries in AI research and application, never settling for the status quo." },
  { icon: Target, title: "Impact Driven", desc: "Every project we take on is measured by the tangible value it creates for our clients." },
  { icon: Heart, title: "People Centered", desc: "Our team is our greatest asset. We invest in growth, well-being, and continuous learning." },
  { icon: Globe, title: "Global Reach", desc: "We serve clients worldwide, embracing diverse perspectives and cross-cultural collaboration." },
];

const About = () => (
  <div>
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="opacity-0 animate-fade-in text-3xl font-bold md:text-5xl mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          About BIYU AI Agency
        </h1>
        <p className="opacity-0 animate-fade-in-delay-1 text-lg text-muted-foreground">
          BIYU AI Agency is a next-generation recruitment and consulting firm specializing in artificial intelligence.
          We connect exceptional AI talent with organizations that are shaping the future of technology.
        </p>
        {/* Status toggles */}
        <div className="opacity-0 animate-fade-in-delay-2 mt-10 flex items-center justify-center gap-6 flex-wrap">
          <RoboticToggle label="Recruiting" active />
          <RoboticToggle label="Consulting" active />
          <RoboticToggle label="Training" />
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2 mb-16 animate-stagger">
          <GlowCard>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To bridge the gap between world-class AI talent and the companies that need them most.
              We believe that the right people, in the right roles, can accelerate AI adoption and create
              lasting positive impact across every industry.
            </p>
          </GlowCard>
          <GlowCard>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>What We Do</h2>
            <p className="text-muted-foreground leading-relaxed">
              From sourcing and vetting AI specialists to providing strategic consulting on AI integration,
              we offer end-to-end talent solutions. Our network spans machine learning engineers, data scientists,
              NLP researchers, computer vision experts, and AI product leaders.
            </p>
          </GlowCard>
        </div>

        <h2 className="opacity-0 animate-fade-in text-2xl font-bold text-center mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 animate-stagger">
          {values.map((v) => (
            <GlowCard key={v.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
