import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/nevin-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <p className="text-primary font-semibold mb-2 text-lg">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="gradient-text">Nevin Abraham</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
                Web Developer & Social Media Manager
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I create stunning digital experiences and build powerful online presences for businesses. 
              From responsive websites to strategic social media campaigns, I bring your vision to life 
              with modern technology and creative excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary-muted text-primary-foreground group">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <a
  href="public/ResumeNevin.pdf"
  download="ResumeNevin.pdf"
>
  <Button
    variant="outline"
    size="lg"
    className="border-primary/30 hover:border-primary hover:bg-primary/10"
  >
    <Download className="mr-2 h-5 w-5" />
    Download CV
  </Button>
</a>  
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500" />
              <img
                src={heroImage}
                alt="Nevin Abraham - Web Developer & Social Media Manager"
                className="relative rounded-3xl w-full max-w-md mx-auto shadow-2xl group-hover:shadow-primary/20 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;