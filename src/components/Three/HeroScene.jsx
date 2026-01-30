import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 2000, isDarkMode }) {
    const pointsRef = useRef();

    // Generate random positions for particles
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, [count]);

    // Track mouse position for parallax
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state, delta) => {
        if (!pointsRef.current) return;

        // Ambient rotation
        pointsRef.current.rotation.x += delta * 0.05;
        pointsRef.current.rotation.y += delta * 0.03;

        // Smooth mouse parallax
        const targetX = mouse.current.x * 0.2;
        const targetY = mouse.current.y * 0.2;
        pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.1;
        pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.1;
    });

    const particleColor = isDarkMode ? '#6366f1' : '#4f46e5'; // Indigo colors

    return (
        <group>
            <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={particleColor}
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={isDarkMode ? 0.6 : 0.8}
                />
            </Points>
        </group>
    );
}

const HeroScene = ({ isDarkMode }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Return null or a simplified version for mobile to maintain performance
    if (isMobile) return null;

    return (
        <div className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${isDarkMode ? 'opacity-50' : 'opacity-80'}`}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]} // Performance: Cap pixel ratio
            >
                <ambientLight intensity={0.5} />
                <Particles count={isDarkMode ? 3000 : 2000} isDarkMode={isDarkMode} />
            </Canvas>
        </div>
    );
};

export default HeroScene;
