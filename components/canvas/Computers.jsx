import { useState, useEffect } from "react";
import Lottie from "lottie-react";

function Computers({ isMobile }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/coding.json") // ✅ served from public folder
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, []);

  if (!animationData) return <div className="text-white">Loading...</div>;

  return (
      <div
        className={`flex justify-center items-center`}
        style={{
          width: isMobile ? "400px" : "700px",  // bigger width
          height: isMobile ? "400px" : "700px", // bigger height
        }}
      >
        <Lottie animationData={animationData} loop={true} />
      </div>

  );
}



function ComputersCanvas({ isMobile }) {
  return <Computers isMobile={isMobile} />;
}

export default ComputersCanvas;
