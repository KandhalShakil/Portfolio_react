import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Stars(props) {
  const ref = useRef();
  const [, positions] = useMemo(() => {
    const sphere = new THREE.SphereGeometry(1, 32, 32);
    const positions = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      positions.set([x, y, z], i * 3);
    }
    
    return [sphere, positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#7877c6"
          size={2}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#5856d6"
        transparent
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
}

function Scene3D() {
  return (
    <div className="scene-3d">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
        gl={{ 
          preserveDrawingBuffer: true,
          powerPreference: 'high-performance',
          antialias: false
        }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (e) => {
            console.warn('WebGL context lost');
            e.preventDefault();
          });
          gl.domElement.addEventListener('webglcontextrestored', () => {
            console.log('WebGL context restored');
          });
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <FloatingGeometry />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

export default Scene3D;