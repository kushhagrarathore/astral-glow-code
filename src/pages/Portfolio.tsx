import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import iosApp1 from "@/assets/ios-app-1.jpg";
import mlProject1 from "@/assets/ml-project-1.jpg";
import webApp1 from "@/assets/web-app-1.jpg";
import photography1 from "@/assets/photography-1.jpg";

const portfolioSections = [
  {
    id: "ios",
    title: "iOS Development",
    projects: [
      {
        title: "HealthTracker Pro",
        category: "SwiftUI App",
        image: iosApp1,
        description: "Comprehensive health tracking with CoreML integration"
      },
      {
        title: "TaskFlow",
        category: "UIKit App",
        image: iosApp1,
        description: "Productivity app with advanced animations"
      },
      {
        title: "CryptoWallet",
        category: "SwiftUI App",
        image: iosApp1,
        description: "Secure cryptocurrency wallet with biometric auth"
      },
      {
        title: "PhotoEditor AI",
        category: "CoreML App",
        image: iosApp1,
        description: "AI-powered photo editing with real-time filters"
      }
    ]
  },
  {
    id: "ml",
    title: "Machine Learning",
    projects: [
      {
        title: "Neural Style Transfer",
        category: "Computer Vision",
        image: mlProject1,
        description: "Real-time artistic style transfer using TensorFlow"
      },
      {
        title: "Sentiment Analysis API",
        category: "NLP",
        image: mlProject1,
        description: "Multi-language sentiment analysis with BERT"
      },
      {
        title: "Recommendation Engine",
        category: "Deep Learning",
        image: mlProject1,
        description: "Collaborative filtering for e-commerce platforms"
      },
      {
        title: "Anomaly Detection",
        category: "Time Series",
        image: mlProject1,
        description: "IoT sensor data anomaly detection system"
      }
    ]
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    projects: [
      {
        title: "SaaS Dashboard",
        category: "React + Node.js",
        image: webApp1,
        description: "Analytics platform with real-time data visualization"
      },
      {
        title: "E-commerce Platform",
        category: "Next.js + MongoDB",
        image: webApp1,
        description: "Modern e-commerce with advanced search and recommendations"
      },
      {
        title: "Collaboration Tool",
        category: "React + PostgreSQL",
        image: webApp1,
        description: "Team collaboration platform with real-time features"
      },
      {
        title: "Learning Management",
        category: "Vue.js + Express",
        image: webApp1,
        description: "Educational platform with video streaming and assessments"
      }
    ]
  },
  {
    id: "photography",
    title: "Photography",
    projects: [
      {
        title: "Urban Landscapes",
        category: "Architecture",
        image: photography1,
        description: "Capturing the beauty of modern cityscapes"
      },
      {
        title: "Portrait Series",
        category: "People",
        image: photography1,
        description: "Intimate portraits with dramatic lighting"
      },
      {
        title: "Nature Collection",
        category: "Landscape",
        image: photography1,
        description: "Breathtaking natural scenes and wildlife"
      },
      {
        title: "Street Photography",
        category: "Documentary",
        image: photography1,
        description: "Candid moments from everyday life"
      }
    ]
  }
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("ios");

  const currentSection = portfolioSections.find(section => section.id === activeSection);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my work across different domains and technologies
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {portfolioSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "bg-card hover:bg-muted neon-border hover:glow-secondary"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Current Section */}
        {currentSection && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-secondary bg-clip-text text-transparent">
              {currentSection.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentSection.projects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group bg-card neon-border hover:glow-accent transition-all duration-500 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                          <button className="p-2 bg-primary rounded-full glow-primary">
                            <ExternalLink className="h-4 w-4" />
                          </button>
                          <button className="p-2 bg-secondary rounded-full glow-secondary">
                            <Github className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        <Badge variant="secondary" className="neon-border-purple">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}