'use client'

import React from 'react'
import Image from "next/image"
import { Instagram, Github, Mail, Server, Linkedin } from 'lucide-react';

const Footer = () => {
    let titleHover = []
    const redes = [
        {
            rede: <Github />,
            link: "https://github.com/luizndev"
        },
        {
            rede: <Instagram />,
            link: "http://instagram.com/luizn.dev"
        },
        {
            rede: <Mail />,
            link: "mailto:andrade.ltg@gmail.com"
        },
        {
            rede: <Server />,
            link: "https://discord.gg/hqVyRzNwMx"
        },
        {
            rede: <Linkedin />,
            link: "https://www.linkedin.com/in/luiseduardo-andrade/"
        },
    ]
    return (
        <footer className='w-full px-10 pt-10 mt-20 bg-[#00000013]'>
            <div className='w-full flex flex-col gap-10'>
                <Image className='brightness-0' width={150} height={150} src="/luizndev.svg" alt="" />

                <span className='w-full'>
                    Impulsionamos empresas na criação de produtos digitais modernos, eficientes e de alta qualidade. <br></br><br></br>
                    Até o momento, este projeto é custeado 100% por Luis Eduardo Andrade Da Silva.
                </span>

                {/*         <span>
            Creditos do video inicial por: <a href="https://www.tiktok.com/@mv7.fr">MV</a>
        </span>

        <span>
            Minhas 
        </span>
 */}
                <div className="flex gap-6">
                    {redes.map((item, i) => (
                        <div className='relative cursor-pointer rounded-md hover:bg-[#00000016] p-2.5'
                            key={`${i}`}
                            onClick={() => window.open(item.link, "_blank")}
                        >
                            {item.rede}
                        </div>
                    ))}
                </div>
            </div>
            <h4 className='w-full text-center pt-5 font-normal'>Copyright ©2025 Todos os direitos reservados LuiznDev, Inc. - Hospedado por Luizn Dev, Inc.</h4>
        </footer>
    )
}

export default Footer