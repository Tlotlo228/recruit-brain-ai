import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BarChart3, MessageSquare, Workflow, GraduationCap, Globe, Sparkles, Code, Database, Zap, Shield, ExternalLink } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const KO_FI_URL = "https://ko-fi.com/biyuaiagency";

interface Skill {
  icon: typeof Code;
  name: string;
  level: number; // 0-100
}

interface ProjectCard {
  title: string;
  subtitle: string;
  stat: string;
  statLabel: string;
  icon: typeof Bot;
  skills: Skill[];
}

const projects: ProjectCard[] = [
  {
    title: "AI Customer Support",
    subtitle: "Chatbot Specialist",
    stat: "30+",
    statLabel: "Chatbots Built",
    icon: MessageSquare,
    skills: [
      { icon: MessageSquare, name: "Natural Language Processing", level: 95 },
      { icon: Code, name: "Prompt Engineering", level: 90 },
      { icon: Sparkles, name: "Multi-Agent Systems", level: 80 },
    ],
  },
  {
    title: "Workflow Automation",
    subtitle: "Automation Architect",
    stat: "75+",
    statLabel: "Integrations",
    icon: Workflow,
    skills: [
      { icon: Workflow, name: "n8n / Make Workflows", level: 95 },
      { icon: Code, name: "API Integration", level: 90 },
      { icon: Zap, name: "Event-Driven Design", level: 85 },
    ],
  },
  {
    title: "Data Processing",
    subtitle: "Data Transformation Expert",
    stat: "50+",
    statLabel: "Pipelines",
    icon: Database,
    skills: [
      { icon: Database, name: "Data Cleaning", level: 95 },
      { icon: Code, name: "Transformation", level: 90 },
      { icon: Sparkles, name: "Aggregation", level: 80 },
    ],
  },
  {
    title: "API Integration",
    subtitle: "Integration Specialist",
    stat: "75+",
    statLabel: "Integrations",
    icon: Globe,
    skills: [
      { icon: Code, name: "REST APIs", level: 90 },
      { icon: Shield, name: "Authentication", level: 85 },
      { icon: Sparkles, name: "Data Mapping", level: 80 },
    ],
  },
  {
    title: "Webhook Management",
    subtitle: "Real-time Event Specialist",
    stat: "100+",
    statLabel: "Webhooks",
    icon: Zap,
    skills: [
      { icon: Zap, name: "Event Handling", level: 95 },
      { icon: Code, name: "Security", level: 90 },
      { icon: Shield, name: "Reliability", level: 85 },
    ],
  },
  {
    title: "AI Consulting",
    subtitle: "Strategy & Implementation",
    stat: "20+",
    statLabel: "Clients Served",
    icon: GraduationCap,
    skills: [
      { icon: GraduationCap, name: "AI Strategy", level: 95 },
      { icon: BarChart3, name: "Business Analysis", level: 90 },
      { icon: Sparkles, name: "Implementation", level: 85 },
    ],
  },
];

const SkillBar = ({ skill }: { skill: Skill }) => (
  <div className="rounded-xl bg-muted/50 p-4">
    <div className="flex items-center gap-3 mb-2">
      <skill.icon className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
    </div>
    <div className="flex gap-1.5">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full transition-colors ${
            i < Math.round(skill.level / 20)
              ? "bg-foreground"
              : "bg-muted-foreground/20"
          }`}
        />
      ))}
    </div>
  </div>
);

const Portfolio = () => (
  <div>
    {/* Hero */}
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="opacity-0 animate-fade-in text-3xl font-bold md:text-5xl mb-6">
          Our Portfolio
        </h1>
        <p className="opacity-0 animate-fade-in-delay-1 text-lg text-muted-foreground">
          A showcase of our AI capabilities — from chatbots and automations
          to data pipelines, integrations, and consulting engagements.
        </p>
      </div>
    </section>

    {/* Projects Grid */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2 animate-stagger">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-destructive/80 text-destructive-foreground">
                  <p.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.subtitle}</p>
                  <span className="inline-flex items-center gap-1.5 mt-1 rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-medium">
                    📅 {p.stat} {p.statLabel}
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3 mb-5">
                {p.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>

              {/* View Past Work Button */}
              <a
                href={KO_FI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-foreground/5 border border-border py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              >
                View Past Work <Sparkles className="h-4 w-4" />
              </a>
            </div>
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
