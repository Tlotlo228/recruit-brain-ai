import { Link } from "react-router-dom";
import biyuLogo from "@/assets/biyu-logo.jpeg";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <img src={biyuLogo} alt="BIYU AI Agency" className="h-8 w-8 rounded-lg object-cover" />
            <span>BIYU AI</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Connecting top AI talent with forward-thinking companies building the future.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Quick Links</h4>
          <div className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/apply", label: "Apply" },
              { to: "/about", label: "About" },
              { to: "/faq", label: "FAQ" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>info.biyu.ai@gmail.com</p>
            <p>Gaborone, Botswana</p>
            <p>Francistown, Botswana</p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BIYU AI Agency. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
