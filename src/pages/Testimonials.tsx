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
    name: "Phatsimo",
    role: "Business Owner",
    company: "Consultation Client",
    text: "Huge thank you to Tlotlo and BIYU AI Agency for the smooth and insightful consultation on my business. I genuinely didn't realize how much time and energy I was losing in certain areas until they broke everything down for me. The way they explained how AI tools and automation could help improve workflow, save time, and make things easier was honestly eye-opening. What I loved most is that it didn't even feel like a boring business meeting. It felt like people who actually care about seeing businesses grow sat down with me and said, 'Here's where you can do better, and here's how we can help you get there.' Thank you BIYU AI Agency for the wisdom, patience, and vision.",
    rating: 5,
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
    {/* Video area — Kapwing/external embeds block iframes, so render a click-to-watch thumbnail */}
    {testimonial.videoUrl && (
      <a
        href={testimonial.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative mb-4 block aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 via-muted to-accent/20 border border-border"
        aria-label={`Watch ${testimonial.name}'s video testimonial`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-6 w-6 fill-current ml-1" />
          </div>
          <p className="mt-3 text-sm font-semibold">Watch Video Testimonial</p>
          <p className="text-xs text-muted-foreground">{testimonial.name} • opens in new tab</p>
        </div>
      </a>
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
          In their own words, from business owners we've worked with. We only publish feedback
          that clients have given us.
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
          Want to see what we'd fix in your business?
        </h2>
        <p className="opacity-0 animate-fade-in-delay-1 text-accent-foreground/70 mb-8 max-w-lg mx-auto">
          Book a free AI audit. We'll map where time and customers are slipping away.
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

export default Testimonials;
