import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Bot, GraduationCap, Code, Blocks, Users, Rocket, Shield } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import GlowCard from "@/components/GlowCard";
import RoboticToggle from "@/components/RoboticToggle";
import ParticleNetwork from "@/components/ParticleNetwork";
import Typewriter from "@/components/Typewriter";
import WavingRobot from "@/components/WavingRobot";

const services = [
  { icon: Bot, title: "AI Automations", desc: "Streamline your business with intelligent automation workflows that save time, reduce errors, and scale effortlessly." },
  { icon: Brain, title: "AI Consulting", desc: "Strategic AI guidance to identify opportunities, optimize operations, and implement cutting-edge solutions for your business." },
  { icon: GraduationCap, title: "AI Mentorship", desc: "One-on-one and group mentorship programs to upskill your team in AI technologies and best practices." },
  { icon: Blocks, title: "No-Code / Low-Code", desc: "Rapid application development using no-code and low-code platforms to bring your ideas to life fast." },
  { icon: Code, title: "Custom Development", desc: "Full-stack custom software development for complex AI-powered applications tailored to your needs." },
];

const highlights = [
  { icon: Brain, title: "AI-First Culture", desc: "We live and breathe AI — it's at the core of everything we build." },
  { icon: Users, title: "Expert Team", desc: "Two co-founders with deep expertise in AI, automation, and business strategy." },
  { icon: Rocket, title: "Rapid Delivery", desc: "From concept to deployment in weeks, not months." },
  { icon: Shield, title: "Trusted Partners", desc: "Delivering reliable AI solutions for businesses across Africa and beyond." },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-background to-primary/10 py-24 md:py-36">
      <ParticleNetwork />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(35_50%_50%/0.12),transparent)]" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="opacity-0 animate-fade-in inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <Brain className="h-4 w-4 animate-float" />
          AI Agency — Botswana
        </div>
        <h1 className="opacity-0 animate-fade-in-delay-1 mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Building the Future with{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            <Typewriter text="Artificial Intelligence" speed={80} />
          </span>
        </h1>
        <p className="opacity-0 animate-fade-in-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          BIYU AI Agency delivers AI automations, consulting, mentorship, and custom development
          to transform businesses across Botswana and beyond.
        </p>
        <div className="opacity-0 animate-fade-in-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton strength={0.4}>
            <Button asChild size="lg" className="btn-3d-glow gap-2 px-8 text-base relative overflow-hidden group">
              <Link to="/services">
                <span className="relative z-10 flex items-center gap-2">
                  Our Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <Button asChild variant="outline" size="lg" className="btn-3d-outline px-8 text-base group">
              <Link to="/portfolio">
                <span className="transition-colors group-hover:text-primary">View Our Work</span>
              </Link>
            </Button>
          </MagneticButton>
        </div>

        {/* Robotic toggles dashboard with waving robot */}
        <div className="relative opacity-0 animate-fade-in-delay-3 mt-16">
          <WavingRobot />
          <div className="flex items-center justify-center gap-8 flex-wrap relative z-20">
            <RoboticToggle label="Automations" active />
            <RoboticToggle label="Consulting" />
            <RoboticToggle label="Mentorship" active />
            <RoboticToggle label="No-Code" />
          </div>
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="opacity-0 animate-fade-in text-center text-3xl font-bold md:text-4xl mb-4">
          What We Do
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          End-to-end AI solutions — from strategy to deployment.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-stagger">
          {services.map((s) => (
            <GlowCard key={s.title}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </GlowCard>
          ))}
        </div>
        <div className="text-center mt-10">
          <MagneticButton strength={0.3}>
            <Button asChild variant="outline" className="btn-3d-outline group">
              <Link to="/services">
                <span className="transition-colors group-hover:text-primary flex items-center gap-2">
                  Explore All Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>

    {/* Why BIYU */}
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="opacity-0 animate-fade-in text-center text-3xl font-bold md:text-4xl mb-4">
          Why BIYU AI?
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          We don't just talk AI — we build it, deploy it, and teach it.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-stagger">
          {highlights.map((h) => (
            <GlowCard key={h.title}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="opacity-0 animate-fade-in text-3xl font-bold text-accent-foreground md:text-4xl mb-4">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-accent-foreground/70 mb-8 max-w-lg mx-auto">
          Get in touch with us today and let's explore how AI can take your business to the next level.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton strength={0.35}>
            <Button asChild size="lg" variant="secondary" className="btn-3d-outline opacity-0 animate-fade-in-delay-2 gap-2 px-8 text-base group">
              <Link to="/contact">
                Contact Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <Button asChild size="lg" variant="secondary" className="btn-3d-outline opacity-0 animate-fade-in-delay-3 gap-2 px-8 text-base group">
              <Link to="/apply">
                Join Our Team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
