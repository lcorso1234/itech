'use client';

import { useEffect, useState } from 'react';

const codeLines = [
  'import { passion } from "@itech/heart";',
  'import { creativity } from "@human/soul";',
  '',
  'function buildMasterpiece() {',
  '  const project = new HandcraftedSolution();',
  '  project.addPassion(100);',
  '  project.addCreativity(100);',
  '  project.compile({ ai: false });',
  '  return project.deploy();',
  '}',
  '',
  '// Initializing iTech...',
  'buildMasterpiece();',
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine];
      
      if (currentChar < line.length) {
        const timer = setTimeout(() => {
          setCurrentChar(currentChar + 1);
        }, 30);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCurrentChar(0);
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black">
      <div className="w-full max-w-3xl px-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
          <div className="font-mono text-sm text-green-400">
            {'>'} Compiling handcrafted code...
          </div>
        </div>
        
        <div className="rounded-lg border border-green-400/30 bg-black/80 p-6 font-mono text-sm backdrop-blur-xl">
          {codeLines.slice(0, currentLine + 1).map((line, i) => (
            <div key={i} className="leading-relaxed">
              {i === currentLine ? (
                <>
                  <span className="text-green-400">{line.slice(0, currentChar)}</span>
                  <span className="animate-pulse text-green-400">▊</span>
                </>
              ) : (
                <span className="text-green-400">{line || '\u00A0'}</span>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-slate-500">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Building with passion, not AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
