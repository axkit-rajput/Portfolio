import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Layers, Check, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { GithubIcon } from '../components/Icons';
import { ArchitectureDiagramAnkAI } from '../components/ArchitectureDiagramAnkAI';
import { ArchitectureDiagramCreditLedger } from '../components/ArchitectureDiagramCreditLedger';
import { ArchitectureModal } from '../components/ArchitectureModal';

export const Projects: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('ankai');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="projects"
      tabIndex={-1}
      className="py-16 sm:py-24 border-t border-[#E5E7EB] dark:border-[#1F2636] bg-[#F7F8FA] dark:bg-[#0D111A] outline-none transition-colors"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096]">
              03 / Engineering Systems
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717] dark:text-white mt-1">
            Featured Projects
          </h2>
          <p className="text-sm text-[#666666] dark:text-[#9CA3AF] mt-2 max-w-2xl leading-relaxed">
            Deep dive into two full-stack engineering initiatives: a multi-agent AI orchestration platform and an explainable machine learning risk engine.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <article
                key={project.id}
                className="rounded-2xl border border-[#E5E7EB] dark:border-[#1F2636] bg-white dark:bg-[#111622] shadow-xs overflow-hidden transition-all duration-300"
              >
                {/* Main Project Card Content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Project Details */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/40">
                          PROJECT 0{index + 1}
                        </span>
                        <span className="text-xs text-[#888888] dark:text-[#718096]">
                          {project.technicalDetails.architectureType}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717] dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-[#444444] dark:text-[#D1D5DB] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-[#F3F4F6] dark:bg-[#1A202C] text-[#333333] dark:text-[#CBD5E1] border border-[#E5E7EB] dark:border-[#2D3748]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links Row */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition-colors shadow-2xs"
                          >
                            <span>Live Application</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#E5E7EB] dark:border-[#2D3748] bg-white dark:bg-[#161B26] hover:border-gray-400 text-xs font-medium text-[#171717] dark:text-white transition-colors shadow-2xs"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>

                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/60 dark:hover:bg-[#1A2230] transition-colors cursor-pointer"
                          aria-expanded={isExpanded}
                          aria-controls={`details-${project.id}`}
                        >
                          <Layers className="w-3.5 h-3.5 text-blue-500" />
                          <span>{isExpanded ? 'Hide Architecture' : 'View Architecture & Specs'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Right: Key Features & Preview */}
                    <div className="lg:col-span-5 space-y-4">
                      {project.screenshot ? (
                        <div className="relative rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-[#232936] bg-[#0A0D14] shadow-xs group">
                          <img
                            src={project.screenshot}
                            alt={`${project.title} Interface Preview`}
                            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                          />
                          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 text-white backdrop-blur-xs">
                            Actual Screenshot
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl border border-[#E5E7EB] dark:border-[#232936] bg-[#FAFAFC] dark:bg-[#0D111A]">
                          <div className="text-xs font-semibold text-gray-900 dark:text-white mb-2">
                            Key ML Pipeline Specifications
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                            <div className="p-2.5 rounded bg-white dark:bg-[#141A26] border border-gray-200 dark:border-gray-800">
                              <span className="text-gray-400 block text-[10px]">Records Evaluated</span>
                              <span className="font-semibold text-blue-600 dark:text-blue-400">32.5K Records</span>
                            </div>
                            <div className="p-2.5 rounded bg-white dark:bg-[#141A26] border border-gray-200 dark:border-gray-800">
                              <span className="text-gray-400 block text-[10px]">ROC-AUC Score</span>
                              <span className="font-semibold text-emerald-600 dark:text-emerald-400">0.94 ROC-AUC</span>
                            </div>
                            <div className="p-2.5 rounded bg-white dark:bg-[#141A26] border border-gray-200 dark:border-gray-800">
                              <span className="text-gray-400 block text-[10px]">Calibration</span>
                              <span className="font-semibold text-purple-600 dark:text-purple-400">Platt Scaling</span>
                            </div>
                            <div className="p-2.5 rounded bg-white dark:bg-[#141A26] border border-gray-200 dark:border-gray-800">
                              <span className="text-gray-400 block text-[10px]">Explainability</span>
                              <span className="font-semibold text-amber-600 dark:text-amber-400">TreeExplainer</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Engineering Highlights Checklist */}
                      <div className="p-4 rounded-xl border border-[#E5E7EB] dark:border-[#232936] bg-[#FAFAFC] dark:bg-[#0D111A]">
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#888888] dark:text-[#718096] mb-3">
                          Key Engineering Highlights
                        </div>
                        <ul className="space-y-2 text-xs text-[#444444] dark:text-[#CBD5E1]">
                          {project.features.slice(0, 5).map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable Technical Specs & Interactive Architecture */}
                {isExpanded && (
                  <div
                    id={`details-${project.id}`}
                    className="border-t border-[#E5E7EB] dark:border-[#1F2636] bg-white dark:bg-[#0F1420] p-6 sm:p-8 lg:p-10 space-y-8 animate-in fade-in duration-300"
                  >
                    {/* Deep Dive Narrative */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-semibold text-base text-[#171717] dark:text-white">
                          Technical Architecture & Engineering Design
                        </h4>
                      </div>
                      <p className="text-sm text-[#444444] dark:text-[#D1D5DB] leading-relaxed">
                        {project.technicalDetails.overview}
                      </p>
                      <p className="text-sm text-[#444444] dark:text-[#D1D5DB] leading-relaxed">
                        {project.technicalDetails.deepDive}
                      </p>
                    </div>

                    {/* Architecture Diagram Render */}
                    {project.id === 'ankai' ? (
                      <ArchitectureDiagramAnkAI
                        onOpenImageModal={() => setIsModalOpen(true)}
                      />
                    ) : (
                      <ArchitectureDiagramCreditLedger />
                    )}

                    {/* Full Features Checklist Breakdown */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#888888] dark:text-[#718096] mb-3">
                        Complete Features & Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-[#333333] dark:text-[#D1D5DB]">
                        {project.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAFAFC] dark:bg-[#121622] border border-[#E5E7EB] dark:border-[#232936]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Image Modal for High-Res Blueprint */}
      <ArchitectureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc="/projects/ankai-architecture.jpg"
        title="AnkAI Production Architecture Blueprint"
        description="5 Microservices, LangGraph StateGraph, Multi-LLM Routing, and Qdrant RAG Pipeline"
      />
    </section>
  );
};
