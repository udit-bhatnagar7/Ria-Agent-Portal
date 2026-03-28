import React from 'react';
import { 
  ArrowLeft, 
  Edit3, 
  Send, 
  FileText, 
  CheckCircle2, 
  Circle, 
  AlertCircle, 
  MessageSquare, 
  Sparkles, 
  ChevronRight,
  Clock,
  DollarSign,
  Calendar
} from 'lucide-react';
import { Deal, Task, MessageThread, AIInsight } from '../types';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface DealDetailProps {
  deal: Deal;
  onBack: () => void;
}

export function DealDetail({ deal, onBack }: DealDetailProps) {
  const STAGES = ['Intake', 'Photos', 'MLS', 'Showings', 'Offers', 'Closing'];
  const currentStageIndex = 3; // Mocking current stage index

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex-1 overflow-y-auto bg-white dark:bg-slate-950"
    >
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 px-8 py-6 sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-20">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors text-slate-500 dark:text-slate-400"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider rounded-md">
              {deal.stage}
            </span>
            <span className="text-slate-400 dark:text-slate-600 font-medium">/</span>
            <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">{deal.sellerName}</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">{deal.address}</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-slate-400 dark:text-slate-500" strokeWidth={1.5} />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{deal.listPrice}</span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">List Price</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-slate-400 dark:text-slate-500" strokeWidth={1.5} />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{deal.offersCount || 0}</span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">Offers</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500" strokeWidth={1.5} />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{deal.timeline}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              <Edit3 className="w-4 h-4" strokeWidth={1.5} />
              <span>Edit Listing</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              <FileText className="w-4 h-4" strokeWidth={1.5} />
              <span>View Documents</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200 dark:shadow-none">
              <Send className="w-4 h-4" strokeWidth={1.5} />
              <span>Send to Seller</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto space-y-8">
        {/* Section A: Progress Tracker */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Progress Tracker</h2>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{deal.completedSteps} of {deal.totalSteps} steps complete</span>
          </div>
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 right-0 h-0.5 bg-slate-100 dark:bg-slate-900 top-1/2 -translate-y-1/2 z-0" />
            <div 
              className="absolute left-0 h-0.5 bg-indigo-500 top-1/2 -translate-y-1/2 z-0 transition-all duration-500" 
              style={{ width: `${(currentStageIndex / (STAGES.length - 1)) * 100}%` }}
            />
            
            {STAGES.map((s, i) => {
              const isCompleted = i < currentStageIndex;
              const isCurrent = i === currentStageIndex;
              
              return (
                <div key={s} className="relative z-10 flex flex-col items-center">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    isCompleted ? "bg-indigo-600 border-indigo-600 text-white" : 
                    isCurrent ? "bg-white dark:bg-slate-900 border-indigo-600 text-indigo-600 shadow-lg shadow-indigo-100 dark:shadow-none" : 
                    "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700"
                  )}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} /> : <span className="text-xs font-bold">{i + 1}</span>}
                  </div>
                  <span className={cn(
                    "absolute top-10 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap",
                    isCurrent ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-600"
                  )}>
                    {s}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <div className="grid grid-cols-12 gap-8 pt-8">
          {/* Section B: Tasks */}
          <div className="col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Active Workflow</h2>
              <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">Add Task</button>
            </div>
            
            <div className="space-y-3">
              {deal.tasks.map((task) => (
                <div 
                  key={task.id}
                  className="group flex items-start gap-4 p-4 border border-slate-100 dark:border-slate-900 rounded-xl hover:border-slate-200 dark:hover:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-all"
                >
                  <div className="mt-0.5">
                    {task.status === 'completed' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
                    ) : task.status === 'alert' ? (
                      <AlertCircle className="w-5 h-5 text-rose-500" strokeWidth={1.5} />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 dark:text-slate-700" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={cn(
                        "text-sm font-bold",
                        task.status === 'completed' ? "text-slate-400 dark:text-slate-600 line-through" : "text-slate-800 dark:text-slate-200"
                      )}>
                        {task.title}
                      </h3>
                      <button className="opacity-0 group-hover:opacity-100 px-2 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-[10px] font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                        Action
                      </button>
                    </div>
                    {task.description && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{task.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section C & D: Interaction & Insights */}
          <div className="col-span-5 space-y-8">
            {/* AI Insights */}
            <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" strokeWidth={1.5} />
                <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">AI Insights</h2>
              </div>
              <div className="space-y-4">
                {deal.insights.map((insight) => (
                  <div key={insight.id} className="flex gap-3">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full mt-1.5 shrink-0",
                      insight.type === 'warning' ? "bg-rose-500" : 
                      insight.type === 'success' ? "bg-emerald-500" : "bg-indigo-500"
                    )} />
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed">{insight.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Seller Interaction */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Seller Threads</h2>
                <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md transition-colors">
                  <PlusIcon className="w-4 h-4 text-slate-400 dark:text-slate-600" strokeWidth={1.5} />
                </button>
              </div>
              
              <div className="space-y-2">
                {deal.threads.map((thread) => (
                  <button 
                    key={thread.id}
                    className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl hover:border-indigo-100 dark:hover:border-indigo-900 hover:bg-indigo-50/30 dark:hover:bg-indigo-900/20 transition-all text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-slate-400 dark:text-slate-600" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">{thread.title}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[180px]">{thread.lastMessage}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">{thread.timestamp}</span>
                      <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-700" strokeWidth={1.5} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PlusIcon({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M12 4v16m8-8H4" />
    </svg>
  );
}
