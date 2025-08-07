'use client'

import React from 'react'
import Header from "../../components/nui/Header"
import { LaptopMinimal, Dna, Projector } from 'lucide-react';
import Informatica from "./(forms)/Informatica"
import Multidisciplinar from './(forms)/Multidisciplinar';
import Equipamento from './(forms)/Equipamento';
import Footer from "../../components/Footer"

const page = () => {

    function getCookie(name) {
        if (typeof document === "undefined") return null;
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }


    const userID = getCookie('auth_userID');
    const token = getCookie('auth_token');
    const [email, setEmail] = React.useState(getCookie('auth_email'));
    const [name, setName] = React.useState(getCookie('auth_nome'));
    const nome = getCookie('auth_nome');
    const [formPage, setFormPage] = React.useState('informatica');

    return (
        <div>
            <Header />
            {nome ? (
                <div className='w-full'>
                    <div className='w-full px-7 md:px-20 pt-5 min-h-screen flex flex-col'>
                        <div>
                            <h1 className='w-full text-xl font-bold text-gray-800 dark:text-white/90 text-center'>Faça sua solicitação de laboratório, {nome}!</h1>
                            <p className='w-full text-center text-gray-500 text-theme-xs dark:text-gray-400'>É fácil: preencha todos os campos obrigatórios e receba seu token de reserva.</p>
                        </div>
                        <div className='flex flex-col md:flex-row px-0 md:px-40 w-full justify-center items-center gap-3 mt-5'>
                            <button
                                onClick={() => setFormPage("informatica")}
                                className={`w-full md:w-auto cursor-pointer inline-flex justify-center items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium shadow-theme-xs
                                    ${formPage === "informatica" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.03]"}`}
                            >
                                <LaptopMinimal size={16} /> Informática
                            </button>
                            <button
                                style={{pointerEvents: "none"}}
                                onClick={() => setFormPage("multidisciplinar")}
                                className={`w-full md:w-auto cursor-pointer inline-flex justify-center items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium shadow-theme-xs
                                    ${formPage === "multidisciplinar" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.03]"}`}
                            >
                                <Dna size={16} /> Multidisciplinar
                            </button>
                            <button
                                onClick={() => setFormPage("equipamento")}
                                className={`w-full md:w-auto cursor-pointer inline-flex justify-center items-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium shadow-theme-xs
                                    ${formPage === "equipamento" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[0.03]"}`}
                            >
                                <Projector size={16} /> Equipamento
                            </button>
                        </div>
                        <div className='' >
                            {formPage === "informatica" && <Informatica />}
                            {formPage === "multidisciplinar" && <Multidisciplinar />}
                            {formPage === "equipamento" && <Equipamento />}
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex items-center justify-center min-h-screen'>
                    <p className='text-lg font-semibold text-gray-700 dark:text-white/80'>Carregando...</p>
                </div>
            )}
            {nome && (
                <Footer />
            )}
        </div>
    )
}

export default page