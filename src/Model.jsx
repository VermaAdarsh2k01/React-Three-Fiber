import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Summr_Stick-360.glb')
  const { actions } = useAnimations(animations, group)
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