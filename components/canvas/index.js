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
  const skillRows = [
    [
      { skill: 'JS', color: 'from-yellow-400 to-yellow-600' },
      { skill: 'TS', color: 'from-blue-400 to-blue-600' },
      { skill: 'React', color: 'from-cyan-400 to-cyan-600' },
      { skill: 'Node', color: 'from-green-400 to-green-600' },
      { skill: 'Python', color: 'from-yellow-300 to-blue-500' },
      { skill: 'Java', color: 'from-red-400 to-orange-500' },
    ],
    [
      { skill: 'HTML5', color: 'from-orange-400 to-red-500' },
      { skill: 'CSS3', color: 'from-blue-400 to-blue-600' },
      { skill: 'Git', color: 'from-orange-500 to-red-600' },
      { skill: 'GitHub', color: 'from-gray-600 to-gray-800' },
      { skill: 'Linux', color: 'from-yellow-400 to-orange-500' },
      { skill: 'Docker', color: 'from-blue-400 to-cyan-500' },
    ],
    [
      { skill: 'AWS', color: 'from-yellow-400 to-orange-500' },
      { skill: 'MongoDB', color: 'from-green-400 to-green-600' },
      { skill: 'MySQL', color: 'from-blue-400 to-orange-400' },
      { skill: 'Redis', color: 'from-red-500 to-red-700' },
      { skill: 'Firebase', color: 'from-yellow-400 to-orange-600' },
    ],
    [
      { skill: 'NextJS', color: 'from-gray-800 to-black' },
      { skill: 'Vue', color: 'from-green-400 to-green-600' },
      { skill: 'GraphQL', color: 'from-pink-400 to-purple-500' },
      { skill: 'Express', color: 'from-gray-600 to-gray-800' },
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
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl"
          style={{
            width: isMobile ? '320px' : '480px',
            height: isMobile ? '200px' : '280px',
            transform: 'translateZ(-20px)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(139, 92, 246, 0.2)'
          }}
        />

        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"
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

        <div 
          className="relative p-6 space-y-3"
          style={{ width: isMobile ? '320px' : '480px' }}
        >
          {skillRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-2">
              {row.map((skillData, keyIndex) => (
                <div
                  key={keyIndex}
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
                >
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

                  <div 
                    className={`
                      absolute -inset-2 bg-gradient-to-r ${skillData.color} rounded-xl 
                      opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse
                    `}
                    style={{ transform: 'translateZ(-5px)' }}
                  />

                  <div 
                    className="absolute inset-0 bg-white rounded-lg opacity-0 group-active:opacity-20 transition-opacity duration-75"
                    style={{ transform: 'translateZ(3px)' }}
                  />
                </div>
              ))}
            </div>
          ))}

          <div className="flex justify-center gap-4 mt-4">
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
            >
              <span>CONNECT</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" />
            </div>
          </div>
        </div>

        <div 
          className="absolute -inset-8 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 rounded-3xl animate-pulse"
          style={{ 
            animationDuration: '4s',
            transform: 'translateZ(-30px)' 
          }}
        />

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
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
    </div>
  );
};

// Add PlayerCanvas as null to prevent import errors
const PlayerCanvas = () => null;

// Update the export to use the new keyboard component
export { ComputersCanvas, EarthCanvas, StarsCanvas, PlayerCanvas };
