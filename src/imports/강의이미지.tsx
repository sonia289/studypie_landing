import clsx from "clsx";
import imgRectangle2 from "../assets/b06a8fef47b3a66fc4ffc63d1f0cb3298fc8513e.png";
import imgRectangle3 from "../assets/0d18f6487bf1811e018db304c5abaa25dc4317e3.png";
import imgRectangle4 from "../assets/b5d74c42e76c2897b02bcb75aa13dfbe39acee10.png";
import imgRectangle5 from "../assets/0372c52aafb9811a84bf2f2b1b7c007dbfebb285.png";
import imgRectangle6 from "../assets/3cd3a5d58a4c23865e9f4851258a7bf1ad6276b9.png";
import imgRectangle7 from "../assets/d1db5607421b500e3071ce92bfdca43705ef4564.png";
import imgRectangle8 from "../assets/e17f67c5f24ff5f44a9b5ac7e118780cda17bed8.png";
import imgRectangle9 from "../assets/a69e16c2c08f19866a3185832ee7ff6a8aaa44aa.png";
import imgRectangle10 from "../assets/7226244fa7ee112cea59282eabdb918e3d0c3d33.png";
import { imgRectangle, imgRectangle1 } from "./svg-eb3ml";
type GroupRectangleProps = {
  additionalClassNames?: string;
};

function GroupRectangle({ children, additionalClassNames = "" }: React.PropsWithChildren<GroupRectangleProps>) {
  return (
    <div style={{ maskImage: `url('${imgRectangle}'), url('${imgRectangle1}')` }} className={clsx("[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute mask-size-[375px_236.423px,_507.672px_389.618px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">{children}</div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="강의 이미지">
      <div className="absolute contents inset-[-32.4%_-17.42%_-32.4%_-17.95%]" data-name="Group">
        <div className="absolute contents inset-[-32.4%_-17.42%_-32.4%_-17.95%]" data-name="Clip path group">
          <div className="absolute contents inset-[-45.98%_-12.66%_-46.45%_-1.51%]" data-name="Group">
            <div className="absolute contents inset-[-45.98%_-12.66%_-46.45%_-1.51%]" data-name="Group">
              <GroupRectangle additionalClassNames="inset-[31.78%_65.63%_31.58%_-1.42%] mask-position-[5.336px,_-61.992px_-75.125px,_-151.719px]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
              </GroupRectangle>
              <GroupRectangle additionalClassNames="inset-[26.56%_26.85%_26.43%_36.63%] mask-position-[-137.367px,_-204.695px_-62.805px,_-139.398px]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
              </GroupRectangle>
              <GroupRectangle additionalClassNames="inset-[20.36%_-12.66%_19.95%_74.54%] mask-position-[-279.535px,_-346.863px_-48.125px,_-124.719px]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle4} />
              </GroupRectangle>
              <GroupRectangle additionalClassNames="inset-[72.52%_27.23%_-28.73%_35.75%] mask-position-[-134.066px,_-201.395px_-171.445px,_-248.039px]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle5} />
              </GroupRectangle>
              <GroupRectangle additionalClassNames="inset-[-10.66%_65.8%_68.54%_-1.51%] mask-position-[5.664px,_-61.664px_25.195px,_-51.398px]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle6} />
              </GroupRectangle>
              <GroupRectangle additionalClassNames="inset-[-28.78%_27.5%_72.6%_35.64%] mask-position-[-133.656px,_-200.984px_68.031px,_-8.563px]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle7} />
              </GroupRectangle>
              <GroupRectangle additionalClassNames="inset-[-45.98%_-11.52%_78.77%_71.92%] mask-position-[-269.699px,_-337.027px_108.719px,_32.125px]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle8} />
              </GroupRectangle>
              <GroupRectangle additionalClassNames="inset-[68.77%_65.81%_-10.89%_-1.49%] mask-position-[5.594px,_-61.734px_-162.586px,_-239.18px]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle9} />
              </GroupRectangle>
              <GroupRectangle additionalClassNames="inset-[79.12%_-11.63%_-46.45%_72.04%] mask-position-[-270.145px,_-337.473px_-187.047px,_-263.641px]">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle10} />
              </GroupRectangle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}