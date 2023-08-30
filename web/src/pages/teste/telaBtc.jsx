import Head from 'next/head'
import React, { useEffect, useState } from "react";
import Acessibilidade from "../../components/Acessibilidade";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FaMapMarkedAlt } from 'react-icons/fa';


const areas = [
    { name: 'Planta' },
    { name: 'BTC' },
    { name: 'Chapeuzinho' },
    { name: 'Ambulatório' },
    { name: 'Portarias' },
    { name: 'Banco' },
    { name: 'Digihub' },
    { name: 'Power Tools' },
    { name: 'Bosch Digital' },
    { name: 'Eletrical Drives' },
]


function PlantaBtc() {
    const [model, setModel] = useState("Planta")

    function chooseMap(nome) {
        setModel(nome)
    }

    return (
        <div className=' flex items-center justify-center'>
            <div className="flex w-9/12 h-[600px] flex-row">
                <Canvas>
                    <Suspense fallback={null}>
                        <ambientLight />
                        <spotLight
                            intensity={0.9}
                            angle={0.1}
                            penumbra={1}
                            position={[10, 15, 10]}
                            castShadow />
                        {
                            <Btc />
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
            <div className="absolute bottom-2 w-full flex px-10 justify-evenly">
                <Acessibilidade />
            </div>
        </div>


    );
}

export default PlantaBtc;
