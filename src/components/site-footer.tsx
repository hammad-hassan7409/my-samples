import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-brand-soft/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
              <Heart className="h-4 w-4" fill="currentColor" />
            </span>
            <span className="font-serif text-2xl leading-none">Meridian General</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Compassionate, evidence-based care for every stage of life. Open 24/7 for
            emergencies.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium">Visit</h4>
          <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">
            120 Cedar Avenue<br />
            Portland, OR 97205<br />
            (800) 555-0111
          </address>
        </div>
        <div>
          <h4 className="text-sm font-medium">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/doctors" className="hover:text-foreground">Doctors</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Appointments</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Meridian General Hospital. All rights reserved.
      </div>
    </footer>
  );
}
