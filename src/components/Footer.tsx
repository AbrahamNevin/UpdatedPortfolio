import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border/50 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" />
            <span className="text-muted-foreground">and</span>
            <Code className="h-4 w-4 text-primary mx-2" />
            <span className="text-muted-foreground">by</span>
            <span className="ml-2 font-semibold gradient-text">Nevin Abraham</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nevin Abraham. All rights reserved.
          </p>
          
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;