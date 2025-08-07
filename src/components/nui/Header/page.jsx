import React from 'react';
import Image from "next/image";
import { User } from "lucide-react";
import Link from 'next/link';

const page = () => {
  return (
    <header className='w-full flex items-center justify-between px-7 p-2.5 bg-white shadow-sm'>
        <Link href="/" className="text-gray-700 hover:text-gray-900">
          <Image width={150} height={0} src="/Logotype.svg" alt="Logo anhanguera" />
        </Link>
        <div className='flex items-center gap-3'>
            <ul className="flex gap-3 items-center">
                <li className='font-medium hover:bg-[#00000007] transition transition-3 py-1 px-3 rounded-lg opacity-75 hover:opacity-100 cursor-pointer select-none hover:brightness-125'>Início</li>
                <li className='font-medium hover:bg-[#00000007] transition transition-3 py-1 px-3 rounded-lg opacity-75 hover:opacity-100 cursor-pointer select-none hover:brightness-125'>Realizar Solicitações</li>
                <li className='font-medium hover:bg-[#00000007] transition transition-3 py-1 px-3 rounded-lg opacity-75 hover:opacity-100 cursor-pointer select-none hover:brightness-125'>Minhas Solicitações</li>
            </ul>

            <div className="profile flex items-center justify-center ">
                <button className='rounded-md p-2 hover:bg-[#00000018] cursor-pointer opacity-75'><User /></button>
            </div>
        </div>
    </header>
  )
}

export default page