import React from 'react';
import { AlertCircle, CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';
import { MOCK_DEALS } from '../data/mockData';
import { cn } from '../lib/utils';

export function DashboardSummary() {
  const dealsWithAlerts = MOCK_DEALS.filter(d => d.tasks.some(t => t.status === 'alert'));
  const totalTasks = MOCK_DEALS.reduce((acc, d) => acc + d.totalSteps, 0);
  const completedTasks = MOCK_DEALS.reduce((acc, d) => acc + d.completedSteps, 0);
  const completionRate = Math.round((completedTasks / totalTasks) * 100);

  const stats = [
    {
      label: 'Critical Alerts',
      value: dealsWithAlerts.length,
      icon: AlertCircle,
      color: 'text-rose-600 dark:text-rose-400',
      bgColor: 'bg-rose-50 dark:bg-rose-900/20',
      borderColor: 'border-rose-100 dark:border-rose-900/30',
      description: 'Deals requiring immediate action'
    },
    {
      label: 'Pending Approval',
      value: 3,
      icon: FileText,
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      borderColor: 'border-amber-100 dark:border-amber-900/30',
      description: 'Documents waiting for review'
    },
    {
      label: 'Completion Rate',
      value: `${completionRate}%`,
      icon: CheckCircle2,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      borderColor: 'border-emerald-100 dark:border-emerald-900/30',
      description: 'Overall workflow progress'
    },
    {
      label: 'Avg. Days in Stage',
      value: '3.2d',
      icon: Clock,
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-100 dark:border-indigo-900/30',
      description: 'Current pipeline velocity'
    }
  ];

  return (
    <div className="px-8 py-6 grid grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div 
          key={stat.label}
          className={cn(
            "p-5 rounded-2xl border bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all cursor-default",
            stat.borderColor
          )}
        >
          <div className="flex items-start justify-between mb-3">
            <div className={cn("p-2 rounded-xl", stat.bgColor)}>
              <stat.icon className={cn("w-5 h-5", stat.color)} strokeWidth={1.5} />
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</p>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">{stat.label}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
