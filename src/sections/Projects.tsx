import React, { useState } from 'react';
import { Layers, ArrowUpRight, Check, ChevronDown, ChevronUp, ZoomIn } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { GithubIcon } from '../components/Icons';
import { ArchitectureDiagramAnkAI } from '../components/ArchitectureDiagramAnkAI';
import { ArchitectureDiagramCreditLedger } from '../components/ArchitectureDiagramCreditLedger';
import { ArchitectureModal } from '../components/ArchitectureModal';

export const Projects: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="projects"
      tabIndex={-1}
      className="py-20 sm:py-28 bg-[#0C0D12] text-white border-t border-white/[0.08] outline-none"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Portix Style) */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181922] border border-white/[0.08] text-[11px] font-semibold tracking-widest uppercase text-[#E05D38] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05D38]"></span>
            <span>FEATURED WORKS (02)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            <span className="text-white">ENGINEERED </span>
            <span className="text-[#717482]">SYSTEMS & INTELLIGENCE</span>
          </h2>
          <p className="text-sm text-[#9094A0] mt-3 max-w-xl leading-relaxed">
            Production-grade systems highlighting multi-agent orchestration, RAG pipelines, and mathematically verifiable explainable AI.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <article
                key={project.id}
                className="group rounded-3xl border border-white/[0.08] bg-[#14151C] hover:border-white/[0.16] transition-all duration-300 overflow-hidden shadow-2xl"
              >
                {/* Main Card Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10">
                  {/* Left Column: Visual Preview (Using Blueprint Image for AnkAI) */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0B0F] aspect-[16/10] group-hover:border-[#E05D38]/40 transition-colors">
                      {project.screenshot ? (
                        <>
                          <img
                            src={project.screenshot}
                            alt={`${project.title} Architecture Blueprint`}
                            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                            onClick={() => {
                              if (project.id === 'ankai') setIsModalOpen(true);
                            }}
                          />
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider uppercase bg-black/80 text-white border border-white/[0.1] backdrop-blur-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E05D38]"></span>
                            <span>Architecture Blueprint</span>
                          </div>
                          {project.id === 'ankai' && (
                            <button
                              onClick={() => setIsModalOpen(true)}
                              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md text-xs font-semibold bg-[#E05D38] hover:bg-[#F06B45] text-white flex items-center gap-1.5 shadow-lg transition-colors cursor-pointer"
                            >
                              <ZoomIn className="w-3.5 h-3.5" />
                              <span>Enlarge Blueprint</span>
                            </button>
                          )}
                        </>
                      ) : (
                        /* Credit Ledger Pipeline Graphic Card */
                        <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-[#12131A] to-[#1A1C26]">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-mono text-[#E05D38] uppercase tracking-wider">
                              ML Inference & Explainability
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-[#A0A4B0]">
                              ROC-AUC 0.94
                            </span>
                          </div>

                          <div className="space-y-2 py-4">
                            <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                              <span>Applicant Dataset (32.5K Records)</span>
                            </div>
                            <div className="pl-4 border-l border-white/[0.1] text-[11px] text-[#8E929E] space-y-1">
                              <div>→ Preprocessing & ColumnTransformer</div>
                              <div>→ Tuned XGBoost & Logistic Regression</div>
                              <div>→ Platt Scaling Probability Calibration</div>
                              <div>→ SHAP TreeExplainer Local Attribution</div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-xs pt-2 border-t border-white/[0.08] text-gray-400">
                            <span>FastAPI REST Serving</span>
                            <span className="text-emerald-400 font-mono">Sub-100ms Inference</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#181924] border border-white/[0.06] text-[11px] font-mono font-medium text-[#C0C4D0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Information & Actions */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-[#E05D38] tracking-widest uppercase">
                          CASE STUDY 0{index + 1}
                        </span>
                        <span className="text-xs font-mono text-[#717482]">
                          {project.technicalDetails.architectureType}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#E05D38] mt-1 uppercase tracking-wide">
                        {project.subtitle}
                      </p>

                      <p className="text-sm text-[#9094A0] leading-relaxed mt-4">
                        {project.description}
                      </p>

                      {/* Key Engineering Checklist */}
                      <div className="mt-5 space-y-2">
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                            <span className="w-4 h-4 rounded-full bg-[#E05D38]/15 text-[#E05D38] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Button Row */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E05D38] hover:bg-[#F06B45] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-[#E05D38]/20"
                        >
                          <span>LIVE DEMO</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181924] hover:bg-[#222432] border border-white/[0.1] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>SOURCE CODE</span>
                      </a>

                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#A0A4B2] hover:text-white hover:bg-white/[0.04] transition-colors cursor-pointer ml-auto"
                      >
                        <Layers className="w-3.5 h-3.5 text-[#E05D38]" />
                        <span>{isExpanded ? 'CLOSE SPECS' : 'VIEW SPECS'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable Architecture Specs */}
                {isExpanded && (
                  <div className="border-t border-white/[0.08] bg-[#0E0F16] p-6 sm:p-8 lg:p-10 space-y-6 animate-in fade-in duration-300">
                    <div className="max-w-3xl space-y-2">
                      <h4 className="text-sm uppercase tracking-wider font-bold text-white">
                        Architecture Breakdown & Engineering Rationale
                      </h4>
                      <p className="text-xs text-[#9094A0] leading-relaxed">
                        {project.technicalDetails.overview}
                      </p>
                    </div>

                    {project.id === 'ankai' ? (
                      <ArchitectureDiagramAnkAI onOpenImageModal={() => setIsModalOpen(true)} />
                    ) : (
                      <ArchitectureDiagramCreditLedger />
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Blueprint Image Modal */}
      <ArchitectureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc="/projects/ankai-architecture.jpg"
        title="AnkAI Orchestration Architecture Blueprint"
        description="5 Microservices, LangGraph StateGraph, 8 Specialist Agents, and Qdrant Vector Store"
      />
    </section>
  );
};
