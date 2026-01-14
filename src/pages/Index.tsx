import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
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
    title: "Modern Luxury Tejas",
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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "First-time Buyer",
    content: "HomeFind made my first home purchase so easy! The team was incredibly patient and helped me find the perfect starter home within my budget.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    content: "I've worked with many real estate agencies, but HomeFind stands out. Their market knowledge and professionalism are unmatched.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Homeowner",
    content: "From start to finish, the experience was seamless. They truly listened to what we wanted and delivered beyond our expectations.",
    rating: 5,
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

      {/* Testimonials Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Hear from families who found their dream homes with us
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="mb-4 text-muted-foreground">
                  "{testimonial.content}"
                </p>
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
