import Head from 'next/head'
import React, { useState } from 'react';

import { FaMicrophoneAlt } from 'react-icons/fa'
import { MdRecordVoiceOver } from 'react-icons/md'

export default function Voz() {
  const [speech, setSpeech] = useState('Olá, eu sou a Avila! Sua assistente virtual');
  const [recognition, SetRecognition] = useState()

  const TextSpeech = () => {
    const mensagem = new SpeechSynthesisUtterance(speech);
    mensagem.lang = 'pt-BR';

    const vozes = window.speechSynthesis.getVoices();
    const vozFeminina = vozes.find(voz => voz.voiceURI.includes('Maria'));
    mensagem.voice = vozFeminina;

    window.speechSynthesis.speak(mensagem);
  }

  const SpeakRecognition = () => {
    const recognition = new window.webkitSpeechRecognition(); 
    recognition.lang = 'pt-BR'; 

    recognition.onresult = event => {
      const resultado = event.results[0][0].transcript; 
      SetRecognition(resultado);
      console.log(recognition);
    };

    recognition.start(); 
  };

  return (
    <>
      <Head>
        <title>Teste Avila Voz</title>
      </Head>
      <main className="min-h-screen m-0 p-0">
        <h1 className='my-24 text-center font-semibold text-5xl text-gray-400'>
          Avila Voz
        </h1>
        <div className='w-[80%] flex items-center m-auto justify-around'>
          <button 
            onClick={TextSpeech}
            className='border-2 border-green-400 text-green-400 font-bold text-lg w-64 h-64 cursor-pointer rounded-full hover:bg-green-100 duration-300'
          >
            <MdRecordVoiceOver
              size={100}
              className='m-auto'
            />
          </button>

          <button 
            onClick={SpeakRecognition}
            className='border-2 border-blue-400 text-blue-400 font-bold text-lg w-64 h-64 cursor-pointer rounded-full hover:bg-blue-100 duration-300'
          >
            <FaMicrophoneAlt
              size={100}
              className='m-auto'
            />
          </button>
        </div>
        {
          (speech) ?
            <div className='w-[80%] flex items-center justify-center m-auto bg-gray-200 mt-10 rounded-lg p-2'>
              <label className='text-green-400 my-10 text-xl'>
                {speech}
              </label>
            </div>
          :
          null
        }
      </main>
    </>
  )
}
