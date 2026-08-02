// ==========================================
// --- CENTRAL CONFIGURATION ---
// ==========================================
const CONFIG = {
  merchUrl: "https://click.aiesec.lk/cs/idealize-2026-merch-pack", // <-- set the real link here
};

const merchItem = {
  alt: "White event t-shirt flat lay",
  image: "/merch.png",
};

export default function Merch() {
  return (
    <section
      className="py-16 md:py-24 px-6 min-h-[85vh] md:min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white"
      id="merch"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative z-10">
        
        {/* Image with purple backlight (kept purple on purpose) */}
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-md aspect-square flex items-center justify-center">
            
            {/* Purple backlight glow — untouched */}
            <div
              className="absolute left-1/2 top-1/2 -z-10 rounded-full"
              style={{
                width: "150%",
                height: "150%",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, rgba(168,85,247,0.9) 0%, rgba(147,51,234,0.55) 35%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />

            {/* Product image */}
            <img
              src={merchItem.image}
              alt={merchItem.alt}
              loading="lazy"
              className="relative w-full rounded-xl object-contain"
            />
          </div>
        </div>

        {/* Text content — now blue-themed */}
        <div className="order-2 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Official Merch Is <span className="text-primary">Out</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-white/60 max-w-xs md:max-w-sm">
            Limited drop, made for the crowd. Once it's gone, it's gone.
          </p>

          <div className="h-px w-16 bg-gradient-to-r from-primary to-blue-300 mt-4 mb-8" />

          {/* CTA — matches countdown button exactly */}
          <button
            className="w-full sm:w-64 h-14 md:h-16 flex items-center justify-center px-6 bg-primary text-white font-headline font-black uppercase tracking-widest text-sm md:text-base hover:scale-105 active:scale-95 transition-all shadow-[6px_6px_0px_0px_rgba(77,96,189,0.4)]"
            onClick={() => window.open(CONFIG.merchUrl, "_blank")}
          >
            Grab Now
          </button>

        </div>

      </div>
    </section>
  );
}