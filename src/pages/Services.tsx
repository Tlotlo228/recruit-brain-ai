import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Brain,
  CalendarCheck,
  Check,
  Code,
  Database,
  GraduationCap,
  Headphones,
  LayoutDashboard,
  MessageSquare,
  Network,
  Rocket,
  Settings,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";
import GlowCard from "@/components/GlowCard";
import MagneticButton from "@/components/MagneticButton";

const packages = [
  {
    name: "Booking & Ordering System",
    price: "Monthly fee",
    label: "No setup fee",
    description:
      "A mobile website where customers book, order or enquire, with every request landing on your WhatsApp or email.",
    icon: CalendarCheck,
    featured: false,
    features: [
      "Mobile-first business website",
      "Online booking or ordering",
      "WhatsApp booking and order requests",
      "Services, menu and prices",
      "Location and contact details",
      "Hosting, support and small changes",
      "Monthly results report",
    ],
  },
  {
    name: "Follow-up & Return System",
    price: "Monthly fee",
    label: "No setup fee",
    description:
      "Automations that reply to new enquiries, follow up until they book, and bring past clients back.",
    icon: Workflow,
    featured: true,
    features: [
      "Instant reply to every new enquiry",
      "Follow-up emails and WhatsApp nudge lists",
      "Rebooking reminders for past clients",
      "Client list built automatically (forms or QR check-in)",
      "n8n automation workflows",
      "Monthly results report",
      "One improvement every month",
    ],
  },
  {
    name: "Connected Business System",
    price: "Monthly fee",
    label: "Scoped after the audit",
    description:
      "For businesses that need several parts connected: leads, customers, bookings, support and reporting.",
    icon: Rocket,
    featured: false,
    features: [
      "CRM and lead pipeline (HotKup partner)",
      "AI customer assistant",
      "WhatsApp and email automation",
      "Internal workflow automation",
      "Reporting dashboard",
      "Team training",
      "Monthly results report and improvements",
    ],
  },
];

const additionalServices = [
  {
    icon: Brain,
    title: "AI Business Efficiency Audit",
    price: "Free initial audit",
    description:
      "A conversation about how your business runs today. You leave knowing what to fix first and what it's worth.",
    benefit: "Know what to automate first and why it matters.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    price: "",
    description:
      "AI-powered customer assistants that answer common questions, collect information, and guide customers to the next step.",
    benefit: "Respond faster and reduce repeated enquiries.",
  },
  {
    icon: Network,
    title: "AI Agents",
    price: "",
    description:
      "Advanced AI systems that support customer communication and perform selected business workflow tasks.",
    benefit: "Give your business an intelligent digital assistant.",
  },
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    price: "",
    description:
      "Connect the tools your business already uses and automate repetitive workflows.",
    benefit: "Reduce manual copying, updating, checking, and sending.",
  },
  {
    icon: Database,
    title: "CRM Implementation",
    price: "",
    description:
      "Organise leads, customers, follow-ups, and sales opportunities in one structured system.",
    benefit: "Know what is happening with every lead and customer.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    price: "",
    description:
      "Automate routine WhatsApp communication, lead collection, reminders, notifications, and follow-ups.",
    benefit: "Improve communication without manually handling every routine message.",
  },
  {
    icon: Headphones,
    title: "AI Customer Service System",
    price: "",
    description:
      "Improve how your business handles customer questions, requests, routing, and escalation.",
    benefit: "Create a more organised and responsive customer service process.",
  },
  {
    icon: Zap,
    title: "AI Lead Generation System",
    price: "",
    description:
      "Capture, qualify, organise, and follow up with potential customers.",
    benefit: "Reduce lost leads and create a clearer path from enquiry to sale.",
  },
  {
    icon: Code,
    title: "Website Development",
    price: "",
    description:
      "Professional websites built around your business goals and customer journey.",
    benefit: "Give customers a clear and professional way to understand and contact your business.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    price: "",
    description:
      "Ongoing website updates, technical support, troubleshooting, and minor improvements.",
    benefit: "Keep your online presence updated and supported.",
  },
  {
    icon: Smartphone,
    title: "Software and App Development",
    price: "",
    description:
      "Custom software, web applications, internal tools, and business platforms.",
    benefit: "Build a digital system around the way your business operates.",
  },
  {
    icon: LayoutDashboard,
    title: "Data and Reporting Dashboards",
    price: "",
    description:
      "Dashboards that help businesses understand sales, leads, customers, bookings, and operations.",
    benefit: "Make decisions using clearer business information.",
  },
  {
    icon: GraduationCap,
    title: "Corporate AI Training",
    price: "",
    description:
      "Practical AI training for teams and organisations using real business examples.",
    benefit: "Help employees become more confident and capable with AI.",
  },
  {
    icon: Brain,
    title: "AI Consulting and Strategy",
    price: "",
    description:
      "Practical guidance on where AI can support your business and how to implement it responsibly.",
    benefit: "Invest in the right AI opportunities.",
  },
  {
    icon: Headphones,
    title: "AI and Automation Support",
    price: "",
    description:
      "Ongoing monitoring, optimisation, troubleshooting, workflow improvements, and support.",
    benefit: "Keep your systems useful, updated, and improving over time.",
  },
];

