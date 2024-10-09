import { twMerge } from "tailwind-merge";
import { PiMapPinFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Marker = ({ title, className, location }) => {
  return (
    <Link to={`/location/${location}`}>
      <div className={twMerge("absolute size-10", className)}>
        <PiMapPinFill
          className="h-full w-full cursor-pointer hover:animate-bounce hover:fill-green-600"
          title={title}
        ></PiMapPinFill>
      </div>
    </Link>
  );
};

export default Marker;
