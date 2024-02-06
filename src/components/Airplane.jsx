import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Airplane(props) {
  const { nodes, materials } = useGLTF("./models/airplanemodel/plane.glb")
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} />
    </group>
  )
}

useGLTF.preload("./models/airplanemodel/plane.glb")
