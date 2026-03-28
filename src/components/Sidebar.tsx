import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Home, 
  ArrowRightLeft, 
  CheckSquare, 
  MessageSquare, 
  FileText, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Building2,
  Copy,
  Truck,
  Link as LinkIcon,
  CloudSun,
  BarChart3,
  Megaphone,
  Sparkles
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { MagicLinkDialog } from './MagicLinkDialog';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMagicLinkOpen, setIsMagicLinkOpen] = useState(false);

  const NAV_GROUPS = [
    {
      group: 'Workspace',
      items: [
        { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
        { icon: ArrowRightLeft, label: 'Active Deals', id: 'deals' },
        { icon: CheckSquare, label: 'Tasks', id: 'tasks' },
        { icon: FileText, label: 'Documents', id: 'documents' },
        { icon: Calendar, label: 'Calendar', id: 'calendar' },
      ]
    },
    {
      group: 'Inventory',
      items: [
        { icon: Megaphone, label: 'Listings', id: 'listings' },
        { icon: Building2, label: 'All Properties', id: 'properties' },
        { icon: Sparkles, label: 'Virtual Staging', id: 'staging' },
        { icon: Copy, label: 'Templates', id: 'templates' },
      ]
    },
    {
      group: 'Network',
      items: [
        { icon: Users, label: 'Sellers', id: 'sellers' },
        { icon: Truck, label: 'Vendors', id: 'vendors' },
      ]
    },
    {
      group: 'Tools',
      items: [
        { icon: LinkIcon, label: 'Send Magic Link', id: 'magic-link', action: () => setIsMagicLinkOpen(true) },
        { icon: CloudSun, label: 'Weather', id: 'weather' },
        { icon: BarChart3, label: 'Analytics', id: 'analytics' },
      ]
    },
    {
      group: 'System',
      items: [
        { icon: Settings, label: 'Settings', id: 'settings' },
      ]
    }
  ];

  return (
    <>
      <motion.aside 
        initial={false}
        animate={{ width: isCollapsed ? 80 : 256 }}
        className="border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-screen flex flex-col sticky top-0 z-30 group transition-colors"
      >
        <div className={cn(
          "p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between",
          isCollapsed && "px-4"
        )}>
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200 dark:shadow-none">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            {!isCollapsed && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-xl tracking-tight text-slate-900 dark:text-white whitespace-nowrap"
              >
                RIA
              </motion.span>
            )}
          </div>
          
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              "p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md text-slate-400 transition-all",
              isCollapsed && "absolute -right-3 top-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm z-40"
            )}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" strokeWidth={1.5} /> : <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />}
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-6 overflow-y-auto overflow-x-hidden scrollbar-hide">
          {NAV_GROUPS.map((group) => (
            <div key={group.group} className="space-y-1">
              {!isCollapsed && (
                <p className="px-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
                  {group.group}
                </p>
              )}
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => item.action ? item.action() : onViewChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all group/item",
                    activeView === item.id 
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400" 
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white",
                    isCollapsed && "justify-center px-0"
                  )}
                  title={isCollapsed ? item.label : undefined}
                >
                  <item.icon className={cn(
                    "w-5 h-5 shrink-0", 
                    activeView === item.id ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500 group-hover/item:text-slate-600 dark:group-hover/item:text-slate-300"
                  )} strokeWidth={1.5} />
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="truncate"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </nav>
        
        <div className={cn(
          "p-4 border-t border-slate-100 dark:border-slate-800",
          isCollapsed && "px-2"
        )}>
          <div className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer",
            isCollapsed && "justify-center px-0"
          )}>
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">
              UB
            </div>
            {!isCollapsed && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 min-w-0"
              >
                <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Udit Bhatnagar</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Senior Agent</p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.aside>

      <MagicLinkDialog isOpen={isMagicLinkOpen} onClose={() => setIsMagicLinkOpen(false)} />
    </>
  );
}
