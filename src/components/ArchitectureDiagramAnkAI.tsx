import React, { useState } from 'react';
import { Layers, Cpu, Server, Database, Radio, ZoomIn } from 'lucide-react';

interface ArchitectureDiagramAnkAIProps {
  onOpenImageModal?: () => void;
}

export const ArchitectureDiagramAnkAI: React.FC<ArchitectureDiagramAnkAIProps> = ({
  onOpenImageModal,
}) => {
  const [selectedNode, setSelectedNode] = useState<string | null>('router');

  const agents = [
    { id: 'chat', name: 'Chat Agent', model: 'Groq (GPT-OSS 120B)', role: 'General conversation with 20-message memory window', provider: 'Groq & Redis' },
    { id: 'search', name: 'Search Agent', model: 'Tavily + Groq', role: 'Live web search & synthesis', provider: 'Tavily API' },
    { id: 'coder', name: 'Coder Agent', model: 'DeepSeek-V3', role: 'Multi-file code generation with JSON AST output', provider: 'OpenRouter' },
    { id: 'pdf', name: 'PDF Agent', model: 'Groq + PDFKit', role: 'A4 formatted PDF document synthesis & S3 upload', provider: 'AWS S3' },
    { id: 'ppt', name: 'PPT Agent', model: 'Groq + PptxGenJS', role: '16:9 presentation slide deck generation', provider: 'AWS S3' },
    { id: 'vision', name: 'Vision Agent', model: 'Pollinations AI', role: 'High-fidelity image synthesis', provider: 'AWS S3' },
    { id: 'rag', name: 'PDF RAG Agent', model: 'Gemini + Groq', role: 'Ephemeral Qdrant collections with chunk retrieval', provider: 'Qdrant Vector DB' },
    { id: 'image-analyzer', name: 'Image Analyzer', model: 'Gemini 2.5 Flash', role: 'Multimodal OCR & diagram inspection', provider: 'Gemini 2.5' },
  ];

  const nodeDetails: Record<string, { title: string; tech: string; description: string }> = {
    frontend: {
      title: 'React 19 Frontend + Vite',
      tech: 'React 19, Redux Toolkit, Monaco Editor, SSE Listener',
      description: 'Client dashboard with token-by-token SSE streaming, live Monaco code sandbox, and voice dictation.',
    },
    gateway: {
      title: 'API Gateway Microservice',
      tech: 'Express 5, CORS, Reverse Proxy, Rate Limiter',
      description: 'Central entrypoint routing traffic, injecting user tokens, and enforcing rate limiting.',
    },
    auth: {
      title: 'Auth & Billing Service',
      tech: 'Firebase Auth, Redis Sessions, Razorpay Orders',
      description: 'Session validation, user state synchronization, credit reservation, and billing webhooks.',
    },
    chat: {
      title: 'Chat Service',
      tech: 'MongoDB, Mongoose, Redis',
      description: 'Conversation CRUD, message thread persistence, and historical context caching.',
    },
    router: {
      title: 'LangGraph StateGraph & Intent Classifier',
      tech: 'LangGraph 1.4.7, LangChain 1.2.2, Groq',
      description: 'Parses incoming prompts, applies file-type overrides (PDF → RAG, Image → Analyzer), and activates the optimal agent.',
    },
    backends: {
      title: 'Distributed Data & Vector Backends',
      tech: 'Qdrant (Vector DB), Redis (Memory), MongoDB (Persistence), AWS S3 (Objects)',
      description: 'Multi-tier storage layer preserving chat histories, ephemeral vector embeddings, and generated artifacts.',
    },
  };

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0E0F16] p-5 sm:p-6 text-sm">
      {/* Top Controls Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#E05D38]" />
            <h5 className="font-bold text-white text-sm">
              AnkAI Microservices & Agent Routing Graph
            </h5>
          </div>
          <p className="text-xs text-[#8E929E] mt-0.5">
            5 isolated Docker microservices orchestrated via LangGraph StateGraph & SSE response pipeline
          </p>
        </div>

        {onOpenImageModal && (
          <button
            onClick={onOpenImageModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#181924] hover:bg-[#20222F] text-white border border-white/[0.1] transition-colors cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5 text-[#E05D38]" />
            <span>Open Blueprint</span>
          </button>
        )}
      </div>

      {/* Architecture Flow Visualizer */}
      <div className="py-5 overflow-x-auto">
        <div className="min-w-[680px] space-y-4">
          {/* Layer 1: Ingress & Core Microservices */}
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#717482]">
            Core Microservices Tier (AWS ECS)
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[
              { id: 'frontend', name: 'Frontend Client', sub: 'React 19 + SSE', icon: <Radio className="w-3.5 h-3.5 text-[#E05D38]" /> },
              { id: 'gateway', name: 'API Gateway', sub: 'Express 5 Proxy', icon: <Server className="w-3.5 h-3.5 text-[#E05D38]" /> },
              { id: 'auth', name: 'Auth & Billing', sub: 'JWT + Redis', icon: <Cpu className="w-3.5 h-3.5 text-[#E05D38]" /> },
              { id: 'chat', name: 'Chat Service', sub: 'MongoDB + Memory', icon: <Database className="w-3.5 h-3.5 text-[#E05D38]" /> },
            ].map((node) => (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedNode === node.id
                    ? 'border-[#E05D38] bg-[#E05D38]/10 text-white'
                    : 'border-white/[0.08] bg-[#14151C] text-[#C0C4D0] hover:border-white/[0.18]'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  {node.icon}
                  <span className="text-xs font-bold text-white">{node.name}</span>
                </div>
                <div className="text-[10px] font-mono text-[#8E929E]">{node.sub}</div>
              </button>
            ))}
          </div>

          {/* Layer 2: Orchestration & Intent Classification */}
          <div className="pt-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#717482]">
            LangGraph StateGraph & Intent Classifier
          </div>
          <div
            onClick={() => setSelectedNode('router')}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
              selectedNode === 'router'
                ? 'border-[#E05D38] bg-[#E05D38]/10'
                : 'border-white/[0.08] bg-[#14151C] hover:border-white/[0.18]'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E05D38]"></span>
                <span className="text-xs font-bold text-white">LangGraph StateGraph Router</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-[#A0A4B2]">
                  Groq LLM Intent Classifier
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#E05D38]">Click to inspect</span>
            </div>
          </div>

          {/* Layer 3: 8 Specialized Agents */}
          <div className="pt-2 text-[11px] font-mono font-bold uppercase tracking-wider text-[#717482]">
            8 Specialist Execution Agents (Parallel Dispatch)
          </div>
          <div className="grid grid-cols-4 gap-2.5">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="p-2.5 rounded-xl border border-white/[0.06] bg-[#12131A] hover:border-[#E05D38]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white">{agent.name}</span>
                </div>
                <div className="text-[10px] font-mono text-[#E05D38] mb-1">{agent.model}</div>
                <p className="text-[10px] text-[#8E929E] line-clamp-2 leading-relaxed">{agent.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Node Details Box */}
      {selectedNode && nodeDetails[selectedNode] && (
        <div className="mt-4 p-4 rounded-xl border border-white/[0.08] bg-[#14151C] space-y-1.5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white">
              {nodeDetails[selectedNode].title}
            </span>
            <span className="text-[10px] font-mono text-[#E05D38]">
              {nodeDetails[selectedNode].tech}
            </span>
          </div>
          <p className="text-xs text-[#8E929E] leading-relaxed">
            {nodeDetails[selectedNode].description}
          </p>
        </div>
      )}
    </div>
  );
};