import React from 'react';
import { Cpu, Layers, Database, LineChart } from 'lucide-react';

const skills = [
  { icon: Cpu, title: 'Deep Learning', desc: 'CNNs, RNNs, Transformers, diffusion models' },
  { icon: Layers, title: 'Modeling', desc: 'PyTorch, TensorFlow, scikit-learn' },
  { icon: Database, title: 'Data', desc: 'Pandas, NumPy, data pipelines, feature stores' },
  { icon: LineChart, title: 'MLOps', desc: 'Experiment tracking, deployment, monitoring' },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0b0d12] text-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m an AI/ML student passionate about building models that solve real problems. I enjoy the
              full lifecycle: from exploratory data analysis to training, evaluation, and deployment.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Outside of coursework, I work on open-source, participate in hackathons, and write about
              practical machine learning.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-500/10 p-2 border border-cyan-400/20">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
