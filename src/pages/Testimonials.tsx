import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Play, Star } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import GlowCard from "@/components/GlowCard";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  videoUrl?: string; // YouTube or other embed URL
}

const testimonials: Testimonial[] = [
  {
    name: "Bongani",
    role: "Real Estate Agent",
    company: "Bongani Properties",
    text: "BIYU AI completely transformed how I run my real estate business. Their consulting helped me streamline lead generation, automate follow-ups, and close deals faster. I can't imagine going back to the old way of doing things.",
    rating: 5,
    videoUrl: "https://www.kapwing.com/e/69b243a724081d4b1677bc0c",
  },
  {
    name: "Naledi Khumalo",
    role: "Marketing Director",
    company: "Savanna Digital",
    text: "The automation workflows BIYU built for us saved our team 30+ hours per week. Their technical expertise and strategic thinking made the entire process seamless. We've seen a 45% increase in campaign efficiency since working with them.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Founder & CEO",
    company: "SwiftLogistics",
    text: "Working with Tlotlo and Daudi was a game-changer. Their AI consulting helped us identify exactly where to implement AI for maximum ROI. Our delivery prediction accuracy went from 60% to 94%.",
    rating: 5,
  },
  {
    name: "Amara Diallo",
    role: "Operations Manager",
    company: "GreenField Farms",
    text: "BIYU delivered a custom inventory management system powered by AI that reduced our waste by 35%. The quality of their work and their understanding of our agricultural business was outstanding.",
    rating: 5,
  },
  {
    name: "Thabo Molefe",
    role: "CTO",
    company: "FinEdge Solutions",
    text: "BIYU AI transformed our customer support with an intelligent chatbot that handles 80% of inquiries automatically. Our response time dropped from hours to seconds. Best investment we've made this year.",
    rating: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <GlowCard className="flex flex-col h-full">
    {/* Video embed area */}
    {testimonial.videoUrl && (
      <div className="relative mb-4 aspect-video rounded-lg overflow-hidden bg-muted">
        <iframe
          src={testimonial.videoUrl}
          title={`${testimonial.name} testimonial`}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )}
    {testimonial.videoUrl === "" && (
      <div className="relative mb-4 aspect-video rounded-lg overflow-hidden bg-muted/50 border border-border flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <Play className="h-10 w-10 mx-auto mb-2 opacity-40" />
          <p className="text-xs">Video testimonial coming soon</p>
        </div>
      </div>
    )}

    <Quote className="h-8 w-8 text-primary/30 mb-3" />
    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
      "{testimonial.text}"
    </p>
    <div className="border-t border-border pt-4 mt-auto">
      <StarRating rating={testimonial.rating} />
      <div className="mt-2">
        <p className="font-semibold text-sm">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">
          {testimonial.role} at {testimonial.company}
        </p>
      </div>
    </div>
  </GlowCard>
);

const Testimonials = () => (
  <div>
    {/* Hero */}
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="opacity-0 animate-fade-in text-3xl font-bold md:text-5xl mb-6">
          What Our Clients Say
        </h1>
        <p className="opacity-0 animate-fade-in-delay-1 text-lg text-muted-foreground">
          Hear from the businesses we've helped transform with AI solutions,
          automation, and strategic consulting.
        </p>
      </div>
    </section>

    {/* Testimonials Grid */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2 animate-stagger">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="opacity-0 animate-fade-in text-3xl font-bold text-accent-foreground md:text-4xl mb-4">
          Ready to Join Our Success Stories?
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-accent-foreground/70 mb-8 max-w-lg mx-auto">
          Let's build something amazing together.
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

export default Testimonials;
