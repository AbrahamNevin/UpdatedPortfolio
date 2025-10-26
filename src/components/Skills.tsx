import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Palette, 
  Globe, 
  Smartphone, 
  Database, 
  GitBranch,
  TrendingUp,
  Users,
  Search,
  BarChart3,
  MessageSquare,
  Target
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "HTML5", icon: <Code2 className="h-8 w-8" />, category: "Frontend" },
    { name: "CSS3", icon: <Palette className="h-8 w-8" />, category: "Frontend" },
    { name: "JavaScript", icon: <Code2 className="h-8 w-8" />, category: "Frontend" },
    { name: "React", icon: <Globe className="h-8 w-8" />, category: "Frontend" },
    { name: "TypeScript", icon: <Code2 className="h-8 w-8" />, category: "Frontend" },
    { name: "Node.js", icon: <Database className="h-8 w-8" />, category: "Backend" },
    { name: "Tailwind CSS", icon: <Palette className="h-8 w-8" />, category: "Frontend" },
    { name: "Git", icon: <GitBranch className="h-8 w-8" />, category: "Tools" }
  ];

  const marketingSkills = [
    { name: "Social Media Strategy", icon: <TrendingUp className="h-8 w-8" /> },
    { name: "Content Creation", icon: <Users className="h-8 w-8" /> },
    { name: "SEO Optimization", icon: <Search className="h-8 w-8" /> },
    { name: "Brand Management", icon: <Target className="h-8 w-8" /> },
    { name: "Analytics & Reporting", icon: <BarChart3 className="h-8 w-8" /> },
    { name: "Community Management", icon: <MessageSquare className="h-8 w-8" /> }
  ];

  const tools = [
    "Figma", "Adobe Creative Suite", "WordPress", "Shopify", 
    "Google Analytics", "Hootsuite", "Canva", "Slack",
    "Trello", "VS Code", "GitHub", "Vercel"
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning modern web development technologies and strategic digital marketing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="group flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors block">
                      {skill.name}
                    </span>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {skill.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Skills */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Marketing Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {marketingSkills.map((skill, index) => (
                <div key={index} className="group flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        {/* <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-8 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </Badge>
            ))}
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Skills;