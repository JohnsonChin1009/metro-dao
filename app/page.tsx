"use client";

import Heading from "@/components/custom/heading";
import Footer from "@/components/custom/footer";

export default function LandingPage() {
  return (
    <main>
      <Heading />
      <section id="hero" className="min-h-screen text-center">
        <h2 className="text-3xl">Hero Section</h2>
      </section>
      <section id="about" className="min-h-screen text-center">
         <h2 className="text-3xl">About MetroDAO</h2>
        </section>
      <section id="features" className="min-h-screen text-center">
        <h2 className="text-3xl">Features</h2>
        </section>
      <section id="tech-stack" className="min-h-screen text-center">
        <h2 className="text-3xl">Tech Stack</h2>
      </section>
      <Footer />
    </main>
  )
}
