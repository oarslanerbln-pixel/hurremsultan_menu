import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

import * as THREE from 'three';
import { useMenu } from '../../context/MenuContext';

const ParametricFabric = ({ isEvening, isMobile }: { isEvening: boolean; isMobile: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Optimize for mobile: reduce vertex count to prevent CPU freezing.
  const geometry = useMemo(() => {
    const segs = isMobile ? 10 : 20;
    const segsY = isMobile ? 8 : 12;
    return new THREE.PlaneGeometry(30, 20, segs, segsY);
  }, [isMobile]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    const pos = meshRef.current.geometry.attributes.position;
    
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      // Normalization for edge falloff
      const nx = x / 15;
      const ny = y / 10;
      
      // Premium Flow Math (Deeper, elegant ripples)
      const wave1 = Math.sin(x * 0.15 + t * 0.25) * Math.cos(y * 0.2 + t * 0.15) * 2.8;
      const wave2 = Math.sin(x * 0.4 + y * 0.2 + t * 0.4) * 1.2;
      const wave3 = Math.cos(x * 0.8 - t * 0.3) * Math.sin(y * 0.6 + t * 0.25) * 0.6;
      const wave4 = Math.sin((x + y) * 0.1 + t * 0.1) * 1.5;
      
      const edgeFalloff = Math.max(0, 1 - (nx * nx * 0.25 + ny * ny * 0.45) * 0.4);
      const displacement = (wave1 + wave2 + wave3 + wave4) * edgeFalloff;

      pos.setZ(i, displacement);
    }
    
    pos.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
    
    // Mouse Parallax
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      state.pointer.x * 0.1,
      0.05
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -0.45 + state.pointer.y * 0.06,
      0.05
    );
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -2, -8]} rotation={[-0.6, 0, 0]}>
      <meshPhysicalMaterial
        color={isEvening ? "#C5A55A" : "#E8D8B8"} // Richer base color for contrast
        emissive={isEvening ? "#4A3B18" : "#8A733F"} // Lower emissive so it doesn't blow out
        emissiveIntensity={0.2}
        metalness={0.6} // More metallic for silk effect
        roughness={0.3} // Slightly rougher so specular highlights are softer
        clearcoat={1.0} // Max clearcoat for premium silk specular layer
        clearcoatRoughness={0.2}
        envMapIntensity={1.0} 
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const AccentLights = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { activeCategory } = useMenu();
  
  // Synesthesia Target Colors
  const targetColorMain = useMemo(() => new THREE.Color(), []);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Synesthesia Logic: Shift main accent light based on category
    let hex = "#FFD700"; // Default Gold
    if (activeCategory === 'drinks') hex = "#88CCFF"; // Ice Blue for Drinks
    if (activeCategory === 'shisha') hex = "#FF6B6B"; // Ruby Red for Shisha (Fruity/Fire)
    if (activeCategory === 'food') hex = "#A8E6CF";   // Fresh Green for Food
    if (activeCategory === 'kombis') hex = "#C5A55A"; // Crown Gold for VIP/Kombis
    
    targetColorMain.lerp(new THREE.Color(hex), 0.02); // Smooth transition
    
    groupRef.current.children.forEach((child, i) => {
      const speed = 0.2 + i * 0.1;
      const radius = 6 + (i % 2) * 3;
      const offset = i * 2;
      
      child.position.x = Math.sin(t * speed + offset) * radius;
      child.position.z = Math.cos(t * speed + offset) * radius - 4;
      child.position.y = Math.sin(t * (speed * 1.5) + offset) * 3;
      
      // Apply synesthesia color to the first light
      if (i === 0 && (child as THREE.PointLight).isPointLight) {
        (child as THREE.PointLight).color.copy(targetColorMain);
      }
    });
  });

  return (
    <group ref={groupRef}>
      <pointLight intensity={0.5} distance={15} /> {/* Dynamic Synesthesia Light */}
      <pointLight color="#FCFBF8" intensity={0.8} distance={20} /> {/* Brilliant White */}
      <pointLight color="#D4AF37" intensity={0.6} distance={15} /> {/* Deep Gold */}
      <pointLight color="#FFF5E1" intensity={0.7} distance={18} /> {/* Warm Cream */}
      <pointLight color="#C5A55A" intensity={0.8} distance={12} /> {/* Classic Accent Gold */}
    </group>
  );
};

const Background3D: React.FC = () => {
  const [isEvening] = useState(() => {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6;
  });

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px)').matches;
  });
  
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Background color is handled by AmbientBackground, making this layer transparent
  // to allow the liquid smoke blobs and the 3D waving fabric to blend together.

  return (
    <div className="fixed inset-0 z-0 bg-transparent pointer-events-none transition-colors duration-[3000ms]">
      <Canvas
        camera={{ position: [0, 2, 12], fov: 55 }}
        dpr={[1, 1]}
        gl={{ antialias: false, alpha: true }}
      >
        <ambientLight intensity={0.3} color="#FCFBF8" />
        <directionalLight position={[10, 10, 5]} intensity={0.6} color="#FFF5E1" />
        <directionalLight position={[-10, -5, 5]} intensity={0.4} color="#C5A55A" />
        <spotLight position={[0, 10, 10]} intensity={1.2} angle={0.6} color="#D4AF37" penumbra={1} />
        
        <ParametricFabric isEvening={isEvening} isMobile={isMobile} />
        <AccentLights />
      </Canvas>
      
      {/* Light Theme Vignettes */}
      <div className={`absolute inset-0 bg-gradient-to-b from-current via-transparent to-transparent h-[25%] transition-colors duration-[3000ms] ${isEvening ? 'text-[#F5EAD4]' : 'text-[#FFFDF8]'}`} />
      <div className={`absolute inset-0 bg-gradient-to-t from-current via-transparent to-transparent mt-[75%] transition-colors duration-[3000ms] ${isEvening ? 'text-[#F5EAD4]' : 'text-[#FFFDF8]'}`} />
    </div>
  );
};

export default Background3D;
