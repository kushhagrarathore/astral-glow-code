import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Award } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const timeline = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "TechCorp",
    description: "Leading development of ML-powered applications and iOS solutions"
  },
  {
    year: "2023",
    title: "iOS Developer",
    company: "StartupXYZ",
    description: "Built award-winning mobile applications with CoreML integration"
  },
  {
    year: "2022",
    title: "Machine Learning Engineer",
    company: "AI Solutions",
    description: "Developed computer vision and NLP models for production systems"
  },
  {
    year: "2021",
    title: "Computer Science Graduate",
    company: "University",
    description: "Graduated with honors, specialized in AI and mobile development"
  }
];

const funFacts = [
  "🏆 Won 3 hackathons in 2023",
  "📸 Published photographer with 50K+ Instagram followers",
  "🌍 Traveled to 15+ countries for tech conferences",
  "☕ Can code for 12+ hours fueled by coffee alone",
  "🎮 Built a game that reached #1 on App Store in India",
  "🤖 Contributed to 20+ open source ML projects"
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-card neon-border animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={profilePhoto}
                    alt="Kushagra Rathore"
                    className="w-32 h-32 rounded-full object-cover glow-primary"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
                </div>
                <h2 className="text-2xl font-bold mb-2">Kushagra Rathore</h2>
                <p className="text-muted-foreground mb-4">Developer & Creative Technologist</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4" />
                  <span>Indore, India</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 glow-primary">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="bg-card neon-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-secondary bg-clip-text text-transparent">
                  Fun Facts
                </h3>
                <div className="space-y-3">
                  {funFacts.map((fact, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      {fact}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card className="bg-card neon-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-accent bg-clip-text text-transparent">
                  My Story
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm Kushagra Rathore, a dedicated Full Stack Developer, Data Analyst, Machine Learning practitioner, and Startup enthusiast with a passion for building innovative, data-driven solutions.
                  </p>
                  <p>
                    I specialize in transforming complex data into actionable insights using tools like Python, SQL, Power BI, Pandas, and Matplotlib. On the development side, I create scalable, high-performance web applications using React, Node.js, Django, and PostgreSQL.
                  </p>
                  <p>
                    With a strong foundation in both software engineering and data science, I focus on solving real-world problems at the intersection of technology and business. My enthusiasm for startups drives me to constantly explore new ideas, optimize processes, and contribute to products that create meaningful impact.
                  </p>
                  <p>
                    I’m committed to continuous learning, clean architecture, and delivering measurable results through a blend of technical expertise and entrepreneurial mindset.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-card neon-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-primary bg-clip-text text-transparent">
                  Education
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-bold">SYMBIOSIS UNIVERSITY OF APPLIED SCIENCES</p>
                  <p>Bachelor of Technology in Computer Science and Information Technology</p>
                  <p>CGPA: 8.8</p>
                  <p>2022 - 2026</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}