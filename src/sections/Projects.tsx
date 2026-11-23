import React, { useState } from 'react';
import { Layers, ArrowUpRight, ChevronDown, ChevronUp, ZoomIn } from 'lucide-react';
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
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181922] border border-white/[0.08] text-[11px] font-semibold tracking-widest uppercase text-[#E05D38] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05D38]"></span>
            <span>PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            <span className="text-white">FEATURED </span>
            <span className="text-[#717482]">PROJECTS</span>
          </h2>
          <p className="text-sm text-[#9094A0] mt-2 max-w-xl leading-relaxed">
            Production-grade systems in multi-agent AI orchestration and explainable machine learning.
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
                        /* Credit Ledger Authentic SHAP Waterfall & ML Visualizer */
                        <div className="w-full h-full p-5 sm:p-6 flex flex-col justify-between bg-[#0E0F16] font-mono select-none">
                          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#E05D38]"></span>
                              <span className="text-xs font-bold text-white uppercase tracking-wider">
                                SHAP TreeExplainer Local Attribution
                              </span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-[#1B1D27] text-emerald-400 font-semibold border border-white/[0.06]">
                              ROC-AUC 0.942
                            </span>
                          </div>

                          {/* SHAP Waterfall Bars Preview */}
                          <div className="space-y-2 py-3 text-[11px]">
                            <div className="flex items-center justify-between text-[#8E929E] text-[10px] pb-1">
                              <span>FEATURE IMPACT (LOCAL EXPLANATION)</span>
                              <span>SHAP VALUE (Δ RISK)</span>
                            </div>

                            <div className="space-y-1.5">
                              <div>
                                <div className="flex justify-between text-white text-[10px] mb-0.5">
                                  <span>loan_percent_income &gt; 0.38</span>
                                  <span className="text-[#E05D38] font-bold">+0.24</span>
                                </div>
                                <div className="h-1.5 w-full bg-[#181924] rounded-full overflow-hidden">
                                  <div className="h-full bg-[#E05D38] rounded-full" style={{ width: '78%' }}></div>
                                </div>
                              </div>

                              <div>
                                <div className="flex justify-between text-white text-[10px] mb-0.5">
                                  <span>loan_grade = 'D'</span>
                                  <span className="text-[#E05D38] font-bold">+0.18</span>
                                </div>
                                <div className="h-1.5 w-full bg-[#181924] rounded-full overflow-hidden">
                                  <div className="h-full bg-[#E05D38] rounded-full" style={{ width: '58%' }}></div>
                                </div>
                              </div>

                              <div>
                                <div className="flex justify-between text-white text-[10px] mb-0.5">
                                  <span>person_income = $85,000</span>
                                  <span className="text-emerald-400 font-bold">-0.16</span>
                                </div>
                                <div className="h-1.5 w-full bg-[#181924] rounded-full overflow-hidden">
                                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '52%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Metric Footnote */}
                          <div className="flex items-center justify-between text-[10px] pt-3 border-t border-white/[0.08] text-[#8E929E]">
                            <span>Base E[f(X)]: 0.22</span>
                            <span className="text-white font-bold">f(x): 0.51 · DEFAULT VERDICT</span>
                            <span className="text-emerald-400 font-semibold">FastAPI &lt; 85ms</span>
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
                          PROJECT 0{index + 1}
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

                      {/* Key Engineering Features - Clean Editorial List */}
                      <div className="mt-5 space-y-2">
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#D1D5DB]">
                            <span className="text-[#E05D38] font-bold select-none">—</span>
                            <span className="leading-relaxed">{feat}</span>
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
        imageSrc="./projects/ankai-architecture.jpg"
        title="AnkAI Orchestration Architecture Blueprint"
        description="5 Microservices, LangGraph StateGraph, 8 Specialist Agents, and Qdrant Vector Store"
      />
    </section>
  );
};
