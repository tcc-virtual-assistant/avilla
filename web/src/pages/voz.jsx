import Head from 'next/head'
import { FaMicrophoneAlt } from 'react-icons/fa'
import React, { useState } from 'react';
//import ResponsiveVoice from 'responsivevoice';

export default function Voz() {
  const [speech, setSpeech] = useState('Ola Mundo');

  const TextSpeech = () => {
    ResponsiveVoice.speak(speech, 'Brazilian Portuguese')
  }

  return (
    <>
      <Head>
        <title>Teste Avila Voz</title>
      </Head>
      <main className="min-h-screen m-0 p-0">
        <h1 className='my-24 text-center font-semibold text-5xl text-gray-400'>
          Avila Voz
        </h1>
        <div className='w-full flex items-center justify-center'>
          <button 
            onClick={TextSpeech}
            className='border-2 border-green-400 text-green-400 font-bold text-lg w-80 h-80 cursor-pointer rounded-full hover:bg-green-100 duration-300'
          >
            <FaMicrophoneAlt
              size={180}
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
