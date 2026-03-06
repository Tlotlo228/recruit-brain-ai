import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BarChart3, MessageSquare, Workflow, GraduationCap, Globe, ExternalLink } from "lucide-react";
import GlowCard from "@/components/GlowCard";
import MagneticButton from "@/components/MagneticButton";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Customer Support Chatbot",
    category: "AI Automation",
    desc: "Built an intelligent customer support chatbot for a retail business that handles 80% of inquiries automatically, reducing response time from hours to seconds.",
    tags: ["Chatbot", "NLP", "n8n", "OpenAI"],
    icon: MessageSquare,
  },
  {
    title: "Automated Lead Generation Pipeline",
    category: "Workflow Automation",
    desc: "Designed an end-to-end lead generation system that scrapes, qualifies, and nurtures leads automatically — resulting in 3x more qualified meetings per month.",
    tags: ["n8n", "Make", "CRM", "Email Automation"],
    icon: Workflow,
  },
  {
    title: "Business Intelligence Dashboard",
    category: "Data & Analytics",
    desc: "Created a real-time analytics dashboard for a logistics company, providing AI-powered insights on fleet performance, delivery times, and cost optimization.",
    tags: ["Dashboard", "Analytics", "Data Viz", "AI Insights"],
    icon: BarChart3,
  },
  {
    title: "AI Strategy Consulting — Fintech Startup",
    category: "Consulting",
    desc: "Provided strategic AI consulting for a fintech startup, defining their AI roadmap, selecting the right tech stack, and guiding implementation of their first AI features.",
    tags: ["Strategy", "Fintech", "Roadmap", "AI Integration"],
    icon: Globe,
  },
  {
    title: "AI Mentorship Program — Corporate Team",
    category: "Mentorship",
    desc: "Ran a 12-week AI mentorship program for a corporate team of 20, covering prompt engineering, automation tools, and AI-assisted workflows.",
    tags: ["Training", "Prompt Engineering", "Workshops", "Team Upskill"],
    icon: GraduationCap,
  },
  {
    title: "No-Code SaaS MVP",
    category: "No-Code Development",
    desc: "Built a fully functional SaaS MVP in under 2 weeks using no-code tools, enabling the client to validate their business idea and secure seed funding.",
    tags: ["No-Code", "MVP", "Bubble", "Rapid Prototype"],
    icon: Bot,
  },
];

const Portfolio = () => (
  <div>
    {/* Hero */}
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="opacity-0 animate-fade-in text-3xl font-bold md:text-5xl mb-6">
          Our Portfolio
        </h1>
        <p className="opacity-0 animate-fade-in-delay-1 text-lg text-muted-foreground">
          A showcase of AI solutions we've built for businesses — from chatbots and automations
          to dashboards, consulting engagements, and mentorship programs.
        </p>
      </div>
    </section>

    {/* Projects Grid */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2 animate-stagger">
          {projects.map((p) => (
            <GlowCard key={p.title}>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <Badge variant="secondary" className="text-xs mb-1">{p.category}</Badge>
                  <h3 className="font-bold text-lg leading-tight">{p.title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-muted text-muted-foreground px-2.5 py-0.5 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="opacity-0 animate-fade-in text-3xl font-bold text-accent-foreground md:text-4xl mb-4">
          Want Results Like These?
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-accent-foreground/70 mb-8 max-w-lg mx-auto">
          Let's discuss your project and build something amazing together.
        </p>
        <MagneticButton strength={0.35}>
          <Button asChild size="lg" variant="secondary" className="btn-3d-outline opacity-0 animate-fade-in-delay-2 gap-2 px-8 text-base group">
            <Link to="/contact">
              Start a Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </MagneticButton>
      </div>
    </section>
  </div>
);

export default Portfolio;
