import { twMerge } from "tailwind-merge";
import { PiMapPinFill } from "react-icons/pi";

const Marker = ({ title, className }) => {
  return (
    <div className={twMerge("absolute size-10", className)}>
      <PiMapPinFill
        className="h-full w-full cursor-pointer hover:animate-bounce hover:fill-green-600"
        title={title}
      ></PiMapPinFill>
    </div>
  );
};

export default Marker;
