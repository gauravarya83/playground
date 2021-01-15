import { useEffect, useState } from "react";
import { Vector3 } from "@babylonjs/core";
import { useScene, useSceneLoader } from "react-babylonjs";
import "@babylonjs/loaders/glTF";

const Cloned = () => {
  const scene = useScene();
  const sceneLoaderResults = useSceneLoader("./", "Boy.glb");

  useEffect(() => {
    return () => {
      sceneLoaderResults.dispose();
    }
  }, [sceneLoaderResults]);

  const [model, _] = useState(sceneLoaderResults.meshes[0]);
  
  return <>
    {[...Array(3).keys()].map((b,i) => <box key={i} name={`box${i}`} position={new Vector3(i*2, 0, i*2)}>
      <mesh 
        key={i} 
        fromInstance={model} 
        scaleToDimension={0.8} />
    </box>)}
    {console.log(scene.meshes)}
  </>
}

export default Cloned;