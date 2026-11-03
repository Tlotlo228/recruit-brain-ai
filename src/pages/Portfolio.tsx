import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ExternalLink, UtensilsCrossed, Sparkles, GraduationCap, CalendarCheck, LayoutDashboard } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

interface Project {
  title: string;
  type: string;
  icon: typeof Sparkles;
  problem: string;
  built: string[];
  tools: string[];
  link?: { href: string; label: string };
}

// Only real BIYU work. Client names appear only with permission; the others are described by type.
const projects: Project[] = [
  {
    title: "Burgers Tarven",
    type: "Restaurant & bar · Francistown",
    icon: UtensilsCrossed,
    problem: "Orders, table bookings and event enquiries all came in by phone and Facebook messages.",
    built: [
      "Mobile website with the full menu and a cart that sends the order to WhatsApp",
      "Payment by Orange Money, MyZaka or Pay to Cell, with proof of payment on WhatsApp",
      "Table and event requests, plus an installable app version",
      "Monthly results report: visits, orders sent and requests",
    ],
    tools: ["Website", "WhatsApp", "n8n", "Reporting"],
    link: { href: "https://burgers-tavern.vercel.app", label: "View the live site" },
  },
  {
    title: "Nail & beauty studio",
    type: "Beauty & wellness",
    icon: Sparkles,
    problem: "Clients came once and didn't come back, and nothing reminded them to rebook.",
    built: [
      "Booking website",
      "QR check-in at the counter that builds the client list",
      "Automatic rebooking reminder 30 days after each visit",
      "Monthly report showing which clients returned after a reminder",
    ],
    tools: ["Website", "n8n", "Email", "QR check-in"],
  },
  {
    title: "Study-abroad consultancy",
    type: "Professional services · Gaborone",
    icon: GraduationCap,
    problem: "New enquiries waited for a reply, and follow-ups depended on someone remembering.",
    built: [
      "Website with a structured enquiry form",
      "Instant auto-reply and scheduled follow-up emails",
      "A daily list of leads to nudge on WhatsApp, with one-tap message links",
      "Monthly report of enquiries, replies and follow-ups",
    ],
    tools: ["Website", "n8n", "Email", "WhatsApp"],
  },
  {
    title: "Booking websites for salons & spas",
    type: "Beauty & wellness",
    icon: CalendarCheck,
    problem: "Bookings were scattered across calls and chats, with no clear list of services and prices.",
    built: [
      "Service menus with prices",
      "Online booking and WhatsApp booking requests",
      "Mobile-first design with location and contact details",
    ],
    tools: ["Website", "WhatsApp", "Google Calendar"],
  },
  {
    title: "Our own sales tools",
    type: "Built and used by BIYU",
    icon: LayoutDashboard,
    problem: "We run on the same kind of systems we build for clients.",
    built: [
      "Outreach Hub: lead lists, AI-drafted emails with human approval, reply tracking",
      "Growth Desk: a shared team pipeline with tasks, demos and proposals",
      "Plan Builder: turns an audit into a one-page plan priced on the value of the problem",
    ],
    tools: ["Lovable", "Supabase", "n8n", "Claude"],
  },
];

const Portfolio = () => (
  <div>
    {/* Hero */}
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="opacity-0 animate-fade-in text-3xl font-bold md:text-5xl mb-6">
          Our Work
        </h1>
        <p className="opacity-0 animate-fade-in-delay-1 text-lg text-muted-foreground">
          Real systems we've built for businesses in Botswana: the problem, what we built and the
          tools we used.
        </p>
      </div>
    </section>

    {/* Projects */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2 animate-stagger">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.type}</p>
                </div>
              </div>

              <p className="text-sm mb-4">
                <span className="font-semibold text-primary">The problem: </span>
                <span className="text-muted-foreground">{p.problem}</span>
              </p>

              <ul className="space-y-2 mb-5 flex-1">
                {p.built.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-foreground/5 border border-border py-3 text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                >
                  {p.link.label} <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="opacity-0 animate-fade-in text-3xl font-bold text-accent-foreground md:text-4xl mb-4">
          Have a problem like these?
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-accent-foreground/70 mb-8 max-w-lg mx-auto">
          Tell us how the work happens today. We'll show you what we'd fix first and what it's worth.
        </p>
        <MagneticButton strength={0.35}>
          <Button asChild size="lg" variant="secondary" className="btn-3d-outline opacity-0 animate-fade-in-delay-2 gap-2 px-8 text-base group">
            <Link to="/contact">
              Book a free AI audit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </MagneticButton>
      </div>
    </section>
  </div>
);

export default Portfolio;
