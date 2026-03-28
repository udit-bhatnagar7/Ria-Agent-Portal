import React from 'react';
import { 
  MoreVertical, 
  MapPin, 
  Calendar, 
  User, 
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Deal } from '../types';

interface DealsListViewProps {
  deals: Deal[];
  onDealClick: (deal: Deal) => void;
}

export function DealsListView({ deals, onDealClick }: DealsListViewProps) {
  return (
    <div className="flex-1 overflow-y-auto px-8 pb-8">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm transition-colors">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Property & Seller</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Stage</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Price</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Progress</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {deals.map((deal) => (
              <motion.tr 
                key={deal.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => onDealClick(deal)}
                className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-slate-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{deal.address}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <User className="w-3 h-3 text-slate-400" />
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{deal.sellerName}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      "w-2 h-2 rounded-full",
                      deal.stage === 'Pre-Listing' ? "bg-amber-400" :
                      deal.stage === 'Active' ? "bg-indigo-500" :
                      deal.stage === 'Under Contract' ? "bg-emerald-500" :
                      "bg-slate-400"
                    )} />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{deal.stage}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white text-sm">
                    <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                    {deal.listPrice}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="w-32">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{Math.round((deal.completedSteps / deal.totalSteps) * 100)}% Complete</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(deal.completedSteps / deal.totalSteps) * 100}%` }}
                        className="h-full bg-indigo-600 rounded-full"
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg transition-all">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
