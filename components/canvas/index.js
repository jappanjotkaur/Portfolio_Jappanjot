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

const EarthCanvas = ({ isMobile }) => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <div className="relative">
        {/* Floating particles for ambient effect */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}

        {/* Main Image */}
        <img 
          src="/hero-img.jpg"
          alt="Skills Illustration"
          className={`
            ${isMobile ? 'w-80 h-80' : 'w-96 h-96'} 
            object-contain
            transition-all duration-700 ease-in-out
            hover:scale-110 hover:rotate-3
            filter hover:brightness-110
            drop-shadow-2xl
          `}
          style={{
            filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.3))',
          }}
        />

        {/* Subtle glow effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full animate-pulse"
          style={{ 
            animationDuration: '4s',
            transform: 'scale(1.1)',
            zIndex: -1
          }}
        />
      </div>
    </div>
  );
};
// Add PlayerCanvas as null to prevent import errors
const PlayerCanvas = () => null;

// Update the export to use the new keyboard component
export { ComputersCanvas, EarthCanvas, StarsCanvas, PlayerCanvas };
