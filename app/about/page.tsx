export default function AboutPage() {
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
            <div className="mb-6 inline-block border border-pink-400/50 bg-pink-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-pink-400">
              {'>'}ABOUT_ITECH
            </div>
            <h1 className="mb-8 font-mono text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
              <span className="text-cyan-400">CODED</span> BY <span className="text-pink-400">HAND</span>,<br />
              <span className="text-green-400">CRAFTED</span> WITH PASSION
            </h1>
            <p className="mx-auto max-w-2xl font-mono text-base leading-relaxed text-slate-400">
              We believe in the irreplaceable value of human creativity. Every project is a testament 
              to our dedication to excellence, precision, and the art of true craftsmanship.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="border border-cyan-400/30 bg-black/50 p-8">
                <div className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan-400">[MISSION]</div>
                <h2 className="mb-6 font-mono text-3xl font-bold uppercase text-cyan-400">
                  OUR_MISSION
                </h2>
                <p className="font-mono text-sm leading-relaxed text-slate-300">
                  To transform visions into reality through handcrafted digital solutions. We reject 
                  automation in favor of artistry, creating bespoke experiences that truly represent 
                  each client&apos;s unique identity and goals.
                </p>
              </div>

              <div className="border border-pink-400/30 bg-black/50 p-8">
                <div className="mb-4 font-mono text-xs uppercase tracking-widest text-pink-400">[VISION]</div>
                <h2 className="mb-6 font-mono text-3xl font-bold uppercase text-pink-400">
                  OUR_VISION
                </h2>
                <p className="font-mono text-sm leading-relaxed text-slate-300">
                  To lead the resistance against AI-generated monotony. We envision a digital landscape 
                  where every website, every app, every line of code is a unique work of art, crafted 
                  by human hands with love and precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block border border-green-400/50 bg-green-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-green-400">
                {'>'}CORE_VALUES
              </div>
              <h2 className="font-mono text-3xl font-bold uppercase sm:text-4xl">
                <span className="text-green-400">WHAT</span> WE <span className="text-cyan-400">STAND_FOR</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="border border-cyan-400/30 bg-black/50 p-6">
                <div className="mb-3 font-mono text-xl text-cyan-400">[01]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-cyan-400">CRAFTSMANSHIP</h3>
                <p className="font-mono text-xs leading-relaxed text-slate-400">
                  Every project is handcrafted with meticulous attention to detail.
                </p>
              </div>

              <div className="border border-pink-400/30 bg-black/50 p-6">
                <div className="mb-3 font-mono text-xl text-pink-400">[02]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-pink-400">PASSION</h3>
                <p className="font-mono text-xs leading-relaxed text-slate-400">
                  We pour our hearts into every line of code we write.
                </p>
              </div>

              <div className="border border-green-400/30 bg-black/50 p-6">
                <div className="mb-3 font-mono text-xl text-green-400">[03]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-green-400">EXCELLENCE</h3>
                <p className="font-mono text-xs leading-relaxed text-slate-400">
                  We deliver superior quality that exceeds expectations.
                </p>
              </div>

              <div className="border border-cyan-400/30 bg-black/50 p-6">
                <div className="mb-3 font-mono text-xl text-cyan-400">[04]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-cyan-400">INNOVATION</h3>
                <p className="font-mono text-xs leading-relaxed text-slate-400">
                  Human creativity drives our constant pursuit of new ideas.
                </p>
              </div>

              <div className="border border-pink-400/30 bg-black/50 p-6">
                <div className="mb-3 font-mono text-xl text-pink-400">[05]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-pink-400">AUTHENTICITY</h3>
                <p className="font-mono text-xs leading-relaxed text-slate-400">
                  Every solution is genuine, unique, and unmistakably human.
                </p>
              </div>

              <div className="border border-green-400/30 bg-black/50 p-6">
                <div className="mb-3 font-mono text-xl text-green-400">[06]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-green-400">DEDICATION</h3>
                <p className="font-mono text-xs leading-relaxed text-slate-400">
                  We commit fully to every project, treating it as our own.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-block border border-pink-400/50 bg-pink-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-pink-400">
                {'>'}WHY_ITECH
              </div>
              <h2 className="font-mono text-3xl font-bold uppercase sm:text-4xl">
                THE <span className="text-cyan-400">HANDCRAFTED</span> DIFFERENCE
              </h2>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-cyan-400 bg-black/50 p-6">
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-cyan-400">100% HUMAN-MADE</h3>
                <p className="font-mono text-sm leading-relaxed text-slate-400">
                  Zero AI. Zero templates. Zero shortcuts. Just pure, unadulterated human creativity and expertise.
                </p>
              </div>

              <div className="border-l-2 border-pink-400 bg-black/50 p-6">
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-pink-400">LIGHTNING FAST</h3>
                <p className="font-mono text-sm leading-relaxed text-slate-400">
                  Our experience and dedication mean we deliver exceptional results ahead of schedule. Every. Single. Time.
                </p>
              </div>

              <div className="border-l-2 border-green-400 bg-black/50 p-6">
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-green-400">TRULY BESPOKE</h3>
                <p className="font-mono text-sm leading-relaxed text-slate-400">
                  Each solution is uniquely yours. We don&apos;t do cookie-cutter. We craft experiences that are as individual as you are.
                </p>
              </div>

              <div className="border-l-2 border-cyan-400 bg-black/50 p-6">
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-cyan-400">LIFELONG SUPPORT</h3>
                <p className="font-mono text-sm leading-relaxed text-slate-400">
                  30 days free support after launch, plus we&apos;re always here when you need us. Your success is our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-mono text-3xl font-bold uppercase sm:text-4xl">
              READY TO <span className="text-cyan-400">EXPERIENCE</span><br />
              THE <span className="text-pink-400">DIFFERENCE</span>?
            </h2>
            <p className="mb-8 font-mono text-sm text-slate-400">
              Let&apos;s craft something extraordinary together.
            </p>
            <button className="border-2 border-cyan-400 bg-cyan-400/10 px-12 py-5 font-mono text-sm font-bold uppercase tracking-wider text-cyan-400 transition-all hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
              [START_YOUR_PROJECT]
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
