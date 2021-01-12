import { useEffect, useState } from "react";
import { PhysicsImpostor, Vector3 } from "@babylonjs/core";
import { useSceneLoader, useEngine } from "react-babylonjs";
import "@babylonjs/loaders/glTF";

const BoxedModel = () => {
  // const engine = useEngine(); // Is null
  // console.log(engine);
  const sceneLoaderResults = useSceneLoader("./", "Boy.glb");
  console.log(sceneLoaderResults.meshes.length);
  const x = sceneLoaderResults.meshes[0].clone("asd");
  // console.log(x);
  x.position = new Vector3(1, 2, 2);
  
  useEffect(() => {
    return () => {
      // console.log('disposing the sceneloader results.')
      sceneLoaderResults.dispose();
    }
  }, [sceneLoaderResults]);

  // const [parentBox, _] = useState(sceneLoaderResults.rootMesh.clone("asd"));
 
  return <>
    {/* {parentBox && <>
      {console.log(parentBox)}
      <abstractMesh fromInstance={sceneLoaderResults.rootMesh} scaleToDimension={0.8} />
      <mesh fromInstance={parentBox} scaleToDimension={0.8} position={new Vector3(2, 0, 2)} />
    </>} */}
  </>

  // return <>
  //   <ground name="ground" width={8} height={8}>
  //     <physicsImpostor type={PhysicsImpostor.BoxImpostor} 
  //       _options={{ mass: 0 }} />
  //   </ground>
  //   <box name="boxedMesh" ref={boxedMesh} height={1} width={0.8} depth={0.81}>
  //     <standardMaterial name="diceMat" alpha={0.5} />
  //     <Model
  //       scaleToDimension={0.8}
  //       rootUrl="./"
  //       sceneFilename="Boy.glb"
  //     />
  //     <physicsImpostor type={PhysicsImpostor.BoxImpostor} 
  //       _options={{ mass: 1, restitution: 1 }} />
  //   </box>
  // </>
}

export default BoxedModel;