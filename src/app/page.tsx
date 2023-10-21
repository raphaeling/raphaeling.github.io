"use client";

import Hero from "../components/hero";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div className="h-screen w-screen items-center">
      <nav className="relative px-24 pt-24 pb-20">
        <NavBar />
      </nav>
      <main className="justify-center px-24 py-24">
        <Hero />
      </main>
    </div>
  );
}
