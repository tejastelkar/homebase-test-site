import { Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Home className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">HomeFind</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HomeFind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
