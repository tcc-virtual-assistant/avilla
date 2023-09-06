import Head from 'next/head'
import React, { useEffect, useState } from "react";
import Acessibilidade from "../components/Acessibilidade";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FaMapMarkedAlt, FaNotesMedical } from 'react-icons/fa';
import { Planta_cpin } from "../components/mapa/Planta_cpin"
import { Digihub } from '../components/mapa/Digihub';
import { Pt } from "../components/mapa/Pt"
import { Ed } from "../components/mapa/Ed"
import { Btc } from "../components/mapa/Btc"
import { Chapeu } from "../components/mapa/Chapeu"
import { Ambulatorio } from "../components/mapa/Ambulatorio"
import { Avilla_Thinking } from '../components/Avilla_Thinking';
import { Planta_spin } from '@/components/mapa/Planta_spin';



const areas = [
  { name: 'Planta' },
  { name: 'BTC' },
  { name: 'Chapeuzinho' },
  { name: 'Ambulatório' },
  { name: 'Digihub' },
  { name: 'Power Tools' },
  { name: 'Bosch Digital' },
  { name: 'Eletrical Drives' },
]



function Planta({ nomePlanta }) {
  const [model, setModel] = useState("Planta")
  const [pin, setPin] = useState(false)

  function chooseMap(nome) {
    setModel(nome)
  }

  function togglePins() {
    setPin(!pin) // Alterna entre true e false
  }

  return (
    <div className=' flex items-center justify-center'>
      <div className="flex w-5/6 h-[800px] flex-col items-center">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <spotLight
              intensity={-0.7}
              angle={1}
              penumbra={0}
              position={[10, 15, 10]}
              castShadow />
            {model == "Planta" ?

              <Planta_cpin select={chooseMap} pins={pin} />

              : model == "BTC" ?
                <Btc />
                : model == "Chapeuzinho" ?
                  <Chapeu />
                  : model == "Eletrical Drives" ?
                    <Ed />
                    : model == "Power Tools" ?
                      <Pt />
                      : model == "Ambulatório" ?
                        <Ambulatorio />
                        : model == "Bosch Digital" ?
                          <Ambulatorio />
                          : model == "Digihub" ?
                            <Digihub />
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

        {model == 'Planta' && (
          <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 my-2 w-52 rounded inline-flex items-center justify-center'
            onClick={togglePins}>{pin ? 'Remover Pins' : 'Adicionar Pins'}</button>
        )}
        {model != 'Planta' && (
          <button
            className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 my-2 w-52 rounded inline-flex items-center justify-center'
            onClick={()=>setModel('Planta')}
          >
            Voltar
          </button>
        )}

      </div>
      <div className='flex w-36 h-4/5 mx-8 items-center'>
        {areas.length ? (
          <ul>
            {areas.map((areas) => (
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mb-2 w-52 rounded inline-flex items-center"
                onClick={() => chooseMap(areas.name)}
              >
                <div className='text-2xl flex flex-row items-center'>
                  <FaMapMarkedAlt />
                  <span className='text-2xl px-3'>{areas.name}</span>
                </div>
              </button>
            ))}
          </ul>
        ) : null}
      </div>
      
    </div>


  );
}

export default Planta;
