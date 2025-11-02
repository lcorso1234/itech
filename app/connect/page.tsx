export default function ConnectPage() {
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
            <div className="mb-6 inline-block border border-cyan-400/50 bg-cyan-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-400">
              {'>'}CONNECT
            </div>
            <h1 className="mb-8 font-mono text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
              LET&apos;S <span className="text-cyan-400">CREATE</span><br />
              SOMETHING <span className="text-pink-400">LEGENDARY</span>
            </h1>
            <p className="mx-auto max-w-2xl font-mono text-base leading-relaxed text-slate-400">
              Ready to bring your vision to life? We&apos;re here to craft your perfect digital solution, 
              handmade with passion and precision.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="border-2 border-cyan-400/50 bg-black/80 p-8 sm:p-12">
              {/* Corner brackets */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-pink-400" />
              <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-green-400" />
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-cyan-400" />

              <form className="space-y-6">
                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-cyan-400">
                    [NAME]*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-cyan-400/30 bg-black/50 px-4 py-3 font-mono text-sm text-slate-100 placeholder-slate-600 outline-none transition-colors focus:border-cyan-400 focus:bg-black/70"
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-pink-400">
                    [EMAIL]*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-pink-400/30 bg-black/50 px-4 py-3 font-mono text-sm text-slate-100 placeholder-slate-600 outline-none transition-colors focus:border-pink-400 focus:bg-black/70"
                    placeholder="Enter your email..."
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-green-400">
                    [PROJECT_TYPE]*
                  </label>
                  <select
                    required
                    className="w-full border border-green-400/30 bg-black/50 px-4 py-3 font-mono text-sm text-slate-100 outline-none transition-colors focus:border-green-400 focus:bg-black/70"
                  >
                    <option value="">Select project type...</option>
                    <option value="web">WEB_DEVELOPMENT</option>
                    <option value="mobile">MOBILE_APP</option>
                    <option value="ecommerce">E-COMMERCE</option>
                    <option value="custom">CUSTOM_SOLUTION</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-cyan-400">
                    [MESSAGE]*
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full border border-cyan-400/30 bg-black/50 px-4 py-3 font-mono text-sm text-slate-100 placeholder-slate-600 outline-none transition-colors focus:border-cyan-400 focus:bg-black/70"
                    placeholder="Tell us about your vision..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border-2 border-cyan-400 bg-cyan-400/10 py-5 font-mono text-sm font-bold uppercase tracking-wider text-cyan-400 transition-all hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]"
                >
                  [SEND_MESSAGE]
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-block border border-pink-400/50 bg-pink-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-pink-400">
                {'>'}GET_IN_TOUCH
              </div>
              <h2 className="font-mono text-3xl font-bold uppercase sm:text-4xl">
                <span className="text-green-400">OTHER_WAYS</span> TO <span className="text-cyan-400">CONNECT</span>
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="border border-cyan-400/30 bg-black/50 p-8 text-center">
                <div className="mb-4 font-mono text-3xl text-cyan-400">[📧]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-cyan-400">EMAIL</h3>
                <p className="font-mono text-sm text-slate-400">
                  hello@itech.dev
                </p>
              </div>

              <div className="border border-pink-400/30 bg-black/50 p-8 text-center">
                <div className="mb-4 font-mono text-3xl text-pink-400">[📱]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-pink-400">PHONE</h3>
                <p className="font-mono text-sm text-slate-400">
                  +1 (555) 123-4567
                </p>
              </div>

              <div className="border border-green-400/30 bg-black/50 p-8 text-center">
                <div className="mb-4 font-mono text-3xl text-green-400">[📍]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-green-400">LOCATION</h3>
                <p className="font-mono text-sm text-slate-400">
                  Worldwide Remote
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-block border border-green-400/50 bg-green-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-green-400">
                {'>'}COMMITMENT
              </div>
              <h2 className="font-mono text-3xl font-bold uppercase sm:text-4xl">
                WHAT YOU <span className="text-cyan-400">CAN_EXPECT</span>
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border border-cyan-400/30 bg-black/50 p-6">
                <div className="mb-3 font-mono text-xl text-cyan-400">[✓]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-cyan-400">24H RESPONSE</h3>
                <p className="font-mono text-sm text-slate-400">
                  We respond to every inquiry within 24 hours. Your time matters to us.
                </p>
              </div>

              <div className="border border-pink-400/30 bg-black/50 p-6">
                <div className="mb-3 font-mono text-xl text-pink-400">[✓]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-pink-400">FREE CONSULTATION</h3>
                <p className="font-mono text-sm text-slate-400">
                  Start with a free consultation. No pressure, just honest advice.
                </p>
              </div>

              <div className="border border-green-400/30 bg-black/50 p-6">
                <div className="mb-3 font-mono text-xl text-green-400">[✓]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-green-400">TRANSPARENT PRICING</h3>
                <p className="font-mono text-sm text-slate-400">
                  Clear, upfront pricing. No hidden fees. Ever.
                </p>
              </div>

              <div className="border border-cyan-400/30 bg-black/50 p-6">
                <div className="mb-3 font-mono text-xl text-cyan-400">[✓]</div>
                <h3 className="mb-3 font-mono text-lg font-bold uppercase text-cyan-400">LIFETIME SUPPORT</h3>
                <p className="font-mono text-sm text-slate-400">
                  30 days free support, then we&apos;re still here whenever you need us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-cyan-400/20 px-4 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-mono text-3xl font-bold uppercase sm:text-4xl">
              IN A WORLD FULL OF <span className="text-pink-400">AI</span>,<br />
              WE DO IT BY <span className="text-green-400">HAND</span>
            </h2>
            <p className="mb-8 font-mono text-sm text-slate-400">
              Let&apos;s create something truly unique. Together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500">
                <span className="text-green-400">[✓]</span>
                <span>HANDCRAFTED</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500">
                <span className="text-green-400">[✓]</span>
                <span>ZERO AI</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500">
                <span className="text-green-400">[✓]</span>
                <span>PURE PASSION</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
