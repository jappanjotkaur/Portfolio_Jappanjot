import dynamic from 'next/dynamic';

// Create a dynamic import for the Stars component to prevent SSR issues
const StarsCanvas = dynamic(() => import('./Stars'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-auto absolute inset-0 z-[-1] bg-gradient-to-b from-black to-gray-900" />
  )
});

export default StarsCanvas;
