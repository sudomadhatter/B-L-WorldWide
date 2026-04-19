import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const meshRef = useRef()
  const count = 180

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Distribute on a sphere surface
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.8 + Math.random() * 0.5
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  const sizes = useMemo(() => {
    const s = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      s[i] = 1.5 + Math.random() * 2.5
    }
    return s
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00D2FF"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function ConnectionLines() {
  const lineRef = useRef()
  
  const positions = useMemo(() => {
    const pts = []
    // Connect "continent nodes" — major hub positions on the globe
    const hubs = [
      [-2.2, 0.5, 1.5],   // Americas
      [-1.5, -0.8, 2.2],  // Caribbean
      [1.0, 1.2, 2.4],    // Europe
      [2.0, 0.0, 2.0],    // Africa
      [2.8, 1.0, -0.5],   // Asia
    ]
    for (let i = 0; i < hubs.length; i++) {
      for (let j = i + 1; j < hubs.length; j++) {
        pts.push(...hubs[i], ...hubs[j])
      }
    }
    return new Float32Array(pts)
  }, [])

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.y = state.clock.elapsedTime * 0.03
      lineRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1
    }
  })

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#3B6FFF" transparent opacity={0.12} />
    </lineSegments>
  )
}

export default function ParticleCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: false, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <Particles />
      <ConnectionLines />
    </Canvas>
  )
}
