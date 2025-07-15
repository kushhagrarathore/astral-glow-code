import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Kushagra Rathore
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            Developer & Creative Technologist
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            iOS apps, Machine Learning solutions, Full-stack development & Photography.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/portfolio">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 glow-primary hover:glow-accent transition-all duration-300"
            >
              Explore My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              variant="outline" 
              size="lg"
              className="neon-border hover:neon-border-purple hover:glow-secondary transition-all duration-300"
            >
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-8">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:glow-primary"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-secondary/20 transition-all duration-300 hover:glow-secondary"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:kushagrarathore802@gmail.com"
            className="p-3 rounded-full bg-card hover:bg-accent/20 transition-all duration-300 hover:glow-accent"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-neon-blue rounded-full animate-glow-pulse"></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-neon-purple rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-neon-teal rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </div>
  );
}