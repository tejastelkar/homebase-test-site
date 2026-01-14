import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex flex-1 items-center justify-center py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-lg text-center">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Thank You for Contacting Us!
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              We've received your details and will reach out shortly.
            </p>
            <Link to="/">
              <Button size="lg" className="px-8">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
