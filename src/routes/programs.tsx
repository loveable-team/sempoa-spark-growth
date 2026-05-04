import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — SempoaBSD | Beginner to Advanced Mental Arithmetic" },
      { name: "description", content: "Structured sempoa programs for ages 4–12. From Beginner to Grand Master, see exactly what your child will achieve at each level." },
      { property: "og:title", content: "Sempoa Programs for Kids — SempoaBSD" },
      { property: "og:description", content: "Beginner to Advanced sempoa programs with clear age groups and outcomes." },
    ],
  }),
  component: ProgramsPage,
});

const levels = [
  {
    tier: "Foundation",
    name: "Little Beans",
    age: "Ages 4 – 6",
    duration: "6 months",
    color: "from-sky-400 to-blue-500",
    outcomes: ["Recognize numbers 1–100", "Basic abacus handling", "Concentration habits", "Love for numbers"],
  },
  {
    tier: "Beginner",
    name: "Bright Sparks",
    age: "Ages 6 – 8",
    duration: "12 months",
    color: "from-blue-500 to-indigo-500",
    outcomes: ["Add & subtract 2-digit", "Posture & finger technique", "Mental visualization basics", "Class presentations"],
    popular: true,
  },
  {
    tier: "Intermediate",
    name: "Quick Thinkers",
    age: "Ages 8 – 10",
    duration: "12 months",
    color: "from-indigo-500 to-violet-500",
    outcomes: ["3-digit mental math", "Multiplication & division", "Speed drill mastery", "Competition-ready"],
  },
  {
    tier: "Advanced",
    name: "Math Masters",
    age: "Ages 9 – 12",
    duration: "12 months",
    color: "from-violet-500 to-fuchsia-500",
    outcomes: ["4–5 digit mental math", "Decimal & fractions", "Anzan (no-abacus) skill", "Regional competitions"],
  },
  {
    tier: "Grand Master",
    name: "Mental Champions",
    age: "Ages 10 – 12+",
    duration: "Open-ended",
    color: "from-orange-400 to-rose-500",
    outcomes: ["Lightning-fast Anzan", "National-level prep", "Mentor younger students", "Lifelong calculation skill"],
  },
];

function ProgramsPage() {
  return (
    <>
      <section className="bg-gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Programs"
            title={<>A clear journey from <span className="text-gradient-primary">curious to champion</span></>}
            description="Five carefully crafted levels that grow with your child — every step backed by certified instructors and proven curriculum."
          />
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />
            <div className="space-y-10">
              {levels.map((lvl, i) => (
                <div key={lvl.name} className={`relative grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`relative rounded-3xl p-1 bg-gradient-to-br ${lvl.color} shadow-elegant`}>
                    <div className="rounded-[22px] bg-card p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{lvl.tier}</span>
                          <h3 className="mt-1 text-2xl font-bold">{lvl.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{lvl.age} · {lvl.duration}</p>
                        </div>
                        {lvl.popular && (
                          <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider">Popular</span>
                        )}
                      </div>
                      <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                        {lvl.outcomes.map(o => (
                          <li key={o} className="flex gap-2 text-sm">
                            <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-2 lg:px-8">
                    <div className={`inline-block text-7xl lg:text-8xl font-extrabold bg-gradient-to-br ${lvl.color} bg-clip-text text-transparent leading-none`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h4 className="mt-3 text-xl font-bold">{lvl.tier} stage</h4>
                    <p className="mt-2 text-muted-foreground max-w-md">
                      Carefully designed lessons that build foundational skill, technique, and joy of numbers — at exactly the right pace for this age.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-primary p-10 sm:p-14 text-center shadow-glow">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">Not sure which level fits?</h2>
            <p className="mt-3 text-primary-foreground/90 max-w-xl mx-auto">Our teachers will assess your child during a free trial and recommend the perfect starting point.</p>
            <Button asChild size="lg" className="mt-7 bg-card text-primary hover:bg-card/90 rounded-full px-7 shadow-elegant">
              <Link to="/contact">Book Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
