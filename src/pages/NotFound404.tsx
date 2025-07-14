import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound404() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Glitch Effect 404 */}
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-bold gradient-primary bg-clip-text text-transparent animate-glitch">
            404
          </h1>
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-neon-purple/20 animate-glitch" style={{ animationDelay: '0.1s' }}>
            404
          </div>
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-neon-teal/20 animate-glitch" style={{ animationDelay: '0.2s' }}>
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Page <span className="gradient-secondary bg-clip-text text-transparent">Not Found</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Looks like this page got lost in cyberspace. Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 glow-primary hover:glow-accent transition-all duration-300"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="neon-border hover:neon-border-purple hover:glow-secondary transition-all duration-300 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full animate-glow-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-purple rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-neon-teal rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-neon-magenta rounded-full animate-glow-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
    </div>
  );
}