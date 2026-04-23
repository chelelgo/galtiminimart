import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="bg-foreground text-background mt-8">
    <div className="container py-10 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-9 h-9 rounded-xl gradient-hero grid place-items-center font-display font-extrabold">G</div>
          <span className="font-display font-extrabold text-lg">Galti Mini-Mart</span>
        </div>
        <p className="text-sm text-background/70 leading-relaxed">
          Your neighborhood smart grocery. Serving Elgonview, Eldoret with fresh essentials, daily.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Shop</h4>
        <ul className="space-y-2 text-sm text-background/70">
          <li>Fresh produce</li>
          <li>Daily essentials</li>
          <li>Flash deals</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Help</h4>
        <ul className="space-y-2 text-sm text-background/70">
          <li>Delivery zones</li>
          <li>Returns & refunds</li>
          <li>Loyalty program</li>
          <li>Contact support</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Visit us</h4>
        <ul className="space-y-2 text-sm text-background/70">
          <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-secondary" /> Elgonview, Eldoret</li>
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" /> +254 700 000 000</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" /> hello@galti.co.ke</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-background/10 py-4 text-center text-xs text-background/60">
      © {new Date().getFullYear()} Galti Mini-Mart. Hyperlocal grocery, made in Eldoret.
    </div>
  </footer>
);
