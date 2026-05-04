import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Zap, Sparkles, Trophy, ArrowRight, Star, Quote, CheckCircle2, Users, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import heroKids from "@/assets/hero-kids.jpg";
import abacusCloseup from "@/assets/abacus-closeup.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SempoaBSD — Boost Your Child's Brain Power with Sempoa" },
      { name: "description", content: "BSD's trusted mental arithmetic center. Improve your child's focus, calculation speed, and confidence with proven sempoa learning. Book a free trial today." },
      { property: "og:title", content: "SempoaBSD — Mental Arithmetic for Kids" },
      { property: "og:description", content: "Help your child excel with focus, speed and confidence through proven sempoa training." },
      { property: "og:image", content: heroKids },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { icon: Brain, title: "Sharper Concentration", desc: "Train deep focus that carries into every subject at school." },
  { icon: Zap, title: "Lightning-Fast Math", desc: "Calculate complex sums mentally — faster than a calculator." },
  { icon: Sparkles, title: "Unshakable Confidence", desc: "Watch your child speak up and tackle challenges with pride." },
  { icon: Trophy, title: "Stronger Memory", desc: "Strengthen working memory and lifelong learning ability." },
];

const steps = [
  { n: "01", title: "Free Trial Class", desc: "Meet our teachers, try a real lesson, and see your child's spark." },
  { n: "02", title: "Personalized Level", desc: "We assess and place your child in the perfect starting program." },
  { n: "03", title: "Weekly Practice", desc: "Engaging classes with structured progression and friendly coaches." },
  { n: "04", title: "Real-World Results", desc: "Watch confidence, focus, and grades transform within months." },
];

const testimonials = [
  { name: "Ibu Sarah W.", role: "Parent of Aira (Grade 3)", quote: "Within 4 months, Aira's focus during homework completely changed. She now does mental math faster than her older brother!", img: student1 },
  { name: "Bapak Andi P.", role: "Parent of Reza (Grade 5)", quote: "The teachers are warm yet structured. Reza looks forward to every class and his math grade jumped from 70 to 95.", img: student2 },
  { name: "Ibu Linda K.", role: "Parent of Kayla (Grade 2)", quote: "I love how SempoaBSD blends discipline with fun. Kayla is more confident speaking up — even outside class.", img: student1 },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 -z-0 opacity-60">
          <div className="absolute top-20 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-float" />
          <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-border text-xs font-semibold text-foreground shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-success" />
                Trusted by 2,000+ families in BSD
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.05]">
                Boost your child's <span className="text-gradient-primary">brain power</span> with Sempoa.
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Sharper focus. Lightning-fast calculation. Quiet confidence. Proven mental arithmetic training designed for curious young minds aged 4–12.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-95 shadow-glow rounded-full text-base px-7">
                  <Link to="/contact">
                    Book Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full text-base px-7 border-2">
                  <Link to="/programs">Explore Programs</Link>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { v: "14+", l: "Years experience" },
                  { v: "2,000+", l: "Happy students" },
                  { v: "98%", l: "Parent satisfaction" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl sm:text-3xl font-bold text-gradient-primary">{s.v}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3]">
                <img src={heroKids} alt="Happy children learning sempoa at SempoaBSD" width={1536} height={1024} className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-elegant border border-border w-56 hidden sm:block">
                <div className="flex items-center gap-1 text-accent">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-2 text-sm font-semibold">4.9 / 5 rating</p>
                <p className="text-xs text-muted-foreground">From 800+ parent reviews</p>
              </div>
              <div className="absolute -top-6 -right-2 bg-gradient-primary text-primary-foreground rounded-2xl p-4 shadow-glow w-44 hidden sm:block animate-float">
                <Trophy className="h-6 w-6" />
                <p className="mt-2 text-sm font-bold">National Champions</p>
                <p className="text-xs opacity-90">5 years running</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Users, l: "2,000+ Students" },
            { icon: Award, l: "14+ Years Experience" },
            { icon: GraduationCap, l: "Certified Instructors" },
            { icon: Trophy, l: "National Awards" },
          ].map((b) => (
            <div key={b.l} className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
              <b.icon className="h-5 w-5 text-primary" />
              {b.l}
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Sempoa"
            title={<>Real skills your child will <span className="text-gradient-primary">carry for life</span></>}
            description="Sempoa is not just about math. It rewires the brain for sharper focus, faster thinking, and quiet confidence."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="group relative rounded-2xl bg-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <b.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-bold text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-28 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-elegant aspect-square">
                <img src={abacusCloseup} alt="Traditional sempoa abacus" width={1024} height={1024} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-card rounded-2xl p-5 shadow-elegant border border-border max-w-[220px]">
                <div className="text-3xl font-bold text-gradient-accent">3×</div>
                <p className="text-sm font-medium mt-1">Faster mental calculation in 6 months</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="How It Works"
                title={<>A clear path to <span className="text-gradient-accent">visible results</span></>}
                description="Our 4-step journey is designed by educators and proven across thousands of students."
                align="left"
              />
              <div className="mt-10 space-y-5">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-5 group">
                    <div className="shrink-0 h-12 w-12 rounded-xl bg-card border-2 border-primary/20 flex items-center justify-center font-bold text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:border-transparent transition-all">
                      {s.n}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Loved by Parents"
            title={<>What BSD families <span className="text-gradient-primary">say about us</span></>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-card border border-border p-7 hover:shadow-elegant transition-shadow relative">
                <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10" />
                <div className="flex gap-1 text-accent">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                  <img src={t.img} alt={t.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS / BEFORE-AFTER STATS */}
      <section className="py-20 sm:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proven Results"
            title="Measurable transformation in months"
            description="Average improvement seen in students after 6 months of consistent practice."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "+85%", l: "Calculation speed" },
              { v: "+72%", l: "Focus duration" },
              { v: "+90%", l: "Math test scores" },
              { v: "+68%", l: "Memory recall" },
            ].map((r) => (
              <div key={r.l} className="rounded-2xl bg-card border border-border p-7 text-center hover:shadow-elegant transition-shadow">
                <div className="text-4xl sm:text-5xl font-extrabold text-gradient-primary">{r.v}</div>
                <p className="mt-3 text-sm font-medium text-muted-foreground">{r.l}</p>
                <div className="mt-4 h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-primary" style={{ width: r.v.replace("+","").replace("%","") + "%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 sm:p-14 lg:p-20 shadow-glow">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground tracking-tight">
                Start your child's journey today.
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90 leading-relaxed">
                Book a free trial class — no commitment. See firsthand how sempoa transforms focus, speed, and confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90 rounded-full text-base px-7 shadow-elegant">
                  <Link to="/contact">Book Free Trial</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full text-base px-7 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link to="/programs">See Programs</Link>
                </Button>
              </div>
              <ul className="mt-8 grid sm:grid-cols-2 gap-2 text-sm text-primary-foreground/90">
                {["No registration fee for trial", "Certified, friendly teachers", "Located in BSD City", "Small class sizes"].map(t => (
                  <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0" /> {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
