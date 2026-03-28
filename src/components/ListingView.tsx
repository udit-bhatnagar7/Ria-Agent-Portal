import React from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  MapPin, 
  Bed, 
  Bath, 
  Square,
  Tag,
  Eye,
  MessageSquare,
  Share2,
  LayoutGrid,
  List
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const LISTINGS = [
  {
    id: '1',
    address: '123 Ocean View Dr, Malibu, CA',
    price: '$4,250,000',
    status: 'Active',
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    views: 1240,
    inquiries: 18,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    type: 'Single Family'
  },
  {
    id: '2',
    address: '456 Mountain Pass, Aspen, CO',
    price: '$8,900,000',
    status: 'Coming Soon',
    beds: 6,
    baths: 5,
    sqft: 5800,
    views: 850,
    inquiries: 12,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
    type: 'Luxury Villa'
  },
  {
    id: '3',
    address: '789 Urban Loft, New York, NY',
    price: '$1,850,000',
    status: 'Active',
    beds: 2,
    baths: 2,
    sqft: 1450,
    views: 2100,
    inquiries: 45,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    type: 'Condo'
  },
  {
    id: '4',
    address: '101 Pine St, Seattle, WA',
    price: '$950,000',
    status: 'Pending',
    beds: 3,
    baths: 2,
    sqft: 1800,
    views: 620,
    inquiries: 8,
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800',
    type: 'Townhouse'
  }
];

export function ListingView() {
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="px-8 pt-8 pb-4 bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Property Listings</h2>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Manage and track your active property inventory.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1 shadow-sm">
              <button 
                onClick={() => setViewMode('grid')}
                className={cn(
                  "p-1.5 rounded-md transition-all",
                  viewMode === 'grid' ? "bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                )}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={cn(
                  "p-1.5 rounded-md transition-all",
                  viewMode === 'list' ? "bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                )}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
              <Plus className="w-4 h-4" />
              New Listing
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by address, price, or status..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all dark:text-white"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {LISTINGS.map((listing) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={listing.image} 
                    alt={listing.address}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm",
                      listing.status === 'Active' ? "bg-emerald-500 text-white" :
                      listing.status === 'Coming Soon' ? "bg-amber-500 text-white" :
                      "bg-slate-500 text-white"
                    )}>
                      {listing.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="p-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">{listing.price}</h3>
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 mt-1">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <p className="text-xs truncate">{listing.address}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{listing.type}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100 dark:border-slate-800 my-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                        <Bed className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Beds</span>
                      </div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{listing.beds}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                        <Bath className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Baths</span>
                      </div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{listing.baths}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                        <Square className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Sqft</span>
                      </div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{listing.sqft.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500" title="Views">
                        <Eye className="w-4 h-4" />
                        <span className="text-xs font-medium">{listing.views}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500" title="Inquiries">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-xs font-medium">{listing.inquiries}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm transition-colors">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Property</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Price</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Stats</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {LISTINGS.map((listing) => (
                  <motion.tr 
                    key={listing.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
                          <img src={listing.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{listing.address}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{listing.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        listing.status === 'Active' ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                        listing.status === 'Coming Soon' ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                        "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
                      )}>
                        {listing.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{listing.price}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5" />
                          <span className="text-xs">{listing.beds}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="w-3.5 h-3.5" />
                          <span className="text-xs">{listing.baths}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Square className="w-3.5 h-3.5" />
                          <span className="text-xs">{listing.sqft.toLocaleString()}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all">
                          <Eye className="w-4 h-4" />
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
        )}
      </div>
    </div>
  );
}
