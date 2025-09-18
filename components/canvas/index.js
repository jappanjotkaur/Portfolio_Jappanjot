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
  const earthSize = isMobile ? '200px' : '300px';
  const containerSize = isMobile ? '250px' : '400px';
  
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Main container with orbital space */}
      <div 
        className="relative flex items-center justify-center"
        style={{
          width: containerSize,
          height: containerSize,
        }}
      >
        {/* Floating particles around Earth */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${45 + Math.cos((i * 30) * Math.PI / 180) * 35}%`,
              top: `${45 + Math.sin((i * 30) * Math.PI / 180) * 35}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.6,
            }}
          />
        ))}

        {/* Orbital rings */}
        <div className="absolute inset-0 border border-blue-300 rounded-full opacity-20 animate-spin" 
             style={{ animationDuration: '15s' }} />
        <div className="absolute inset-4 border border-cyan-300 rounded-full opacity-15 animate-spin" 
             style={{ animationDuration: '25s', animationDirection: 'reverse' }} />

        {/* Satellites */}
        <div className="absolute inset-0">
          {/* Satellite 1 */}
          <div 
            className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-lg animate-spin"
            style={{
              left: '50%',
              top: '10%',
              marginLeft: '-4px',
              marginTop: '-4px',
              animationDuration: '12s',
              transformOrigin: '4px calc(50vh - 10vh)',
            }}
          >
            <div className="absolute -inset-1 bg-yellow-300 rounded-full animate-ping opacity-30" />
          </div>
          
          {/* Satellite 2 */}
          <div 
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full shadow-lg animate-spin"
            style={{
              left: '85%',
              top: '50%',
              marginLeft: '-3px',
              marginTop: '-3px',
              animationDuration: '18s',
              animationDirection: 'reverse',
              transformOrigin: 'calc(-35vw + 3px) 3px',
            }}
          >
            <div className="absolute -inset-1 bg-purple-300 rounded-full animate-ping opacity-40" />
          </div>
        </div>

        {/* Main Earth */}
        <div 
          className="relative bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-full shadow-2xl animate-spin"
          style={{
            width: earthSize,
            height: earthSize,
            animationDuration: '20s',
            boxShadow: '0 0 50px rgba(59, 130, 246, 0.5), inset 0 0 50px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Atmosphere glow */}
          <div 
            className="absolute -inset-2 bg-gradient-to-br from-cyan-200 to-blue-400 rounded-full opacity-20 animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          
          {/* Base land mass */}
          <div className="absolute inset-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-70" />
          
          {/* Animated continents */}
          <div className="absolute top-8 left-8 w-4 h-4 bg-green-500 rounded-full opacity-80 animate-pulse" 
               style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-12 right-12 w-6 h-6 bg-green-400 rounded-full opacity-60 animate-pulse" 
               style={{ animationDelay: '1s' }} />
          <div className="absolute top-16 right-16 w-3 h-3 bg-yellow-400 rounded-full opacity-70 animate-pulse" 
               style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-6 w-2 h-2 bg-green-300 rounded-full opacity-50 animate-pulse" 
               style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-8 left-1/2 w-5 h-3 bg-green-500 rounded-full opacity-60 animate-pulse" 
               style={{ animationDelay: '2.5s' }} />
          
          {/* Clouds */}
          <div className="absolute top-6 left-12 w-8 h-4 bg-white rounded-full opacity-30 animate-float" />
          <div className="absolute bottom-16 right-8 w-6 h-3 bg-white rounded-full opacity-25 animate-float" 
               style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-4 w-4 h-2 bg-white rounded-full opacity-20 animate-float" 
               style={{ animationDelay: '1s' }} />
          
          {/* City lights (night side effect) */}
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-twinkle opacity-80" />
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-orange-300 rounded-full animate-twinkle opacity-60" 
               style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-yellow-200 rounded-full animate-twinkle opacity-70" 
               style={{ animationDelay: '2s' }} />
        </div>

        {/* Communication waves */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={`wave-${i}`}
              className="absolute border-2 border-cyan-400 rounded-full opacity-30 animate-ping"
              style={{
                width: `${120 + i * 40}%`,
                height: `${120 + i * 40}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom animations styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-3px) translateX(1px); }
          50% { transform: translateY(-6px) translateX(2px); }
          75% { transform: translateY(-3px) translateX(1px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Add PlayerCanvas as null to prevent import errors
const PlayerCanvas = () => null;

export { ComputersCanvas, EarthCanvas, StarsCanvas, PlayerCanvas };
