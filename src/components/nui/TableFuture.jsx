import React from 'react'
import { Image } from 'next/image'
import { formatData } from '../../lib/format'
import AlternateStatus from '../alternate/statusReservation';
const Table = ({ data }) => {
    return (
        <div className='rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
            <div className='px-5 py-4 sm:px-6 sm:py-5'>
                <h1 className='text-base font-medium text-gray-800 dark:text-white/90s'>Minhas solicitações</h1>
                <div className='border-t border-gray-100 p-5 sm:p-6 dark:border-gray-800'>
                    <div className='overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]'>
                        <div className='max-w-full overflow-x-auto custom-scrollbar'>
                            <table className='w-full min-w-[1102px]'>
                                <thead>
                                    <tr className="border-b border-gray-100 dark:border-gray-800">
                                        <th className="px-5 py-3 text-left sm:px-6">
                                            <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                                                Ambiente
                                            </p>
                                        </th>
                                        <th className="px-5 py-3 text-left sm:px-6">
                                            <p className="font-medium text-gray-500 text-black-xs dark:text-gray-400">
                                                Data
                                            </p>
                                        </th>
                                        <th className="px-5 py-3 text-left sm:px-6">
                                            <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                                                Token
                                            </p>
                                        </th>
                                        <th className="px-5 py-3 text-left sm:px-6">
                                            <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                                                Status
                                            </p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                                            <td className="px-5 py-4 sm:px-6">
                                                <div className="flex items-center gap-3">
                                                    <div>
                                                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                            {item.laboratorio}
                                                        </span>
                                                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                            {item.alunos} alunos(as)
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 sm:px-6">
                                                <p className="text-gray-500 text-theme-sm dark:text-gray-400">
                                                    {formatData(item.data)}
                                                </p>
                                            </td>
                                            <td className="px-5 py-4 sm:px-6">
                                                <p className="text-gray-500 text-theme-sm dark:text-gray-400">
                                                    {item.token}
                                                </p>
                                            </td>
                                            <td className="px-5 py-4 sm:px-6">
                                                <p className="text-gray-500 text-theme-sm dark:text-gray-400">
                                                    {<AlternateStatus text={item.status} />}
                                                </p>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table