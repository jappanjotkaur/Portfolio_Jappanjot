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
  const earthSize = isMobile ? '280px' : '420px';
  const containerSize = isMobile ? '350px' : '500px';
  
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
        {/* Cosmic background particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`cosmic-${i}`}
            className="absolute bg-gradient-to-r from-purple-300 to-pink-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}

        {/* Enhanced Orbital rings with gradient */}
        <div 
          className="absolute inset-0 rounded-full opacity-30 animate-spin border-2"
          style={{ 
            animationDuration: '20s',
            borderImage: 'linear-gradient(45deg, #8b5cf6, #06b6d4, #8b5cf6) 1'
          }} 
        />
        <div 
          className="absolute inset-8 rounded-full opacity-20 animate-spin border"
          style={{ 
            animationDuration: '35s', 
            animationDirection: 'reverse',
            borderColor: '#a855f7'
          }} 
        />
        <div 
          className="absolute inset-12 rounded-full opacity-15 animate-spin border"
          style={{ 
            animationDuration: '50s',
            borderColor: '#06b6d4'
          }} 
        />

        {/* Communication satellites with enhanced design */}
        <div className="absolute inset-0">
          {/* Main satellite */}
          <div 
            className="absolute animate-spin"
            style={{
              left: '50%',
              top: '8%',
              marginLeft: '-8px',
              marginTop: '-8px',
              animationDuration: '15s',
              transformOrigin: '8px calc(42vh - 8vh)',
            }}
          >
            <div className="relative w-4 h-4 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full shadow-lg">
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full animate-ping opacity-40" />
              <div className="absolute inset-1 bg-white rounded-full opacity-80" />
            </div>
          </div>
          
          {/* Secondary satellite */}
          <div 
            className="absolute animate-spin"
            style={{
              left: '88%',
              top: '50%',
              marginLeft: '-6px',
              marginTop: '-6px',
              animationDuration: '25s',
              animationDirection: 'reverse',
              transformOrigin: 'calc(-38vw + 6px) 6px',
            }}
          >
            <div className="relative w-3 h-3 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full shadow-lg">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full animate-ping opacity-50" />
            </div>
          </div>

          {/* Third satellite */}
          <div 
            className="absolute animate-spin"
            style={{
              left: '15%',
              top: '70%',
              marginLeft: '-5px',
              marginTop: '-5px',
              animationDuration: '18s',
              transformOrigin: 'calc(35vw - 5px) calc(-20vh + 5px)',
            }}
          >
            <div className="relative w-2.5 h-2.5 bg-gradient-to-br from-violet-300 to-purple-400 rounded-full shadow-lg">
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full animate-ping opacity-45" />
            </div>
          </div>
        </div>

        {/* Main Earth with sophisticated styling */}
        <div 
          className="relative rounded-full animate-spin shadow-2xl"
          style={{
            width: earthSize,
            height: earthSize,
            animationDuration: '30s',
            background: 'radial-gradient(circle at 30% 30%, #1e40af, #1e3a8a, #312e81, #1e1b4b)',
            boxShadow: `
              0 0 80px rgba(139, 92, 246, 0.4),
              0 0 120px rgba(139, 92, 246, 0.2),
              inset 0 0 80px rgba(0, 0, 0, 0.3)
            `,
          }}
        >
          {/* Enhanced Atmosphere layers */}
          <div 
            className="absolute -inset-4 rounded-full opacity-25 animate-pulse"
            style={{ 
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6), rgba(6, 182, 212, 0.4), transparent 70%)',
              animationDuration: '6s' 
            }}
          />
          <div 
            className="absolute -inset-6 rounded-full opacity-15 animate-pulse"
            style={{ 
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.3), transparent 60%)',
              animationDuration: '8s',
              animationDelay: '1s'
            }}
          />
          
          {/* Continental masses with purple/blue theme */}
          <div 
            className="absolute inset-6 rounded-full opacity-60"
            style={{ 
              background: 'radial-gradient(ellipse 60% 80% at 40% 30%, #059669, #047857, transparent 70%)'
            }} 
          />
          
          {/* Animated continents with matching colors */}
          <div className="absolute top-12 left-12 w-8 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-70 animate-pulse" 
               style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-16 right-16 w-12 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-60 animate-pulse" 
               style={{ animationDelay: '1s' }} />
          <div className="absolute top-20 right-20 w-6 h-4 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-65 animate-pulse" 
               style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-8 w-4 h-6 bg-gradient-to-br from-emerald-300 to-green-400 rounded-full opacity-50 animate-pulse" 
               style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-12 left-1/2 w-10 h-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-full opacity-55 animate-pulse" 
               style={{ animationDelay: '2.5s' }} />
          
          {/* Enhanced Clouds with gradient */}
          <div className="absolute top-8 left-16 w-12 h-6 bg-gradient-to-r from-white to-purple-100 rounded-full opacity-40 animate-float" />
          <div className="absolute bottom-20 right-12 w-10 h-5 bg-gradient-to-r from-white to-blue-100 rounded-full opacity-35 animate-float" 
               style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-6 w-8 h-4 bg-gradient-to-r from-white to-cyan-100 rounded-full opacity-30 animate-float" 
               style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 left-1/3 w-6 h-3 bg-gradient-to-r from-white to-purple-50 rounded-full opacity-25 animate-float" 
               style={{ animationDelay: '3s' }} />
          
          {/* City lights with purple/pink theme */}
          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-twinkle opacity-80 shadow-lg shadow-purple-300" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-twinkle opacity-70 shadow-lg shadow-pink-300" 
               style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-violet-300 rounded-full animate-twinkle opacity-75 shadow-lg shadow-violet-300" 
               style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-purple-200 rounded-full animate-twinkle opacity-60" 
               style={{ animationDelay: '1.5s' }} />
          
          {/* Aurora-like effects */}
          <div className="absolute top-4 left-1/4 w-16 h-2 bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full opacity-30 animate-pulse"
               style={{ animationDelay: '0.5s', animationDuration: '4s' }} />
          <div className="absolute bottom-6 right-1/4 w-12 h-1.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent rounded-full opacity-25 animate-pulse"
               style={{ animationDelay: '2s', animationDuration: '5s' }} />
        </div>

        {/* Enhanced Communication waves matching theme */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <div
              key={`wave-${i}`}
              className="absolute rounded-full opacity-20 animate-ping border-2"
              style={{
                width: `${140 + i * 35}%`,
                height: `${140 + i * 35}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: '4s',
                borderColor: i % 2 === 0 ? '#8b5cf6' : '#06b6d4',
              }}
            />
          ))}
        </div>

        {/* Data streams */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute w-px h-8 bg-gradient-to-t from-transparent via-purple-300 to-transparent animate-pulse"
            style={{
              left: `${20 + i * 12}%`,
              top: `${10 + Math.sin(i) * 20}%`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.6,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}
      </div>

      {/* Custom animations styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-4px) translateX(2px) rotate(1deg); }
          50% { transform: translateY(-8px) translateX(4px) rotate(0deg); }
          75% { transform: translateY(-4px) translateX(2px) rotate(-1deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.8; 
            transform: scale(1); 
            box-shadow: 0 0 10px currentColor;
          }
          50% { 
            opacity: 0.3; 
            transform: scale(0.7);
            box-shadow: 0 0 20px currentColor;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Add PlayerCanvas as null to prevent import errors
const PlayerCanvas = () => null;

export { ComputersCanvas, EarthCanvas, StarsCanvas, PlayerCanvas };
