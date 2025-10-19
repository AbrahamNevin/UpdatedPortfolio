import { Code, TrendingUp, Megaphone, Palette, Globe, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Website Design & Development",
      description: "Custom responsive websites built with modern technologies like React, TypeScript, and Tailwind CSS. From concept to deployment, I create fast, SEO-optimized, and user-friendly websites."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Social Media Management",
      description: "Comprehensive social media strategy and management across all platforms. Content creation, community engagement, and brand building to grow your online presence."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that deliver results. SEO optimization, content marketing, and performance analytics to boost your online visibility and conversions."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality. Wireframing, prototyping, and interface design that enhances user experience."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platform development with secure payment integration, inventory management, and mobile-optimized shopping experiences."
    },
    {
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: "Brand Strategy",
      description: "Strategic brand development and positioning to help your business stand out. Logo design, brand guidelines, and cohesive visual identity systems."
    }
  ];

  return (
    <section id="services" className="section bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive digital solutions to help your business thrive in the modern marketplace. 
            From cutting-edge web development to strategic social media management, I deliver results that matter.
          </p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="card-glass hover-lift group cursor-pointer border-border/50 hover:border-primary/30 transition-all duration-300 h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Services;