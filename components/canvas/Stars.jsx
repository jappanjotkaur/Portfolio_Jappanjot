import { useEffect, useState } from "react";

function StarsCanvas() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="w-full h-auto absolute inset-0 z-[-1]" />;
	}

	// Generate stars with CSS and JavaScript animation
	const generateStars = () => {
		const stars = [];
		for (let i = 0; i < 200; i++) {
			stars.push(
				<div
					key={i}
					className="absolute rounded-full bg-pink-400 animate-pulse"
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						width: `${Math.random() * 3 + 1}px`,
						height: `${Math.random() * 3 + 1}px`,
						animationDelay: `${Math.random() * 3}s`,
						animationDuration: `${2 + Math.random() * 3}s`,
						opacity: Math.random() * 0.8 + 0.2,
					}}
				/>
			);
		}
		return stars;
	};

	return (
		<div className="w-full h-auto absolute inset-0 z-[-1] overflow-hidden">
			{/* Animated gradient background */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 animate-pulse" />
			
			{/* CSS Stars */}
			<div className="absolute inset-0">
				{generateStars()}
			</div>

			{/* Moving particles effect */}
			<div className="absolute inset-0">
				{[...Array(50)].map((_, i) => (
					<div
						key={`particle-${i}`}
						className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-60"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animation: `float ${5 + Math.random() * 10}s linear infinite`,
							animationDelay: `${Math.random() * 5}s`,
						}}
					/>
				))}
			</div>

			{/* Custom CSS animations */}
			<style jsx>{`
				@keyframes float {
					0% {
						transform: translateY(100vh) rotate(0deg);
						opacity: 0;
					}
					10% {
						opacity: 1;
					}
					90% {
						opacity: 1;
					}
					100% {
						transform: translateY(-100vh) rotate(360deg);
						opacity: 0;
					}
				}
			`}</style>
		</div>
	);
}

export default StarsCanvas;
