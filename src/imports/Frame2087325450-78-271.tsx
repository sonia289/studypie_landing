import svgPaths from "./svg-m37h7g751z";
import clsx from "clsx";
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <p className="mb-0">
      <span className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] not-italic">{text}</span>
      {text1}
    </p>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("absolute content-stretch flex gap-[5.014px] items-center top-[173.5px]", additionalClassNames)}>
      <div className="h-[11.7px] relative shrink-0 w-[58.501px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.5012 11.7002">
          <g id="Frame 2087325438">
            <path d={svgPaths.p373fe700} fill="var(--fill-0, #D9FF00)" id="Star 41" />
            <path d={svgPaths.pa411800} fill="var(--fill-0, #D9FF00)" id="Star 42" />
            <path d={svgPaths.p396193c0} fill="var(--fill-0, #D9FF00)" id="Star 43" />
            <path d={svgPaths.p7c30380} fill="var(--fill-0, #D9FF00)" id="Star 44" />
            <path d={svgPaths.p239c8b80} fill="var(--fill-0, #D9FF00)" id="Star 45" />
          </g>
        </svg>
      </div>
      <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a9a9a9] text-[9.436px] w-[52.085px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[26.075px] items-center relative size-full overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory" style={{ WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
      <div className="bg-[rgba(255,255,255,0.12)] h-[203.918px] overflow-clip relative rounded-[12.035px] shrink-0 w-[291.503px] snap-center">
        <div className="absolute font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[normal] left-[calc(50%-118.34px)] not-italic text-[#d9ff00] text-[14.375px] top-[20.41px] w-[172.495px]">
          <p className="mb-0">딱딱하지 않아 지루하지 않고</p>
          <p>내용도 알차요</p>
        </div>
        <div className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[calc(50%-118.34px)] not-italic text-[12.703px] text-white top-[68.2px] w-[247.711px]">
          <Helper text="캐주얼하고 실제로 많이 쓰이는 용어" text1="를 배우고 실생활에 적용할 수 있도록 쉽고 재미있게" />
          <p className="mb-0">가르쳐 주십니다. 강의 자체도 경직되고</p>
          <p>딱딱하지 않아서 지루하지 않네요</p>
        </div>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[calc(50%-118.34px)] not-italic text-[#a9a9a9] text-[8.357px] top-[159.8px] w-[46.132px]">AI***ang님</p>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[16.38px] not-italic text-[22.719px] text-nowrap text-white top-[18.73px]">“</p>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[110.65px] not-italic text-[22.719px] text-nowrap text-white top-[36.44px]">”</p>
        <Text text="25.10.14" additionalClassNames="left-[26.41px]" />
      </div>
      <div className="bg-[rgba(255,255,255,0.12)] h-[203.918px] overflow-clip relative rounded-[12.035px] shrink-0 w-[291.503px] snap-center">
        <div className="absolute font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[normal] left-[calc(50%-118.34px)] not-italic text-[#d9ff00] text-[14.375px] top-[20.41px] w-[172.495px]">
          <p className="mb-0">필요한 표현들이 체계적으로</p>
          <p>정리 되어 있어요</p>
        </div>
        <div className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[calc(50%-118.34px)] not-italic text-[12.703px] text-white top-[68.2px] w-[247.711px]">
          <p className="mb-0">
            <span>{`반신반의하며 수강신청 했는데 `}</span>
            <span className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] not-italic">정말 필요한</span>
          </p>
          <Helper text="표현들이 체계적으로 잘 정리" text1="되어 있어서 많은" />
          <p>도움을 받았어요 최고입니다</p>
        </div>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[calc(50%-118.34px)] not-italic text-[#a9a9a9] text-[8.357px] top-[159.8px] w-[46.132px]">2S**mer님</p>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[16.38px] not-italic text-[22.719px] text-nowrap text-white top-[18.73px]">“</p>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[126.7px] not-italic text-[22.719px] text-nowrap text-white top-[36.44px]">”</p>
        <Text text="25.11.25" additionalClassNames="left-[26.41px]" />
      </div>
      <div className="bg-[rgba(255,255,255,0.12)] h-[203.918px] overflow-clip relative rounded-[12.035px] shrink-0 w-[291.503px] snap-center">
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[normal] left-[calc(50%-118.35px)] not-italic text-[#d9ff00] text-[14.375px] top-[20.41px] w-[172.495px]">군더더기 없고, 실무에 도움이 많이 되는 강의</p>
        <div className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[calc(50%-118.35px)] not-italic text-[12.703px] text-white top-[68.2px] w-[247.711px]">
          <p className="mb-0">
            <span>{`군더더기가 없고, `}</span>
            <span className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] not-italic">실무에 너무 도움이 많이</span>
          </p>
          <p className="mb-0">
            <span className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] not-italic">됩니다</span>
            <span>{` 설명도 지루하지 않고 센스있으셔서`}</span>
          </p>
          <p className="mb-0">시간 가는 줄 모릅니다. 온라인 강의 중</p>
          <p>최고입니다.</p>
        </div>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[calc(50%-118.35px)] not-italic text-[#a9a9a9] text-[8.357px] top-[159.8px] w-[46.132px]">박**님</p>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[16.37px] not-italic text-[22.719px] text-nowrap text-white top-[18.73px]">“</p>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[113.66px] not-italic text-[22.719px] text-nowrap text-white top-[36.44px]">”</p>
        <Text text="25.11.30" additionalClassNames="left-[26.4px]" />
      </div>
      <div className="bg-[rgba(255,255,255,0.12)] h-[203.918px] overflow-clip relative rounded-[12.035px] shrink-0 w-[291.503px] snap-center">
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[normal] left-[calc(50%-118.34px)] not-italic text-[#d9ff00] text-[14.375px] top-[20.41px] w-[172.495px]">예시들과 꼼꼼한 설명을 통해 따른 흐름수가 가능!</p>
        <div className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[calc(50%-118.34px)] not-italic text-[12.703px] text-white top-[68.2px] w-[247.711px]">
          <p className="mb-0">전에는 생각 없이 썼던 표현들을 강의를 통해</p>
          <Helper text="뉘앙스 구분이 가능해지고" text1=", 다양한 예시들과" />
          <p className="mb-0">쌤의 설명을 통해 빨리 흡수할 수 있게 되었던 것</p>
          <p>같아요!</p>
        </div>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[calc(50%-118.34px)] not-italic text-[#a9a9a9] text-[8.357px] top-[159.8px] w-[46.132px]">슬**59님</p>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[16.37px] not-italic text-[22.719px] text-nowrap text-white top-[18.73px]">“</p>
        <p className="absolute font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] left-[145.74px] not-italic text-[22.719px] text-nowrap text-white top-[36.44px]">”</p>
        <Text text="25.12.15" additionalClassNames="left-[26.4px]" />
      </div>
    </div>
  );
}