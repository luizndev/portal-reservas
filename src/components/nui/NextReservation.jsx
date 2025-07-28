import React from 'react'
import AlternateStatus from "../alternate/statusReservation"

const NextReservation = ({ data, ambiente, clock, status }) => {
    return (
        <div className='p-5 mt-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6'>
            <div>
                <h2 className='text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6'>Próxima reserva:</h2>
                <div className='flex gap-2 flex-col'>
                    <div>
                        <p className='mb-0.5 text-xs leading-normal text-gray-500 dark:text-gray-400'>Ambiente</p>
                        <p className='text-sm font-medium text-gray-800 dark:text-white/90'>{ambiente}</p>
                    </div>
                    <div>
                        <p className='mb-0.5 text-xs leading-normal text-gray-500 dark:text-gray-400'>Data</p>
                        <p className='text-sm font-medium text-gray-800 dark:text-white/90'>{data}</p>
                    </div>
                    <div>
                        <p className='mb-0.5 text-xs leading-normal text-gray-500 dark:text-gray-400'>Horário</p>
                        <p className='text-sm font-medium text-gray-800 dark:text-white/90'>{clock}</p>
                    </div>
                    {/* <div>
                        <p className='mb-0.5 text-xs leading-normal text-gray-500 dark:text-gray-400'>Roteiro de Aula</p>
                        <p className='text-sm font-medium text-gray-800 dark:text-white/90'>Click aqui</p>
                    </div> */}
                    <div>
                        <p className='mb-0.5 text-xs leading-normal text-gray-500 dark:text-gray-400'>Status</p>
                        {<AlternateStatus text={status} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextReservation