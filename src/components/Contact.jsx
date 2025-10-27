import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0b0d12] text-white py-20 md:py-28 border-t border-white/5">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Let’s collaborate</h2>
        <p className="mt-3 text-slate-300">
          Open to internships, research collaborations, and freelance ML projects. Reach out and let’s build
          something impactful together.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-black hover:bg-cyan-400 transition-colors">
            <Mail className="h-5 w-5" /> Email Me
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors">
            <Github className="h-5 w-5" /> GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
