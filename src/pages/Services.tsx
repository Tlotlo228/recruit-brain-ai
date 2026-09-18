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
    name: "BIYU Booking System",
    price: "P2,500",
    label: "Starting price",
    description:
      "A professional website and online booking system designed to make appointments easier to manage.",
    icon: CalendarCheck,
    featured: false,
    features: [
      "Professional business website",
      "Online booking system",
      "Google Calendar integration",
      "Services and pricing section",
      "WhatsApp contact option",
      "Mobile-friendly design",
      "Google Maps/location section",
      "Basic onboarding and training",
      "14-day support after launch",
    ],
  },
  {
    name: "BIYU Business Automation System",
    price: "P5,000",
    label: "Starting price",
    description:
      "Connected systems that reduce repetitive administrative work and improve lead, customer, booking, and follow-up management.",
    icon: Workflow,
    featured: true,
    features: [
      "Everything in the Booking System where relevant",
      "Automated booking confirmations",
      "Appointment reminders",
      "Automated customer follow-ups",
      "Lead capture system",
      "CRM setup",
      "Customer database",
      "n8n automation workflows",
      "Business optimisation session",
      "Staff training",
      "30-day support after launch",
    ],
  },
  {
    name: "BIYU AI Transformation",
    price: "P10,000+",
    label: "Custom implementation",
    description:
      "A customised AI and automation transformation for businesses that need multiple systems and workflows connected.",
    icon: Rocket,
    featured: false,
    features: [
      "AI chatbot or AI agent",
      "WhatsApp automation",
      "CRM implementation",
      "Lead management",
      "Lead qualification",
      "Booking automation",
      "Customer service automation",
      "Internal workflow automation",
      "Reporting dashboards",
      "Custom integrations",
      "AI assistants and knowledge bases",
      "Staff training",
      "90-day support",
    ],
  },
];

const additionalServices = [
  {
    icon: Brain,
    title: "AI Business Efficiency Audit",
    price: "Free initial audit",
    description:
      "Identify repetitive work, operational bottlenecks, missed opportunities, and the highest-value areas for AI and automation.",
    benefit: "Know what to automate first and why it matters.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    price: "From P3,500",
    description:
      "AI-powered customer assistants that answer common questions, collect information, and guide customers to the next step.",
    benefit: "Respond faster and reduce repeated enquiries.",
  },
  {
    icon: Network,
    title: "AI Agents",
    price: "From P7,500",
    description:
      "Advanced AI systems that support customer communication and perform selected business workflow tasks.",
    benefit: "Give your business an intelligent digital assistant.",
  },
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    price: "From P3,500",
    description:
      "Connect the tools your business already uses and automate repetitive workflows.",
    benefit: "Reduce manual copying, updating, checking, and sending.",
  },
  {
    icon: Database,
    title: "CRM Implementation",
    price: "From P5,000",
    description:
      "Organise leads, customers, follow-ups, and sales opportunities in one structured system.",
    benefit: "Know what is happening with every lead and customer.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    price: "From P3,500",
    description:
      "Automate routine WhatsApp communication, lead collection, reminders, notifications, and follow-ups.",
    benefit: "Improve communication without manually handling every routine message.",
  },
  {
    icon: Headphones,
    title: "AI Customer Service System",
    price: "From P5,000",
    description:
      "Improve how your business handles customer questions, requests, routing, and escalation.",
    benefit: "Create a more organised and responsive customer service process.",
  },
  {
    icon: Zap,
    title: "AI Lead Generation System",
    price: "From P7,500",
    description:
      "Capture, qualify, organise, and follow up with potential customers.",
    benefit: "Reduce lost leads and create a clearer path from enquiry to sale.",
  },
  {
    icon: Code,
    title: "Website Development",
    price: "From P2,500",
    description:
      "Professional websites built around your business goals and customer journey.",
    benefit: "Give customers a clear and professional way to understand and contact your business.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    price: "P500/month",
    description:
      "Ongoing website updates, technical support, troubleshooting, and minor improvements.",
    benefit: "Keep your online presence updated and supported.",
  },
  {
    icon: Smartphone,
    title: "Software and App Development",
    price: "From P15,000",
    description:
      "Custom software, web applications, internal tools, and business platforms.",
    benefit: "Build a digital system around the way your business operates.",
  },
  {
    icon: LayoutDashboard,
    title: "Data and Reporting Dashboards",
    price: "From P5,000",
    description:
      "Dashboards that help businesses understand sales, leads, customers, bookings, and operations.",
    benefit: "Make decisions using clearer business information.",
  },
  {
    icon: GraduationCap,
    title: "Corporate AI Training",
    price: "From P1,500/session",
    description:
      "Practical AI training for teams and organisations using real business examples.",
    benefit: "Help employees become more confident and capable with AI.",
  },
  {
    icon: Brain,
    title: "AI Consulting and Strategy",
    price: "From P1,500",
    description:
      "Practical guidance on where AI can support your business and how to implement it responsibly.",
    benefit: "Invest in the right AI opportunities.",
  },
  {
    icon: Headphones,
    title: "AI and Automation Support",
    price: "From P1,000/month",
    description:
      "Ongoing monitoring, optimisation, troubleshooting, workflow improvements, and support.",
    benefit: "Keep your systems useful, updated, and improving over time.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, current processes, and operational challenges.",
  },
  {
    number: "02",
    title: "Audit",
    description:
      "We identify bottlenecks, repetitive work, and automation opportunities.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create a practical solution around your priorities and goals.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "We build, connect, test, and launch the required systems.",
  },
  {
    number: "05",
    title: "Optimise",
    description:
      "We support improvements and help your systems continue creating value.",
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary">
            <Zap className="h-4 w-4" />
            AI • Automation • Digital Transformation
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
              Choose the level of transformation your business needs.
            </h2>

            <p className="text-muted-foreground">
              Start with a focused system or work with us to connect multiple
              areas of your business through AI and automation.
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
                      Popular
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
            Prices are starting prices. Final investment depends on the
            business requirements, complexity, integrations, and support
            required.
          </p>
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
              Select the individual service your business needs, or combine
              several services into a larger transformation project.
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

                    <span className="text-right text-sm font-semibold text-primary">
                      {service.price}
                    </span>
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
              From business challenges to intelligent systems.
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
