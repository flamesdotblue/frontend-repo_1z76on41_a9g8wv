import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, BrainCircuit, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0b0d12] text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),rgba(0,0,0,0)_60%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
              <Sparkles className="h-4 w-4" />
              <span>Machine Learning • Artificial Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Building intelligent systems that learn and create
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              I’m a student specializing in applied ML, deep learning, and MLOps. I love turning data into
              real products — from computer vision to NLP and generative AI.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-black hover:bg-cyan-400 transition-colors">
                <Rocket className="h-5 w-5" /> View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors">
                Get in touch
              </a>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Deep Learning', 'Computer Vision', 'NLP', 'MLOps', 'Generative AI'].map((tag) => (
                <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] md:h-[600px] rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 overflow-hidden">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0d12] to-transparent" />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm text-slate-200 border border-white/10">
              <BrainCircuit className="h-4 w-4 text-cyan-300" />
              3D Brain • Interactive
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
