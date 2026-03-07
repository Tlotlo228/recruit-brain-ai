import { Brain, Target, Heart, Globe, Linkedin, Mail } from "lucide-react";
import tlotloPhoto from "@/assets/tlotlo.png";
import daudiPhoto from "@/assets/daudi.jpg";
import GlowCard from "@/components/GlowCard";
import RoboticToggle from "@/components/RoboticToggle";

const values = [
  { icon: Brain, title: "Innovation First", desc: "We push boundaries in AI research and application, never settling for the status quo." },
  { icon: Target, title: "Impact Driven", desc: "Every project we take on is measured by the tangible value it creates for our clients." },
  { icon: Heart, title: "People Centered", desc: "Our team is our greatest asset. We invest in growth, well-being, and continuous learning." },
  { icon: Globe, title: "Global Reach", desc: "We serve clients worldwide, embracing diverse perspectives and cross-cultural collaboration." },
];

const founders = [
  {
    name: "Tlotlo Johane",
    role: "Co-Founder & Technical Lead",
    photo: tlotloPhoto,
    bio: "Tlotlo is the technical backbone of BIYU AI. With deep expertise in AI development, automation workflows, and full-stack engineering, he architects and builds the intelligent systems that power our client solutions. From custom AI chatbots to complex automation pipelines, Tlotlo turns ambitious ideas into working products.",
    specialties: ["AI Development", "Automation", "Full-Stack Engineering", "System Architecture"],
  },
  {
    name: "Daudi Soniya",
    role: "Co-Founder & Strategy Lead",
    photo: daudiPhoto,
    bio: "Daudi drives the strategic vision and client relationships at BIYU AI. With a sharp eye for market opportunities and a passion for AI-powered business transformation, he leads consulting engagements, marketing strategy, and client success — ensuring every solution delivers real business value.",
    specialties: ["AI Consulting", "Marketing Strategy", "Business Development", "Client Success"],
  },
];

const About = () => (
  <div>
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="opacity-0 animate-fade-in text-3xl font-bold md:text-5xl mb-6">
          About BIYU AI Agency
        </h1>
        <p className="opacity-0 animate-fade-in-delay-1 text-lg text-muted-foreground">
          BIYU AI Agency is a next-generation AI agency based in Botswana, specializing in AI automations,
          consulting, mentorship, and custom development. We help businesses harness the power of
          artificial intelligence to grow, scale, and innovate.
        </p>
        <div className="opacity-0 animate-fade-in-delay-2 mt-10 flex items-center justify-center gap-6 flex-wrap">
          <RoboticToggle label="Automations" active />
          <RoboticToggle label="Consulting" active />
          <RoboticToggle label="Mentorship" />
        </div>
      </div>
    </section>

    {/* Mission & What We Do */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2 mb-16 animate-stagger">
          <GlowCard>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To democratize AI for businesses across Africa and beyond. We believe every organization
              — from startups to enterprises — deserves access to world-class AI solutions that drive
              real results.
            </p>
          </GlowCard>
          <GlowCard>
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground leading-relaxed">
              We build AI automations, provide strategic consulting, mentor teams on AI adoption,
              and develop custom solutions using both no-code/low-code tools and traditional software
              engineering. We're your end-to-end AI partner.
            </p>
          </GlowCard>
        </div>

        {/* Founders Section */}
        <h2 className="opacity-0 animate-fade-in text-3xl font-bold text-center mb-4">
          Meet the Founders
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Two passionate AI enthusiasts building the future from Botswana.
        </p>
        <div className="grid gap-8 md:grid-cols-2 mb-16 animate-stagger">
          {founders.map((founder) => (
            <GlowCard key={founder.name} className="text-center">
              {/* Photo placeholder */}
              <div className="mx-auto mb-6 h-40 w-40 rounded-full border-4 border-primary/20 bg-muted flex items-center justify-center overflow-hidden">
                <img src={founder.photo} alt={founder.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
              <p className="text-sm text-primary font-medium mb-4">{founder.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{founder.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {founder.specialties.map((s) => (
                  <span key={s} className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Values */}
        <h2 className="opacity-0 animate-fade-in text-2xl font-bold text-center mb-10">Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 animate-stagger">
          {values.map((v) => (
            <GlowCard key={v.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{v.title}</h3>
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
