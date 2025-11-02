export default function WorkPage() {
  const projects = [
    { name: 'MECS', url: 'mecs.nl', category: 'WEB_DEV' },
    { name: 'FLOW_RENTAL', url: 'flowrental.dk', category: 'E-COMMERCE' },
    { name: 'AUSSIE_TRANSLATIONS', url: 'aussietranslations.com.au', category: 'WEB_DEV' },
    { name: 'LEADING_GREEN', url: 'leadinggreen.com', category: 'WEB_DEV' },
    { name: 'JOBLINSEN', url: 'joblinsen.dk', category: 'WEB_DEV' },
    { name: 'LOVETT_FARMS', url: 'lovettfarms.co.nz', category: 'E-COMMERCE' },
    { name: 'DANCE_DRESS_PRO', url: 'dancedresspro.com', category: 'E-COMMERCE' },
    { name: 'FLPIL', url: 'flpil.co.il', category: 'WEB_DEV' },
    { name: 'FARMKEY', url: 'farmkey.in', category: 'MOBILE_APP' },
    { name: 'AXTRACARE', url: 'axtracare.com', category: 'WEB_DEV' },
    { name: 'BEAUTY_BEBO', url: 'beautybebo.com', category: 'E-COMMERCE' },
    { name: 'CHROMIUM_INDUSTRIES', url: 'chromiumindustries.com', category: 'WEB_DEV' },
  ];

  return (
    <main className="relative min-h-screen bg-black text-slate-100">
      
      {/* Cyberpunk grid background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Scanline effect */}
      <div className="pointer-events-none fixed inset-0 z-10 opacity-5">
        <div className="h-full w-full animate-[scan_8s_linear_infinite] bg-gradient-to-b from-transparent via-cyan-400 to-transparent" style={{
          backgroundSize: '100% 4px',
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="relative z-20 pt-32">
        {/* Hero */}
        <section className="px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block border border-green-400/50 bg-green-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-green-400">
              {'>'}PORTFOLIO
            </div>
            <h1 className="mb-8 font-mono text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
              <span className="text-cyan-400">HANDCRAFTED</span><br />
              <span className="text-pink-400">DIGITAL</span> <span className="text-green-400">EXPERIENCES</span>
            </h1>
            <p className="mx-auto max-w-2xl font-mono text-base leading-relaxed text-slate-400">
              Each project tells a story of dedication, precision, and the art of coding by hand. 
              No templates. No shortcuts. Just pure craftsmanship.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-cyan-400/20 px-4 py-12 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-2 font-mono text-4xl font-bold text-cyan-400 sm:text-5xl">4000+</div>
                <div className="font-mono text-xs uppercase tracking-widest text-slate-500">// PROJECTS</div>
              </div>
              <div className="text-center">
                <div className="mb-2 font-mono text-4xl font-bold text-pink-400 sm:text-5xl">1000+</div>
                <div className="font-mono text-xs uppercase tracking-widest text-slate-500">// CLIENTS</div>
              </div>
              <div className="text-center">
                <div className="mb-2 font-mono text-4xl font-bold text-green-400 sm:text-5xl">100+</div>
                <div className="font-mono text-xs uppercase tracking-widest text-slate-500">// COUNTRIES</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-block border border-cyan-400/50 bg-cyan-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-400">
                {'>'}FEATURED_WORK
              </div>
              <h2 className="font-mono text-3xl font-bold uppercase sm:text-4xl">
                <span className="text-green-400">CRAFTED</span> WITH <span className="text-pink-400">LOVE</span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => {
                const colors = ['cyan', 'pink', 'green'];
                const color = colors[index % 3];
                const borderColor = color === 'cyan' ? 'border-cyan-400/30' : color === 'pink' ? 'border-pink-400/30' : 'border-green-400/30';
                const textColor = color === 'cyan' ? 'text-cyan-400' : color === 'pink' ? 'text-pink-400' : 'text-green-400';
                const hoverShadow = color === 'cyan' ? 'hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]' : color === 'pink' ? 'hover:shadow-[0_0_20px_rgba(244,114,182,0.3)]' : 'hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]';
                const hoverBorder = color === 'cyan' ? 'hover:border-cyan-400' : color === 'pink' ? 'hover:border-pink-400' : 'hover:border-green-400';

                return (
                  <div
                    key={project.name}
                    className={`group relative overflow-hidden border ${borderColor} bg-black/50 p-6 transition-all ${hoverBorder} ${hoverShadow}`}
                  >
                    <div className={`mb-4 font-mono text-xs uppercase tracking-widest ${textColor}`}>
                      [{project.category}]
                    </div>
                    <h3 className={`mb-3 font-mono text-xl font-bold uppercase ${textColor}`}>
                      {project.name}
                    </h3>
                    <div className="mb-4 font-mono text-xs text-slate-500">
                      // {project.url}
                    </div>
                    <div className="font-mono text-xs text-slate-400">
                      Handcrafted from scratch. Zero templates. Pure code.
                    </div>
                    <div className={`mt-6 inline-block border ${borderColor} bg-transparent px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider ${textColor} transition-all ${hoverBorder}`}>
                      [VIEW_LIVE]
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-block border border-pink-400/50 bg-pink-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-pink-400">
                {'>'}OUR_PROCESS
              </div>
              <h2 className="font-mono text-3xl font-bold uppercase sm:text-4xl">
                FROM <span className="text-cyan-400">CONCEPT</span> TO <span className="text-green-400">REALITY</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 border-l-2 border-cyan-400 bg-black/50 p-6">
                <div className="font-mono text-3xl font-bold text-cyan-400">01</div>
                <div>
                  <h3 className="mb-2 font-mono text-lg font-bold uppercase text-cyan-400">DISCOVER</h3>
                  <p className="font-mono text-sm text-slate-400">
                    We dive deep into your vision, understanding every detail of what makes your project unique.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 border-l-2 border-pink-400 bg-black/50 p-6">
                <div className="font-mono text-3xl font-bold text-pink-400">02</div>
                <div>
                  <h3 className="mb-2 font-mono text-lg font-bold uppercase text-pink-400">DESIGN</h3>
                  <p className="font-mono text-sm text-slate-400">
                    Hand-drawn wireframes evolve into pixel-perfect designs, crafted with love and attention.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 border-l-2 border-green-400 bg-black/50 p-6">
                <div className="font-mono text-3xl font-bold text-green-400">03</div>
                <div>
                  <h3 className="mb-2 font-mono text-lg font-bold uppercase text-green-400">DEVELOP</h3>
                  <p className="font-mono text-sm text-slate-400">
                    Every line of code written by hand. Every interaction carefully considered. Zero automation.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 border-l-2 border-cyan-400 bg-black/50 p-6">
                <div className="font-mono text-3xl font-bold text-cyan-400">04</div>
                <div>
                  <h3 className="mb-2 font-mono text-lg font-bold uppercase text-cyan-400">DELIVER</h3>
                  <p className="font-mono text-sm text-slate-400">
                    Launch day arrives with your unique, handcrafted solution plus 30 days of dedicated support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-mono text-3xl font-bold uppercase sm:text-4xl">
              READY TO CREATE<br />
              YOUR <span className="text-cyan-400">MASTERPIECE</span>?
            </h2>
            <p className="mb-8 font-mono text-sm text-slate-400">
              Let&apos;s craft something that stands out from the AI-generated crowd.
            </p>
            <button className="border-2 border-pink-400 bg-pink-400/10 px-12 py-5 font-mono text-sm font-bold uppercase tracking-wider text-pink-400 transition-all hover:bg-pink-400 hover:text-black hover:shadow-[0_0_30px_rgba(244,114,182,0.8)]">
              [START_PROJECT]
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
