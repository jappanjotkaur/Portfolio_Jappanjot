"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// ✅ Import Spline dynamically (no SSR)
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

function Earth({ isMobile }) {
  const [splineApp, setSplineApp] = useState(null);

  return (
    <Spline
      scene="/models/planet/untitled3.spline"
      onLoad={(app) => setSplineApp(app)}
    />
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
