import { useState, useEffect } from 'react';
import logoImage from '../../../../resources/Pulse-Background-Removed.png';

interface OpeningScreenProps {
  onComplete: () => void;
}

export function OpeningScreen({ onComplete }: OpeningScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 200);

    const promptTimer = setTimeout(() => {
      setShowPrompt(true);
    }, 1200);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(promptTimer);
    };
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleClick}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center cursor-pointer
        transition-opacity duration-300 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      }}
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #4169E1 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #1E90FF 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className={`relative z-10 flex flex-col items-center transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <img 
          src={logoImage} 
          alt="Pulse Tweaks Logo" 
          className="w-24 h-24 mb-6 object-contain"
          style={{
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
          }}
        />
        
        <h1 
          className="text-4xl font-semibold text-white mb-3 tracking-tight"
          style={{
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Pulse Tweaks
        </h1>
        
        <p 
          className="text-base text-gray-400 mb-8"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
          }}
        >
          System Optimization Utility
        </p>

        {/* Click prompt */}
        <div
          className={`flex flex-col items-center transition-all duration-500 ${showPrompt ? 'opacity-100' : 'opacity-0'}`}
        >
          <div 
            className="px-6 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700
              hover:bg-gray-700/50 transition-all duration-200"
          >
            <span className="text-gray-300 text-sm font-medium">
              Click to continue
            </span>
          </div>
        </div>
      </div>

      {/* Version info */}
      <div className="absolute bottom-6 text-gray-500 text-xs font-mono">
        v1.0.0
      </div>
    </div>
  );
}
