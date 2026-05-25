"use client"

import dynamic from "next/dynamic"
import { useReducedMotion } from "framer-motion"

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false })

export function DitherBackground() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-dvh w-full overflow-hidden" aria-hidden>
      <Beams
        beamWidth={3}
        beamHeight={30}
        beamNumber={20}
        lightColor="#ffffff"
        speed={reducedMotion ? 0 : 2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      />
    </div>
  )
}
