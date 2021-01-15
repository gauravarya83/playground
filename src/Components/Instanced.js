import { useRef, useState } from "react";
import { Vector3 } from "@babylonjs/core";
import { Model, useScene } from "react-babylonjs";
import "@babylonjs/loaders/glTF";

const Instanced = () => {
  const scene = useScene();
  const box = useRef();
  const [modelReady, setModelReady] = useState();

  const modelLoaded = model => {
    setModelReady(true);
  }
  
  return <>
    <box ref={box} name="box" position={new Vector3(0, 0, 2)}>
      <Model 
        rootUrl="./" 
        sceneFilename="Boy.glb" 
        scaleToDimension="0.8"
        onModelLoaded={modelLoaded} />
    </box>
    {modelReady && <instancedMesh
      source={box.current}
      name="box1"
      position={new Vector3(0, 0, -2)}
    />}
    {console.log(scene.meshes)}
  </>
}

export default Instanced;