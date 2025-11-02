export default function HomePage() {
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

      <div className="relative z-20">
        {/* Hero Section */}
        <section className="flex min-h-screen items-center justify-center px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="inline-block border border-cyan-400/50 bg-cyan-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-400">
                  {'>'}HANDCRAFTED_WITH_PASSION
                </div>
                
                <h1 className="font-mono text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  IN A WORLD FULL OF AI,<br />
                  WE <span className="text-cyan-400">DO</span> <span className="text-pink-400">IT</span> <span className="text-green-400">BY</span> <span className="text-cyan-400">HAND</span>.
                </h1>
                
                <p className="max-w-xl font-mono text-sm leading-relaxed text-slate-400 sm:text-base">
                  In a world drowning in AI-generated mediocrity, iTech stands apart. We code by hand. 
                  Every line. Every pixel. Every interaction. Pure human creativity, zero AI shortcuts.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="group relative overflow-hidden border-2 border-cyan-400 bg-cyan-400/10 px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-cyan-400 transition-all hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                    <span className="relative z-10">[START_PROJECT]</span>
                  </button>
                  
                  <button className="border-2 border-pink-400/50 bg-transparent px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider text-pink-400 transition-all hover:border-pink-400 hover:bg-pink-400/10 hover:shadow-[0_0_20px_rgba(244,114,182,0.3)]">
                    [VIEW_WORK]
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="space-y-6 border border-green-400/30 bg-black/50 p-8 font-mono backdrop-blur-sm">
                  <div className="flex items-baseline gap-4 border-b border-green-400/20 pb-4">
                    <div className="text-5xl font-bold text-cyan-400">4000+</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500">// PROJECTS</div>
                  </div>
                  <div className="flex items-baseline gap-4 border-b border-green-400/20 pb-4">
                    <div className="text-5xl font-bold text-pink-400">1000+</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500">// CLIENTS</div>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <div className="text-5xl font-bold text-green-400">100+</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500">// COUNTRIES</div>
                  </div>
                </div>
                <div className="absolute -right-2 -top-2 h-full w-full border border-cyan-400/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block border border-pink-400/50 bg-pink-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-pink-400">
                {'>'}SERVICES
              </div>
              <h2 className="mb-6 font-mono text-3xl font-bold uppercase sm:text-4xl">
                <span className="text-green-400">CRAFTED</span> WITH<br />
                <span className="text-pink-400">PRECISION</span>
              </h2>
              <p className="mx-auto max-w-2xl font-mono text-sm text-slate-400">
                Every line of code. Every pixel. Every interaction.<br />
                Handcrafted. No AI. Pure human expertise.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="group border border-cyan-400/30 bg-black/50 p-6 transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <div className="mb-4 font-mono text-2xl text-cyan-400">[01]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase tracking-wide text-cyan-400">
                  WEB_DEV
                </h3>
                <p className="font-mono text-xs leading-relaxed text-slate-400">
                  Custom websites coded from scratch. Responsive, blazing-fast, uniquely yours.
                </p>
              </div>

              <div className="group border border-pink-400/30 bg-black/50 p-6 transition-all hover:border-pink-400 hover:shadow-[0_0_20px_rgba(244,114,182,0.2)]">
                <div className="mb-4 font-mono text-2xl text-pink-400">[02]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase tracking-wide text-pink-400">
                  MOBILE_APPS
                </h3>
                <p className="font-mono text-xs leading-relaxed text-slate-400">
                  Native iOS & Android apps. Crafted with precision for maximum performance.
                </p>
              </div>

              <div className="group border border-green-400/30 bg-black/50 p-6 transition-all hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <div className="mb-4 font-mono text-2xl text-green-400">[03]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase tracking-wide text-green-400">
                  E-COMMERCE
                </h3>
                <p className="font-mono text-xs leading-relaxed text-slate-400">
                  High-converting online stores. Built to turn visitors into loyal customers.
                </p>
              </div>

              <div className="group border border-cyan-400/30 bg-black/50 p-6 transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <div className="mb-4 font-mono text-2xl text-cyan-400">[04]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase tracking-wide text-cyan-400">
                  CUSTOM_CODE
                </h3>
                <p className="font-mono text-xs leading-relaxed text-slate-400">
                  Tailored solutions. Engineered specifically for your unique requirements.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-4 font-mono text-xs uppercase tracking-widest text-slate-500">
                <span className="text-green-400">10+ YEARS</span>
                <span>•</span>
                <span className="text-cyan-400">LATEST TECH</span>
                <span>•</span>
                <span className="text-pink-400">24/7 SUPPORT</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block border border-green-400/50 bg-green-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-green-400">
                {'>'}CLIENT_TESTIMONIALS
              </div>
              <h2 className="mb-6 font-mono text-3xl font-bold uppercase sm:text-4xl">
                <span className="text-cyan-400">VERIFIED</span><br />
                <span className="text-pink-400">SUCCESS_STORIES</span>
              </h2>
              <p className="mx-auto max-w-2xl font-mono text-sm text-slate-400">
                Real results. Real people. Real trust.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="border border-cyan-400/30 bg-black/50 p-6 font-mono">
                <div className="mb-4 text-xs text-cyan-400">[★★★★★]</div>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  &quot;Attention to detail, straight-forwardness and promptness in communication. Top-tier SEO and development.&quot;
                </p>
                <div className="border-t border-cyan-400/20 pt-4">
                  <div className="text-sm font-bold text-cyan-400">RAJ_PARNAMI</div>
                  <div className="text-xs text-slate-500">// Director, Nyeox</div>
                </div>
              </div>

              <div className="border border-pink-400/30 bg-black/50 p-6 font-mono">
                <div className="mb-4 text-xs text-pink-400">[★★★★★]</div>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  &quot;Before iTechPanel, our Google position was far away. Now we&apos;re first page rank. Wow!!!! Thank you!&quot;
                </p>
                <div className="border-t border-pink-400/20 pt-4">
                  <div className="text-sm font-bold text-pink-400">CAREGREEN</div>
                  <div className="text-xs text-slate-500">// Shasha Design, NL</div>
                </div>
              </div>

              <div className="border border-green-400/30 bg-black/50 p-6 font-mono">
                <div className="mb-4 text-xs text-green-400">[★★★★★]</div>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  &quot;Always great to work with iTechPanel Team. Their work is always very good and they communicate well.&quot;
                </p>
                <div className="border-t border-green-400/20 pt-4">
                  <div className="text-sm font-bold text-green-400">KIRSTEN_MAC_EWAN</div>
                  <div className="text-xs text-slate-500">// The Online Marketer</div>
                </div>
              </div>

              <div className="border border-cyan-400/30 bg-black/50 p-6 font-mono">
                <div className="mb-4 text-xs text-cyan-400">[★★★★★]</div>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  &quot;I really appreciate the work done by iTechPanel. They always deliver before deadline. Will keep working with them.&quot;
                </p>
                <div className="border-t border-cyan-400/20 pt-4">
                  <div className="text-sm font-bold text-cyan-400">FELIX_BECK</div>
                  <div className="text-xs text-slate-500">// Boono Designs, DE</div>
                </div>
              </div>

              <div className="border border-pink-400/30 bg-black/50 p-6 font-mono">
                <div className="mb-4 text-xs text-pink-400">[★★★★★]</div>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  &quot;Awesome! Very knowledgeable Webmaster. A true Expert. Pleasure to work with. Will reach out next time for sure.&quot;
                </p>
                <div className="border-t border-pink-400/20 pt-4">
                  <div className="text-sm font-bold text-pink-400">CALAB_NELSON</div>
                  <div className="text-xs text-slate-500">// Avora Industries, CA</div>
                </div>
              </div>

              <div className="border border-green-400/30 bg-black/50 p-6 font-mono">
                <div className="mb-4 text-xs text-green-400">[★★★★★]</div>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  &quot;Outstanding service and dedication. The team went above and beyond to ensure our project was a success.&quot;
                </p>
                <div className="border-t border-green-400/20 pt-4">
                  <div className="text-sm font-bold text-green-400">SARAH_JOHNSON</div>
                  <div className="text-xs text-slate-500">// TechStart Inc</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative border-2 border-cyan-400/50 bg-black/80 p-12 sm:p-16">
              {/* Corner brackets */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-pink-400" />
              <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-green-400" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-cyan-400" />
              
              <div className="text-center">
                <h2 className="mb-6 font-mono text-3xl font-bold uppercase sm:text-4xl lg:text-5xl">
                  READY TO <span className="text-cyan-400">BUILD</span><br />
                  SOMETHING <span className="text-pink-400">LEGENDARY</span>?
                </h2>
                
                <p className="mx-auto mb-12 max-w-2xl font-mono text-sm text-slate-400 sm:text-base">
                  Let&apos;s transform your vision into reality. Handcrafted solutions. Zero AI. Maximum impact.
                </p>
                
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <button className="w-full border-2 border-cyan-400 bg-cyan-400/10 px-12 py-5 font-mono text-sm font-bold uppercase tracking-wider text-cyan-400 transition-all hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] sm:w-auto">
                    [GET_STARTED_NOW]
                  </button>
                  
                  <button className="w-full border-2 border-pink-400/50 bg-transparent px-12 py-5 font-mono text-sm font-bold uppercase tracking-wider text-pink-400 transition-all hover:border-pink-400 hover:bg-pink-400/10 hover:shadow-[0_0_30px_rgba(244,114,182,0.4)] sm:w-auto">
                    [SCHEDULE_CALL]
                  </button>
                </div>
                
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 font-mono text-xs uppercase tracking-widest text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">[✓]</span>
                    <span>FREE CONSULT</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">[✓]</span>
                    <span>30 DAY SUPPORT</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">[✓]</span>
                    <span>GUARANTEE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
