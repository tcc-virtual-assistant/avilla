"use client"
import Head from 'next/head'
import React, { useEffect, useState } from "react";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import Acessibilidade from "../components/Acessibilidade";
import AvilaSVG from "../components/AvilaSVG";
import {Avilla_Thinking} from "../components/Avilla_Thinking";
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'; 

function Chat() {

    const [input, setInput] = useState({})
    const [data, setData] = useState([])
    const [idAPI, setidAPI] = useState('')

    const toastOptions = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }

    const newest_question = () =>{
        console.log('teste')
        axios.get("http://127.0.0.1:8000/question/?format=json")
        .then((response) => {
            var object = (response.data)
            var tamanho = ((object).length) + 1
            setidAPI(tamanho)
        })
        apiGet()
    }

    const apiGet = async () => {
        console.log(idAPI)
        axios.get("http://127.0.0.1:8000/question/"+ idAPI +"/?format=json")
            .then((response) => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    const apiPost = async () => {
        await axios.post("http://127.0.0.1:8000/question/?format=json", {
            userQuestion: input.text,
            avillaAnswer: ""
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))

            setTimeout(newest_question, 2000)
            toast.success("A Avilla já esta procurando a resposta para a sua pergunta", toastOptions)
            }

    const handleChange = (event) => {
        event.persist()
        setInput((input) => ({
            ...input,
            [event.target.name]: event.target.value,
        }))
        let newData = []
        setData(newData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)        
        apiPost()
    }

    return(
        <>
        <div className="flex items-center justify-center flex-row ml-80 place-content-center">
        <div className="w-full max-w-lg flex justify-center flex-col">
            <form onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                id='form'>
                <div class="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Sua pergunta:
                </label>
                    <input
                        className="shadow appearance-none border rounded 
                        w-full py-2 px-4 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline"
                        type='text'
                        id='question-text'
                        name='text'
                        placeholder='Digite aqui'
                        onChange={handleChange}
                    ></input>
                </div>
            </form>
                <button className="bg-green-500 hover:bg-green-700 
                text-white font-bold py-1.5 px-5 rounded w-40 place-self-center"
                id='btn'
                onClick={handleSubmit}
                >Enviar
                </button>
            <div className="w-full max-w-lg flex justify-center flex-col">
                <div className="block text-gray-700 text-sm font-bold mb-2 mt-5">
                    <p className="shadow appearance-none border rounded 
                    w-full py-2 px-4 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline">
                        Avilla informa: 
                    </p>
                    </div>
                    <p className="shadow appearance-none border rounded 
                        w-full py-2 px-10 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline">
                                {data.avillaAnswer}
                        </p>
                </div>
                </div>
                <div className='relative ml-16'>
                    <div className="h-80 w-72">
                        <Canvas>
                            <Suspense fallback={null}>
                            <ambientLight/>
                            <spotLight
                                intensity={1.0}
                                angle={Math.PI/3}
                                penumbra={1}
                                position={[0,0,9]}
                                castShadow/>
                            <Avilla_Thinking />
                            <OrbitControls 
                                enablePan={true}
                                enableZoom={true}
                                enableRotate={true}
                                enableDamping={true}
                                />
                            </Suspense>
                        </Canvas>    
                    </div>
                    </div>
                </div>
                <div className='absolute bottom-2 w-full flex justify-center'>
                    <Acessibilidade />
                </div>
        <ToastContainer />
        </>
    )
}
export default Chat;