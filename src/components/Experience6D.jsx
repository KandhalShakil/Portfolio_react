import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef();
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    const colorA = new THREE.Color('#00d2ff');
    const colorB = new THREE.Color('#9d50bb');
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      const mixedColor = colorA.clone().lerp(colorB, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.05;
    ref.current.rotation.x = time * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function AtmosphericLights() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d2ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#9d50bb" />
    </>
  );
}

const Experience6D = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 50% 50%, #0d0f14 0%, #020308 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <AtmosphericLights />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <ParticleField />
        </Float>
      </Canvas>
    </div>
  );
};

export default Experience6D;
