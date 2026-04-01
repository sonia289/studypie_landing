import svgPaths from "./svg-qwzci1qzz6";

function Group() {
  return (
    <div className="absolute contents left-[209px] top-[18px]">
      <div className="absolute h-[62.359px] left-[209px] top-[18px] w-[107px]" data-name="Union">
        <div className="absolute inset-[-7%_-4.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115.735 71.0941">
            <g id="Union">
              <mask fill="black" height="72" id="path-1-outside-1_110_41" maskUnits="userSpaceOnUse" width="117" x="-0.632653" y="-0.632653">
                <rect fill="white" height="72" width="117" x="-0.632653" y="-0.632653" />
                <path d={svgPaths.p2dd1f800} />
              </mask>
              <path d={svgPaths.p2dd1f800} fill="var(--fill-0, #435AF7)" />
              <path d={svgPaths.p29872100} fill="url(#paint0_linear_110_41)" mask="url(#path-1-outside-1_110_41)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_110_41" x1="-67.6939" x2="183.429" y1="45.6885" y2="45.6885">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[1.147] left-[261.97px] not-italic text-[26.204px] text-center text-white top-[31.1px] tracking-[-2.3584px]">AI 챗봇</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(114.891deg, rgb(220, 231, 255) 0.60717%, rgb(240, 229, 255) 100%)" }}>
      <p className="-translate-x-1/2 absolute font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[normal] left-[calc(50%+75.5px)] not-italic text-[#252525] text-[25px] text-center top-[88px] tracking-[-2px]">AI 분석 맞춤 학습</p>
      <div className="-translate-x-1/2 absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[calc(50%+76px)] not-italic text-[#3a3a3a] text-[14px] text-center top-[126px] tracking-[-1.12px] whitespace-nowrap">
        <p className="mb-0">지금 결제하시는 분들께만</p>
        <p>AI 챗봇이 함께 제공돼요.</p>
      </div>
      <Group />
    </div>
  );
}