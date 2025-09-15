import { useRef, Suspense, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

function Stars(props) {
	const ref = useRef();
	
	// Move sphere generation to useMemo to prevent recreation on every render
	const sphere = useMemo(() => {
		const positions = new Float32Array(5000 * 3);
		for (let i = 0; i < positions.length; i++) {
			positions[i] = (Math.random() - 0.5) * 2.4;
		}
		return positions;
	}, []);

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x -= delta / 10;
			ref.current.rotation.y -= delta / 15;
		}
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled
				{...props}
			>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
}

function StarsCanvas() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Prevent SSR issues by only rendering on client
	if (!mounted) {
		return <div className="w-full h-auto absolute inset-0 z-[-1]" />;
	}

	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
			<Canvas
				camera={{ position: [0, 0, 1] }}
				dpr={[1, 2]}
				gl={{
					outputColorSpace: THREE.SRGBColorSpace,
					alpha: false
				}}
			>
				<Suspense fallback={<CanvasLoader />}>
					<Stars />
				</Suspense>
				<Preload all />
			</Canvas>
		</div>
	);
}

export default StarsCanvas;
