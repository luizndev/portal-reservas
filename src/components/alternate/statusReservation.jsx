"use client";

import React, { useEffect, useState } from 'react';

const StatusReservation = ({ text }) => {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        let component = null;
        switch (text) {
            case 'Confirmado':
                component = <div className='px-2 py-1.5 bg-green-100 w-fit rounded-md text-green-900 text-sm font-medium'>Confirmado</div>;
                break;
            case 'Negado':
                component = <div className='px-2 py-1.5 bg-red-100 w-fit rounded-md text-red-900 text-sm font-medium'>Status Negado</div>;
                break;
            case 'Pendente':
                component = <div className='px-2 py-1.5 bg-yellow-100 w-fit rounded-md text-yellow-900 text-sm font-medium'>Status Pendente</div>;
                break;
            case 'Aguardando Confirmação':
                component = <div className='px-2 py-1.5 bg-yellow-100 w-fit rounded-md text-yellow-900 text-sm font-medium'>Aguardando Confirmação</div>;
                break;
            default:
                component = <div className='px-2 py-1.5 bg-black-100 w-fit rounded-md text-black-900 text-sm font-medium'>Status desconhecido</div>;
        }
        setStatus(component);
    }, [text]);

    return status;
}

export default StatusReservation;
