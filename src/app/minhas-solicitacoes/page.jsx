"use client"

import React from 'react'
import { dataInformation } from '../../lib/getEstatistics'
import Header from "../../components/nui/Header"
import Footer from "../../components/Footer"
import { getCookie } from '../../lib/cookie'
import { getEstatistics } from '../../lib/getEstatistics'
import TableFuture from "../../components/nui/TableFuture"

const page = () => {
    const userID = getCookie('auth_userID');
    const token = getCookie('auth_token');
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    // futureClasses
    React.useEffect(() => {
        const fetchEstatistics = async () => {
            if (userID) {
                const data = await getEstatistics({ token, userID, email: getCookie('auth_email') });
                setData(data);
                console.log(data.futureClasses)
            }
        };
        fetchEstatistics().finally(() => {
            console.log('Estatísticas carregadas');
            setLoading(false)
        });
    }, [userID, token]);
    return (
        <div>
            <Header />
            {loading ? (
                <div className='flex items-center justify-center min-h-screen'>
                    <p className='text-lg font-semibold text-gray-700 dark:text-white/80'>Carregando...</p>
                </div>
            ) : (
                <div className='w-full'>
                    {data && data.futureClasses.length > 0 ? (
                        <div className='px-7 md:px-20 pt-5'>
                            <div className='flex flex-col gap-0 mb-5 w-full'>
                                <span className='w-full text-center text-gray-500 text-theme-xs dark:text-gray-400'>Acompanhe suas solicitações de laboratórios abaixo:</span>
                                <h1 className='w-full text-xl font-bold text-gray-800 dark:text-white/90 text-center'>Minhas Solicitações de Laboratórios</h1>
                            </div>
                            <TableFuture data={data.futureClasses} />
                        </div>
                    ) : (
                        <div className='px-7 md:px-20 pt-5 min-h-screen flex items-center justify-center'>
                            <p className='text-lg font-semibold text-gray-700 dark:text-white/80'>Nenhuma solicitação encontrada.</p>
                        </div>
                    )   }
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default page
