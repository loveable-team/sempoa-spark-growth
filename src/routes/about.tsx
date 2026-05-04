import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Target, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import gallery2 from "@/assets/gallery-2.jpg";
import abacusCloseup from "@/assets/abacus-closeup.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SempoaBSD — Our Story & Teaching Philosophy" },
      { name: "description", content: "Since 2010, SempoaBSD has helped thousands of children in BSD develop focus, confidence, and lifelong calculation skills through proven sempoa methodology." },
      { property: "og:title", content: "About SempoaBSD" },
      { property: "og:description", content: "Our story, philosophy, and the science behind sempoa learning." },
      { property: "og:image", content: gallery2 },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Child-First", desc: "Every lesson is built around how children genuinely learn — joyful, patient, and personal." },
  { icon: Target, title: "Results-Driven", desc: "Clear milestones and measurable progress. Every parent sees the transformation." },
  { icon: Lightbulb, title: "Science-Backed", desc: "Sempoa is proven to strengthen working memory, attention, and bilateral brain coordination." },
  { icon: Users, title: "Community", desc: "Small classes, warm teachers, and a supportive culture where every child belongs." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Us"
            title={<>Helping BSD's children think <span className="text-gradient-primary">faster, sharper, braver</span></>}
            description="Since 2010, SempoaBSD has been the trusted home for mental arithmetic in Bumi Serpong Damai."
          />
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
            <img src={gallery2} alt="SempoaBSD teacher with students" width={1024} height={768} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-accent-foreground text-xs font-semibold uppercase tracking-wider">Our Story</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Founded by educators. Built for parents.</h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SempoaBSD began in 2010 with a simple belief: every child has remarkable potential when given the right tools and the right teachers. Fifteen years later, we've helped over 2,000 families across BSD watch their children transform.
              </p>
              <p>
                We blend the time-tested wisdom of sempoa — a method refined over centuries — with modern teaching design. The result is a program that's joyful for children and visibly effective for parents.
              </p>
              <p>
                Our teachers are certified, our curriculum is structured, and our classrooms are warm. We measure success not by speed alone, but by the quiet confidence we see grow in every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Philosophy" title="What we stand for" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(v => (
              <div key={v.title} className="rounded-2xl bg-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <v.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-bold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENCE */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-accent-foreground text-xs font-semibold uppercase tracking-wider">The Science</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Why sempoa works — backed by research</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Sempoa training uniquely activates both brain hemispheres simultaneously. Studies in Japan and China show that children who train consistently develop stronger working memory, faster information processing, and longer attention spans — benefits that carry into every academic subject.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Activates left & right brain coordination",
                "Builds visualization and spatial reasoning",
                "Strengthens working memory capacity",
                "Develops sustained attention & discipline",
              ].map(p => (
                <li key={p} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary shrink-0" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-elegant aspect-square">
            <img src={abacusCloseup} alt="Traditional sempoa abacus" width={1024} height={1024} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-primary p-10 sm:p-14 text-center shadow-glow">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">Come visit our BSD center</h2>
            <p className="mt-3 text-primary-foreground/90 max-w-xl mx-auto">Meet our teachers, tour the classrooms, and let your child experience a real lesson — completely free.</p>
            <Button asChild size="lg" className="mt-7 bg-card text-primary hover:bg-card/90 rounded-full px-7 shadow-elegant">
              <Link to="/contact">Book a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
