import React, {useRef, useEffect} from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment , OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Model } from './Model.jsx'
import { AxesHelper } from 'three'

gsap.registerPlugin(ScrollTrigger)

const Scene = () => {

  return (
    <>
        <PerspectiveCamera 
            makeDefault
            position={[0, 0, 10]}
            fov={45}
            near={0.1}
            far={10000}
        />
        <Environment preset='city' />
        <Model />
        <axesHelper args={[5]}/>
    </>
  )
}

export default Scene
