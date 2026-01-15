import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote, Home, DollarSign, TrendingUp, Key, FileSearch, Handshake, Award, Clock, Users, ThumbsUp } from "lucide-react";
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

const services = [
  {
    icon: Home,
    title: "Buying",
    description: "Find your dream home with our expert guidance. We'll help you navigate the market and secure the best deal.",
  },
  {
    icon: DollarSign,
    title: "Selling",
    description: "Maximize your property's value with our proven marketing strategies and extensive buyer network.",
  },
  {
    icon: TrendingUp,
    title: "Investing",
    description: "Build wealth through real estate. We identify high-potential properties for smart investment decisions.",
  },
  {
    icon: Key,
    title: "Rentals",
    description: "Whether renting or leasing, we connect you with quality properties that fit your lifestyle and budget.",
  },
  {
    icon: FileSearch,
    title: "Property Valuation",
    description: "Get accurate market assessments to understand your property's true worth in today's market.",
  },
  {
    icon: Handshake,
    title: "Consultation",
    description: "Expert advice for all your real estate questions. Our team is here to guide you every step of the way.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "2,500+", label: "Properties Sold", icon: Home },
  { value: "98%", label: "Client Satisfaction", icon: ThumbsUp },
  { value: "50+", label: "Expert Agents", icon: Users },
];

const differentiators = [
  {
    icon: Award,
    title: "Award-Winning Service",
    description: "Recognized as the top real estate agency in the region for 5 consecutive years.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to answer your questions.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "We take time to understand your unique needs and preferences.",
  },
  {
    icon: ThumbsUp,
    title: "No Hidden Fees",
    description: "Transparent pricing with no surprises. What you see is what you get.",
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

      {/* Services Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              Why Choose HomeFind
            </h2>
            <p className="text-muted-foreground">
              Numbers that speak for themselves
            </p>
          </div>
          
          {/* Stats */}
          <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6 text-center shadow-sm"
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Key Differentiators */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg border border-border bg-muted/30 p-6 text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by Leading Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              "Zillow",
              "Realtor.com",
              "Redfin",
              "Century 21",
              "RE/MAX",
              "Coldwell Banker",
            ].map((partner) => (
              <div
                key={partner}
                className="text-xl font-bold text-muted-foreground/50 transition-colors hover:text-muted-foreground md:text-2xl"
              >
                {partner}
              </div>
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
