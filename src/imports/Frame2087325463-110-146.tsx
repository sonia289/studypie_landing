import svgPaths from "./svg-rx6vro2irr";
import imgImage11815 from "figma:asset/39248ea0707955963c88240aa6774c12f088652f.png";
import img1 from "figma:asset/8fa2d7675a0ae862f451ffb6b383ea32a1cb99ba.png";
import { imgImage11814 } from "./svg-4vy62";

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

function MaskGroup1() {
  return (
    <div className="absolute contents left-[33.17px] top-[15.98px]" data-name="Mask group">
      <div className="absolute h-[265.239px] left-[32.56px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.609px_1.594px] mask-size-[121.434px_263.641px] top-[14.38px] w-[122.374px]" data-name="image 11814" style={{ maskImage: `url('${imgImage11814}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11815} />
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[30.5px] top-[14.61px]" data-name="Mask group">
      <div className="absolute h-[264.774px] left-[30.5px] top-[14.61px] w-[127.153px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127.153 264.774">
          <path d={svgPaths.p1b8a7480} fill="var(--fill-0, #0B0B0B)" id="Vector 609" />
        </svg>
      </div>
      <MaskGroup1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[10px] top-0">
      <MaskGroup />
      <div className="absolute h-[294px] left-[10px] top-0 w-[168.156px]" data-name="핸드폰 프레임 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
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
      <Group1 />
    </div>
  );
}