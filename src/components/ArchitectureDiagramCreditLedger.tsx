import React, { useState } from 'react';
import { ShieldCheck, Activity } from 'lucide-react';

export const ArchitectureDiagramCreditLedger: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'training' | 'inference'>('training');

  const trainingSteps = [
    { step: '01', title: 'Applicant Dataset', tech: '32.5K consumer records', desc: 'Financial features: age, income, loan amount, intent, grade, credit history' },
    { step: '02', title: 'Data Validation & Preprocessing', tech: 'ColumnTransformer', desc: 'Outlier rejection, one-hot encoding, and StandardScaler normalisation' },
    { step: '03', title: 'Model Training & Class Imbalance', tech: 'XGBoost vs Logistic Reg', desc: 'Stratified 5-Fold CV with RandomizedSearchCV hyperparameter optimization' },
    { step: '04', title: 'Threshold & Calibration', tech: 'Platt Scaling (CalibratedClassifierCV)', desc: 'Optimized risk cutoff beyond default 0.5 to align probabilities with true defaults' },
    { step: '05', title: 'SHAP Explainability Engine', tech: 'TreeExplainer', desc: 'Global feature importance matrix & local additive Shapley contribution vectors' },
    { step: '06', title: 'Model Serialization', tech: 'Joblib (.pkl)', desc: 'Persisting trained estimator and calibrated threshold for zero-latency inference' },
  ];

  const inferenceSteps = [
    { step: '01', title: 'Browser Underwriting UI', tech: 'Interactive Dashboard', desc: 'Loan officer inputs applicant financials with live validation' },
    { step: '02', title: 'FastAPI REST Endpoint', tech: 'FastAPI + Uvicorn', desc: 'Asynchronous HTTP POST /predict with sub-100ms response budget' },
    { step: '03', title: 'Pydantic Schema Validation', tech: 'Pydantic BaseModel', desc: 'Strict runtime type verification & range constraints across all features' },
    { step: '04', title: 'In-Memory Model Scoring', tech: 'Calibrated predict_proba()', desc: 'Calculates calibrated probability against cost-optimized risk boundary' },
    { step: '05', title: 'SHAP Waterfall Attribution', tech: 'SHAP TreeExplainer', desc: 'Extracts exact additive impact per feature (e.g., +14% risk from loan_percent_income)' },
    { step: '06', title: 'Decision & Audit Report', tech: 'Risk Verdict + SHAP Graph', desc: 'Renders decision with visual explanation explaining why default risk was assigned' },
  ];

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0E0F16] p-5 sm:p-6 text-sm">
      {/* Header with View Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-3">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E05D38]" />
            <h5 className="font-bold text-white text-sm">
              End-to-End ML Pipeline & SHAP Explainability Architecture
            </h5>
          </div>
          <p className="text-xs text-[#8E929E] mt-0.5">
            Transparent credit underwriting: from stratified training to instantaneous local feature attributions
          </p>
        </div>

        {/* Tab switch */}
        <div className="inline-flex p-1 rounded-full bg-[#14151C] border border-white/[0.08]">
          <button
            onClick={() => setActiveTab('training')}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeTab === 'training'
                ? 'bg-[#E05D38] text-white shadow-sm'
                : 'text-[#8E929E] hover:text-white'
            }`}
          >
            Training & Validation Pipeline
          </button>
          <button
            onClick={() => setActiveTab('inference')}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
              activeTab === 'inference'
                ? 'bg-[#E05D38] text-white shadow-sm'
                : 'text-[#8E929E] hover:text-white'
            }`}
          >
            Real-Time Serving & SHAP
          </button>
        </div>
      </div>

      {/* Pipeline Steps Grid */}
      <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {(activeTab === 'training' ? trainingSteps : inferenceSteps).map((item) => (
          <div
            key={item.step}
            className="p-3.5 rounded-xl border border-white/[0.06] bg-[#14151C] hover:border-[#E05D38]/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.05]">
                <span className="text-[10px] font-mono font-bold text-[#E05D38]">
                  STAGE {item.step}
                </span>
                <span className="text-[10px] font-mono text-[#717482]">
                  {item.tech}
                </span>
              </div>
              <h6 className="font-bold text-xs text-white mb-1">
                {item.title}
              </h6>
              <p className="text-[11px] text-[#8E929E] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Explainability Rationale Callout */}
      <div className="p-4 rounded-xl border border-white/[0.08] bg-[#14151C] flex items-start gap-3">
        <Activity className="w-4 h-4 text-[#E05D38] shrink-0 mt-0.5" />
        <div className="text-xs text-[#A0A4B2] leading-relaxed">
          <strong className="text-white font-semibold">Why Model Explainability Matters in Credit Risk: </strong>
          Lenders cannot deploy "black-box" models due to adverse action notice requirements (FCRA/ECOA regulations). SHAP assigns an exact additive contribution ($\phi_i$) to each financial input, ensuring mathematical consistency and enabling actionable explanations for every loan applicant.
        </div>
      </div>
    </div>
  );
};