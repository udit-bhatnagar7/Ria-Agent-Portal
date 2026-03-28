import React, { useState } from 'react';
import { 
  Sparkles, 
  Upload, 
  Image as ImageIcon, 
  Maximize2, 
  Layout, 
  Palette, 
  Check, 
  ArrowRight,
  Loader2,
  ChevronRight,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const STYLES = [
  { id: 'modern', label: 'Modern', icon: Layout, description: 'Clean lines, neutral palette' },
  { id: 'scandinavian', label: 'Scandinavian', icon: Palette, description: 'Light woods, cozy textures' },
  { id: 'industrial', label: 'Industrial', icon: Maximize2, description: 'Raw materials, dark accents' },
  { id: 'luxury', label: 'Luxury', icon: Sparkles, description: 'High-end finishes, elegant' }
];

export function VirtualStaging() {
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 3000);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">AI Power Tools</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Virtual Staging</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Transform empty rooms into beautifully staged spaces instantly.</p>
          </div>
          
          <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 px-3 py-1.5">
                <div className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all",
                  step >= s ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                )}>
                  {step > s ? <Check className="w-3 h-3" /> : s}
                </div>
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-wider",
                  step === s ? "text-slate-900 dark:text-white" : "text-slate-400"
                )}>
                  {s === 1 ? 'Upload' : s === 2 ? 'Style' : 'Result'}
                </span>
                {s < 3 && <ChevronRight className="w-3 h-3 text-slate-300 dark:text-slate-700" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Workspace */}
          <div className="col-span-8 space-y-6">
            <div className="aspect-[16/10] bg-white dark:bg-slate-900 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-8 relative overflow-hidden group">
              <AnimatePresence mode="wait">
                {uploadedImage ? (
                  <motion.div 
                    key="image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0"
                  >
                    <img src={uploadedImage} alt="Room" className="w-full h-full object-cover" />
                    {isProcessing && (
                      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm flex flex-col items-center justify-center text-white">
                        <Loader2 className="w-10 h-10 animate-spin mb-4" />
                        <p className="text-lg font-bold tracking-tight">Staging your room...</p>
                        <p className="text-sm text-white/60 mt-1">AI is placing furniture and adjusting lighting</p>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="absolute top-6 right-6 px-4 py-2 bg-emerald-500 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                        <Check className="w-3 h-3" />
                        <span>Staging Complete</span>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div 
                    key="upload"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Upload Room Photo</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto">
                      For best results, use a high-resolution photo of an empty or sparsely furnished room.
                    </p>
                    <label className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all cursor-pointer shadow-lg shadow-indigo-200 dark:shadow-none inline-block">
                      <span>Select Image</span>
                      <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-6 flex gap-4">
              <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shrink-0 h-fit">
                <Info className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Pro Tip</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our AI works best with wide-angle shots taken from a corner. Make sure the room is well-lit for the most realistic furniture placement and shadow generation.
                </p>
              </div>
            </div>
          </div>

          {/* Controls Sidebar */}
          <div className="col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">Select Style</h2>
              
              <div className="space-y-3">
                {STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={cn(
                      "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left group",
                      selectedStyle === style.id 
                        ? "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-900/50" 
                        : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                    )}
                  >
                    <div className={cn(
                      "p-2.5 rounded-xl transition-colors",
                      selectedStyle === style.id 
                        ? "bg-indigo-600 text-white" 
                        : "bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                    )}>
                      <style.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-sm font-bold",
                        selectedStyle === style.id ? "text-indigo-900 dark:text-indigo-300" : "text-slate-700 dark:text-slate-400"
                      )}>
                        {style.label}
                      </h3>
                      <p className="text-[10px] text-slate-500 dark:text-slate-500 font-medium mt-0.5">{style.description}</p>
                    </div>
                    {selectedStyle === style.id && (
                      <div className="ml-auto w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                <button 
                  disabled={!uploadedImage || step === 3 || isProcessing}
                  onClick={handleProcess}
                  className="w-full py-4 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200 dark:shadow-none"
                >
                  {isProcessing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                  <span>{step === 3 ? 'Staging Complete' : 'Generate Staging'}</span>
                </button>
                
                {step === 3 && (
                  <button 
                    onClick={() => {
                      setStep(1);
                      setUploadedImage(null);
                    }}
                    className="w-full mt-3 py-3 text-slate-500 dark:text-slate-400 text-xs font-bold hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                  >
                    Start Over
                  </button>
                )}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Recent Staging</h2>
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden relative group cursor-pointer">
                    <img src={`https://picsum.photos/seed/room-${i}/200/200`} alt="Recent" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
