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
import insuranceImage from "@/assets/Screenshot from 2025-11-24 17-15-21.png"
import GMS from "@/assets/Screenshot from 2025-11-24 17-15-53.png"
import tricote from "@/assets/Screenshot from 2025-11-24 17-18-37.png"

const Portfolio = () => {
  const projects = [  
    {
      title: "Insurance and Solution Website",
      description: "A website for the company Insurance and Solution. This was my first freelancing project.",
      image: insuranceImage,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://www.insuranceandsolutions.in",
      githubUrl: "https://github.com/AbrahamNevin/Insurance-and-solutions-website",
    },
    {
      title: "Geomatrix Machining Solutions",
      description: "We combine advanced technology with expert craftsmanship to engineer precision components that exceed modern industry standards.",
      image: GMS,
      technologies: ["React", "TypeScript"],
      liveUrl: "https://www.geomatrixmachining.com/",
      githubUrl: "https://github.com/AbrahamNevin",
    },
    {
      title: "Online Store",
      description: "Modern and Dynamic Shoping website for the Comapny tricote",
      image: tricote,
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "https://tricote.in",
      githubUrl: "https://github.com",
    },
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
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button size="sm" className="bg-primary hover:bg-primary-muted">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Live
                            </Button>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </Button>
                          </a>
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
