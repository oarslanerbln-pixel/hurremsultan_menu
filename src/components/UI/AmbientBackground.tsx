import React from 'react';

const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#0a0a0a]">
      {/* 
        Premium Dark Liquid Gold / Smoke effect.
        Using large blurry radial gradients that translate and rotate over long durations.
      */}
      <div className="absolute inset-0 opacity-[0.35] mix-blend-screen">
        <div className="ambient-blob bg-gold-600/10 w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] left-[-20%] top-[-20%] animate-blob-1" />
        <div className="ambient-blob bg-[#B8860B]/15 w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] right-[-30%] top-[30%] animate-blob-2" />
        <div className="ambient-blob bg-gold-400/5 w-[150vw] h-[150vw] max-w-[1500px] max-h-[1500px] left-[10%] bottom-[-30%] animate-blob-3" />
      </div>
      
      {/* Subtle noise texture overlay to give it a premium physical material feel */}
      <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none bg-noise" />
      
      {/* Dark vignette to focus attention to the center */}
      <div className="absolute inset-0 opacity-80 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
    </div>
  );
};

export default AmbientBackground;
