import React from 'react';
import { Github, ExternalLink, Image, Bot, FileText } from 'lucide-react';

const projects = [
  {
    title: 'Vision: Brain Tumor Classification',
    desc: 'A transfer learning pipeline using EfficientNet for MRI scan classification with Grad-CAM explainability.',
    tags: ['PyTorch', 'EfficientNet', 'Grad-CAM', 'MLOps'],
    links: { github: '#', demo: '#' },
    icon: Image,
  },
  {
    title: 'NLP: Scientific Paper Summarizer',
    desc: 'Fine-tuned T5 model that creates concise, factual summaries of long-form research papers.',
    tags: ['Transformers', 'T5', 'Datasets', 'Eval'],
    links: { github: '#', demo: '#' },
    icon: FileText,
  },
  {
    title: 'Agentic Chatbot for Course Q&A',
    desc: 'RAG-powered chatbot that answers course-related questions with sources and semantic search.',
    tags: ['RAG', 'Vector DB', 'Embeddings', 'FastAPI'],
    links: { github: '#', demo: '#' },
    icon: Bot,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0b0d12] text-white py-20 md:py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
            <p className="mt-2 text-slate-300">A few highlights from recent work and experiments.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-cyan-500/10 p-2 border border-cyan-400/20">
                  <p.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-black/30 border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.links.github} className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10 transition-colors">
                  <Github className="h-4 w-4" /> Code
                </a>
                <a href={p.links.demo} className="inline-flex items-center gap-1 rounded-md border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10 transition-colors">
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(600px_circle_at_var(--x,_50%)_var(--y,_50%),rgba(34,211,238,0.12),transparent_40%)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
