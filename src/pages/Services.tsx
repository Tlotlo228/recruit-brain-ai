import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Brain, GraduationCap, Code, Blocks, Zap, BarChart3, MessageSquare, Workflow } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import MagneticButton from "@/components/MagneticButton";
import RoboticToggle from "@/components/RoboticToggle";

const services = [
  {
    icon: Bot,
    title: "AI Automations",
    desc: "We design and deploy intelligent automation workflows that eliminate manual tasks, reduce human error, and let your team focus on what matters.",
    features: ["Workflow automation with n8n & Make", "Custom AI chatbots & assistants", "Email & CRM automation", "Data processing pipelines"],
  },
  {
    icon: Brain,
    title: "AI Consulting",
    desc: "Strategic guidance to help you identify AI opportunities, build roadmaps, and integrate AI into your operations for maximum impact.",
    features: ["AI readiness assessments", "Technology stack recommendations", "Implementation roadmaps", "ROI analysis & optimization"],
  },
  {
    icon: GraduationCap,
    title: "AI Mentorship",
    desc: "Hands-on mentorship programs for individuals and teams looking to master AI tools, prompt engineering, and automation technologies.",
    features: ["1-on-1 coaching sessions", "Team workshops & bootcamps", "Prompt engineering training", "AI tool mastery programs"],
  },
  {
    icon: Blocks,
    title: "No-Code / Low-Code Solutions",
    desc: "Rapid application development using platforms like Bubble, FlutterFlow, and Lovable to turn your ideas into functional products — fast.",
    features: ["MVP development in days", "Internal tool creation", "App prototyping", "Platform integrations"],
  },
  {
    icon: Code,
    title: "Custom Development",
    desc: "Full-stack software development for complex AI-powered applications that require custom architectures and deep technical expertise.",
    features: ["Web & mobile applications", "API development & integration", "Machine learning pipelines", "Cloud infrastructure setup"],
  },
];

const processSteps = [
  { icon: MessageSquare, title: "Discovery", desc: "We understand your goals, challenges, and vision." },
  { icon: BarChart3, title: "Strategy", desc: "We design a tailored AI solution roadmap." },
  { icon: Workflow, title: "Build", desc: "We develop and test your solution iteratively." },
  { icon: Zap, title: "Deploy & Scale", desc: "We launch, monitor, and optimize for growth." },
];

const Services = () => (
  <div>
    {/* Hero */}
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="opacity-0 animate-fade-in text-3xl font-bold md:text-5xl mb-6">
          Our Services
        </h1>
        <p className="opacity-0 animate-fade-in-delay-1 text-lg text-muted-foreground">
          From AI automations to custom development, we offer end-to-end solutions
          to help your business harness the power of artificial intelligence.
        </p>
        <div className="opacity-0 animate-fade-in-delay-2 mt-10 flex items-center justify-center gap-6 flex-wrap">
          <RoboticToggle label="Automations" active />
          <RoboticToggle label="Consulting" active />
          <RoboticToggle label="Mentorship" active />
          <RoboticToggle label="No-Code" active />
          <RoboticToggle label="Dev" active />
        </div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-8 animate-stagger">
          {services.map((s, i) => (
            <GlowCard key={s.title} className={`flex flex-col md:flex-row gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">{s.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="opacity-0 animate-fade-in text-center text-3xl font-bold mb-4">Our Process</h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          A proven approach to delivering AI solutions that work.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-stagger">
          {processSteps.map((step, i) => (
            <GlowCard key={step.title} className="text-center">
              <div className="text-3xl font-bold text-primary/20 mb-2">0{i + 1}</div>
              <div className="flex justify-center mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="opacity-0 animate-fade-in text-3xl font-bold text-accent-foreground md:text-4xl mb-4">
          Let's Build Something Amazing
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-accent-foreground/70 mb-8 max-w-lg mx-auto">
          Ready to bring AI into your business? Get in touch and let's discuss your project.
        </p>
        <MagneticButton strength={0.35}>
          <Button asChild size="lg" variant="secondary" className="btn-3d-outline opacity-0 animate-fade-in-delay-2 gap-2 px-8 text-base group">
            <Link to="/contact">
              Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </MagneticButton>
      </div>
    </section>
  </div>
);

export default Services;
