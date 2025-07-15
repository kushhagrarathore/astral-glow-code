import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import iosApp1 from "@/assets/ios-app-1.jpg";
import mlProject1 from "@/assets/ml-project-1.jpg";
import webApp1 from "@/assets/web-app-1.jpg";
import photography1 from "@/assets/photography-1.jpg";
import kadJobImg from "@/assets/KADJOB.png";
import logoInquizo from "@/assets/LOGO.264Z.png";
import weatherAppImg from "@/assets/WEATHERPP.png";

const portfolioSections = [
  {
    id: "ml",
    title: "Machine Learning",
    projects: [
      {
        title: "Music Genre Classification (ML Project)",
        category: "Audio Classification",
        image: mlProject1,
        description: "Built a machine learning model for music genre classification using MFCCs, Spectrograms, and Tempo Analysis. Implemented feature extraction and classification with Python, TensorFlow, and Librosa. Improved model accuracy through advanced preprocessing and hyperparameter tuning."
      },
      {
        title: "Weather Image Detection App",
        category: "Image Classification",
        image: weatherAppImg,
        description: "Developed a real-time weather classification app using InceptionV3, VGG19, and Streamlit. Enhanced image detection accuracy with deep learning architectures and efficient data pipelines."
      },
      {
        title: "KAD Job Scouts",
        category: "Job Recommendation Platform",
        image: kadJobImg,
        description: "KAD Job Scouts is a comprehensive job recommendation platform that transforms how job seekers and recruiters connect. By combining artificial intelligence with intuitive user experience design, the platform delivers personalized job matching that goes beyond traditional keyword searches."
      }
    ]
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    projects: [
      {
        title: "INQUIZO",
        category: "Web Platform",
        image: logoInquizo,
        description: "INQUIZO is an innovative web platform that empowers users to effortlessly create, customize, and share interactive quizzes and forms. Leveraging the power of Google Gemini AI, users can instantly generate high-quality, multiple-choice quizzes on any topic, or build their own with a flexible drag-and-drop editor.\n\n\u26A0\ufe0f This project is currently in the building phase. Stay tuned for updates!",
        building: true
      }
    ]
  }
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("ml");

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
                        className={`w-full h-48 transition-transform duration-300 group-hover:scale-110 ${project.title === 'KAD Job Scouts' ? 'object-contain bg-white' : 'object-cover'}`}
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
                        {project.building && (
                          <span className="ml-2 px-2 py-1 text-xs rounded bg-yellow-200 text-yellow-800 font-semibold animate-pulse">Building</span>
                        )}
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