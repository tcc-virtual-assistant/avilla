import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import axios from 'axios';

import { FaMicrophoneAlt, FaAssistiveListeningSystems } from 'react-icons/fa';

export default function ModalRecognit() {
    const [open, setOpen] = useState(false);
    const [voice, SetVoice] = useState('');

    const PostQuestion = async (question) => {
        let data = JSON.stringify({});

        let body = {
            userQuestion: question,
            avillaAnswer: ""
        }

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:7000/question/',
            Headers: {
                'Content-Type': 'application/json'
            },
            data: body
        };

        await axios.request(config)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const SpeakRecognition = async () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'pt-BR';

        recognition.onresult = (event) => {
            const resultado = event.results[0][0].transcript;
            SetVoice(resultado);
            console.log(voice);
            //return resultado;
        };

        await recognition.start();

    };

    const Submit = async (event) => {
        // event.preventDefault();
        setOpen(true); 
        await SpeakRecognition();
        while (true) {
            if(voice != '') {
                PostQuestion(voice);
                break;
            }
        }

    }

    return (
        <>
            <button
                type="button"
                onClick={Submit}
                className='border-2 border-blue-400 text-blue-400 font-bold text-lg w-40 h-40 cursor-pointer rounded-full hover:bg-blue-100 duration-300'
            >
                <FaMicrophoneAlt
                    size={80}
                    className='m-auto'
                />
            </button>

            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all"
                                >
                                    <Dialog.Title
                                        as="h1"
                                        className="text-xl font-semibold text-gray-900"
                                    >
                                        Diga o que deseja saber para a Avila, ela está escutando...
                                    </Dialog.Title>

                                    <div className='w-full flex my-3'>
                                        <div className='w-1/4'>
                                            <span className="relative flex h-16 w-16 my-6 m-auto">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-16 w-16 bg-sky-500 justify-center items-center text-white">
                                                    <FaAssistiveListeningSystems size={30} />
                                                </span>
                                            </span>
                                        </div>
                                        <div className='w-3/4 rounded-md p-2 text-lg'>
                                            <strong className='text-green-400'>Sua pergunta:</strong> {voice}
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="w-full h-full bg-blue-300 p-2 rounded-lg text-blue-900 border border-white hover:border-blue-900 hover:bg-blue-100 duration-500"
                                            onClick={() => setOpen(false)}
                                        >
                                            Fechar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}