const processSteps = [
  { number: "01", title: "Understand", description: "We learn how your business runs today and how your customers actually book, order and pay." },
  { number: "02", title: "Identify", description: "We find the leak that costs the most, in time, money or lost customers, and put a number on it." },
  { number: "03", title: "Design", description: "We plan the smallest system that fixes it and agree the monthly fee based on its value." },
  { number: "04", title: "Build & launch", description: "We build, test and launch it, and show your team how it works." },
  { number: "05", title: "Support", description: "We look after it, report the results every month and make one improvement each month." },
];

const pricingPoints = [
  { title: "No setup fee", text: "You don't pay a large amount up front for the build." },
  { title: "One monthly fee", text: "Priced on the value of the problem we fix, worked out with your own numbers in the audit." },
  { title: "3-month minimum", text: "The first month is paid before we start building, then it's month to month." },
  { title: "Results every month", text: "Every plan includes support, a monthly results report and one improvement." },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
            <Zap className="h-4 w-4" />
            AI • Automation • WhatsApp • Websites
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Build a smarter business
            <span className="block text-primary">with BIYU AI.</span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            We help businesses reduce repetitive work, improve customer
            experiences, organise their operations, and build intelligent
            systems using AI and automation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton strength={0.25}>
              <Button asChild size="lg" className="gap-2 px-7">
                <Link to="/contact">
                  Book a Free AI Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>

            <Button asChild size="lg" variant="outline" className="px-7">
              <a href="#packages">Explore Packages</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Packages */}
      <section id="packages" className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our main offers
            </p>

            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Start with the one problem costing you the most.
            </h2>

            <p className="text-muted-foreground">
              Most clients start with one system, then add the next once the first one
              is paying for itself.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => {
              const Icon = pkg.icon;

              return (
                <GlowCard
                  key={pkg.name}
                  className={`relative flex h-full flex-col ${
                    pkg.featured
                      ? "border-primary/60 bg-primary/[0.04] shadow-lg shadow-primary/10"
                      : ""
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Most requested
                    </div>
                  )}

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold">{pkg.name}</h3>

                  <p className="mb-6 min-h-[88px] text-sm leading-relaxed text-muted-foreground">
                    {pkg.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {pkg.label}
                    </p>
                    <p className="mt-1 text-4xl font-bold text-primary">
                      {pkg.price}
                    </p>
                  </div>

                  <div className="mb-8 flex-1">
                    <p className="mb-4 font-semibold">What is included:</p>

                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full gap-2">
                    <Link to="/contact">
                      Discuss this package
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </GlowCard>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            The monthly fee depends on the size of the problem and what we connect.
            You'll see the number and how we got to it in your plan before you decide.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPoints.map((pt) => (
              <GlowCard key={pt.title}>
                <h3 className="mb-2 text-lg font-bold text-primary">{pt.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{pt.text}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Additional solutions
            </p>

            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              More ways BIYU can help your business.
            </h2>

            <p className="text-muted-foreground">
              Every service is scoped in the free audit and priced the same way:
              one monthly fee, no setup fee.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service) => {
              const Icon = service.icon;

              return (
                <GlowCard key={service.title} className="h-full">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    {service.price && (
                      <span className="text-right text-sm font-semibold text-primary">
                        {service.price}
                      </span>
                    )}
                  </div>

                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="border-t border-border/60 pt-4">
                    <p className="text-sm font-medium">
                      <span className="text-primary">Outcome:</span>{" "}
                      {service.benefit}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              How we work
            </p>

            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Problem first, then technology.
            </h2>

            <p className="text-muted-foreground">
              We focus on the business problem first, then choose the
              technology that can create the most useful improvement.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <GlowCard key={step.number} className="text-center">
                <div className="mb-4 text-4xl font-bold text-primary/30">
                  {step.number}
                </div>

                <h3 className="mb-2 text-lg font-bold">{step.title}</h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-5 text-3xl font-bold text-accent-foreground md:text-5xl">
            Your next stage of growth may begin with one process.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-accent-foreground/70">
            Let’s identify the work slowing your business down and explore
            what can be improved with AI and automation.
          </p>

          <MagneticButton strength={0.25}>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2 px-8"
            >
              <Link to="/contact">
                Book a Free AI Business Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default Services;
