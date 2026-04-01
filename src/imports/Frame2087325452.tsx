import svgPaths from "./svg-pt5lq2pyun";
import clsx from "clsx";
import imgLearningNoteExample1 from "figma:asset/3ec3f9309bb4d329c16106ff37df561ccbc7fcea.png";
import img20251114320331 from "figma:asset/83e04be8227eaa1b7d3d996a93b627d9093cf328.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[23.078px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[61.155px] items-center relative size-full">
      <div className="bg-[rgba(255,255,255,0.12)] h-[270.776px] overflow-clip relative rounded-[13.847px] shrink-0 w-[335.393px]">
        <div className="absolute h-[270.885px] left-[calc(50%-0.07px)] top-[calc(50%+0.05px)] translate-x-[-50%] translate-y-[-50%] w-[336.027px]" data-name="learning-note-example 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLearningNoteExample1} />
        </div>
        <Wrapper additionalClassNames="absolute left-[302.31px] top-[123.85px]">
          <g id="Frame 2087325444">
            <rect fill="var(--fill-0, black)" fillOpacity="0.31" height="23.0775" rx="11.5388" width="23.0775" />
            <path d={svgPaths.p8e1e280} id="Polygon 48" stroke="var(--stroke-0, white)" strokeWidth="1.11828" />
          </g>
        </Wrapper>
        <div className="absolute flex items-center justify-center left-[11.93px] size-[23.078px] top-[123.85px]">
          <div className="flex-none rotate-[180deg]">
            <Wrapper additionalClassNames="relative">
              <g id="Frame 2087325445">
                <rect fill="var(--fill-0, black)" fillOpacity="0.31" height="23.0775" rx="11.5388" width="23.0775" />
                <path d={svgPaths.p1564d400} id="Polygon 48" stroke="var(--stroke-0, white)" strokeWidth="1.11828" />
              </g>
            </Wrapper>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.12)] h-[270.776px] overflow-clip relative rounded-[13.847px] shrink-0 w-[335.393px]">
        <div className="absolute h-[410.187px] left-0 top-0 w-[335.249px]" data-name="스크린샷 2025-11-14 오후 3.20.33 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img20251114320331} />
        </div>
      </div>
    </div>
  );
}