import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const faqs = [
  { q: "What happens in the free AI audit?", a: "We talk through how your business runs today: how customers find you, book, order and pay, and where things slow down or get forgotten. You leave knowing the one problem worth fixing first and roughly what it's costing you." },
  { q: "How does your pricing work?", a: "There's no setup fee. You pay one monthly fee, based on the value of the problem we fix, which we work out with your own numbers during the audit. The minimum is three months, and the first month is paid before we start building." },
  { q: "What's included in the monthly fee?", a: "The system itself, hosting, support and small changes, a monthly results report showing what the system did, and one improvement each month." },
  { q: "Do my customers need to download anything?", a: "No. Most of what we build works through things your customers already use: WhatsApp, email and a mobile website." },
  { q: "Do you only use AI?", a: "No. We start with the problem. Sometimes the right fix is a simple automation, a booking page or a reminder, not an AI tool." },
  { q: "Which tools do you build with?", a: "Mostly n8n for automations, modern web apps for websites and dashboards, AI models such as Claude for assistants and drafting, plus Google Workspace, WhatsApp and email. For CRM we partner with HotKup." },
  { q: "Where are you based?", a: "Gaborone and Francistown, Botswana. We meet in person where we can and work remotely for clients elsewhere." },
  { q: "Are you hiring?", a: "When we have open roles, you'll find them on our Apply page." },
];

const FAQ = () => (
  <div>
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="opacity-0 animate-fade-in text-3xl font-bold md:text-5xl mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Frequently Asked Questions
        </h1>
        <p className="opacity-0 animate-fade-in-delay-1 text-muted-foreground max-w-xl mx-auto">
          Straight answers about how we work, what it costs and what you get.
        </p>
      </div>
    </section>

    <section className="py-12 md:py-20">
      <div className="container mx-auto max-w-2xl px-4">
        <Accordion type="single" collapsible className="w-full animate-stagger">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions? Reach out at info.biyu.ai@gmail.com</p>
          <MagneticButton>
            <Button asChild className="btn-3d-glow gap-2 group">
              <Link to="/apply">Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  </div>
);

export default FAQ;
