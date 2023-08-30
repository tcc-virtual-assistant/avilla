import Head from 'next/head'
import axios from 'axios';
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

import Tabela from '@/components/agenda/tabela'

function getSemanaDecorrente() {
    const semanaFormat = [];
    const semana = [];
    var data = new Date();

    // O primeiro dia é o dia do mês, menos o dia da semana
    var primeiro = data.getDate() - data.getDay();
    var primeiroDia = new Date(data.setDate(primeiro));
    semana.push(primeiroDia);

    for (var i = 0; i < 6; i++) {
        semana.push(new Date(data.setDate(data.getDate() + 1)));
    }
    
    semana.map(diaSemana => {
        var Pdia = diaSemana.getDate().toString(),
            dia = (Pdia.length == 1) ? '0' + Pdia : Pdia,
            Pmes = (diaSemana.getMonth() + 1 ).toString(),
            mes = (Pmes.length == 1) ? '0' + Pmes : Pmes,
            ano = diaSemana.getFullYear();

        semanaFormat.push(dia + '/' + mes + '/' + ano);
    })
    return semanaFormat;
}

export default function Agenda() {
    const carrossel = useRef();
    const [agenda, setAgenda] = useState([])
    const [verAula, setVerAula] = useState(false);
    const [width, setWidth] = useState(0);
    const [semana, setSemana] = useState([]);

    async function getAgenda() {
        let data = JSON.stringify({});
    
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8001/schedule/',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };
    
        await axios.request(config)
            .then((response) => {
                if (response.status != 200) { return }
                setAgenda(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {(async () => {
        var retorno = getSemanaDecorrente();
        setSemana(retorno);
        getAgenda();

        setWidth((carrossel.current?.scrollWidth - carrossel.current?.offsetWidth) + 30)
    })();}, []);

    return (
        <>
            <Head>
                <title>Avilla | Agenda</title>
            </Head>
            <main className='text-center px-2 mb-14'>
                <h1 className='text-5xl p-10 text-black'>
                    Agenda da Semana
                </h1>
                <div className='w-full max-w-screen-2xl m-auto min-h-100 flex item-center justify-center border-2 border-black rounded-lg'>
                    <motion.div 
                        className='cursor-grab overflow-hidden' 
                        whileTap={{ cursor : "grabbing" }}
                        ref={carrossel}
                    >
                        <motion.div
                            className='flex'
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                        >
                            
                            <Tabela 
                                setTrigger={setVerAula} 
                                dia_semana={'Segunda-Feira'} 
                                dia={semana[1]} 
                                aulas={agenda}
                            />
                            <Tabela 
                                setTrigger={setVerAula} 
                                dia_semana={'Terça-Feira'} 
                                dia={semana[2]} 
                                aulas={agenda}
                            />
                            <Tabela 
                                setTrigger={setVerAula} 
                                dia_semana={'Quarta-Feira'} 
                                dia={semana[3]} 
                                aulas={agenda}
                            />
                            <Tabela 
                                setTrigger={setVerAula} 
                                dia_semana={'Quinta-Feira'} 
                                dia={semana[4]} 
                                aulas={agenda}
                            />
                            <Tabela 
                                setTrigger={setVerAula} 
                                dia_semana={'Sexta-Feira'} 
                                dia={semana[5]} 
                                aulas={agenda}
                            />

                        </motion.div>
                    </motion.div>
                </div>
            </main>
        </>
    )
}