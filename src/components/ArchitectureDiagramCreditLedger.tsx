import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

export const ArchitectureDiagramCreditLedger: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'training' | 'inference'>('training');

  const trainingSteps = [
    { step: '01', title: 'Applicant Dataset', tech: '32.5K consumer records', desc: 'Raw financial features: age, income, loan amount, intent, grade, history' },
    { step: '02', title: 'Data Validation & EDA', tech: 'Pandas & NumPy', desc: 'Outlier rejection, missing value imputation, schema assertions' },
    { step: '03', title: 'Preprocessing', tech: 'ColumnTransformer', desc: 'One-hot encoding for categoricals, StandardScaler for numeric vectors' },
    { step: '04', title: 'Model Training', tech: 'XGBoost vs Logistic Reg', desc: 'Comparison on ROC-AUC, scale_pos_weight for class imbalance' },
    { step: '05', title: '5-Fold Cross-Validation', tech: 'StratifiedKFold', desc: 'RandomizedSearchCV parameter sweep across depth, learning rate, subsample' },
    { step: '06', title: 'Threshold Tuning', tech: 'Precision-Recall Curve', desc: 'Optimal cutoff discovery optimizing cost-weighted risk (beyond default 0.5)' },
    { step: '07', title: 'Probability Calibration', tech: 'CalibratedClassifierCV', desc: 'Platt scaling to align model probabilities with true historical default rates' },
    { step: '08', title: 'SHAP Explainability', tech: 'TreeExplainer', desc: 'Global feature importance & local Shapley contribution calculations' },
    { step: '09', title: 'Model Serialization', tech: 'Joblib (.pkl)', desc: 'Persisting trained estimator and calibrated threshold for zero-latency loading' },
  ];

  const inferenceSteps = [
    { step: '01', title: 'Browser Underwriting UI', tech: 'HTML5, CSS3, JS', desc: 'Loan officer inputs applicant financials with live input validation' },
    { step: '02', title: 'FastAPI REST Endpoint', tech: 'FastAPI + Uvicorn', desc: 'Asynchronous HTTP POST /predict with low latency serving' },
    { step: '03', title: 'Pydantic Schema', tech: 'Pydantic BaseModel', desc: 'Strict runtime type checking & range constraints on all 11 features' },
    { step: '04', title: 'Trained Model Serving', tech: 'Joblib loaded in memory', desc: 'Fast inference execution: calibrated predict_proba() computation' },
    { step: '05', title: 'Risk Probability & Cutoff', tech: 'Optimized Threshold', desc: 'Evaluates probability against calibrated boundary (e.g. 35% default cutoff)' },
    { step: '06', title: 'SHAP Waterfall Engine', tech: 'SHAP TreeExplainer', desc: 'Extracts exact feature impact (e.g., +14% risk from loan_percent_income)' },
    { step: '07', title: 'Results Dashboard', tech: 'Animated Gauge & Stamp', desc: 'Renders verdict ("LOW RISK" / "HIGH RISK"), probability gauge & SHAP breakdown' },
  ];

  return (
    <div className="rounded-xl border border-[#E5E7EB] dark:border-[#232936] bg-[#FAFAFC] dark:bg-[#0D111A] p-5 sm:p-6 text-sm">
      {/* Header with View Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E5E7EB] dark:border-[#232936] gap-3">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <h4 className="font-semibold text-[#171717] dark:text-white">
              End-to-End ML Pipeline & Explainability Engine
            </h4>
          </div>
          <p className="text-xs text-[#666666] dark:text-[#9CA3AF] mt-0.5">
            Transparent credit underwriting pipeline from raw data preprocessing to instantaneous SHAP attribution
          </p>
        </div>

        {/* Tab switch */}
        <div className="inline-flex p-1 rounded-lg bg-gray-100 dark:bg-[#161B26] border border-[#E5E7EB] dark:border-[#2D3748]">
          <button
            onClick={() => setActiveTab('training')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeTab === 'training'
                ? 'bg-white dark:bg-[#202736] text-[#171717] dark:text-white shadow-xs'
                : 'text-[#666666] dark:text-[#9CA3AF] hover:text-[#171717]'
            }`}
          >
            Training Pipeline (9 Stages)
          </button>
          <button
            onClick={() => setActiveTab('inference')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
              activeTab === 'inference'
                ? 'bg-white dark:bg-[#202736] text-[#171717] dark:text-white shadow-xs'
                : 'text-[#666666] dark:text-[#9CA3AF] hover:text-[#171717]'
            }`}
          >
            Real-Time Inference Flow (7 Stages)
          </button>
        </div>
      </div>

      {/* Pipeline Steps Grid */}
      <div className="mt-6">
        {activeTab === 'training' ? (
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#888888] dark:text-[#718096] mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Training, Calibration & Serialization Pipeline
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {trainingSteps.map((item) => (
                <div
                  key={item.step}
                  className="p-3.5 rounded-lg border border-[#E5E7EB] dark:border-[#232936] bg-white dark:bg-[#121622] hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">
                      Stage {item.step}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                      {item.tech}
                    </span>
                  </div>
                  <div className="font-semibold text-xs text-[#171717] dark:text-white">
                    {item.title}
                  </div>
                  <p className="text-[11px] text-[#666666] dark:text-[#9CA3AF] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#888888] dark:text-[#718096] mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              FastAPI Sub-Second Underwriting Inference Flow
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {inferenceSteps.map((item) => (
                <div
                  key={item.step}
                  className="p-3.5 rounded-lg border border-[#E5E7EB] dark:border-[#232936] bg-white dark:bg-[#121622] hover:border-emerald-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      Phase {item.step}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                      {item.tech}
                    </span>
                  </div>
                  <div className="font-semibold text-xs text-[#171717] dark:text-white">
                    {item.title}
                  </div>
                  <p className="text-[11px] text-[#666666] dark:text-[#9CA3AF] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Regulatory & Engineering Rationale Callout */}
      <div className="mt-6 p-4 rounded-xl bg-amber-50/60 dark:bg-[#181510] border border-amber-200/80 dark:border-amber-900/40 text-xs text-amber-950 dark:text-amber-200">
        <div className="flex items-center gap-2 font-semibold mb-1.5 text-amber-900 dark:text-amber-300">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>Why Model Explainability Matters in Credit Risk Underwriting</span>
        </div>
        <p className="leading-relaxed text-amber-900/90 dark:text-amber-200/90">
          Traditional credit scoring models operate as opaque black boxes. In regulated consumer lending, federal mandates (such as the Fair Credit Reporting Act and Equal Credit Opportunity Act) require institutional lenders to furnish adverse action notices that explicitly justify credit denials. Furthermore, explainability is the first line of defense against algorithmic discrimination, dataset bias, and feature colinearity. By integrating SHAP (SHapley Additive exPlanations), every score is accompanied by additive, game-theoretically grounded feature attributions, transforming complex XGBoost ensembles into transparent, auditable decision engines.
        </p>
      </div>
    </div>
  );
};
