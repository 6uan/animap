const Background = () => {
  return (
    <div className="relative flex h-full items-center justify-center border-2 border-red-500 px-40">
      <div className="bg-zoo2 relative aspect-[16/9] w-full border-2 bg-contain bg-center bg-no-repeat">
        {/* Marker 1 */}
        <div
          className="absolute left-[30%] top-[20%] h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-blue-500"
          title="Marker 1"
          onClick={() => alert("This is marker 1")}
        ></div>

        {/* Marker 2 */}
        <div
          className="absolute left-[50%] top-[50%] h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-green-500"
          title="Marker 2"
          onClick={() => alert("This is marker 2")}
        ></div>

        {/* Marker 3 */}
        <div
          className="absolute left-[80%] top-[70%] h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-red-500"
          title="Marker 3"
          onClick={() => alert("This is marker 3")}
        ></div>
      </div>
    </div>
  );
};

export default Background;
