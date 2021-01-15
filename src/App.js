
import { Suspense } from 'react';
import { CannonJSPlugin, Vector3 } from '@babylonjs/core';
import { Engine, Scene } from 'react-babylonjs';

import './App.css';
import Cloned from './Components/Cloned';
import Cloned1 from './Components/Cloned1';
import Instanced from './Components/Instanced';

import * as CANNON from 'cannon';
window.CANNON = CANNON;

function App() {
  return <>
    <Engine antialias adaptToDeviceRatio canvasId='canvas1'>
      <Scene enablePhysics={[new Vector3(0, -9.81, 0), new CannonJSPlugin()]}>
        <arcRotateCamera
          name="camera1"
          target={Vector3.Zero()}
          setTarget={[Vector3.Zero()]}
          alpha={0}
          beta={0}
          upperBetaLimit={Math.PI/2.5}
          radius={12}
        />
        <hemisphericLight name="light1" direction={Vector3.Right()} />
        <Suspense fallback={null}>
          <Cloned />
          {/* <Cloned1 /> */}
          {/* <Instanced /> */}
        </Suspense>
      </Scene>
    </Engine>
  </>
}

export default App;
