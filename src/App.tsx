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
  Focus,
  Sparkles
} from 'lucide-react';

const DeliverableOne = () => {
  const narrative = [
    {
      category: "The Paradox",
      title: "5.0 Stars Offline, Invisible Online",
      desc: "Chikitsaa boasts a rare 5.0-star legacy with 23+ years of expertise. Yet, your digital presence feels 'functional' rather than 'authoritative'. We are losing high-value patients to lesser-skilled clinics that simply look better online.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
    },
    {
      category: "The Problem",
      title: "The Saki Naka Blindspot",
      desc: "1 Lakh+ corporate professionals cross the Saki Naka Metro daily. They are looking for 'Modern Aesthetics', but our current branding targets 'General Patients'. We need to pivot to attract the Marol/MIDC high-ticket corporate tier.",
      icon: <Target className="w-8 h-8 text-gold" />,
    },
    {
      category: "The Insight",
      title: "Complexity is Not a Feature",
      desc: "Patients don't want a list of 50 procedures; they want a 'Transformation'. We will shift the narrative from selling 'Chemical Peels' to selling 'Clinical Artistry' led by a veteran specialist.",
      icon: <Focus className="w-8 h-8 text-gold" />,
    },
    {
      category: "The Solution",
      title: "The Digital Twin Strategy",
      desc: "Your clinic interior is stunning—Lavender doors, Gold accents, Clinical White. We will build a 'Digital Twin' of your physical luxury. When a patient sees your profile, they should feel like they've already stepped into your reception.",
      icon: <Building2 className="w-8 h-8 text-gold" />,
    },
    {
      category: "The Promise",
      title: "From 'A Clinic' to 'The Institute'",
      desc: "By June 2026, Chikitsaa won't just be an aesthetic clinic above a Bata showroom. It will be 'The Authority Institute for Modern Trichology & Skin'—the only logical choice for the elite of Saki Naka.",
      icon: <Crown className="w-8 h-8 text-gold" />,
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto space-y-16 pb-32"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="font-accent text-gold uppercase tracking-[0.3em] text-xs font-bold"
        >
          Confidential Strategy Pitch
        </motion.span>
        <h2 className="font-display text-5xl md:text-7xl text-deep-purple tracking-tight font-semibold leading-tight">
          Mastering the <span className="italic font-normal">Aesthetic Authority</span>
        </h2>
        <p className="text-gray-500 font-sans text-lg">
          Bridging the gap between 23 years of clinical heritage and the modern luxury digital era.
        </p>
      </div>

      <div className="space-y-8">
        {narrative.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: idx * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98] 
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`group flex flex-col md:flex-row items-center gap-8 p-10 rounded-[40px] border border-lavender bg-white hover:bg-deep-purple transition-all duration-500 hover:shadow-2xl hover:border-transparent`}
          >
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2 + (idx * 0.1)
              }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-lavender/50 shrink-0 group-hover:scale-110 transition-transform duration-500"
            >
              {item.icon}
            </motion.div>
            <div className="space-y-3 text-center md:text-left transition-colors duration-500">
              <span className="font-accent text-[10px] uppercase tracking-widest font-bold text-gold group-hover:text-lavender">
                {item.category}
              </span>
              <h3 className="font-display text-3xl text-deep-purple group-hover:text-white">
                {item.title}
              </h3>
              <p className="font-sans leading-relaxed text-base italic text-gray-600 group-hover:text-lavender/80">
                "{item.desc}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-gold/5 border border-gold/20 p-12 rounded-[50px] text-center space-y-6"
      >
        <motion.div
           initial={{ rotate: -20, scale: 0 }}
           whileInView={{ rotate: 0, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <Sparkles className="w-12 h-12 text-gold mx-auto" />
        </motion.div>
        <h3 className="font-display text-4xl text-deep-purple italic">"The strategy isn't just to be seen; it's to be respected."</h3>
        <p className="text-gray-500 max-w-xl mx-auto text-sm uppercase tracking-widest font-accent">
          Prepared exclusively for Dr. Raviraj Shetty & the Chikitsaa Management Team
        </p>
      </motion.div>
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
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="bg-gradient-to-b from-lavender-light to-white p-8 rounded-3xl border border-lavender relative overflow-hidden group hover:shadow-lg transition-shadow duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-lavender/30 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500"></div>
            <div className="mb-6 p-4 bg-white inline-block rounded-2xl border border-lavender shadow-sm">
              {pillar.icon}
            </div>
            <h3 className="font-display text-2xl text-deep-purple mb-1">{pillar.title}</h3>
            <p className="font-accent text-xs font-semibold uppercase tracking-widest text-gold-muted mb-4">{pillar.subtitle}</p>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16 bg-white rounded-3xl p-8 border border-lavender shadow-sm"
      >
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
      </motion.div>
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

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-lavender-light rounded-3xl p-8 border border-lavender shadow-sm mb-12"
      >
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
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="space-y-8"
      >
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
      </motion.div>
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
        <div className="bg-lavender-light rounded-[22px] p-6 md:p-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h3 className="font-display text-3xl text-deep-purple mb-4">The "Master Architect" Baseline</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Designed specifically to meet your budget expectations while completely outclassing standard "discount" marketing. Fix the core Agency Strategy at ₹15k, and use the slider below to model your scalable Meta Ad spend to calculate expected real-world traffic.
            </p>
          </motion.div>

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
                  <span className="text-sm text-gray-700"><strong className="text-deep-purple">1 Dedicated Shoot Day </strong> (3-4 hours batch-filming right at the clinic).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-gold" />
                  <span className="text-sm text-gray-700">Production of <strong className="text-deep-purple">4 Cinematic 'Doc-Talk' Reels</strong> based on the Master Campaigns.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-gold" />
                  <span className="text-sm text-gray-700">Design of <strong className="text-deep-purple">4 High-End Grid Carousels</strong> (Clinical White/Lavender UI).</span>
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

                {adBudget === 10000 && (
                  <div className="mt-4 pt-4 border-t border-lavender/10">
                    <p className="text-[11px] text-lavender font-sans leading-relaxed text-justify">
                      <span className="text-gold font-semibold uppercase tracking-wider text-[10px] block mb-1">Why ₹10,000 is the perfect start:</span>
                      At ₹10,000 (~₹333/day), we focus total firepower on our <span className="text-white font-semibold underline decoration-gold/50 underline-offset-2 tracking-tight">3 Master Campaigns: Authority, Lifestyle, and Trust</span>. By concentrating spend rather than splitting it across 10+ fragmented posts, we provide Meta's algorithm with the critical daily density of data points required to exit the 'Learning Phase' quickly. This approach filters for high-intent professionals in the Saki Naka/MIDC area, ensuring the AI optimizes for <span className="text-gold">luxury conversions</span> rather than just cheap, low-quality clicks.
                    </p>
                  </div>
                )}
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
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center bg-white p-6 rounded-xl border border-lavender flex items-center justify-center gap-6 shadow-sm"
          >
             <IndianRupee className="w-10 h-10 text-gold" />
             <div className="text-left">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-accent">Total Monthly Implementation</p>
                <p className="font-display text-3xl text-deep-purple">₹{(agencyFee + adBudget).toLocaleString()} <span className="text-sm text-gray-400 font-sans tracking-normal">(Inclusive of Agency & Platform Spend)</span></p>
             </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(1);

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
              className={`relative font-accent text-[11px] uppercase tracking-widest transition-all ${activeTab === 1 ? 'text-deep-purple font-semibold' : 'text-gray-400 hover:text-deep-purple pb-1'}`}
            >
              01. The Pitch
              {activeTab === 1 && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                />
              )}
            </button>
            <button 
              onClick={() => setActiveTab(2)}
              className={`relative font-accent text-[11px] uppercase tracking-widest transition-all ${activeTab === 2 ? 'text-deep-purple font-semibold' : 'text-gray-400 hover:text-deep-purple pb-1'}`}
            >
              02. 30-Day Strategy
              {activeTab === 2 && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                />
              )}
            </button>
            <button 
              onClick={() => setActiveTab(3)}
              className={`relative font-accent text-[11px] uppercase tracking-widest transition-all ${activeTab === 3 ? 'text-deep-purple font-semibold' : 'text-gray-400 hover:text-deep-purple pb-1'}`}
            >
              03. The Ad Pivot
              {activeTab === 3 && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                />
              )}
            </button>
            <button 
              onClick={() => setActiveTab(4)}
              className={`relative font-accent text-[11px] uppercase tracking-widest transition-all ${activeTab === 4 ? 'text-deep-purple font-semibold' : 'text-gray-400 hover:text-deep-purple pb-1'}`}
            >
              04. Investment
              {activeTab === 4 && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-28 px-4 sm:px-12 max-w-7xl mx-auto relative min-h-screen pb-32 lg:pb-0">
        {/* Decorative Grid Lines - Soft Clinic Feel */}
        <div className="fixed inset-0 pointer-events-none opacity-20 flex justify-center space-x-[25%] z-0">
          <div className="w-px h-full bg-lavender/50"></div>
          <div className="w-px h-full bg-lavender/50"></div>
          <div className="w-px h-full bg-lavender/50"></div>
        </div>

        <div className="relative z-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
              transition={{ 
                duration: 0.4, 
                ease: [0.23, 1, 0.32, 1] 
              }}
            >
              {activeTab === 1 && <DeliverableOne />}
              {activeTab === 2 && <DeliverableTwo />}
              {activeTab === 3 && <DeliverableThree />}
              {activeTab === 4 && <DeliverableFour />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md rounded-full px-4 py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border border-lavender flex items-center justify-between w-[90%] max-w-[340px]">
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
