import React from 'react';
import { Clock, AlertCircle, FileText, Users } from 'lucide-react';
import { Deal } from '../types';
import { cn } from '../lib/utils';

interface DealCardProps {
  key?: string;
  deal: Deal;
  onClick: (deal: Deal) => void;
}

export function DealCard({ deal, onClick }: DealCardProps) {
  const hasAlert = deal.tasks.some(t => t.status === 'alert');
  const progress = Math.round((deal.completedSteps / deal.totalSteps) * 100);
  
  return (
    <div 
      onClick={() => onClick(deal)}
      className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-900 transition-all cursor-pointer select-none"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors mb-1">
            {deal.address}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{deal.sellerName}</span>
          </div>
        </div>
        {hasAlert && (
          <div className="p-1.5 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
            <AlertCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0" strokeWidth={1.5} />
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">Current Task</p>
            <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-1.5 py-0.5 rounded">
              {progress}%
            </span>
          </div>
          <p className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate">{deal.currentStep}</p>
          
          <div className="mt-3 h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 dark:bg-indigo-600 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" strokeWidth={1.5} />
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                {deal.completedSteps}/{deal.totalSteps}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" strokeWidth={1.5} />
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">{deal.daysInStage}d</span>
            </div>
          </div>

          {deal.offersCount !== undefined && (
            <div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">{deal.offersCount} Offers</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
