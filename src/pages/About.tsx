import { Search, ShieldCheck, LifeBuoy, Smartphone, Linkedin } from "lucide-react";
import tlotloPhoto from "@/assets/tlotlo.png";
import daudiPhoto from "@/assets/daudi.jpg";
import GlowCard from "@/components/GlowCard";
import RoboticToggle from "@/components/RoboticToggle";

const values = [
  { icon: Search, title: "Problem first", desc: "We ask how the work happens today and what it costs before we suggest anything. If a simpler fix works better than AI, we'll say so." },
  { icon: ShieldCheck, title: "Honest proof", desc: "We only show work and results we can back up. No invented numbers, no fake reviews, no guarantees we can't keep." },
  { icon: LifeBuoy, title: "We stay after launch", desc: "Every system comes with support, a monthly results report and one improvement a month." },
  { icon: Smartphone, title: "Built for how Botswana works", desc: "Mobile-first, light on data, and connected to WhatsApp, because that's where your customers already are." },
];

const founders = [
  {
    name: "Tlotlo Johane",
    role: "Co-Founder & Technical Lead",
    photo: tlotloPhoto,
    linkedin: "https://www.linkedin.com/in/tlotlojohane",
    bio: "Tlotlo is BIYU's technical lead. He designs and builds BIYU's client systems: booking and ordering websites, n8n follow-up and reminder workflows, AI assistants and the monthly results reports that show clients what their system did.",
    specialties: ["n8n Automation", "AI Assistants", "Web Development", "System Design"],
  },
  {
    name: "Daudi Soniya",
    role: "Co-Founder & Strategy Lead",
    photo: daudiPhoto,
    linkedin: "https://www.linkedin.com/in/daudi-soniya-said-msonda-16030b28b",
    bio: "Daudi leads strategy and client relationships. He leads client conversations, consulting and marketing, making sure every system BIYU builds starts from a real business problem.",
    specialties: ["AI Consulting", "Marketing", "Business Development", "Client Success"],
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
          BIYU AI Agency is based in Gaborone and Francistown. We build AI and automation systems for
          small and mid-sized businesses: booking and ordering websites, follow-ups, reminders, CRM and
          reporting. Our focus is the work that costs owners time and customers.
        </p>
        <div className="opacity-0 animate-fade-in-delay-2 mt-10 flex items-center justify-center gap-6 flex-wrap">
          <RoboticToggle label="Bookings" active />
          <RoboticToggle label="Follow-ups" active />
          <RoboticToggle label="Reports" />
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
              To help Botswana's small businesses stop losing customers and hours to manual work, with
              systems they can afford, understand and measure.
            </p>
          </GlowCard>
          <GlowCard>
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground leading-relaxed">
              We audit how your business runs today, find the costliest leak (a missed follow-up, a
              no-show, a customer who never comes back) and build the smallest system that fixes it.
              Then we report on it every month.
            </p>
          </GlowCard>
        </div>

        {/* Founders Section */}
        <h2 className="opacity-0 animate-fade-in text-3xl font-bold text-center mb-4">
          Meet the Founders
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          The people who'll build and look after your system.
        </p>
        <div className="grid gap-8 md:grid-cols-2 mb-16 animate-stagger">
          {founders.map((founder) => (
            <GlowCard key={founder.name} className="text-center">
              {/* Photo placeholder */}
              <div className="mx-auto mb-6 h-40 w-40 rounded-full border-4 border-primary/20 bg-muted flex items-center justify-center overflow-hidden">
                <img src={founder.photo} alt={founder.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{founder.role}</p>
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
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
        <h2 className="opacity-0 animate-fade-in text-2xl font-bold text-center mb-10">How we work</h2>
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
