import React, { useEffect, useState } from "react";
import { Vector3 } from "@babylonjs/core";
import { useScene, useSceneLoader } from "react-babylonjs";
import "@babylonjs/loaders/glTF";

function Cloned1() {
  const scene = useScene();
  const sceneLoaderResults = useSceneLoader("./", "Boy.glb");

  const [boxes, _] = useState([
    sceneLoaderResults.meshes[0], 
    sceneLoaderResults.meshes[0].clone(), 
    sceneLoaderResults.meshes[0].clone()
  ]);

  useEffect(() => {
    return () => {
      sceneLoaderResults.dispose();
    }
  }, [sceneLoaderResults]);
  
  return <>
    {boxes.map((b,i) => <box key={i} name={`box${i}`} position={new Vector3(i*2, 0, i*2)}>
      <mesh 
        key={i} 
        fromInstance={b} 
        scaleToDimension={0.8} />
    </box>)}
    {console.log(scene.meshes)}
  </>
}

export default Cloned1;