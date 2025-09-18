import { useState, useEffect } from "react";
import Lottie from "lottie-react";

// Create components - Lottie for coding, CSS for stars only
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

const ComputersCanvas = ({ isMobile }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/coding.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, []);

  if (!animationData) return <div className="text-white">Loading...</div>;

  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: isMobile ? "400px" : "700px",
        height: isMobile ? "400px" : "700px",
      }}
    >
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export { ComputersCanvas, StarsCanvas };
