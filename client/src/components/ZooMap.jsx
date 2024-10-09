import { PiMapPinFill } from "react-icons/pi";
import Marker from "./Marker";

const ZooMap = () => {
  return (
    <div className="relative flex h-auto flex-grow items-center justify-center bg-[#6f8177] px-40">
      <div className="relative aspect-[16/9] w-full border-8 border-black bg-zoo2 bg-cover bg-center bg-no-repeat">
        <Marker title="The Plaza" className="left-[51%] top-[39%]" />
        <Marker title="The Plaza" className="left-[65%] top-[37%]" />
        <Marker title="The Plaza" className="left-[27%] top-[64%]" />
        <Marker title="The Plaza" className="left-[22%] top-[34%]" />
        <Marker title="The Plaza" className="left-[56%] top-[72%]" />
      </div>
    </div>
  );
};

export default ZooMap;
