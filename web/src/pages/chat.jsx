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
import { Planta_cpin } from '@/components/mapa/Planta_cpin';
import { Planta_spin } from '@/components/mapa/Planta_spin';


function Chat(props) {
    

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
        axios.get("http://127.0.0.1:8000/question/?format=json")
        .then((response) => {
            var object = (response.data)
            var tamanho = ((object).length) + 1
            setidAPI(tamanho)
        })
        apiGet(idAPI)
    }

    const apiGet = (idAPI) => {
        console.log(idAPI)
        axios.get("http://127.0.0.1:8000/question/"+ idAPI +"?format=json")
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        console.log(data.avillaAnswer);
      }, [data.avillaAnswer]);
      
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
        <div className="flex  mt-10 justify-center flex-row pl-64">
        <div className="w-full  max-w-3xl flex justify-center flex-col">
            <form onSubmit={handleSubmit} 
                className="bg-white rounded pb-8 mb-4"
                id='form'>
                <label className="block px-6 text-3xl text-roxo font-bold">
                    Sua pergunta:
                </label>
                    <input
                        className="shadow appearance-none border rounded 
                        w-11/12 py-2  mt-2 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline text-2xl pl-4"
                        type='text'
                        id='question-text'
                        name='text'
                        placeholder='Digite aqui'
                        onChange={handleChange}
                    ></input>
            </form>
                <button className="bg-verde-escuro
                text-white font-bold py-1.5 px-5 rounded w-40 text-2xl place-self-center"
                id='btn'
                onClick={handleSubmit}
                >Enviar
                </button>
            <div className="   max-w-4xl flex justify-center flex-col">
                <div className="block text-gray-700 text-sm font-bold mb-2 mt-5">
                    <p className="shadow appearance-none rounded 
                    w-full py-2 px-6 text-roxo leading-tight 
                    focus:outline-none text-3xl">
                        Avilla informa: 
                    </p>
                    </div>
                    <p className="shadow appearance-none border rounded 
                     py-2 mx-16 text-gray-700 leading-tight 
                        focus:outline-none focus:shadow-outline text-2xl pl-4">
                                {data.avillaAnswer}
                        </p>
                </div>
                </div>
                    <div className="h-80 w-86 mt-36">
                    <img className='w-92 h-full' src='../avilla.png' />
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