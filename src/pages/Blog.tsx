import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable iOS Apps with SwiftUI and Combine",
    excerpt: "Learn how to create maintainable and scalable iOS applications using modern SwiftUI patterns and reactive programming with Combine framework.",
    category: "iOS Development",
    readTime: "8 min read",
    date: "2024-01-15",
    featured: true
  },
  {
    id: 2,
    title: "Machine Learning in Production: Best Practices",
    excerpt: "A comprehensive guide to deploying ML models in production environments, covering everything from model versioning to monitoring and scaling.",
    category: "Machine Learning",
    readTime: "12 min read",
    date: "2024-01-10",
    featured: true
  },
  {
    id: 3,
    title: "Full-Stack Development with Next.js and TypeScript",
    excerpt: "Dive deep into modern full-stack development using Next.js, TypeScript, and the latest React patterns for building high-performance web applications.",
    category: "Web Development",
    readTime: "10 min read",
    date: "2024-01-05",
    featured: false
  },
  {
    id: 4,
    title: "The Art of Technical Photography",
    excerpt: "Exploring the intersection of technology and photography, from computational photography to AI-enhanced image processing techniques.",
    category: "Photography",
    readTime: "6 min read",
    date: "2023-12-28",
    featured: false
  },
  {
    id: 5,
    title: "CoreML Integration: From Model to App Store",
    excerpt: "A step-by-step guide to integrating machine learning models into iOS apps using CoreML, including optimization and performance tips.",
    category: "iOS Development",
    readTime: "15 min read",
    date: "2023-12-20",
    featured: false
  },
  {
    id: 6,
    title: "Building Real-time Applications with WebSockets",
    excerpt: "Learn how to implement real-time features in web applications using WebSockets, Socket.io, and modern JavaScript frameworks.",
    category: "Web Development",
    readTime: "9 min read",
    date: "2023-12-15",
    featured: false
  }
];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "iOS Development": "neon-border-teal",
    "Machine Learning": "neon-border-purple",
    "Web Development": "neon-border",
    "Photography": "neon-border-purple"
  };
  return colors[category] || "neon-border";
};

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Tech <span className="gradient-primary bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on technology and development
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 gradient-secondary bg-clip-text text-transparent">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card
                key={post.id}
                className={`group bg-card neon-border hover:glow-accent transition-all duration-500 hover:scale-105 animate-fade-in ${getCategoryColor(post.category)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="neon-border-purple">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors group"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 gradient-accent bg-clip-text text-transparent">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <Card
                key={post.id}
                className={`group bg-card neon-border hover:glow-secondary transition-all duration-500 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt.slice(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-sm text-primary hover:text-accent transition-colors"
                    >
                      Read →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}