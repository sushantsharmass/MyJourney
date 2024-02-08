import { ScrollControls } from '@react-three/drei'
import { Experience } from './components/Experience'
import {Canvas} from "@react-three/fiber"

function App() {
  

  return (
    <>
     <Canvas>
      <color attach="background" args={["#ececec"]} />
          <ScrollControls pages={100} damping={1}>
          <Experience />
          </ScrollControls>
     </Canvas>
    </>
  )
}

export default App
