import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Bot, CalendarCheck, BellRing, Database, BarChart3, MapPin, Search, Receipt, MessageCircle } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import GlowCard from "@/components/GlowCard";
import RoboticToggle from "@/components/RoboticToggle";
import ParticleNetwork from "@/components/ParticleNetwork";
import Typewriter from "@/components/Typewriter";
import WavingRobot from "@/components/WavingRobot";

const services = [
  { icon: CalendarCheck, title: "Booking & ordering websites", desc: "Mobile-first sites where customers book, order or enquire, with requests sent straight to your WhatsApp or email." },
  { icon: BellRing, title: "Follow-ups & reminders", desc: "Instant replies to new enquiries, follow-up emails, and reminders that bring clients back, running on n8n." },
  { icon: Bot, title: "AI customer assistants", desc: "Assistants that answer common questions, collect details and hand the customer to your team at the right moment." },
  { icon: Database, title: "CRM & pipeline setup", desc: "One place for every lead, customer and next step. We're HotKup's partner in Botswana for service businesses." },
  { icon: BarChart3, title: "Monthly results reports", desc: "Every month you see what the system did: enquiries, orders, bookings and returning clients." },
  { icon: Brain, title: "AI audits & training", desc: "We map where your time and customers are being lost, then show your team how to use AI in their own work." },
];

const highlights = [
  { icon: Search, title: "Problem first", desc: "We find the one thing costing you money, then choose the technology. Sometimes the answer is simpler than AI." },
  { icon: MapPin, title: "Built in Botswana", desc: "Based in Gaborone and Francistown, building for customers who use phones, WhatsApp and mobile data." },
  { icon: BarChart3, title: "Results you can see", desc: "A monthly report shows what the system did for you, so you can judge it on numbers, not promises." },
  { icon: Receipt, title: "No setup fee", desc: "One monthly fee, based on the value of the problem we fix. Three-month minimum." },
];

const WHATSAPP_URL = "https://wa.me/26776406432?text=" + encodeURIComponent("Hi BIYU, I'd like to book a free AI audit for my business.");

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
          Less admin. Fewer lost customers.{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            <Typewriter text="Systems that follow up for you." speed={60} />
          </span>
        </h1>
        <p className="opacity-0 animate-fade-in-delay-2 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          BIYU AI Agency builds booking, ordering, follow-up and reminder systems for businesses in
          Botswana, on WhatsApp, email and the web. We start with the problem that's costing you money,
          then choose the technology.
        </p>
        <div className="opacity-0 animate-fade-in-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton strength={0.4}>
            <Button asChild size="lg" className="btn-3d-glow gap-2 px-8 text-base relative overflow-hidden group">
              <Link to="/contact">
                <span className="relative z-10 flex items-center gap-2">
                  Book a free AI audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <Button asChild variant="outline" size="lg" className="btn-3d-outline px-8 text-base group">
              <Link to="/portfolio">
                <span className="transition-colors group-hover:text-primary">See our work</span>
              </Link>
            </Button>
          </MagneticButton>
        </div>

        {/* Robotic toggles dashboard with waving robot */}
        <div className="relative opacity-0 animate-fade-in-delay-3 mt-16">
          <WavingRobot />
          <div className="flex items-center justify-center gap-8 flex-wrap relative z-20">
            <RoboticToggle label="Bookings" active />
            <RoboticToggle label="Follow-ups" />
            <RoboticToggle label="Reminders" active />
            <RoboticToggle label="Reports" />
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
          Practical systems for the work that slows a small business down.
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
          Why BIYU?
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          How we work with every client.
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
          What's slowing your business down?
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-accent-foreground/70 mb-8 max-w-lg mx-auto">
          Tell us where time or customers are slipping away. We'll look at it with you for free and show you what we'd fix first.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton strength={0.35}>
            <Button asChild size="lg" variant="secondary" className="btn-3d-outline opacity-0 animate-fade-in-delay-2 gap-2 px-8 text-base group">
              <Link to="/contact">
                Book a free AI audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <Button asChild size="lg" variant="secondary" className="btn-3d-outline opacity-0 animate-fade-in-delay-3 gap-2 px-8 text-base group">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
