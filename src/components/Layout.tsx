import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { AnimatedBackground } from "./AnimatedBackground";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
};