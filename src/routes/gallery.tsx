import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroKids from "@/assets/hero-kids.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SempoaBSD Classes, Events & Competitions" },
      { name: "description", content: "Glimpses of life at SempoaBSD: classes in action, competition victories, and the joyful moments that make our community special." },
      { property: "og:title", content: "Gallery — SempoaBSD" },
      { property: "og:description", content: "See our students learning, competing, and celebrating." },
      { property: "og:image", content: gallery1 },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: gallery1, label: "Annual Competition", span: "lg:col-span-2 lg:row-span-2" },
  { src: gallery2, label: "Hands-on Learning", span: "" },
  { src: heroKids, label: "Bright Classrooms", span: "" },
  { src: gallery3, label: "Award Ceremony", span: "lg:col-span-2" },
  { src: student1, label: "Confident Smiles", span: "" },
  { src: student2, label: "Deep Focus", span: "" },
];

function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-hero py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title={<>Moments of <span className="text-gradient-primary">growth, joy & pride</span></>}
            description="A glimpse into life at SempoaBSD — from focused practice to celebration podiums."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[200px] lg:auto-rows-[240px]">
            {items.map((it, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl shadow-elegant ${it.span}`}
              >
                <img
                  src={it.src}
                  alt={it.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-background font-semibold">{it.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
