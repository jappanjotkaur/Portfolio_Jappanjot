// Import the actual Computers component to use your Lottie animation
import ComputersCanvas from "./Computers";

// Keep other components as CSS to avoid conflicts
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

const EarthCanvas = ({ isMobile }) => (
  <div className="w-full h-full flex items-center justify-center">
    <div 
      className="relative bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-full shadow-2xl animate-spin"
      style={{
        width: isMobile ? '200px' : '300px',
        height: isMobile ? '200px' : '300px',
        animationDuration: '20s'
      }}
    >
      <div className="absolute inset-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-70"></div>
      <div className="absolute top-8 left-8 w-4 h-4 bg-green-500 rounded-full opacity-80"></div>
      <div className="absolute bottom-12 right-12 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
      <div className="absolute top-16 right-16 w-3 h-3 bg-yellow-400 rounded-full opacity-70"></div>
    </div>
  </div>
);

// Add PlayerCanvas as null to prevent import errors
const PlayerCanvas = () => null;

export { ComputersCanvas, EarthCanvas, StarsCanvas, PlayerCanvas };
