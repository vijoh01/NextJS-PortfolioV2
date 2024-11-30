import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';

function Cube({ color }: any) {
  const ref:any = useRef();

  // Animation loop for cube rotation
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    ref.current.position.z = Math.sin(ref.current.rotation.x) * 2;
  });

  return (
    <mesh ref={ref}>
      {/* Using RoundedBox from @react-three/drei for rounded corners */}
      <RoundedBox args={[1, 1, 1]} radius={0.2} smoothness={4}>
        <meshStandardMaterial color={color} />
      </RoundedBox>
    </mesh>
  );
}

const AnimatedBackground = ({ cubeCount = 1 }) => {
  const [cubes, setCubes]:any = useState([]);

  useEffect(() => {
    const generatedCubes = [];
    const minDistance = 8; // Minimum distance between cubes
    const positions = [];

    for (let i = 0; i < cubeCount; i++) {
      let x, y, z, validPosition;
      let attempts = 0; // Safety mechanism to prevent infinite loops

      do {
        validPosition = true;
        x = Math.random() * 20 - 10; // Random position in X
        y = Math.random() * 20 - 10; // Random position in Y
        z = Math.random() * 20 - 10; // Random position in Z

        for (let pos of positions) {
          const distance = Math.sqrt(
            Math.pow(pos[0] - x, 2) +
            Math.pow(pos[1] - y, 2) +
            Math.pow(pos[2] - z, 2)
          );
          if (distance < minDistance) {
            validPosition = false;
            break;
          }
        }

        attempts++;
        if (attempts > 50) {
          console.warn("Could not place cube after 50 attempts");
          break;
        }
      } while (!validPosition);

      if (validPosition) {
        positions.push([x, y, z]); // Save valid position
        const color = `gray`; // Random color
        generatedCubes.push(<Cube key={i} position={[x, y, z]} color={color} />);
      }
    }

    setCubes(generatedCubes);
  }, [cubeCount]); // Re-run only when cubeCount changes

  return (
    <Canvas
      style={{ position: 'absolute', left: 0, top: 0, zIndex: -1 }}
      className="bg-primary-light dark:bg-primary-dark"
    >
      {/* Add ambient light to illuminate the scene */}
      <ambientLight intensity={1} />
      
      {/* Add a point light to simulate lighting from the right */}
      <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      
      {cubes}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default AnimatedBackground;
