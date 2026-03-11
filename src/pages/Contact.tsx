import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlowCard from "@/components/GlowCard";
import MagneticButton from "@/components/MagneticButton";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be under 255 characters"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200, "Subject must be under 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message must be under 5000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_xtaknap",
        "template_w86c77j",
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "LMotMXqMW84OY7Npb"
      );
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      form.reset();
    } catch {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl><Input placeholder="Your name" maxLength={100} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl><Input type="email" placeholder="you@example.com" maxLength={255} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl><Input placeholder="How can we help?" maxLength={200} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl><Textarea placeholder="Tell us about your project or question..." rows={5} maxLength={5000} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <MagneticButton strength={0.3}>
                      <Button type="submit" className="btn-3d-glow w-full gap-2" disabled={loading}>
                        <Send className="h-4 w-4" />
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </MagneticButton>
                  </form>
                </Form>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
