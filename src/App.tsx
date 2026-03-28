import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { KanbanBoard } from './components/KanbanBoard';
import { DealDetail } from './components/DealDetail';
import { DashboardSummary } from './components/DashboardSummary';
import { VirtualStaging } from './components/VirtualStaging';
import { ListingView } from './components/ListingView';
import { DealsListView } from './components/DealsListView';
import { MOCK_DEALS } from './data/mockData';
import { Deal } from './types';
import { LayoutGrid, List } from 'lucide-react';

export default function App() {
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [activeView, setActiveView] = useState('dashboard');
  const [viewMode, setViewMode] = useState<'board' | 'list'>('board');

  const handleDealClick = (deal: Deal) => {
    setSelectedDeal(deal);
  };

  const handleBackToDashboard = () => {
    setSelectedDeal(null);
  };

  const renderView = () => {
    if (selectedDeal) {
      return <DealDetail deal={selectedDeal} onBack={handleBackToDashboard} />;
    }

    switch (activeView) {
      case 'dashboard':
      case 'deals':
        return (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-8 pt-8 bg-slate-50/50 dark:bg-slate-950/50">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Agent Dashboard</h2>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Real-time pipeline overview and task management.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1 shadow-sm">
                    <button 
                      onClick={() => setViewMode('board')}
                      className={`p-1.5 rounded-md transition-all ${viewMode === 'board' ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                      title="Board View"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                      title="List View"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">{MOCK_DEALS.length} Active Deals</span>
                  </div>
                </div>
              </div>
            </div>
            
            <DashboardSummary />
            
            <div className="px-8 mb-4">
              <div className="h-px bg-slate-200 dark:bg-slate-800 w-full" />
            </div>

            {viewMode === 'board' ? (
              <KanbanBoard onDealClick={handleDealClick} />
            ) : (
              <DealsListView deals={MOCK_DEALS} onDealClick={handleDealClick} />
            )}
          </div>
        );
      case 'staging':
        return <VirtualStaging />;
      case 'listings':
        return <ListingView />;
      default:
        return (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{activeView.charAt(0).toUpperCase() + activeView.slice(1)}</h2>
              <p className="text-slate-500 dark:text-slate-400">This section is currently under development.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 antialiased transition-colors">
      {/* Sidebar - Fixed */}
      <Sidebar activeView={activeView} onViewChange={setActiveView} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {!selectedDeal && <TopBar />}
        {renderView()}
      </main>
    </div>
  );
}
