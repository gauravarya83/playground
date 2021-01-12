
import { Suspense } from 'react';
import { CannonJSPlugin, Vector3 } from '@babylonjs/core';
import { Engine, Scene } from 'react-babylonjs';

import './App.css';
import BoxedModel from './BoxedModel';

import * as CANNON from 'cannon';
window.CANNON = CANNON;

function App() {
  return (
    <Engine antialias adaptToDeviceRatio canvasId='canvas1'>
      <Scene enablePhysics={[new Vector3(0, -9.81, 0), new CannonJSPlugin()]}>
        <arcRotateCamera
          name="camera1"
          target={Vector3.Zero()}
          setTarget={[Vector3.Zero()]}
          alpha={Math.PI/4}
          beta={Math.PI/4}
          upperBetaLimit={Math.PI/2.5}
          radius={10}
        />
        <hemisphericLight name="light1" direction={Vector3.Right()} />
        <Suspense fallback={null}>
          <BoxedModel />
        </Suspense>
      </Scene>
    </Engine>
  );
}

export default App;
