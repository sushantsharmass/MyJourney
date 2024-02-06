/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/clouds/model.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cloud({opacity, ...props}) {
  const { nodes, materials } = useGLTF("./models/clouds/model.glb")
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.secondballcloud001.geometry}>
      <meshStandardMaterial
      material={nodes.secondballcloud001.material}
      transparent
      opacity={opacity}
      />
      </mesh>
    </group>
  )
}

useGLTF.preload("./models/clouds/model.glb")
