export default function TickerBanner() {
  // Repeat the text multiple times to ensure seamless loop
  const tickerText = "비즈니스 영어 패키지 64% 할인";
  const repeatedText = Array(20).fill(tickerText).join(" • ");

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1e3a8a] h-16 overflow-hidden z-50">
      <div className="ticker-wrapper h-full flex items-center">
        <div className="ticker-content whitespace-nowrap">
          <span className="text-white inline-block px-4">
            {repeatedText}
          </span>
          <span className="text-white inline-block px-4" aria-hidden="true">
            {repeatedText}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-content {
          display: inline-flex;
          animation: scroll-left 30s linear infinite;
        }

        .ticker-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
