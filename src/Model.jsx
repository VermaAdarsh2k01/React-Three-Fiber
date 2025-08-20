import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Summr_Stick-360.glb')
  const { actions } = useAnimations(animations, group)
  const quickRotate = useRef(null)
  
  // Initialize GSAP quickTo for smooth rotation
  useGSAP(() => {
    if (group.current) {
      // Create quickTo function for optimal performance
      quickRotate.current = gsap.quickTo(group.current.rotation, 'y', {
        duration: 0.6,
        ease: "elastic.out(1, 0.3)" // Elastic easing for natural spring effect
      })
    }
  }, { scope: group })

  // Mouse tracking effect with direct quickTo updates
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (quickRotate.current) {
        // Normalize mouse X position to -1 to 1 range
        const normalizedX = (event.clientX / window.innerWidth) * 2 - 1
        
        // Calculate target rotation (±0.3 radians = ±17 degrees)
        const targetRotation = normalizedX * 0.3
        
        // Update rotation using quickTo - no state needed!
        quickRotate.current(targetRotation)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Hovering animation
  useGSAP(() => {
    if (group.current) {
      gsap.to(group.current.position, {
        y: -1.1, 
        duration: 2, 
        ease: "power2.inOut", 
        yoyo: true, 
        repeat: -1, 
      })
    }
  }, { scope: group })


  
  return (
    <group scale={[2 , 2 , 2]} ref={group} {...props} dispose={null} position={[0,-1.5,0]} >
      <group name="Scene">
        <group name="DR_Body" rotation={[0, 0, 0]}>
          <mesh
            name="Plane001"
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.MI_MatteSteel}
          />
          <mesh
            name="Plane001_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials.M_PlasticGlossyFinish_317}
          />
          <mesh
            name="Plane001_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={materials.M_PlasticGlossyFinish_White}
          />
          <mesh
            name="Plane001_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_3.geometry}
            material={materials.M_PlasticGlossyFinish_Black}
          />
          <mesh
            name="Plane001_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_4.geometry}
            material={materials.M_Summrlogo_1}
          />
          <mesh
            name="Plane001_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_5.geometry}
            material={materials.M_SummrLogo}
          />
          <mesh
            name="Plane001_6"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_6.geometry}
            material={materials['M_Refill the good']}
          />
          <mesh
            name="Plane001_7"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_7.geometry}
            material={materials.M_Skininmotion}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Summr_Stick-360.glb')