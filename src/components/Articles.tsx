import { Calendar, ExternalLink, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Articles = () => {
  const articles = [
    {
      title: "I Just Read The Psychology of Money and It Completely Changed How I Think About Wealth",
      date: "2025-08-27",
      readTime: "3 min read",
      preview: "So I finally got around to reading The Psychology of Money by Morgan Housel, and wow — ",
      category: "Money Management",
      url: "https://medium.com/@nevinabr025/i-just-read-the-psychology-of-money-and-it-completely-changed-how-i-think-about-wealth-38b91e9ebf4a",
      featured: true
    },
    {
      title: "The Future of Social Media Marketing in 2024",
      date: "2025-10-19",
      readTime: "4 min read",
      preview: "I still remember the first conversation I had with the founder of V1 Esports. He had this infectious energy when he talked about his café",
      category: "Digital Marketing",
      url: "hhttps://medium.com/@nevinabr025/how-a-gaming-caf%C3%A9-taught-me-what-real-growth-actually-looks-like-81a205b1b22d\ttps://medium.com/@nevinabr025/future-of-social-media-marketing-2024"
    },
    {
      title: "Creating Responsive Designs with Tailwind CSS",
      date: "2025-08-06",
      readTime: "5 min read",
      preview: "I’m excited to share that I just completed my first freelancing project,building a website for a company called Insurance and Solutions! ",
      category: "Web Development",
      url: "https://medium.comhttps://medium.com/@nevinabr025/finished-my-first-freelancing-project-0d64eee5e438/@nevinabr025/responsive-designs-tailwind-css"
    },
  
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="articles" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Articles & Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing insights, tutorials, and thoughts on web development, digital marketing, and the latest industry trends.
            Follow my journey and learn from my experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card 
              key={index}
              className={`card-glass hover-lift group cursor-pointer border-border/50 hover:border-primary/30 transition-all duration-500 ${
                article.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant="secondary" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                  >
                    {article.category}
                  </Badge>
                  {article.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.preview}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  onClick={() => window.open(article.url, '_blank')}
                >
                  <span>Read More</span>
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg"
            onClick={() => window.open('https://medium.com/@nevinabr025', '_blank')}
            className="bg-primary hover:bg-primary-muted text-primary-foreground group"
          >
            View All Articles
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;