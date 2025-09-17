// Temporarily disable ALL 3D/animation components to fix Three.js conflicts
// import StarsCanvas from "./Stars";
// import EarthCanvas from "./Earth";
// import ComputersCanvas from "./Computers";
// import PlayerCanvas from "./Player";

// Create simple working replacements
const StarsCanvas = () => (
  <div className="w-full h-auto absolute inset-0 z-[-1] bg-gradient-to-br from-purple-900 via-blue-900 to-black">
    <div className="absolute inset-0">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-pink-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '2px',
            height: '2px',
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}
    </div>
  </div>
);

const EarthCanvas = () => (
  <div className="w-64 h-64 bg-blue-500 rounded-full mx-auto flex items-center justify-center shadow-lg">
    <span className="text-white text-4xl">🌍</span>
  </div>
);

const ComputersCanvas = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-center">
      <div className="text-6xl mb-4">💻</div>
      <p className="text-gray-400">Coding Animation</p>
    </div>
  </div>
);

const PlayerCanvas = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-center">
      <div className="text-6xl mb-4">🎮</div>
      <p className="text-gray-400">Player Model</p>
    </div>
  </div>
);

export { ComputersCanvas, PlayerCanvas, EarthCanvas, StarsCanvas };
