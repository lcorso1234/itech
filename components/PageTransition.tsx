'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div className="absolute inset-0 bg-black animate-[fadeOut_0.8s_ease-in-out]" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 animate-[matrixFall_0.8s_linear] font-mono text-green-400 text-2xl opacity-70"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 0.3}s`,
            }}
          >
            {[...Array(30)].map((_, j) => (
              <div key={j} className="leading-tight">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
