import React from "react";
import {Canvas} from "@react-three/fiber"
import {MeshDistortMaterial, MeshWobbleMaterial} from '@react-three/drei'

export function Flag (){
    return (
        <Canvas>
            <mesh>
                <planeGeometry args={[5,3,20]}/>
                <MeshWobbleMaterial factor={0.1} speed={10}/>
                <MeshDistortMaterial distort={0.5} speed={1}/>
            </mesh>
        </Canvas>
    );
}