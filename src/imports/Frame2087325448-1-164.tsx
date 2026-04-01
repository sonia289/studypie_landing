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
import { imgRectangle, imgRectangle1 } from "./svg-vklkc";
type GroupRectangleBackgroundImageProps = {
  additionalClassNames?: string;
};

function GroupRectangleBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupRectangleBackgroundImageProps>) {
  return (
    <div style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }} className={clsx("[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute mask-size-[1080.46px_632.977px,_1462.72px_1043.13px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">{children}</div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("flex-none", additionalClassNames)}>
      <div className="bg-[#435af7] font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] h-[84px] leading-[normal] not-italic overflow-clip relative text-[30px] text-center text-nowrap text-white w-[1236px]">
        <p className="absolute left-[225.5px] top-[23px] translate-x-[-50%]">{"비즈니스 영어 패키지 64%~"}</p>
        <p className="absolute left-[621.5px] top-[23px] translate-x-[-50%]">{"비즈니스 영어 패키지 64%~"}</p>
        <p className="absolute left-[1011.5px] top-[23px] translate-x-[-50%]">{"비즈니스 영어 패키지 64%~"}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bottom-0 left-[calc(50%+0.5px)] top-[-4.36%] translate-x-[-50%] w-[1081px]" data-name="검정 배경">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1081 838">
          <path d="M0 0H1081V838H540.5H0V0Z" fill="var(--fill-0, black)" id="ê²ì  ë°°ê²½" />
        </svg>
      </div>
      <div className="absolute contents inset-[0_-0.04%_21.17%_0]" data-name="강의 이미지">
        <div className="absolute contents inset-[-25.54%_-17.47%_-4.36%_-17.96%]" data-name="Group">
          <div className="absolute contents inset-[-25.54%_-17.47%_-4.36%_-17.96%]" data-name="Clip path group">
            <div className="absolute contents inset-[-36.25%_-12.7%_-15.44%_-1.51%]" data-name="Group">
              <div className="absolute contents inset-[-36.25%_-12.7%_-15.44%_-1.51%]" data-name="Group">
                <GroupRectangleBackgroundImage additionalClassNames="inset-[25.05%_65.62%_46.07%_-1.42%] mask-position-[15.379px,_-178.621px_-201.148px,_-406.227px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
                </GroupRectangleBackgroundImage>
                <GroupRectangleBackgroundImage additionalClassNames="inset-[20.94%_26.82%_42.01%_36.65%] mask-position-[-395.773px,_-589.773px_-168.141px,_-373.219px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
                </GroupRectangleBackgroundImage>
                <GroupRectangleBackgroundImage additionalClassNames="inset-[16.04%_-12.7%_36.9%_74.57%] mask-position-[-805.395px,_-999.395px_-128.836px,_-333.914px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle4} />
                </GroupRectangleBackgroundImage>
                <GroupRectangleBackgroundImage additionalClassNames="inset-[57.16%_27.2%_-1.47%_35.77%] mask-position-[-386.27px,_-580.27px_-459px,_-664.078px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle5} />
                </GroupRectangleBackgroundImage>
                <GroupRectangleBackgroundImage additionalClassNames="inset-[-8.4%_65.79%_75.2%_-1.51%] mask-position-[16.324px,_-177.676px_67.469px,_-137.609px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle6} />
                </GroupRectangleBackgroundImage>
                <GroupRectangleBackgroundImage additionalClassNames="inset-[-22.68%_27.47%_78.4%_35.66%] mask-position-[-385.098px,_-579.098px_182.148px,_-22.93px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle7} />
                </GroupRectangleBackgroundImage>
                <GroupRectangleBackgroundImage additionalClassNames="inset-[-36.25%_-11.56%_83.27%_71.95%] mask-position-[-777.07px,_-971.07px_291.094px,_86.016px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle8} />
                </GroupRectangleBackgroundImage>
                <GroupRectangleBackgroundImage additionalClassNames="inset-[54.21%_65.8%_12.59%_-1.49%] mask-position-[16.125px,_-177.875px_-435.289px,_-640.367px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle9} />
                </GroupRectangleBackgroundImage>
                <GroupRectangleBackgroundImage additionalClassNames="inset-[62.36%_-11.68%_-15.44%_72.07%] mask-position-[-778.344px,_-972.344px_-500.781px,_-705.859px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle10} />
                </GroupRectangleBackgroundImage>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[806px] left-1/2 top-[calc(50%-1.5px)] translate-x-[-50%] translate-y-[-50%] w-[1080px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1080 806\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.0964e-13 67.2 -90.045 -1.6278e-12 540 9.6643e-12)\\\'><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.48965\\\'/><stop stop-color=\\\'rgba(0,0,0,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute flex h-[456.757px] items-center justify-center left-[-27.64px] top-[304px] w-[1202.784px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <BackgroundImage additionalClassNames="rotate-[342.253deg]" />
      </div>
      <div className="absolute bg-gradient-to-b from-[34.078%] from-[rgba(0,0,0,0)] h-[274px] left-1/2 to-[#000000] to-[75.73%] top-[calc(50%+352.5px)] translate-x-[-50%] translate-y-[-50%] w-[1080px]" />
      <div className="absolute bg-[rgba(0,0,0,0.69)] h-[1265px] left-1/2 top-[calc(50%+228px)] translate-x-[-50%] translate-y-[-50%] w-[1080px]" />
      <div className="absolute flex h-[239.156px] items-center justify-center left-[-11px] top-[574px] w-[1236.728px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <BackgroundImage additionalClassNames="rotate-[352.757deg]" />
      </div>
      <div className="absolute h-[584px] left-[34px] top-[118px] w-[1014px]" data-name="카피">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[84.39%] left-[6.62%] max-w-none top-[7.81%] w-[86.76%]" src={img} />
        </div>
      </div>
      <div className="absolute bg-[#435af7] h-[65px] left-[calc(50%+0.5px)] overflow-clip top-0 translate-x-[-50%] w-[1081px]" data-name="상단 띠배너">
        <div className="absolute content-stretch flex gap-[32px] items-center left-[calc(50%+32px)] top-[13.42px] translate-x-[-50%]">
          <p className="font-['Spoqa_Han_Sans_Neo:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[30px] text-center text-nowrap text-white">
            <span>{`비즈니스 영어 패키지 `}</span>
            <span className="font-['Spoqa_Han_Sans_Neo:Bold',sans-serif]">UPTO 64% + 12만원 할인</span>
          </p>
          <a 
            href="https://studypie.co/course/a/english_package_2022" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black h-[39.525px] overflow-clip relative rounded-[53.683px] shrink-0 w-[164px] cursor-pointer hover:bg-gray-800 transition-colors"
          >
            <p className="absolute font-['Spoqa_Han_Sans_Neo:Medium',sans-serif] leading-[normal] left-[81.32px] not-italic text-[18.656px] text-center text-nowrap text-white top-[7.81px] tracking-[-1.4925px] translate-x-[-50%]">강의 보러 가기 →</p>
          </a>
        </div>
      </div>
    </div>
  );
}