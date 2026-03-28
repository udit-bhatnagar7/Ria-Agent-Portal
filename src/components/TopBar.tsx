import React, { useState } from 'react';
import { Search, Plus, Filter, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';

export function TopBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 flex items-center justify-between sticky top-0 z-10 transition-colors">
      <div className="flex items-center gap-8 flex-1">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Deals</h1>
        
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" strokeWidth={1.5} />
          <input 
            type="text" 
            placeholder="Search property or seller..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 border-r border-slate-200 dark:border-slate-800 pr-4 mr-1">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors">
            <Filter className="w-4 h-4" strokeWidth={1.5} />
            <span>Filters</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md transition-colors">
            <span>Stage</span>
            <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        <ThemeToggle />
        
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm shadow-indigo-200 dark:shadow-none">
          <Plus className="w-4 h-4" strokeWidth={1.5} />
          <span>New Deal</span>
        </button>

        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 ml-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0 group-hover:ring-2 group-hover:ring-indigo-500/20 transition-all">
              UB
            </div>
            <ChevronDown className={isProfileOpen ? "w-4 h-4 text-slate-400 rotate-180 transition-transform" : "w-4 h-4 text-slate-400 transition-transform"} strokeWidth={1.5} />
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsProfileOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 overflow-hidden"
                >
                  <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Udit Bhatnagar</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">udit@riacare.com</p>
                  </div>
                  <div className="p-2">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors">
                      <User className="w-4 h-4" strokeWidth={1.5} />
                      <span>My Profile</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors">
                      <Settings className="w-4 h-4" strokeWidth={1.5} />
                      <span>Account Settings</span>
                    </button>
                  </div>
                  <div className="p-2 border-t border-slate-100 dark:border-slate-800">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-colors">
                      <LogOut className="w-4 h-4" strokeWidth={1.5} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
