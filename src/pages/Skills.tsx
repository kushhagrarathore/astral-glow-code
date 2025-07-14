import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Swift", category: "iOS", color: "neon-blue" },
  { name: "SwiftUI", category: "iOS", color: "neon-blue" },
  { name: "UIKit", category: "iOS", color: "neon-blue" },
  { name: "Xcode", category: "iOS", color: "neon-blue" },
  { name: "Combine", category: "iOS", color: "neon-blue" },
  { name: "Python", category: "ML", color: "neon-green" },
  { name: "TensorFlow", category: "ML", color: "neon-green" },
  { name: "PyTorch", category: "ML", color: "neon-green" },
  { name: "CoreML", category: "ML", color: "neon-green" },
  { name: "Jupyter", category: "ML", color: "neon-green" },
  { name: "React", category: "Frontend", color: "neon-teal" },
  { name: "Next.js", category: "Frontend", color: "neon-teal" },
  { name: "TypeScript", category: "Frontend", color: "neon-teal" },
  { name: "Node.js", category: "Backend", color: "neon-purple" },
  { name: "MongoDB", category: "Database", color: "neon-purple" },
  { name: "PostgreSQL", category: "Database", color: "neon-purple" },
  { name: "Redis", category: "Database", color: "neon-purple" },
  { name: "Photoshop", category: "Design", color: "neon-magenta" },
  { name: "Illustrator", category: "Design", color: "neon-magenta" },
  { name: "Figma", category: "Design", color: "neon-magenta" }
];

const SkillIcon = ({ skill }: { skill: typeof skills[0] }) => {
  const getIcon = (name: string) => {
    const icons: { [key: string]: string } = {
      "Swift": "S",
      "SwiftUI": "SU",
      "UIKit": "UK",
      "Xcode": "X",
      "Combine": "C",
      "Python": "Py",
      "TensorFlow": "TF",
      "PyTorch": "PT",
      "CoreML": "ML",
      "Jupyter": "J",
      "React": "R",
      "Next.js": "N",
      "TypeScript": "TS",
      "Node.js": "Nd",
      "MongoDB": "M",
      "PostgreSQL": "PG",
      "Redis": "R",
      "Photoshop": "Ps",
      "Illustrator": "Ai",
      "Figma": "F"
    };
    return icons[name] || name.slice(0, 2);
  };

  return (
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-bold text-sm">
      {getIcon(skill.name)}
    </div>
  );
};

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-primary bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className={`group bg-card neon-border hover:border-${skill.color} transition-all duration-500 hover:scale-105 hover:glow-accent animate-fade-in cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="group-hover:animate-float">
                  <SkillIcon skill={skill} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {skill.category}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories Legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {["iOS", "ML", "Frontend", "Backend", "Database", "Design"].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-gradient-primary"></div>
              <span className="text-sm text-muted-foreground">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}