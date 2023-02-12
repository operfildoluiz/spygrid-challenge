import { Coordinates } from "../types/coordinates";

interface MapProps {
  coordinates?: Coordinates;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

const Map = ({ coordinates, address, city, state, country }: MapProps) => {
  const query = [address, city, state, country, coordinates?.latitude, coordinates?.longitude].filter(Boolean).join(", ");

  console.log(`https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`);

  return (
    <div className="flex flex-col items-center w-full border">
      <h1 className="w-full text-2xl font-bold bg-white text-black text-center h-[48px] border is-center">agent location</h1>
      <h2 className="text-xl font-bold text-white lowercase">{query}</h2>
      <div className="w-full h-full">
        <iframe
          className="w-full h-full"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`}
          title="Map"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default Map;
