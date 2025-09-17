import StarsCanvas from "./Stars";
import EarthCanvas from "./Earth";

// Temporarily disable Three.js components that cause conflicts
// import ComputersCanvas from "./Computers";
// import PlayerCanvas from "./Player";

// Create placeholder components to prevent import errors
const ComputersCanvas = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded">
    <p className="text-white">3D Model Loading...</p>
  </div>
);

const PlayerCanvas = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded">
    <p className="text-white">3D Model Loading...</p>
  </div>
);

export { ComputersCanvas, PlayerCanvas, EarthCanvas, StarsCanvas };
