import { Experience } from './components/Experience'
import {Canvas} from "@react-three/fiber"

function App() {
  

  return (
    <>
     <Canvas
     camera={{
      position: [0, 0, 5],
      fov: 30,
    }}
     >
      <color attach="background" args={["#ececec"]} />
      <Experience />
     </Canvas>
    </>
  )
}

export default App
