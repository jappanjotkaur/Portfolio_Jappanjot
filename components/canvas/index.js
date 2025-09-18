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

const SkillsKeyboardCanvas = ({ isMobile }) => {
  // Define skills keyboard layout with icons and colors
  const skillRows = [
    [
      { skill: 'JS', color: 'from-yellow-400 to-yellow-600', bgColor: 'bg-yellow-500' },
      { skill: 'TS', color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-500' },
      { skill: 'React', color: 'from-cyan-400 to-cyan-600', bgColor: 'bg-cyan-500' },
      { skill: 'Node', color: 'from-green-400 to-green-600', bgColor: 'bg-green-500' },
      { skill: 'Python', color: 'from-yellow-300 to-blue-500', bgColor: 'bg-yellow-400' },
      { skill: 'Java', color: 'from-red-400 to-orange-500', bgColor: 'bg-red-500' },
    ],
    [
      { skill: 'HTML5', color: 'from-orange-400 to-red-500', bgColor: 'bg-orange-500' },
      { skill: 'CSS3', color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-500' },
      { skill: 'Git', color: 'from-orange-500 to-red-600', bgColor: 'bg-orange-600' },
      { skill: 'GitHub', color: 'from-gray-600 to-gray-800', bgColor: 'bg-gray-700' },
      { skill: 'Linux', color: 'from-yellow-400 to-orange-500', bgColor: 'bg-yellow-500' },
      { skill: 'Docker', color: 'from-blue-400 to-cyan-500', bgColor: 'bg-blue-500' },
    ],
    [
      { skill: 'AWS', color: 'from-yellow-400 to-orange-500', bgColor: 'bg-yellow-500' },
      { skill: 'MongoDB', color: 'from-green-400 to-green-600', bgColor: 'bg-green-500' },
      { skill: 'MySQL', color: 'from-blue-400 to-orange-400', bgColor: 'bg-blue-500' },
      { skill: 'Redis', color: 'from-red-500 to-red-700', bgColor: 'bg-red-600' },
      { skill: 'Firebase', color: 'from-yellow-400 to-orange-600', bgColor: 'bg-yellow-500' },
    ],
    [
      { skill: 'NextJS', color: 'from-gray-800 to-black', bgColor: 'bg-gray-800' },
      { skill: 'Vue', color: 'from-green-400 to-green-600', bgColor: 'bg-green-500' },
      { skill: 'GraphQL', color: 'from-pink-400 to-purple-500', bgColor: 'bg-pink-500' },
      { skill: 'Express', color: 'from-gray-600 to-gray-800', bgColor: 'bg-gray-700' },
    ]
  ];

  const keyboardScale = isMobile ? 0.7 : 1;

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <div 
        className="relative transform-gpu transition-all duration-1000 ease-in-out hover:scale-105"
        style={{
          transform: `scale(${keyboardScale}) perspective(1000px) rotateX(25deg) rotateY(-10deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Keyboard Base */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl"
          style={{
            width: `${isMobile ? '320px' : '480px'}`,
            height: `${isMobile ? '200px' : '280px'}`,
            transform: 'translateZ(-20px)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(139, 92, 246, 0.2)'
          }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.6 + 0.3,
            }}
          />
        ))}

        {/* Skill Keys */}
        <div 
          className="relative p-6 space-y-3"
          style={{ width: `${isMobile ? '320px' : '480px'}` }}
        >
          {skillRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex justify-center gap-2">
              {row.map((skillData, keyIndex) => (
                <div
                  key={`${rowIndex}-${keyIndex}`}
                  className={`
                    relative group cursor-pointer transform-gpu transition-all duration-300 ease-out
                    hover:scale-110 hover:-translate-y-2 hover:rotate-1
                    ${isMobile ? 'w-10 h-10' : 'w-14 h-14'}
                    bg-gradient-to-br ${skillData.color}
                    rounded-lg shadow-lg
                    flex items-center justify-center
                    font-bold text-white text-xs
                    border border-gray-600
                  `}
                  style={{
                    transform: 'translateZ(10px)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 0 20px rgba(139, 92, 246, 0.1)',
                    animationDelay: `${(rowIndex * row.length + keyIndex) * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateZ(20px) scale(1.1) rotateX(-10deg)';
                    e.target.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 30px ${skillData.bgColor.replace('bg-', 'rgba(').replace('-500', ', 0.4).replace('-600', ', 0.4).replace('-400', ', 0.4).replace('-700', ', 0.4).replace('-800', ', 0.4)')}`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateZ(10px)';
                    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3), 0 0 20px rgba(139, 92, 246, 0.1)';
                  }}
                >
                  {/* Key Top */}
                  <div 
                    className={`
                      absolute inset-0 bg-gradient-to-br ${skillData.color} rounded-lg
                      flex items-center justify-center
                      transition-all duration-300
                    `}
                    style={{ transform: 'translateZ(2px)' }}
                  >
                    <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-bold drop-shadow-lg`}>
                      {skillData.skill}
                    </span>
                  </div>

                  {/* Hover Glow Effect */}
                  <div 
                    className={`
                      absolute -inset-2 bg-gradient-to-r ${skillData.color} rounded-xl 
                      opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse
                    `}
                    style={{ transform: 'translateZ(-5px)' }}
                  />

                  {/* Key Press Animation */}
                  <div 
                    className="absolute inset-0 bg-white rounded-lg opacity-0 group-active:opacity-20 transition-opacity duration-75"
                    style={{ transform: 'translateZ(3px)' }}
                  />
                </div>
              ))}
            </div>
          ))}

          {/* Special Keys */}
          <div className="flex justify-center gap-4 mt-4">
            {/* Spacebar */}
            <div
              className={`
                relative group cursor-pointer transform-gpu transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-1
                ${isMobile ? 'w-32 h-8' : 'w-48 h-12'}
                bg-gradient-to-br from-purple-500 to-purple-700
                rounded-lg shadow-lg
                flex items-center justify-center
                font-bold text-white text-sm
                border border-gray-600
              `}
              style={{
                transform: 'translateZ(10px)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 0 20px rgba(139, 92, 246, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateZ(20px) scale(1.05)';
                e.target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4), 0 0 40px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateZ(10px)';
                e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3), 0 0 20px rgba(139, 92, 246, 0.2)';
              }}
            >
              <span>CONNECT</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Ambient Light Effects */}
        <div 
          className="absolute -inset-8 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 rounded-3xl animate-pulse"
          style={{ 
            animationDuration: '4s',
            transform: 'translateZ(-30px)' 
          }}
        />

        {/* Data Streams */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute w-px bg-gradient-to-t from-transparent via-purple-400 to-transparent animate-pulse opacity-60"
            style={{
              height: `${20 + Math.random() * 40}px`,
              left: `${10 + i * 15}%`,
              top: `${-10 - Math.random() * 20}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s',
              transform: 'translateZ(5px)',
            }}
          />
        ))}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(2px); }
          50% { transform: translateY(-15px) translateX(4px); }
          75% { transform: translateY(-8px) translateX(2px); }
        }
        
        @keyframes keyPress {
          0% { transform: translateZ(10px) scale(1); }
          50% { transform: translateZ(5px) scale(0.98); }
          100% { transform: translateZ(10px) scale(1); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .key-press {
          animation: keyPress 0.15s ease-in-out;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

// Add PlayerCanvas as null to prevent import errors
const PlayerCanvas = () => null;

// Update the export to use the new keyboard component
export { ComputersCanvas, SkillsKeyboardCanvas as EarthCanvas, StarsCanvas, PlayerCanvas };
