import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Brain } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b0d12]/60 bg-[#0b0d12]/80 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-cyan-500/15 border border-cyan-400/20">
              <Brain className="h-5 w-5 text-cyan-300" />
            </span>
            <span>ML • AI Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg bg-cyan-500 px-3 py-1.5 text-sm font-medium text-black hover:bg-cyan-400 transition-colors">Hire Me</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-400 flex flex-col gap-2 sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-slate-500">Built with React, Tailwind, and a 3D brain scene.</p>
        </div>
      </footer>
    </div>
  );
}
