import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Meridian General Hospital" },
      {
        name: "description",
        content:
          "Meet the physicians and specialists behind Meridian General — board-certified, compassionate, and here for you.",
      },
      { property: "og:title", content: "Our Doctors — Meridian General" },
      {
        property: "og:description",
        content: "Board-certified specialists across every department.",
      },
    ],
  }),
  component: DoctorsPage,
});

const doctors = [
  {
    img: doc1,
    name: "Dr. Elena Marquez",
    role: "Cardiologist",
    bio: "15 years in interventional cardiology. Focused on preventive heart health.",
  },
  {
    img: doc2,
    name: "Dr. Samuel Okafor",
    role: "Family Medicine",
    bio: "Long-term primary care for adults and adolescents across three generations of Portland families.",
  },
  {
    img: doc3,
    name: "Dr. Priya Anand",
    role: "General Surgeon",
    bio: "Minimally invasive and laparoscopic procedures with a patient-first recovery plan.",
  },
  {
    img: doc1,
    name: "Dr. Naomi Chen",
    role: "Pediatrician",
    bio: "Gentle, kid-friendly care from newborns through teens.",
  },
  {
    img: doc2,
    name: "Dr. Marcus Bell",
    role: "Neurologist",
    bio: "Stroke recovery, headache disorders, and complex diagnostics.",
  },
  {
    img: doc3,
    name: "Dr. Ava Lindqvist",
    role: "Orthopedic Surgeon",
    bio: "Sports medicine and joint replacement, with a focus on quick return-to-activity.",
  },
];

function DoctorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 md:pt-24">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">
          Our team
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-5xl md:text-6xl">
          Physicians who <span className="italic text-primary">know your name.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          280+ board-certified doctors and specialists, working as one team to
          coordinate your care from first visit to full recovery.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d, i) => (
            <article key={i} className="group">
              <div className="overflow-hidden rounded-2xl bg-brand-soft">
                <img
                  src={d.img}
                  alt={`Portrait of ${d.name}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-5">
                <h2 className="font-serif text-2xl">{d.name}</h2>
                <div className="mt-1 text-sm text-brand">{d.role}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
