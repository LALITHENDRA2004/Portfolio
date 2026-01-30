import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';

const FloatingShape = ({ isDarkMode }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.sin(time / 2) * 0.2;
        meshRef.current.rotation.y = Math.cos(time / 2) * 0.2;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef}>
                <octahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color={isDarkMode ? '#818cf8' : '#6366f1'}
                    speed={2}
                    distort={0.4}
                    radius={1}
                />
            </mesh>
        </Float>
    );
};

const ProjectAccent = ({ isDarkMode }) => {
    return (
        <div className={`absolute top-4 right-4 w-12 h-12 transition-opacity duration-500 pointer-events-none ${isDarkMode ? 'opacity-40 group-hover:opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
            <Canvas camera={{ position: [0, 0, 3], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <FloatingShape isDarkMode={isDarkMode} />
            </Canvas>
        </div>
    );
};

export default ProjectAccent;
