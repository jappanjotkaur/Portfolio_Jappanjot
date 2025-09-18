"use client";
import React, { Suspense, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
function Earth({ isMobile }) {
  const splineContainer = useRef(null);
  const [splineApp, setSplineApp] = useState(null);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline
        ref={splineContainer}
        scene="/models/planet/untitled3.spline" // 👈 replace with your .spline file
        onLoad={(app) => setSplineApp(app)}
      />
    </Suspense>
  );
}
function EarthCanvas({ isMobile }) {
  return (
    <div className="cursor-pointer w-full h-full">
      <Earth isMobile={isMobile} />
    </div>
  );
}
export default EarthCanvas;
