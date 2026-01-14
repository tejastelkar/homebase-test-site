import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import heroBg from "@/assets/hero-bg.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$1,250,000",
    beds: 4,
    baths: 3,
    sqft: 3200,
  },
  {
    image: property2,
    title: "Downtown Penthouse",
    location: "Manhattan, NY",
    price: "$2,450,000",
    beds: 3,
    baths: 2,
    sqft: 2100,
  },
  {
    image: property3,
    title: "Charming Townhouse",
    location: "Boston, MA",
    price: "$875,000",
    beds: 3,
    baths: 2,
    sqft: 1800,
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex min-h-[500px] items-center justify-center md:min-h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-card md:text-5xl lg:text-6xl">
            Find Your Perfect Home with Confidence
          </h1>
          <p className="mb-8 text-lg text-card/90 md:text-xl">
            Trusted real estate solutions for buyers and investors
          </p>
          <Link to="/contact">
            <Button size="lg" className="px-8 py-6 text-lg font-semibold">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Featured Properties
            </h2>
            <p className="text-muted-foreground">
              Discover our handpicked selection of exceptional homes
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
