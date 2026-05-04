import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/SectionHeading";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SempoaBSD — Book Your Free Trial Class" },
      { name: "description", content: "Reach SempoaBSD via WhatsApp, phone, or our contact form. Visit our BSD center or book a free trial class today." },
      { property: "og:title", content: "Contact SempoaBSD" },
      { property: "og:description", content: "Get in touch and book your child's free trial class." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you! We'll reach out within 24 hours to schedule your free trial.");
    }, 800);
  };

  return (
    <>
      <section className="bg-gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title={<>Let's start your child's <span className="text-gradient-primary">sempoa journey</span></>}
            description="Book a free trial, ask a question, or just say hi — we'd love to hear from you."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 rounded-3xl bg-card border border-border p-7 sm:p-10 shadow-elegant">
            <h2 className="text-2xl font-bold">Book your free trial</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within one working day.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="text-sm font-medium mb-1.5 block">Parent's name</label>
                <Input required placeholder="Your full name" className="h-11 rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone / WhatsApp</label>
                <Input required type="tel" placeholder="+62 ..." className="h-11 rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <Input required type="email" placeholder="you@email.com" className="h-11 rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Child's name</label>
                <Input required placeholder="Child's name" className="h-11 rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Child's age</label>
                <Input required type="number" min="3" max="14" placeholder="e.g. 7" className="h-11 rounded-xl" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium mb-1.5 block">Message (optional)</label>
                <Textarea rows={4} placeholder="Tell us anything we should know about your child..." className="rounded-xl" />
              </div>
              <Button type="submit" disabled={submitting} size="lg" className="sm:col-span-2 bg-gradient-primary rounded-full shadow-glow">
                {submitting ? "Sending..." : (<>Book Free Trial <Send className="ml-2 h-4 w-4" /></>)}
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, title: "Visit Us", lines: ["Ruko BSD Junction Blok A-12", "Tangerang Selatan 15321"] },
              { icon: Phone, title: "Call / WhatsApp", lines: ["+62 812-3456-7890"] },
              { icon: Mail, title: "Email", lines: ["hello@sempoabsd.com"] },
              { icon: Clock, title: "Class Hours", lines: ["Mon – Fri: 14:00 – 19:00", "Saturday: 09:00 – 17:00"] },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-card border border-border p-5 flex gap-4 hover:shadow-elegant transition-shadow">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  {c.lines.map(l => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/6281234567890?text=Halo%20SempoaBSD%2C%20saya%20ingin%20info%20kelas%20trial."
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-success text-success-foreground p-5 hover:opacity-95 transition-opacity shadow-elegant"
            >
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                <div>
                  <p className="font-bold">Chat us on WhatsApp</p>
                  <p className="text-sm opacity-90">Fastest reply — usually within minutes</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-elegant border border-border aspect-[16/9] sm:aspect-[21/9]">
            <iframe
              title="SempoaBSD location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8!2d106.6634!3d-6.3015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBSD%20City!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
