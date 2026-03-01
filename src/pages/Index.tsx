import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Rocket, Shield } from "lucide-react";

const highlights = [
  { icon: Brain, title: "AI-First Culture", desc: "Work with cutting-edge AI tools and shape the future of intelligent automation." },
  { icon: Users, title: "Elite Team", desc: "Collaborate with world-class AI researchers, engineers, and strategists." },
  { icon: Rocket, title: "Rapid Growth", desc: "Join a fast-scaling agency with massive impact across industries." },
  { icon: Shield, title: "Top Clients", desc: "Deliver AI solutions for Fortune 500 companies and innovative startups." },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-background to-primary/10 py-24 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(35_50%_50%/0.12),transparent)]" />
      <div className="container relative mx-auto px-4 text-center">
        <div className="opacity-0 animate-fade-in inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <Brain className="h-4 w-4 animate-float" />
          Now Hiring AI Specialists
        </div>
        <h1 className="opacity-0 animate-fade-in-delay-1 mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Join Our Team as an{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AI Specialist
          </span>
        </h1>
        <p className="opacity-0 animate-fade-in-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          BIYU AI Agency is looking for passionate AI professionals to help build intelligent solutions
          that transform businesses worldwide.
        </p>
        <div className="opacity-0 animate-fade-in-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="gap-2 px-8 text-base hover-scale">
            <Link to="/apply">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 text-base hover-scale">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="opacity-0 animate-fade-in text-center text-3xl font-bold md:text-4xl mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Why BIYU AI?
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          We're not just another agency — we're building the future of AI-powered business.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-stagger">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="opacity-0 animate-fade-in text-3xl font-bold text-accent-foreground md:text-4xl mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Ready to Shape the Future of AI?
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-accent-foreground/70 mb-8 max-w-lg mx-auto">
          Submit your application today and join a team that's redefining what's possible with artificial intelligence.
        </p>
        <Button asChild size="lg" variant="secondary" className="opacity-0 animate-fade-in-delay-2 gap-2 px-8 text-base hover-scale">
          <Link to="/apply">
            Start Your Application <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Index;
