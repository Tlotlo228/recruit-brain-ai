import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, Loader2, Upload } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const wordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  linkedin: z.string().trim().url("Enter a valid URL").optional().or(z.literal("")),
  coverLetter: z.string().trim()
    .refine((v) => wordCount(v) >= 200, "Cover letter must be at least 200 words")
    .refine((v) => wordCount(v) <= 500, "Cover letter must not exceed 500 words"),
  experience: z.string().min(1, "Please select your experience level"),
  portfolio: z.string().trim().url("Enter a valid URL").optional().or(z.literal("")),
  whyBiyu: z.string().trim().min(20, "Please write at least 20 characters").max(2000),
});

type FormValues = z.infer<typeof formSchema>;

const WEBHOOK_URL = "https://olwame.app.n8n.cloud/webhook-test/93fd2201-67fb-4e0f-8421-b18ca8aca04f";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "", email: "", phone: "", linkedin: "", coverLetter: "",
      experience: "", portfolio: "", whyBiyu: "",
    },
  });

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeError("");
    const file = e.target.files?.[0];
    if (!file) return;
    const validTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!validTypes.includes(file.type)) {
      setResumeError("Only PDF or DOCX files are accepted");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("File must be under 5MB");
      return;
    }
    setResumeFile(file);
  };

  const onSubmit = async (data: FormValues) => {
    if (!resumeFile) {
      setResumeError("Resume is required");
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        ...data,
        resumeFileName: resumeFile.name,
        resumeFileSize: resumeFile.size,
        submittedAt: new Date().toISOString(),
      };
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <Card className="max-w-lg w-full text-center">
          <CardContent className="pt-10 pb-10">
            <CheckCircle className="mx-auto h-16 w-16 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Application Submitted!</h2>
            <p className="text-muted-foreground">
              Thank you! We'll review your application and get back to you soon.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const coverLetterWords = wordCount(form.watch("coverLetter") || "");

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold md:text-4xl mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Apply to BIYU AI Agency
          </h1>
          <p className="text-muted-foreground">Fill out the form below to start your journey with us.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Application Form</CardTitle>
            <CardDescription>All fields marked are required unless noted optional.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="fullName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone *</FormLabel>
                      <FormControl><Input type="tel" placeholder="+267 7X XXX XXX" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="linkedin" render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn Profile (optional)</FormLabel>
                    <FormControl><Input placeholder="https://linkedin.com/in/yourprofile" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                {/* Resume Upload */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Resume (PDF/DOCX, max 5MB) *</label>
                  <div className="flex items-center gap-3">
                    <label className="flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm transition-colors hover:bg-secondary">
                      <Upload className="h-4 w-4" />
                      {resumeFile ? resumeFile.name : "Choose file"}
                      <input type="file" accept=".pdf,.docx" onChange={handleResumeChange} className="hidden" />
                    </label>
                  </div>
                  {resumeError && <p className="text-sm font-medium text-destructive">{resumeError}</p>}
                </div>

                <FormField control={form.control} name="coverLetter" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter (200–500 words) *</FormLabel>
                    <FormControl><Textarea rows={8} placeholder="Tell us about yourself and your experience…" {...field} /></FormControl>
                    <FormDescription className={coverLetterWords < 200 || coverLetterWords > 500 ? "text-destructive" : ""}>
                      {coverLetterWords}/500 words
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="experience" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience with AI Tools *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger><SelectValue placeholder="Select experience level" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0-1">0–1 years</SelectItem>
                        <SelectItem value="1-3">1–3 years</SelectItem>
                        <SelectItem value="3-5">3–5 years</SelectItem>
                        <SelectItem value="5+">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="portfolio" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio / GitHub Link (optional)</FormLabel>
                    <FormControl><Input placeholder="https://github.com/yourusername" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="whyBiyu" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why do you want to work at BIYU AI Agency? *</FormLabel>
                    <FormControl><Textarea rows={4} placeholder="Share your motivation…" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <MagneticButton className="w-full" strength={0.2}>
                  <Button type="submit" size="lg" className="btn-3d-glow w-full group relative overflow-hidden" disabled={submitting}>
                    {submitting ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…</>
                    ) : (
                      <span className="flex items-center gap-2">Submit Application <span className="transition-transform group-hover:translate-x-1">→</span></span>
                    )}
                  </Button>
                </MagneticButton>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Apply;
