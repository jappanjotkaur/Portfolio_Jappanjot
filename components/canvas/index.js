import StarsCanvas from "./Stars";

// Temporarily disable 3D components that cause Three.js conflicts
// import ComputersCanvas from "./Computers";
// import PlayerCanvas from "./Player";
// import EarthCanvas from "./Earth";

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

const EarthCanvas = () => (
  <div className="w-64 h-64 bg-blue-500 rounded-full mx-auto flex items-center justify-center">
    <p className="text-white text-center">🌍<br/>Earth</p>
  </div>
);

export { ComputersCanvas, PlayerCanvas, EarthCanvas, StarsCanvas };
