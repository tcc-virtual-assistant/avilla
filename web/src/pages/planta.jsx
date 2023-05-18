import Head from 'next/head'
import React, { useEffect, useState } from "react";
import Acessibilidade from "../components/Acessibilidade";
import {Model} from "../components/mapa/Model"
import { Avilla_Thinking } from '../components/Avilla_Thinking';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'; 
import { FaMapMarkedAlt } from 'react-icons/fa';
// position={[-11,-3,-11]}


const areas = [
  {name:'Planta', model:'../components/mapa/Model'},
  {name:'BTC', model:'../components/Avilla_Thinking'},
  {name:'Chapeuzinho', model:''},
  {name:'Eletrical Drives', model:''},
  {name:'Power Tools', model:''},
  {name:'Ambulatório', model:''},
  {name:'Portarias', model:''}, 
  {name:'Bosch Digital', model:''},
  {name:'Digihub', model:''}
]


function Planta() {
  const [model, setModel] = useState("Planta")
  
  function chooseMap(nome){
    setModel(nome)  
  }
  
  return (
    <div className=' flex items-center justify-center'>
    <div className="flex w-9/12 h-[600px] flex-row">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight/>
              <spotLight
              intensity={0.9}
              angle={0.1}
              penumbra={1}
              position={[10,15,10]}
              castShadow/>
              {model == "Planta" ? 
              <Model /> 
              : model == "BTC" ?
              <Avilla_Thinking/> 
              : null 
            }
              <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              enableDamping={true}
              />
            </Suspense>
          </Canvas>    
          </div>
          <div className='flex w-36 h-4/5 mx-8 items-center'>
            {areas.length ? (
              <ul>
              {areas.map((areas)=>(
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mb-2 w-52 rounded inline-flex items-center"
                  onClick={() => chooseMap(areas.name)}
                >
                <div className='flex flex-row items-center'>
                  <FaMapMarkedAlt/>
                  <span className='px-3'>{areas.name}</span>
                </div>
              </button>
              ))}
              </ul>
            ):null}
        </div>
            <div className="absolute bottom-2 w-full flex px-10 justify-evenly">
                    <Acessibilidade />
            </div>
        </div>
  
  
  );
}

export default Planta;
