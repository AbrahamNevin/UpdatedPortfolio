import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Portfolio = () => {
  const projects = [
    {
      title: "Insurance and Solution Website",
      description: "A website for the company Insurance and solution, this was my first freelancing project. ",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://https://www.insuranceandsolutions.in/.com",
      githubUrl: "https://github.com/AbrahamNevin/Insurance-and-solutions-website"
    }, 
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time metrics and content scheduling.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Chart.js", "API Integration"],
      liveUrl: "https://https://www.insuranceandsolutions.in/.com",
      githubUrl: "https://github.com/AbrahamNevin/Insurance-and-solutions-website"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations, responsive design, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Restaurant Website",
      description: "Dynamic restaurant website with online ordering system, menu management, and reservation booking.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Brand Identity Package",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      technologies: ["Adobe Illustrator", "Figma", "Brand Strategy", "Design Systems"],
      liveUrl: "https://example.com"
    },
    {
      title: "Mobile App Landing",
      description: "Modern landing page for mobile app launch with app store integration and conversion optimization.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Tailwind CSS", "Analytics", "SEO"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="portfolio" className="section bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work across web development, design, and digital marketing projects.
            Each project represents a unique challenge solved with creative and technical excellence.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="card-glass hover-lift group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button size="sm" className="bg-primary hover:bg-primary-muted">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Portfolio;