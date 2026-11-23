import React, { useState } from 'react';
import { Layers, Cpu, Server, Database, ArrowRight, Radio, ZoomIn } from 'lucide-react';

interface ArchitectureDiagramAnkAIProps {
  onOpenImageModal?: () => void;
}

export const ArchitectureDiagramAnkAI: React.FC<ArchitectureDiagramAnkAIProps> = ({
  onOpenImageModal,
}) => {
  const [selectedNode, setSelectedNode] = useState<string | null>('router');

  const agents = [
    { id: 'chat', name: 'Chat Agent', model: 'Groq (GPT-OSS 120B)', role: 'General conversation with 20-message memory window', provider: 'Groq & Redis' },
    { id: 'search', name: 'Search Agent', model: 'Tavily + Groq', role: 'Live web scraping (5 queries + images) & synthesis', provider: 'Tavily API' },
    { id: 'coder', name: 'Coder Agent', model: 'DeepSeek-V3', role: 'Multi-file code generation with JSON AST output', provider: 'OpenRouter' },
    { id: 'pdf', name: 'PDF Agent', model: 'Groq + PDFKit', role: 'A4 formatted PDF document synthesis & S3 upload', provider: 'AWS S3' },
    { id: 'ppt', name: 'PPT Agent', model: 'Groq + PptxGenJS', role: '16:9 presentation slide deck generation & storage', provider: 'AWS S3' },
    { id: 'vision', name: 'Vision Agent', model: 'Pollinations AI', role: 'Prompt engineering & high-fidelity image synthesis', provider: 'AWS S3' },
    { id: 'rag', name: 'PDF RAG Agent', model: 'Gemini + Groq', role: 'Ephemeral Qdrant collections with chunk retrieval', provider: 'Qdrant Vector DB' },
    { id: 'image-analyzer', name: 'Image Analyzer', model: 'Gemini 2.5 Flash', role: 'Multimodal OCR, diagram decoding & inspection', provider: 'Gemini 2.5' },
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
    <div className="rounded-xl border border-[#E5E7EB] dark:border-[#232936] bg-[#FAFAFC] dark:bg-[#0D111A] p-5 sm:p-6 text-sm">
      {/* Top Controls Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E5E7EB] dark:border-[#232936] gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h4 className="font-semibold text-[#171717] dark:text-white">
              System Architecture & Orchestration Flow
            </h4>
          </div>
          <p className="text-xs text-[#666666] dark:text-[#9CA3AF] mt-0.5">
            Interactive pipeline showing user request propagation, LangGraph routing, and SSE response streaming
          </p>
        </div>

        {onOpenImageModal && (
          <button
            onClick={onOpenImageModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white dark:bg-[#161B26] border border-[#E5E7EB] dark:border-[#2D3748] text-[#171717] dark:text-[#E2E8F0] hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-2xs cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>View High-Res Blueprint</span>
          </button>
        )}
      </div>

      {/* Interactive Architecture Flow Diagram */}
      <div className="mt-6 space-y-6">
        {/* Stage 1: Client & Ingress */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#888888] dark:text-[#718096] mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Ingress & API Gateway Layer
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div
              onClick={() => setSelectedNode('frontend')}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                selectedNode === 'frontend'
                  ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/20 text-blue-950 dark:text-blue-200 shadow-xs'
                  : 'border-[#E5E7EB] dark:border-[#232936] bg-white dark:bg-[#121622] hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold mb-1">
                <span>React 19 Frontend</span>
                <Radio className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-xs text-[#666666] dark:text-[#9CA3AF]">
                Redux Toolkit · Monaco Editor · SSE Listener
              </p>
            </div>

            <div
              onClick={() => setSelectedNode('gateway')}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                selectedNode === 'gateway'
                  ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/20 text-blue-950 dark:text-blue-200 shadow-xs'
                  : 'border-[#E5E7EB] dark:border-[#232936] bg-white dark:bg-[#121622] hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold mb-1">
                <span>API Gateway</span>
                <Server className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-xs text-[#666666] dark:text-[#9CA3AF]">
                Express 5 · Reverse Proxy · Rate Limiter
              </p>
            </div>

            <div
              onClick={() => setSelectedNode('auth')}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                selectedNode === 'auth'
                  ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/20 text-blue-950 dark:text-blue-200 shadow-xs'
                  : 'border-[#E5E7EB] dark:border-[#232936] bg-white dark:bg-[#121622] hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold mb-1">
                <span>Auth & Billing</span>
                <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-xs text-[#666666] dark:text-[#9CA3AF]">
                Firebase · Redis Sessions · Razorpay
              </p>
            </div>

            <div
              onClick={() => setSelectedNode('chat')}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                selectedNode === 'chat'
                  ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/20 text-blue-950 dark:text-blue-200 shadow-xs'
                  : 'border-[#E5E7EB] dark:border-[#232936] bg-white dark:bg-[#121622] hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold mb-1">
                <span>Chat Service</span>
                <Database className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-xs text-[#666666] dark:text-[#9CA3AF]">
                MongoDB Persistence · Thread History
              </p>
            </div>
          </div>
        </div>

        {/* Streaming connector */}
        <div className="flex items-center justify-center my-1 text-xs text-[#666666] dark:text-[#9CA3AF] gap-2 font-mono">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CBD5E1] dark:via-[#334155] to-transparent"></span>
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white dark:bg-[#161B26] border border-[#E5E7EB] dark:border-[#2D3748] text-[11px]">
            <span>Payload Dispatched</span>
            <ArrowRight className="w-3 h-3 text-blue-500" />
            <span className="text-blue-600 dark:text-blue-400 font-medium">SSE Stream Returns</span>
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CBD5E1] dark:via-[#334155] to-transparent"></span>
        </div>

        {/* Stage 2: LangGraph Orchestrator */}
        <div>
          <div
            onClick={() => setSelectedNode('router')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              selectedNode === 'router'
                ? 'border-blue-600 bg-blue-50/40 dark:bg-blue-950/30 shadow-xs'
                : 'border-[#E5E7EB] dark:border-[#232936] bg-white dark:bg-[#121622] hover:border-gray-400'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                <span className="font-semibold text-[#171717] dark:text-white">
                  LangGraph Orchestrator & Intent Classification Engine
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300">
                  StateGraph
                </span>
              </div>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Routes via Intent & File-Type Overrides
              </span>
            </div>
            <p className="text-xs text-[#666666] dark:text-[#9CA3AF]">
              Receives messages, inspects attachments (PDFs routed to RAG, images to Vision/Analyzer), and determines whether single-agent execution or multi-agent chaining (e.g. Tavily Search → Groq Synthesis) is required.
            </p>
          </div>
        </div>

        {/* Stage 3: Eight Specialized AI Agents */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#888888] dark:text-[#718096] mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>8 Specialized AI Agents (Click to inspect)</span>
            </div>
            <span className="text-[11px] font-normal lowercase text-[#999999]">
              Specialized LLMs & Tools
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {agents.map((agent) => (
              <div
                key={agent.id}
                onClick={() => setSelectedNode(agent.id)}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  selectedNode === agent.id
                    ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 text-[#171717] dark:text-white shadow-xs'
                    : 'border-[#E5E7EB] dark:border-[#232936] bg-white dark:bg-[#121622] hover:border-gray-400 dark:hover:border-gray-600'
                }`}
              >
                <div className="text-xs font-semibold text-[#171717] dark:text-white truncate">
                  {agent.name}
                </div>
                <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 mt-0.5 truncate">
                  {agent.model}
                </div>
                <div className="text-[11px] text-[#666666] dark:text-[#9CA3AF] mt-1 line-clamp-2">
                  {agent.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stage 4: Storage, Memory & Backends */}
        <div>
          <div
            onClick={() => setSelectedNode('backends')}
            className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
              selectedNode === 'backends'
                ? 'border-blue-600 bg-blue-50/40 dark:bg-blue-950/30 shadow-xs'
                : 'border-[#E5E7EB] dark:border-[#232936] bg-white dark:bg-[#121622] hover:border-gray-400'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Integrated Backends, Vector Stores & Cloud Services</span>
              </div>
              <span className="text-[11px] font-mono text-gray-500">Qdrant · Redis · MongoDB · AWS S3</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2 rounded bg-gray-50 dark:bg-[#161B26] border border-gray-100 dark:border-gray-800">
                <span className="font-semibold block text-red-600 dark:text-red-400">Qdrant</span>
                <span className="text-[11px] text-[#666]">Ephemeral PDF Vector Collections</span>
              </div>
              <div className="p-2 rounded bg-gray-50 dark:bg-[#161B26] border border-gray-100 dark:border-gray-800">
                <span className="font-semibold block text-amber-600 dark:text-amber-400">Redis</span>
                <span className="text-[11px] text-[#666]">Conversational Memory & State</span>
              </div>
              <div className="p-2 rounded bg-gray-50 dark:bg-[#161B26] border border-gray-100 dark:border-gray-800">
                <span className="font-semibold block text-green-600 dark:text-green-400">MongoDB</span>
                <span className="text-[11px] text-[#666]">Message & User Persistence</span>
              </div>
              <div className="p-2 rounded bg-gray-50 dark:bg-[#161B26] border border-gray-100 dark:border-gray-800">
                <span className="font-semibold block text-orange-600 dark:text-orange-400">AWS S3 & ECS</span>
                <span className="text-[11px] text-[#666]">Artifacts Storage & Container Pods</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Detail Panel */}
        {selectedNode && (
          <div className="p-4 rounded-lg bg-blue-50/40 dark:bg-[#141A26] border border-blue-200/80 dark:border-blue-900/50 text-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-blue-950 dark:text-blue-200">
                {agents.find((a) => a.id === selectedNode)?.name ||
                  nodeDetails[selectedNode]?.title ||
                  'Component Detail'}
              </span>
              <span className="font-mono text-[11px] text-blue-700 dark:text-blue-400">
                {agents.find((a) => a.id === selectedNode)?.model ||
                  nodeDetails[selectedNode]?.tech}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {agents.find((a) => a.id === selectedNode)?.role
                ? `${agents.find((a) => a.id === selectedNode)?.role}. Connected to ${agents.find((a) => a.id === selectedNode)?.provider}. Streams output back to client via Server-Sent Events.`
                : nodeDetails[selectedNode]?.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
