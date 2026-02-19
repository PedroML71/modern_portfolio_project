import { createFileRoute } from "@tanstack/react-router";
// import Hero from "@/sections/Hero";
// import About from "@/sections/About";
// import Projects from "@/sections/Projects";
// import Experience from "@/sections/Experience";
// import Testimonials from "@/sections/Testimonials";
// import Contact from "@/sections/Contact";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main>
      {/* <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact /> */}
    </main>
  );
}
