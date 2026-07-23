import { createFileRoute } from "@tanstack/react-router";
import {
  HeartPulse,
  Baby,
  Brain,
  Stethoscope,
  Activity,
  ShieldPlus,
  Bone,
  Eye,
  Microscope,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Departments — Meridian General Hospital" },
      {
        name: "description",
        content:
          "Explore Meridian's specialties: cardiology, pediatrics, neurology, emergency care, orthopedics, and more.",
      },
      { property: "og:title", content: "Services — Meridian General Hospital" },
      {
        property: "og:description",
        content: "Every specialty you need, under one roof.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: ShieldPlus, name: "Emergency & Trauma", desc: "Level II trauma center, 24/7 physician-staffed ER." },
  { icon: HeartPulse, name: "Cardiology", desc: "Cardiac imaging, cath lab, and heart failure clinic." },
  { icon: Brain, name: "Neurology", desc: "Stroke care, epilepsy, and movement disorders." },
  { icon: Baby, name: "Pediatrics", desc: "Well-child, sick visits, and pediatric specialty referrals." },
  { icon: Stethoscope, name: "Primary Care", desc: "Family medicine and internal medicine partnerships." },
  { icon: Bone, name: "Orthopedics", desc: "Joint replacement, sports medicine, spine care." },
  { icon: Activity, name: "Physical Therapy", desc: "Recovery and rehab plans built around your goals." },
  { icon: Eye, name: "Ophthalmology", desc: "Comprehensive eye exams and surgical care." },
  { icon: Microscope, name: "Diagnostics & Lab", desc: "On-site MRI, CT, ultrasound, and same-day labs." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 md:pt-24">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">
          Departments
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-5xl md:text-6xl">
          Every specialty you need, <span className="italic text-primary">in one place.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          From routine check-ups to complex surgical care, our teams collaborate across
          departments so you never have to navigate treatment alone.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-brand"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-lg font-medium">{s.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
