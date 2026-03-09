import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import GlowCard from "@/components/GlowCard";
import MagneticButton from "@/components/MagneticButton";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    emailjs
      .sendForm("service_xtaknap", "template_w86c77j", formRef.current, "LMotMXqMW84OY7Npb")
      .then(() => {
        setLoading(false);
        toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
        formRef.current?.reset();
      })
      .catch(() => {
        setLoading(false);
        toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
      });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="opacity-0 animate-fade-in text-3xl font-bold md:text-5xl mb-6">
            Get In Touch
          </h1>
          <p className="opacity-0 animate-fade-in-delay-1 text-lg text-muted-foreground">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-5">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6 animate-stagger">
              <GlowCard className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:info.biyu.ai@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    info.biyu.ai@gmail.com
                  </a>
                </div>
              </GlowCard>
              <GlowCard className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Offices</h3>
                  <p className="text-sm text-muted-foreground">Gaborone, Botswana</p>
                  <p className="text-sm text-muted-foreground">Francistown, Botswana</p>
                </div>
              </GlowCard>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <GlowCard>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project or question..." rows={5} required />
                  </div>
                  <MagneticButton strength={0.3}>
                    <Button type="submit" className="btn-3d-glow w-full gap-2" disabled={loading}>
                      <Send className="h-4 w-4" />
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </MagneticButton>
                </form>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
