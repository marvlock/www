"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import { useEffect, useRef, useState, Suspense } from "react"
import * as THREE from "three"

function ParallaxImage() {
  const meshRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)

  // Load textures
  const [colorMap, depthMap] = useTexture([
    "/colour1.png",
    "/depth1.png",
  ])

  const [imageDimensions, setImageDimensions] = useState({
    width: 1,
    height: 1,
  })

  useEffect(() => {
    if (colorMap.image) {
      const image = colorMap.image as HTMLImageElement
      setImageDimensions({
        width: image.width,
        height: image.height,
      })
    }
  }, [colorMap])

  const aspectRatio = imageDimensions.width / imageDimensions.height
  const targetHeight = 9
  const targetWidth = targetHeight * aspectRatio

  // Define color range
  const redColor = new THREE.Color(0xc0600a)
  const blueColor = new THREE.Color(0x0a60c0)
  const targetColor = new THREE.Color()

  useFrame((state) => {
    if (!meshRef.current || !lightRef.current) return

    const x = state.pointer.x
    const y = state.pointer.y

    // Smooth mesh rotation
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      y * 0.1,
      0.01,
    )

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      -x * 0.1,
      0.01,
    )

    // Smooth mesh position
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      -y * 0.2,
      0.01,
    )
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      -x * 0.2,
      0.01,
    )

    // Smooth light movement (more subtle than mesh rotation)
    lightRef.current.position.x = THREE.MathUtils.lerp(
      lightRef.current.position.x,
      x * 3,
      0.01,
    )

    lightRef.current.position.y = THREE.MathUtils.lerp(
      lightRef.current.position.y,
      y * 3,
      0.01,
    )

    // Color lerp based on x position (-1 to 1 mapped to 0 to 1)
    const colorAlpha = (x + 1) / 2
    targetColor.lerpColors(redColor, blueColor, colorAlpha)
    lightRef.current.color.lerp(targetColor, 0.05)
  })

  return (
    <>
      <pointLight
        intensity={100}
        color={[190, 100, 20]}
        ref={lightRef}
        position={[3, 3, 3]}
      />
      <mesh ref={meshRef}>
        <planeGeometry args={[targetWidth, targetHeight, 100, 100]} />
        <meshStandardMaterial
          map={colorMap}
          transparent={true}
          displacementMap={depthMap}
          displacementScale={2}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  )
}

export function DepthImage3D() {
  return (
    <div className="h-full w-full bg-transparent">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.2} />
        <Suspense fallback={null}>
          <ParallaxImage />
        </Suspense>
      </Canvas>
    </div>
  )
}
