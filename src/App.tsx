import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  CalendarMinus, 
  Briefcase, 
  ShieldCheck,
  TrendingUp,
  Award,
  Video,
  Clock,
  LayoutGrid,
  CheckCircle2,
  Crown,
  AlertTriangle,
  Target,
  Camera,
  IndianRupee,
  Share2,
  PieChart,
  Focus
} from 'lucide-react';

const DeliverableOne = () => {
  const slides = [
    { num: "01", title: "The High-End Minimalist Evolution", desc: "Redefining Chikitsaa from a prominent local facility to Mumbai's premier destination for Aesthetic Mastery." },
    { num: "02", title: "The Heritage Gap", desc: "Translating Dr. Shetty's 23+ years of clinical excellence into a digital narrative that matches the offline authority." },
    { num: "03", title: "The Dual-Core Advantage", desc: "The unique value proposition: Ayurvedic foundational wisdom seamlessly integrated with 2024's most advanced Aesthetic Science." },
    { num: "04", title: "The Corporate Opportunity", desc: "Dominating the Sakinaka Metro locale. Tailoring messaging to the high-value professionals of the Marol/MIDC hub." },
    { num: "05", title: "The Visual Bridge", desc: "A textured white background with Lavender accents to bridge the gap between the physical clinic and the digital brand." },
    { num: "06", title: "The Metro Recall", desc: "Rebranding the '2024' handle. Integrating the unified Clinical White, Lavender, and Gold to create undeniable 'Visual Recall' for patients walking from the metro." },
    { num: "07", title: "Transformations over Procedures", desc: "Shifting the narrative. We no longer sell 'carbon peels'—we sell the 'Transformation Journey' led by a veteran specialist." },
    { num: "08", title: "The High-Margin Focus", desc: "Prioritizing premium services: GFC (Growth Factor Concentrate), PRP, RF Skin Tightening, and Carbon Laser Facials." },
    { num: "09", title: "The Trust Engine", desc: "Mobilizing our 5.0 Star legacy. Repurposing glowing Justdial and Practo reviews into high-converting visual proofs using our new palette." },
    { num: "10", title: "The Strategic Partnership", desc: "The synergy between the 'Master Architect' (Visionary Liaison) and the 'Veteran Specialist' (Dr. Shetty)." },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto space-y-12"
    >
      <div className="space-y-4">
        <h2 className="font-display text-4xl md:text-6xl text-deep-purple tracking-tight font-semibold">The Brand Pitch</h2>
        <p className="font-accent text-gold uppercase tracking-widest text-sm font-semibold mb-8">Deliverable 01 &mdash; The Visionary Narrative</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        {slides.map((slide, idx) => (
          <div key={idx} className="group relative bg-white p-8 rounded-2xl border border-lavender hover:border-deep-purple shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 p-6 opacity-5 font-display text-6xl text-deep-purple group-hover:opacity-10 group-hover:text-gold transition-all">
              {slide.num}
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl text-deep-purple mb-3 group-hover:text-deep-purple-dark transition-colors duration-300">
                {slide.title}
              </h3>
              <p className="text-gray-600 font-sans leading-relaxed text-sm md:text-base">
                {slide.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const DeliverableTwo = () => {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: "The Authority Pillar",
      subtitle: "'Doc-Talk' Format",
      desc: "Short-form reels featuring Dr. Shetty explaining the 'Why' behind high-ticket treatments (GFC/PRP), using Metallic Gold text & badges exclusively for Authority elements."
    },
    {
      icon: <Video className="w-6 h-6 text-gold" />,
      title: "The Proof Pillar",
      subtitle: "Cinematic Testimonials",
      desc: "Converting static 5.0-star Justdial/Practo text reviews into high-fidelity cinematic video stories featuring patient transformation arcs in Deep Purple text over Clinical White."
    },
    {
      icon: <Clock className="w-6 h-6 text-gold" />,
      title: "The Lifestyle Pillar",
      subtitle: "Corporate Targeting",
      desc: "Tailored for the 'Busy Mumbai Professional' at MIDC. Highlighting 'Lunch-Break Procedures' using calming Lavender and Clinical White aesthetics for a spa-like digital feel."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto space-y-12 pb-20"
    >
      <div className="space-y-4">
        <h2 className="font-display text-4xl md:text-6xl text-deep-purple tracking-tight font-semibold">Content Architecture</h2>
        <p className="font-accent text-gold uppercase tracking-widest text-sm font-semibold mb-8">Deliverable 02 &mdash; 30-Day Strategy</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="bg-gradient-to-b from-lavender-light to-white p-8 rounded-3xl border border-lavender relative overflow-hidden group hover:shadow-lg transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lavender/30 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500"></div>
            <div className="mb-6 p-4 bg-white inline-block rounded-2xl border border-lavender shadow-sm">
              {pillar.icon}
            </div>
            <h3 className="font-display text-2xl text-deep-purple mb-1">{pillar.title}</h3>
            <p className="font-accent text-xs font-semibold uppercase tracking-widest text-gold-muted mb-4">{pillar.subtitle}</p>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-3xl p-8 border border-lavender shadow-sm">
        <h3 className="font-display text-3xl text-deep-purple mb-8 border-b border-lavender pb-4">Execution Matrix: High-Margin Focus</h3>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <h4 className="font-sans font-semibold text-deep-purple uppercase tracking-wider text-sm">Weeks 1 & 2</h4>
              <p className="text-gray-500 text-xs mt-1">Foundation & Authority</p>
            </div>
            <div className="md:w-3/4 space-y-3">
              <p className="text-gray-600 text-sm"><span className="text-gold mr-2">♦</span> Launch 4x 'Doc-Talk' reels demystifying Hair Thinning (GFC) and Skin Aging (RF Tightening).</p>
              <p className="text-gray-600 text-sm"><span className="text-gold mr-2">♦</span> Publish 2x Cinematic Before/After carousel posts emphasizing precision and safety.</p>
              <p className="text-gray-600 text-sm"><span className="text-gold mr-2">♦</span> Institute the High-End Minimalist grid (Lavender/White for calming clinical feel).</p>
            </div>
          </div>
          <div className="h-px bg-lavender/50 w-full"></div>
          <div className="flex flex-col md:flex-row gap-6">
             <div className="md:w-1/4">
              <h4 className="font-sans font-semibold text-deep-purple uppercase tracking-wider text-sm">Weeks 3 & 4</h4>
              <p className="text-gray-500 text-xs mt-1">Conversion & Lifestyle</p>
            </div>
            <div className="md:w-3/4 space-y-3">
              <p className="text-gray-600 text-sm"><span className="text-gold mr-2">♦</span> Deploy 3x 'Lunch-Break Procedure' videos targeted at local corporate professionals.</p>
              <p className="text-gray-600 text-sm"><span className="text-gold mr-2">♦</span> Reserve Metallic Gold text & badges exclusively for Dr. Shetty’s Authority elements and Expert Tips.</p>
              <p className="text-gray-600 text-sm"><span className="text-gold mr-2">♦</span> Launch initial geo-fenced awareness campaign for Sakinaka/MIDC radius building 'Visual Recall'.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DeliverableThree = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto space-y-12 pb-20"
    >
      <div className="space-y-4">
        <h2 className="font-display text-4xl md:text-6xl text-deep-purple tracking-tight font-semibold">The Ad Pivot</h2>
        <p className="font-accent text-gold uppercase tracking-widest text-sm font-semibold mb-8">Deliverable 03 &mdash; Protecting the Luxury Brand</p>
      </div>

      <div className="bg-lavender-light rounded-3xl p-8 border border-lavender shadow-sm mb-12">
        <div className="flex items-start gap-4">
          <div className="bg-white p-3 rounded-xl border border-lavender shadow-sm">
            <AlertTriangle className="w-8 h-8 text-deep-purple" />
          </div>
          <div>
            <h3 className="font-display text-2xl text-deep-purple mb-2">The Danger of the "10 Discount Deals" Approach</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Running 10 rapid-fire deal posts trains the audience to view Chikitsaa as a "discount supermarket," directly contradicting Dr. Shetty's 23 years of premium expertise. Furthermore, diluting a ₹10,000 ad budget across 10 posts (₹200/day) guarantees the Meta algorithm will fail to exit the "learning phase," resulting in low-quality leads instead of high-value walk-ins.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="font-accent text-sm uppercase tracking-widest text-deep-purple font-semibold border-b border-lavender pb-2">The Solution: 3 Concentrated "Master Campaigns"</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-lavender shadow-sm hover:shadow-md transition-all">
            <Target className="w-8 h-8 text-gold mb-6" />
            <h4 className="font-display text-xl text-deep-purple mb-2">1. The Authority Campaign</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 border-b border-lavender/50 pb-2">Doc-Talk Reels</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Dr. Shetty addressing common misconceptions about GFC/Botox directly to the camera. Establishes immense trust and high-ticket credibility.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-lavender shadow-sm hover:shadow-md transition-all">
            <Focus className="w-8 h-8 text-gold mb-6" />
            <h4 className="font-display text-xl text-deep-purple mb-2">2. The Lifestyle Hook</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 border-b border-lavender/50 pb-2">Corporate Offerings</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Repositioning discounts securely as "First-Time Corporate Consultations". E.g., The 30-min Lunch Break Carbon Laser.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-lavender shadow-sm hover:shadow-md transition-all">
            <Share2 className="w-8 h-8 text-gold mb-6" />
            <h4 className="font-display text-xl text-deep-purple mb-2">3. The Trust Campaign</h4>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 border-b border-lavender/50 pb-2">Cinematic Reviews</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Highlighting real Practo/Justdial 5-star texts animated gracefully over gorgeous clinic b-roll, targeted at a 10km radius.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const DeliverableFour = () => {
  const [adBudget, setAdBudget] = useState<number>(10000);
  const agencyFee = 15000;
  
  // Real-world conservative estimates for high-ticket aesthetics in Mumbai
  const estimatedReach = Math.floor(adBudget * 4.5).toLocaleString(); // ~₹220 CPM
  const estimatedClicks = Math.floor(adBudget * 0.045).toLocaleString(); // ~1% CTR
  const estimatedLeads = Math.floor(adBudget * 0.0035).toLocaleString(); // ~₹285 CPL (Cost per Lead/Query)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto space-y-12 pb-20"
    >
      <div className="space-y-4">
        <h2 className="font-display text-4xl md:text-6xl text-deep-purple tracking-tight font-semibold">Investment Plan</h2>
        <p className="font-accent text-gold uppercase tracking-widest text-sm font-semibold mb-8">Deliverable 04 &mdash; Interactive Package Modeler</p>
      </div>

      <div className="bg-white rounded-3xl p-1 shadow-sm border border-lavender">
        <div className="bg-lavender-light rounded-[22px] p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-3xl text-deep-purple mb-4">The "Master Architect" Baseline</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Designed specifically to meet your budget expectations while completely outclassing standard "discount" marketing. Fix the core Agency Strategy at ₹15k, and use the slider below to model your scalable Meta Ad spend to calculate expected real-world traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: Agency Retainer */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-lavender relative flex flex-col">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-gold text-deep-purple font-accent text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-sm">
                Agency Fee (Fixed)
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Camera className="w-8 h-8 text-deep-purple" />
                <div>
                  <h4 className="font-display text-2xl text-deep-purple">Content & Strategy</h4>
                  <p className="font-sans font-semibold text-xl text-gold">₹15,000 <span className="text-sm text-gray-400 font-normal">/ month</span></p>
                </div>
              </div>
              
              <ul className="space-y-4 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-gold" />
                  <span className="text-sm text-gray-700">Dedicated Base Requirement: <strong className="text-deep-purple">1 Full Shoot Day</strong> (3-4 hrs mapping content).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-gold" />
                  <span className="text-sm text-gray-700">Production of <strong className="text-deep-purple">4 Cinematic 'Doc-Talk' Reels</strong> based on the 3 Master Campaigns.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-gold" />
                  <span className="text-sm text-gray-700">Design of <strong className="text-deep-purple">4 High-End Grid Carousels</strong> (Clinical White/Lavender UI standard).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-gold" />
                  <span className="text-sm text-gray-700">Setup & Technical Management of the targeted <strong className="text-deep-purple">Meta → WhatsApp Ad Funnel</strong>.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Meta Ad Spend (Interactive) */}
            <div className="bg-deep-purple rounded-2xl p-8 shadow-sm border border-deep-purple-dark relative flex flex-col">
               <div className="absolute top-0 right-8 -translate-y-1/2 bg-lavender text-deep-purple font-accent text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-sm">
                Direct to Meta (Scalable)
              </div>
              <div className="flex items-center gap-4 mb-6">
                <PieChart className="w-8 h-8 text-gold" />
                <div>
                  <h4 className="font-display text-2xl text-white">Targeted Ad Spend</h4>
                  <p className="font-sans font-semibold text-xl text-lavender">₹{adBudget.toLocaleString()} <span className="text-sm text-lavender/50 font-normal">/ month</span></p>
                </div>
              </div>
              
              {/* Interactive Budget Slider */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-lavender/70 mb-2 font-accent tracking-wider">
                  <span>₹10K Bootstrapper</span>
                  <span>₹50K Dominator</span>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="50000" 
                  step="5000" 
                  value={adBudget} 
                  onChange={(e) => setAdBudget(Number(e.target.value))}
                  className="w-full h-2 bg-deep-purple-dark rounded-lg appearance-none cursor-pointer accent-gold"
                />
              </div>

              <div className="bg-deep-purple-dark/50 rounded-xl p-4 mb-4 border border-lavender/10">
                <p className="text-xs text-lavender/70 font-accent uppercase tracking-widest mb-3">Expected 30-Day Metrics</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center border-r border-lavender/10">
                    <p className="text-xl font-display text-white">{estimatedReach}</p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Reach</p>
                  </div>
                  <div className="text-center border-r border-lavender/10">
                    <p className="text-xl font-display text-white">{estimatedClicks}</p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Clicks</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-display text-gold">{estimatedLeads}+</p>
                    <p className="text-[10px] text-gold-muted mt-1 uppercase tracking-wider">Leads</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mt-auto">
                <li className="flex items-start">
                  <Target className="w-4 h-4 mr-3 shrink-0 text-gold mt-0.5" />
                  <span className="text-xs text-gray-300">Hyper-Local focus: <span className="text-white">10km Radius of MIDC</span>.</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-4 h-4 mr-3 shrink-0 text-gold mt-0.5" />
                  <span className="text-xs text-gray-300">Concentrated on <strong className="text-white">3 Master Campaigns</strong> to ensure Meta exits the learning phase.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center bg-white p-6 rounded-xl border border-lavender flex items-center justify-center gap-6 shadow-sm">
             <IndianRupee className="w-10 h-10 text-gold" />
             <div className="text-left">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-accent">Total Monthly Implementation</p>
                <p className="font-display text-3xl text-deep-purple">₹{(agencyFee + adBudget).toLocaleString()} <span className="text-sm text-gray-400 font-sans tracking-normal">(Inclusive of Agency & Platform Spend)</span></p>
             </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(4);

  return (
    <div className="min-h-screen bg-off-white text-deep-purple overflow-x-hidden selection:bg-lavender selection:text-deep-purple">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-lavender shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="font-display tracking-wide text-xl text-deep-purple font-semibold">Chikitsaa <span className="text-gold italic font-normal">Aesthetic</span></h1>
            <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-gray-500">Brand Consultant Portal</p>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => setActiveTab(1)}
              className={`font-accent text-[11px] uppercase tracking-widest transition-all ${activeTab === 1 ? 'text-deep-purple font-semibold border-b-2 border-gold pb-1' : 'text-gray-400 hover:text-deep-purple pb-1'}`}
            >
              01. The Pitch
            </button>
            <button 
              onClick={() => setActiveTab(2)}
              className={`font-accent text-[11px] uppercase tracking-widest transition-all ${activeTab === 2 ? 'text-deep-purple font-semibold border-b-2 border-gold pb-1' : 'text-gray-400 hover:text-deep-purple pb-1'}`}
            >
              02. 30-Day Strategy
            </button>
            <button 
              onClick={() => setActiveTab(3)}
              className={`font-accent text-[11px] uppercase tracking-widest transition-all ${activeTab === 3 ? 'text-deep-purple font-semibold border-b-2 border-gold pb-1' : 'text-gray-400 hover:text-deep-purple pb-1'}`}
            >
              03. The Ad Pivot
            </button>
            <button 
              onClick={() => setActiveTab(4)}
              className={`font-accent text-[11px] uppercase tracking-widest transition-all ${activeTab === 4 ? 'text-deep-purple font-semibold border-b-2 border-gold pb-1' : 'text-gray-400 hover:text-deep-purple pb-1'}`}
            >
              04. Investment
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-32 px-6 sm:px-12 max-w-7xl mx-auto relative min-h-screen">
        {/* Decorative Grid Lines - Soft Clinic Feel */}
        <div className="fixed inset-0 pointer-events-none opacity-20 flex justify-center space-x-[25%] z-0">
          <div className="w-px h-full bg-lavender/50"></div>
          <div className="w-px h-full bg-lavender/50"></div>
          <div className="w-px h-full bg-lavender/50"></div>
        </div>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {activeTab === 1 && <DeliverableOne key="d1" />}
            {activeTab === 2 && <DeliverableTwo key="d2" />}
            {activeTab === 3 && <DeliverableThree key="d3" />}
            {activeTab === 4 && <DeliverableFour key="d4" />}
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full px-6 py-4 shadow-xl border border-lavender flex items-center space-x-6 w-max">
        <button onClick={() => setActiveTab(1)} className={`p-2 transition-colors ${activeTab === 1 ? 'text-deep-purple bg-lavender-light rounded-full' : 'text-gray-400'}`} aria-label="Pitch">
          <Building2 className="w-5 h-5" />
        </button>
        <button onClick={() => setActiveTab(2)} className={`p-2 transition-colors ${activeTab === 2 ? 'text-deep-purple bg-lavender-light rounded-full' : 'text-gray-400'}`} aria-label="Strategy">
          <CalendarMinus className="w-5 h-5" />
        </button>
        <button onClick={() => setActiveTab(3)} className={`p-2 transition-colors ${activeTab === 3 ? 'text-deep-purple bg-lavender-light rounded-full' : 'text-gray-400'}`} aria-label="Ad Pivot">
          <TrendingUp className="w-5 h-5" />
        </button>
         <button onClick={() => setActiveTab(4)} className={`p-2 transition-colors ${activeTab === 4 ? 'text-deep-purple bg-lavender-light rounded-full' : 'text-gray-400'}`} aria-label="Investment">
          <IndianRupee className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
