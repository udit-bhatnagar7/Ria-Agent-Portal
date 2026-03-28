import React from 'react';
import { Deal, DealStage } from '../types';
import { DealCard } from './DealCard';
import { MOCK_DEALS } from '../data/mockData';

const STAGES = [
  { id: 'Pre-Listing', label: 'Pre-Listing', description: 'Onboarding & Prep' },
  { id: 'Active', label: 'Active Listing', description: 'Live & Showings' },
  { id: 'Under Contract', label: 'Under Contract → Closing', description: 'Contract to Final Steps' }
];

interface KanbanBoardProps {
  onDealClick: (deal: Deal) => void;
}

export function KanbanBoard({ onDealClick }: KanbanBoardProps) {
  return (
    <div className="flex-1 overflow-x-auto p-8 pt-0 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="flex gap-8 h-full min-w-max">
        {STAGES.map((stage) => {
          const stageDeals = MOCK_DEALS.filter(d => {
            if (stage.id === 'Under Contract') {
              return d.stage === 'Under Contract' || d.stage === 'Closing';
            }
            return d.stage === stage.id;
          });
          
          return (
            <div key={stage.id} className="w-80 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6 px-1">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">{stage.label}</h2>
                    <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-[10px] font-bold">
                      {stageDeals.length}
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{stage.description}</p>
                </div>
              </div>
              
              <div className="flex-1 space-y-5 overflow-y-auto pb-8 scrollbar-hide">
                {stageDeals.map((deal) => (
                  <DealCard 
                    key={deal.id} 
                    deal={deal} 
                    onClick={onDealClick} 
                  />
                ))}
                
                {stageDeals.length === 0 && (
                  <div className="h-32 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center bg-white/50 dark:bg-slate-900/50">
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">No deals in this stage</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
