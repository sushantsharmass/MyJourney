import { Float, Line, OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import { Background } from "./Background";
import { Airplane } from "./Airplane";
import { Cloud } from "./Cloud";
import { useMemo, useRef } from "react";
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";

const LINE_NB_POINTS = 2000;

export const Experience = () => {

  const curve = useMemo(()=>{
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -10),
      new THREE.Vector3(-2, 0, -20),
      new THREE.Vector3(-3, 0, -30),
      new THREE.Vector3(0, 0, -40),
      new THREE.Vector3(5, 0, -50),
      new THREE.Vector3(7, 0, -60),
      new THREE.Vector3(5, 0, -70),
      new THREE.Vector3(0, 0, -80),
      new THREE.Vector3(0, 0, -90),
      new THREE.Vector3(0, 0, -100),
    ],
    false,
    "catmullrom",
    0.5);
  },[]);

  const linepoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  },[curve]);


  const shape = useMemo(()=>{
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08); 

    return shape;
  },[curve]);

  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta)=>{
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linepoints.length),
      linepoints.length - 0
    )
    const curPoint = linepoints[curPointIndex];

    cameraGroup.current.position.lerp(curPoint, delta * 24)
  });

  return (
    <>
      <OrbitControls enableZoom={false} />
      <group ref={cameraGroup}>
      <Background/>
      <PerspectiveCamera position={[0,0,5]} fov={30} makeDefault/>
      <Float>
      <Airplane
      rotation-y={Math.PI / 1}
      scale={[0.2,0.2,0.2]}
      />
      </Float>
      </group>
      {/* <Cloud
      scale={[0.3,0.3,0.4]}
      position={[-2,1,-3]}
      />
      <Cloud
      scale={[0.3,0.3,0.3]}
      position={[-1,1,-3]}
      /> */}

      <group position-y={-2}>
      {/* <Line
      points={linepoints}
      color={"white"}
      opacity={0.7}
      transparent
      lineWidth={16}/> */}
      <mesh>
        <extrudeGeometry
        args={[
          shape,
          {
            steps: LINE_NB_POINTS,
            bevelEnabled: false,
            extrudePath: curve,
          }
        ]}
        />
        <meshStandardMaterial color={"white"} opacity={0.7} transparent/>
      </mesh>
      </group>




      <Cloud opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} />
      <Cloud opacity={0.5} scale={[0.2, 0.3, 0.4]} position={[1.5, -0.5, -2]} />
      <Cloud
        opacity={0.7}
        scale={[0.3, 0.3, 0.4]}
        rotation-y={Math.PI / 9}
        position={[2, -0.2, -2]}
      />
      <Cloud
        opacity={0.7}
        scale={[0.4, 0.4, 0.4]}
        rotation-y={Math.PI / 9}
        position={[1, -0.2, -12]}
      />
      <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[-1, 1, -53]} />
      <Cloud opacity={0.3} scale={[0.8, 0.8, 0.8]} position={[0, 1, -100]} />
    </>
  );
};
