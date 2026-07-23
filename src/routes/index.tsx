import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartPulse,
  Baby,
  Brain,
  Stethoscope,
  Activity,
  ShieldPlus,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/hospital-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian General Hospital — Compassionate care, 24/7" },
      {
        name: "description",
        content:
          "A full-service hospital with 24/7 emergency care, expert physicians, and specialty departments across Portland.",
      },
      { property: "og:title", content: "Meridian General Hospital" },
      {
        property: "og:description",
        content: "Compassionate, evidence-based care across every specialty.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: HeartPulse, name: "Cardiology", desc: "Advanced heart care, imaging, and interventional cardiology." },
  { icon: Baby, name: "Pediatrics", desc: "Gentle, kid-first care from newborns through adolescents." },
  { icon: Brain, name: "Neurology", desc: "Diagnosis and treatment of complex neurological conditions." },
  { icon: ShieldPlus, name: "Emergency", desc: "Level II trauma center open 24 hours, every day of the year." },
  { icon: Stethoscope, name: "Primary Care", desc: "Long-term partnerships with physicians who know you." },
  { icon: Activity, name: "Diagnostics", desc: "On-site labs, MRI, CT, and same-day imaging results." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Emergency room open 24/7
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
              Care that treats
              <span className="italic text-primary"> the whole person.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Meridian General brings together specialists, technology, and warmth
              under one roof — so every visit feels less like a hospital and more
              like being known.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book an appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Explore services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-soft" />
            <img
              src={heroImg}
              alt="Doctor walking through a sunlit hospital corridor"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-brand-soft/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {[
            ["42", "Years serving Portland"],
            ["280+", "Physicians & specialists"],
            ["24/7", "Emergency & trauma care"],
            ["98%", "Patient satisfaction"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-serif text-4xl text-primary md:text-5xl">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-brand">
              Specialties
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Full-service care, close to home.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-medium">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Info strip */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 rounded-3xl bg-primary p-8 text-primary-foreground md:grid-cols-3 md:p-12">
          {[
            { icon: Clock, title: "Open 24/7", body: "Emergency room never closes." },
            { icon: MapPin, title: "Central Portland", body: "120 Cedar Ave, easy transit access." },
            { icon: Phone, title: "Nurse line", body: "Call (800) 555-0111 anytime." },
          ].map((i) => (
            <div key={i.title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10">
                <i.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-medium">{i.title}</div>
                <div className="text-sm text-primary-foreground/80">{i.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
