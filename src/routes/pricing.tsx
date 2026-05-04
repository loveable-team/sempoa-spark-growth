import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Enrollment — SempoaBSD" },
      { name: "description", content: "Simple, transparent pricing for sempoa classes in BSD. Start with a free trial — no commitment, no registration fee." },
      { property: "og:title", content: "Pricing & Enrollment — SempoaBSD" },
      { property: "og:description", content: "Transparent monthly pricing with a free trial class." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Free Trial",
    price: "Rp 0",
    period: "one-time",
    desc: "Experience a real class — no commitment.",
    features: ["1 full sample lesson", "Skill assessment", "Personalized recommendation", "Meet our teachers"],
    cta: "Book Free Trial",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "Rp 650K",
    period: "/ month",
    desc: "Our most popular plan — perfect for steady progress.",
    features: ["8 sessions per month", "Sempoa kit included", "Monthly progress report", "Online practice access"],
    cta: "Enroll Now",
    highlighted: true,
  },
  {
    name: "Intensive",
    price: "Rp 950K",
    period: "/ month",
    desc: "For competition-bound students aiming for mastery.",
    features: ["12 sessions per month", "Competition prep coaching", "1-on-1 monthly review", "Priority class scheduling"],
    cta: "Enroll Now",
    highlighted: false,
  },
];

const faqs = [
  { q: "What's the ideal age to start?", a: "Most children thrive starting between ages 5 and 8, though we have programs for ages 4–12. Earlier starts often build the strongest foundations." },
  { q: "How long until we see results?", a: "Parents typically notice improved focus within 4–6 weeks. Visible calculation speed and confidence usually emerge within 3–4 months of consistent practice." },
  { q: "Is the free trial really free?", a: "Yes — completely. No registration fee, no obligation. It's our way of letting your child genuinely experience a class before deciding." },
  { q: "Do you provide the sempoa?", a: "Yes. A high-quality sempoa kit is included with the Standard and Intensive plans. Trial students can borrow one for the lesson." },
  { q: "Are class sizes small?", a: "Yes — we cap classes at 8 students per teacher to ensure personalized attention and steady progress for every child." },
  { q: "Can my child join mid-program?", a: "Absolutely. After the trial, our teachers will place your child in the level that matches their current skill, not just their age." },
];

function PricingPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="bg-gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title={<>Simple plans. <span className="text-gradient-primary">Real outcomes.</span></>}
            description="No hidden fees. Cancel anytime. Start with a completely free trial class."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 border transition-all ${
                p.highlighted
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow lg:scale-105"
                  : "bg-card border-border hover:shadow-elegant"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className={`text-sm ${p.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.period}</span>
              </div>
              <ul className="mt-7 space-y-3">
                {p.features.map(f => (
                  <li key={f} className="flex gap-2 text-sm">
                    <CheckCircle2 className={`h-5 w-5 shrink-0 ${p.highlighted ? "text-primary-foreground" : "text-success"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className={`mt-8 w-full rounded-full ${p.highlighted ? "bg-card text-primary hover:bg-card/90" : "bg-gradient-primary"}`} size="lg">
                <Link to="/contact">{p.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common questions from parents" />
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl bg-card border border-border overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold hover:bg-secondary/50 transition-colors"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-muted-foreground leading-relaxed animate-fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
