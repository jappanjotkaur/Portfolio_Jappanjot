"use client";

import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

// Loader inside 3D Canvas
function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      className="flex justify-center items-center w-full h-full flex-col z-30"
    >
      <div className="loader-circle"></div>
      <p className="text-[14px] text-white font-bold mt-6 z-30">
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
}

// PreLoader before portfolio shows
export function PreLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
          setProgress(i);
        }, 20 * i); // smoother & faster than before
      }
    };
    updateProgress();
  }, []);

  return (
    <div className="w-[100svw] h-[100svh] overflow-hidden bg-bgPrimaryLight dark:bg-bgPrimaryDark z-40 fixed top-0 left-0 flex flex-col justify-center items-center gap-6">
      <div className="loader-circle-big"></div>
      <h1 className="text-2xl font-semibold text-ctnPrimaryLight dark:text-ctnPrimaryDark">
        {progress}%
      </h1>
    </div>
  );
}

export default CanvasLoader;
