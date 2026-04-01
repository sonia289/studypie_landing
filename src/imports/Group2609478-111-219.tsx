import svgPaths from "./svg-nopl4wjavy";

export default function Group() {
  return (
    <div className="relative shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.41)] size-full">
      <div className="absolute h-[62.359px] left-0 top-0 w-[107px]" data-name="Union">
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
      <p className="-translate-x-1/2 absolute font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] leading-[1.147] left-[52.97px] not-italic text-[26.204px] text-center text-white top-[13.1px] tracking-[-2.3584px]">AI 챗봇</p>
    </div>
  );
}