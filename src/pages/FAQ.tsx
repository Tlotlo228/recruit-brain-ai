import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const faqs = [
  { q: "What roles are currently open?", a: "We're actively hiring AI Specialists who have experience with machine learning, NLP, computer vision, or AI product management. Check the Apply page for full details." },
  { q: "What is the application process?", a: "Submit your application through our online form. Our team reviews every submission within 5 business days. Qualified candidates are invited for a phone screen, followed by a technical interview and a final culture-fit conversation." },
  { q: "Is the position remote or on-site?", a: "We offer flexible hybrid and fully remote options for most roles. Specific arrangements are discussed during the interview process." },
  { q: "What file formats are accepted for resumes?", a: "We accept PDF and DOCX files up to 5MB in size." },
  { q: "How long should my cover letter be?", a: "Your cover letter should be between 200 and 500 words. Focus on your AI experience and what excites you about working at BIYU." },
  { q: "What experience level do you look for?", a: "We welcome applicants at all levels — from those with less than a year of AI experience to seasoned professionals with 5+ years. We value potential and passion alongside expertise." },
  { q: "When can I expect to hear back?", a: "We aim to respond to all applicants within 5–7 business days. If you're selected for the next round, you'll receive an email with scheduling details." },
  { q: "Can I reapply if I'm not selected?", a: "Absolutely. We encourage candidates to reapply after 6 months, especially if you've gained new skills or experience." },
];

const FAQ = () => (
  <div>
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="opacity-0 animate-fade-in text-3xl font-bold md:text-5xl mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Frequently Asked Questions
        </h1>
        <p className="opacity-0 animate-fade-in-delay-1 text-muted-foreground max-w-xl mx-auto">
          Everything you need to know about applying to BIYU AI Agency.
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
            <Button asChild className="gap-2 group">
              <Link to="/apply">Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
          </MagneticButton>
        </div>
      </div>
    </section>
  </div>
);

export default FAQ;
