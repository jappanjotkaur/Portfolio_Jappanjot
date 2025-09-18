// Enable safe components (Lottie animations and Spline)
import ComputersCanvas from "./Computers";
import EarthCanvas from "./Earth";

// Temporarily disable components that might cause Three.js conflicts
// import StarsCanvas from "./Stars";
// import PlayerCanvas from "./Player";

// Create simple working replacements for problematic components
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

const PlayerCanvas = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-center">
      <div className="text-6xl mb-4">🎮</div>
      <p className="text-gray-400">Player Model</p>
    </div>
  </div>
);

export { ComputersCanvas, PlayerCanvas, EarthCanvas, StarsCanvas };
