import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointments — Meridian General Hospital" },
      {
        name: "description",
        content:
          "Book an appointment, find directions, or reach the 24/7 nurse line at Meridian General Hospital.",
      },
      { property: "og:title", content: "Contact — Meridian General" },
      {
        property: "og:description",
        content: "Book a visit or reach our 24/7 nurse line.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 md:pt-24">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">
          Appointments
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-5xl md:text-6xl">
          Let's find a time that <span className="italic text-primary">works for you.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Fill out the form and a scheduler will reach out within one business day.
          For urgent concerns, call our nurse line — day or night.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.3fr_1fr]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-border bg-card p-8 md:p-10"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-primary">
                <Check className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-serif text-3xl">Request received</h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Thanks — a member of our scheduling team will contact you within one
                business day.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" name="first" />
                <Field label="Last name" name="last" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Department</label>
                <select
                  required
                  className="h-11 rounded-lg border border-input bg-background px-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                >
                  <option value="">Select a department</option>
                  <option>Primary Care</option>
                  <option>Cardiology</option>
                  <option>Pediatrics</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Reason for visit</label>
                <textarea
                  rows={4}
                  className="rounded-lg border border-input bg-background p-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                  placeholder="Briefly describe your symptoms or reason for the appointment."
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request appointment
              </button>
              <p className="text-xs text-muted-foreground">
                In an emergency, call 911 or visit our ER at 120 Cedar Ave.
              </p>
            </div>
          )}
        </form>

        <aside className="space-y-4">
          <InfoCard icon={MapPin} title="Visit us">
            120 Cedar Avenue<br />
            Portland, OR 97205
          </InfoCard>
          <InfoCard icon={Phone} title="Call">
            Main: (800) 555-0111<br />
            Nurse line: (800) 555-0199
          </InfoCard>
          <InfoCard icon={Mail} title="Email">
            hello@meridianhealth.example
          </InfoCard>
          <InfoCard icon={Clock} title="Hours">
            Clinic: Mon–Fri, 7am–7pm<br />
            Emergency room: 24/7
          </InfoCard>
        </aside>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="h-11 rounded-lg border border-input bg-background px-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="font-medium">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}
