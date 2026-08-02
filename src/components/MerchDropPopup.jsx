import { useState, useEffect } from "react";

export default function MerchDropPopup({ onShopClick }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <>
      <style>{`
        @keyframes merchPopIn {
          0%   { transform: translateY(40px) scale(0.85); opacity: 0; }
          60%  { transform: translateY(-6px) scale(1.03); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 1; }
        }
        @keyframes merchBadgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(168,85,247,0.55); }
          50%      { box-shadow: 0 0 0 10px rgba(168,85,247,0); }
        }
        .merch-pop-in { animation: merchPopIn 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .merch-pulse  { animation: merchBadgePulse 2.2s ease-out infinite; }
      `}</style>

      {visible && (
        <div className="merch-pop-in absolute bottom-6 right-4 sm:bottom-10 sm:right-8 z-30 max-w-[230px] sm:max-w-xs">
          <div className="merch-pulse relative bg-slate-900 border-2 border-purple-500/60 rounded-2xl p-4 pr-9 flex items-center gap-3">
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="absolute top-2 right-2 text-white/40 hover:text-white text-xs leading-none"
            >
              ✕
            </button>

            <div
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{
                background:
                  "radial-gradient(circle, rgba(168,85,247,0.9) 0%, rgba(147,51,234,0.4) 70%)",
              }}
            >
              🔥
            </div>

            <div className="flex flex-col">
              <span
                className="text-white font-black uppercase tracking-wide text-sm"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Merch Dropped
              </span>
              <button
                onClick={onShopClick}
                className="text-purple-400 text-xs font-bold uppercase tracking-wider mt-0.5 hover:text-purple-300 transition-colors text-left"
              >
                Shop now →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
