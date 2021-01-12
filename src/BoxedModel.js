import { PhysicsImpostor, Vector3 } from "@babylonjs/core";
import { Model, useClick, useScene, useEngine } from "react-babylonjs";
import "@babylonjs/loaders/glTF";

const BoxedModel = () => {
  const engine = useEngine(); // Is null
  console.log(engine);
  const scene = useScene();
  let timeframe = 0;
  let lastRQ = null;

  const [boxedMesh] = useClick(({ source }) => {
    timeframe = 0;
    lastRQ = { ...source.rotationQuaternion };
    source.physicsImpostor.applyImpulse(new Vector3(2, 2, 2), Vector3.Zero());
    scene._engine.stopRenderLoop(renderLoop);
    scene._engine.runRenderLoop(renderLoop);
  });

  const renderLoop = () => {
    const mesh = boxedMesh.current;
    if (mesh.position._y > 0) {
      if (timeframe > 30) {
        const rq = mesh.rotationQuaternion;
        if (Math.abs(rq._x - lastRQ._x) < 0.01 && Math.abs(rq._x - lastRQ._x) < 0.01 && Math.abs(rq._x - lastRQ._x) < 0.01) {
          scene._engine.stopRenderLoop(renderLoop);
        }
        else {
          timeframe = 0;
          lastRQ = { ...rq };
        }
      }
      else {
        timeframe++;
      }
    }
    else {
      mesh.position = new Vector3(0, 0.6, 0);
    }
  }

  return <>
    <ground name="ground" width={8} height={8}>
      <physicsImpostor type={PhysicsImpostor.BoxImpostor} 
        _options={{ mass: 0 }} />
    </ground>
    <box name="boxedMesh" ref={boxedMesh} height={1} width={0.8} depth={0.81}
      position={new Vector3(0, 0.6, 0)}>
      <standardMaterial name="diceMat" alpha={0.5} />
      <Model
        scaleToDimension={0.8}
        rootUrl="./"
        sceneFilename="Boy.glb"
      />
      <physicsImpostor type={PhysicsImpostor.BoxImpostor} 
        _options={{ mass: 1, restitution: 1 }} />
    </box>
  </>
}

export default BoxedModel;