import svgPaths from "./svg-zpu4cnv4pb";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[34px] left-0 top-0 w-[115px]" data-name="Union">
        <div className="absolute inset-[-5.88%_-1.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 38">
            <g id="Union">
              <mask fill="black" height="38" id="path-1-outside-1_101_53" maskUnits="userSpaceOnUse" width="119" x="0" y="0">
                <rect fill="white" height="38" width="119" />
                <path d={svgPaths.p3a2c5040} />
              </mask>
              <path d={svgPaths.p3a2c5040} fill="var(--fill-0, #435AF7)" />
              <path d={svgPaths.p22bc9b80} fill="url(#paint0_linear_101_53)" mask="url(#path-1-outside-1_101_53)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_101_53" x1="2" x2="117" y1="20.9229" y2="20.9229">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[1.147] left-[57.5px] not-italic text-[12px] text-center text-white top-[6px] tracking-[-1.08px]">AI 챗봇 업데이트 버전</p>
    </div>
  );
}