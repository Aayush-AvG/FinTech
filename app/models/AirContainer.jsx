'use client'
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { Air } from "./Air"
import { Float, OrbitControls, PerspectiveCamera, Stage, AdaptiveDpr } from "@react-three/drei"
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const isMob = () => /Mobi|Android/i.test(navigator.userAgent)

const AirContainer = () => {
  const mobile = useRef(isMob())

  return (
    <div className="fixed w-full h-full left-84 bottom-20 z-10 pointer-events-none poin">
      <Canvas
        dpr={[1, mobile.current ? 1.5 : 2]}
        gl={{
          antialias: !mobile.current,
          powerPreference: "high-performance",
        }}
        frameloop="always"
      >
        <AdaptiveDpr pixelated />
        <PerspectiveCamera makeDefault position={[1, 2, 5]} fov={50} zoom={4} />
        <OrbitControls enableZoom={false} regress />

        <Suspense fallback={null}>
         <Stage
  adjustCamera={false}
  environment="night"
  intensity={0.2}
   shadows={{
    type: "contact",
    opacity: 0.3,
    blur: 2,
    scale: 0.2,
  }}
>
            <Float speed={7} rotationIntensity={0} floatIntensity={0.2}>
              <Air rotation={[0, Math.PI / 15, 0]} position={[20, 0, 0]} />
            </Float>
          </Stage>

          {!mobile.current && (
            <EffectComposer>
              <Bloom />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  )
}

export default AirContainer