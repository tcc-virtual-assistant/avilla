import Head from 'next/head'
import React, { useEffect, useState } from "react";
import Acessibilidade from "../components/Acessibilidade";
import {Model} from "../components/mapa/Model"
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'; 

function Planta() {
  return (
    <div className=' flex items-center justify-center'>
    <div className="w-10/12 h-96">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight/>
              <spotLight
              intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10,15,10]}
              castShadow/>
              <Model />
              <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              enableDamping={true}
              />
            </Suspense>
          </Canvas>    
        </div>
            <div className="absolute bottom-2 w-full flex justify-center">
                    <Acessibilidade />
            </div>
        </div>
  
  
  );
}

export default Planta;
