import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About HomeFind
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in finding the perfect property. We've been helping 
              families and investors achieve their real estate dreams since 2010.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To simplify the home buying process and connect people with properties 
                  that match their lifestyle and budget.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Team</h3>
                <p className="text-muted-foreground">
                  A dedicated team of experienced real estate professionals committed 
                  to providing exceptional service.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
                <p className="text-muted-foreground">
                  Integrity, transparency, and client satisfaction are at the core 
                  of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2010, HomeFind started with a simple vision: to make real estate 
                accessible and stress-free for everyone. What began as a small local agency 
                has grown into a trusted name in the industry.
              </p>
              <p className="text-muted-foreground">
                Today, we've helped thousands of families find their dream homes and assisted 
                investors in building successful property portfolios. Our commitment to 
                excellence and personalized service remains unchanged.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
