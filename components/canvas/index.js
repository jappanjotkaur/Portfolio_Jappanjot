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
      className="relative flex items-center justify-center bg-gradient-to-br from-purple-500 via-blue-600 to-indigo-700 rounded-full shadow-2xl"
      style={{
        width: isMobile ? "220px" : "320px",
        height: isMobile ? "220px" : "320px",
      }}
    >
      {/* Main chat bubble */}
      <div className="absolute w-24 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-black font-semibold animate-bounce">
        💬 Hi!
      </div>

      {/* Small floating bubbles */}
      <div className="absolute -top-4 left-12 w-10 h-10 bg-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 -right-6 w-12 h-12 bg-green-400 rounded-full animate-bounce delay-150"></div>
      <div className="absolute top-10 right-10 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-14 left-6 w-8 h-8 bg-blue-300 rounded-full animate-bounce delay-300"></div>
    </div>
  </div>
);


// Add PlayerCanvas as null to prevent import errors
const PlayerCanvas = () => null;

export { ComputersCanvas, EarthCanvas, StarsCanvas, PlayerCanvas };
