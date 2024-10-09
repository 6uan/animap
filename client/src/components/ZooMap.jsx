import Marker from "./Marker";

const ZooMap = () => {
  return (
    <div className="relative flex h-auto flex-grow items-center justify-center bg-[#6f8177] px-40">
      <div className="relative aspect-[16/9] w-full border-8 border-black bg-zoo2 bg-cover bg-center bg-no-repeat">
        <Marker
          title="Tropical Aviary"
          className="left-[27%] top-[64%]"
          location="TropicalAviary"
        />
        <Marker
          title="Reptile Kingdom"
          className="left-[56%] top-[72%]"
          location="ReptileKingdom"
        />
        <Marker
          title="Aquatic World"
          className="left-[51%] top-[39%]"
          location="AquaticWorld"
        />
        <Marker
          title="Main Zoo Entrance"
          className="left-[65%] top-[37%]"
          location="MainZooEntrance"
        />
        <Marker
          title="Cafeteria"
          className="left-[22%] top-[34%]"
          location="Cafeteria"
        />
      </div>
    </div>
  );
};

export default ZooMap;
