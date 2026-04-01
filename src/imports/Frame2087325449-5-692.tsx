import clsx from "clsx";
import imgRectangle2 from "figma:asset/b06a8fef47b3a66fc4ffc63d1f0cb3298fc8513e.png";
import imgRectangle3 from "figma:asset/0d18f6487bf1811e018db304c5abaa25dc4317e3.png";
import imgRectangle4 from "figma:asset/b5d74c42e76c2897b02bcb75aa13dfbe39acee10.png";
import imgRectangle5 from "figma:asset/0372c52aafb9811a84bf2f2b1b7c007dbfebb285.png";
import imgRectangle6 from "figma:asset/3cd3a5d58a4c23865e9f4851258a7bf1ad6276b9.png";
import imgRectangle7 from "figma:asset/d1db5607421b500e3071ce92bfdca43705ef4564.png";
import imgRectangle8 from "figma:asset/e17f67c5f24ff5f44a9b5ac7e118780cda17bed8.png";
import imgRectangle9 from "figma:asset/a69e16c2c08f19866a3185832ee7ff6a8aaa44aa.png";
import imgRectangle10 from "figma:asset/7226244fa7ee112cea59282eabdb918e3d0c3d33.png";
import img from "figma:asset/fe3ff056d1cf7f4c04646c44f914c156159ba002.png";
import { imgRectangle, imgRectangle1 } from "./svg-ifjs4";
type GroupRectangleBackgroundImageProps = {
  additionalClassNames?: string;
};

function GroupRectangleBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupRectangleBackgroundImageProps>) {
  return (
    <div style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }} className={clsx("[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute mask-size-[375px_338px,_507.672px_389.618px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">{children}</div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-white h-[300px] left-0 overflow-clip top-0 w-[375px]">
        <div className="absolute bottom-0 left-1/2 top-0 translate-x-[-50%] w-[375px]" data-name="검정 배경">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 300">
            <path d="M0 0H375V300H187.5H0V0Z" fill="var(--fill-0, black)" id="ê²ì  ë°°ê²½" />
          </svg>
        </div>
        <div className="absolute contents inset-[-14.33%_0_1.67%_0]" data-name="강의 이미지">
          <div className="absolute contents inset-[-22.86%_-17.42%_-7.01%_-17.95%]" data-name="Group">
            <div className="absolute contents inset-[-22.86%_-17.42%_-7.01%_-17.95%]" data-name="Clip path group">
              <div className="absolute contents inset-[-33.57%_-12.66%_-18.08%_-1.51%]" data-name="Group">
                <div className="absolute contents inset-[-33.57%_-12.66%_-18.08%_-1.51%]" data-name="Group">
                  <GroupRectangleBackgroundImage additionalClassNames="inset-[27.71%_65.63%_43.42%_-1.42%] mask-position-[5.336px,_-61.992px_-126.125px,_-151.719px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
                  </GroupRectangleBackgroundImage>
                  <GroupRectangleBackgroundImage additionalClassNames="inset-[23.6%_26.85%_39.36%_36.63%] mask-position-[-137.367px,_-204.695px_-113.805px,_-139.398px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
                  </GroupRectangleBackgroundImage>
                  <GroupRectangleBackgroundImage additionalClassNames="inset-[18.71%_-12.66%_34.25%_74.54%] mask-position-[-279.535px,_-346.863px_-99.125px,_-124.719px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle4} />
                  </GroupRectangleBackgroundImage>
                  <GroupRectangleBackgroundImage additionalClassNames="inset-[59.82%_27.23%_-4.12%_35.75%] mask-position-[-134.066px,_-201.395px_-222.445px,_-248.039px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle5} />
                  </GroupRectangleBackgroundImage>
                  <GroupRectangleBackgroundImage additionalClassNames="inset-[-5.73%_65.8%_72.54%_-1.51%] mask-position-[5.664px,_-61.664px_-25.805px,_-51.398px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle6} />
                  </GroupRectangleBackgroundImage>
                  <GroupRectangleBackgroundImage additionalClassNames="inset-[-20.01%_27.5%_75.74%_35.64%] mask-position-[-133.656px,_-200.984px_17.031px,_-8.563px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle7} />
                  </GroupRectangleBackgroundImage>
                  <GroupRectangleBackgroundImage additionalClassNames="inset-[-33.57%_-11.52%_80.6%_71.92%] mask-position-[-269.699px,_-337.027px_57.719px,_32.125px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle8} />
                  </GroupRectangleBackgroundImage>
                  <GroupRectangleBackgroundImage additionalClassNames="inset-[56.86%_65.81%_9.95%_-1.49%] mask-position-[5.594px,_-61.734px_-213.586px,_-239.18px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle9} />
                  </GroupRectangleBackgroundImage>
                  <GroupRectangleBackgroundImage additionalClassNames="inset-[65.02%_-11.63%_-18.08%_72.04%] mask-position-[-270.145px,_-337.473px_-238.047px,_-263.641px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle10} />
                  </GroupRectangleBackgroundImage>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[300px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[375px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 375 300\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.7696e-13 25.012 -31.266 -6.0589e-13 187.5 3.5971e-12)\\\'><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.48965\\\'/><stop stop-color=\\\'rgba(0,0,0,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
        <div className="absolute flex h-[161.075px] items-center justify-center left-[-15px] top-[100px] w-[424.162px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[342.253deg]">
            <div className="bg-[#435af7] font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] h-[29.623px] leading-[normal] not-italic overflow-hidden relative text-[10.58px] text-center text-nowrap text-white w-[435.876px]" data-name="하단 띠배너2">
              <div className="diagonal-ticker">
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient-to-b from-[34.078%] from-[rgba(0,0,0,0)] h-[109.441px] left-[calc(50%+0.23px)] to-[#000000] to-[75.73%] top-[calc(50%+95.72px)] translate-x-[-50%] translate-y-[-50%] w-[635.465px]" />
        <div className="absolute bg-[rgba(0,0,0,0.69)] h-[300px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[375px]" />
        <div className="absolute flex h-[84.338px] items-center justify-center left-[-9.13px] top-[195.22px] w-[436.132px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[352.757deg]">
            <div className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] h-[29.623px] leading-[normal] not-italic overflow-hidden relative text-[10.58px] text-center text-nowrap text-white w-[435.876px]" data-name="하단 띠배너" style={{ backgroundImage: "linear-gradient(90.4773deg, rgb(67, 90, 247) 0%, rgb(57, 64, 201) 41.403%, rgb(92, 149, 255) 60.752%, rgb(18, 26, 78) 92.222%)" }}>
              <div className="diagonal-ticker diagonal-ticker-2">
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
                <span className="diagonal-ticker-text">비즈니스 영어 패키지 64%~</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[192.109px] left-[calc(50%+0.17px)] top-[48.14px] translate-x-[-50%] w-[333.335px]" data-name="카피">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[84.39%] left-[6.62%] max-w-none top-[7.81%] w-[86.76%]" src={img} />
          </div>
        </div>
        <div className="absolute bg-[#435af7] h-[32px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[375px]" data-name="상단 띠배너">
          <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.432px] text-center text-nowrap text-white tracking-[-0.6216px]">
              <span>{`비즈니스 영어 패키지 `}</span>
              <span className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif] tracking-[-0.8px]">UPTO 64% + 12만원 할인</span>
            </p>
            <div className="bg-black h-[18px] overflow-clip relative rounded-[25.036px] shrink-0 w-[76px]">
              <a 
                href="https://studypie.co/course/a/english_package_2022" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <p className="font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[normal] not-italic text-[8px] text-center text-white tracking-[-0.64px]">강의 보러 가기 →</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .diagonal-ticker {
          display: flex;
          position: absolute;
          top: 8px;
          left: 0;
          animation: diagonal-scroll 20s linear infinite;
          will-change: transform;
        }

        .diagonal-ticker-2 {
          animation: diagonal-scroll 25s linear infinite;
        }

        .diagonal-ticker-text {
          display: inline-block;
          padding: 0 25px;
          white-space: nowrap;
        }

        @keyframes diagonal-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}