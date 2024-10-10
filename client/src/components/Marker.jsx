import { twMerge } from "tailwind-merge";
import { PiMapPinFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Marker = ({ title, className, location }) => {
  return (
    <Link to={`/location/${location}`}>
      <div className={twMerge("group absolute size-10", className)}>
        {/* Tooltip container */}
        <div className="font-source-code absolute bottom-full left-1/2 mb-2 hidden w-max -translate-x-1/2 items-center justify-center rounded-lg bg-gray-700 px-2 py-1 text-sm text-white shadow-md group-hover:flex">
          {title}
          <div className="absolute bottom-[-3px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 transform bg-gray-700"></div>
        </div>

        <PiMapPinFill className="h-full w-full cursor-pointer hover:animate-pulse hover:fill-green-600" />
      </div>
    </Link>
  );
};

export default Marker;
