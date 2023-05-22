import Head from 'next/head';
import React, { useState } from 'react';

import { FaMicrophoneAlt } from 'react-icons/fa';
import { MdRecordVoiceOver } from 'react-icons/md';
import ModalRecognit from '@/components/modalrecognit';

export default function Voz() {
  const [speech, setSpeech] = useState('Meu propósito é ajudar as pessoas');
  const [voice, SetResultVoice] = useState('');

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
      SetResultVoice(resultado);
      console.log(voice);
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
          
          <ModalRecognit/>
          
        </div>
      </main>
    </>
  )
}
