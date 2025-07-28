'use client'

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { User } from "lucide-react";
import Link from 'next/link';
import { cn } from '../../lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { handleLogout } from '../../lib/integration';
import { LogOut } from 'lucide-react';
import { getCookie } from '../../lib/cookie';
import { getInfo } from '../../lib/getInfo';

const page = () => {
  const pathname = usePathname()
  const [menu, setMenu] = useState(false)
  const router = useRouter();
  const userID = getCookie('auth_userID');
  const token = getCookie('auth_token');
  const [name, setName] = useState(getCookie('auth_nome'));
  const [email, setEmail] = useState(getCookie('auth_email'));

  useEffect(() => {
    if (userID && token) {
      getInfo().then(data => {
        if (data && data.user) {
          console.log(getCookie('auth_nome'), getCookie('auth_email'));
          setName(getCookie('auth_nome'));
          setEmail(getCookie('auth_email'));
        }
      }).catch(error => {
        console.error("Erro ao obter informações do usuário:", error);
      });
    }
  }, []);

  return (
    <header className='w-full flex items-center justify-between px-7 p-2.5 bg-white shadow-sm'>
      <Link href="/" className='text-gray-700 hover:text-gray-900 hidden md:block'>
        <Image width={150} height={0} src="/Logotype.svg" alt="Logo anhanguera" />
      </Link>
      <Link href="/" className='text-gray-700 hover:text-gray-900 block md:hidden'>
        <Image width={40} height={0} src="/favicon.png" alt="Logo anhanguera" />
      </Link>

      <div className='flex items-center gap-3'>
        <ul className="hidden md:flex gap-3 items-center">
          <Link href={"/dashboard"} prefetch className={`font-medium hover:bg-[#00000007] transition transition-3 py-1 px-3 rounded-lg opacity-75 hover:opacity-100 cursor-pointer select-none hover:brightness-125 ${cn(pathname === "/dashboard" ? "underline" : "")}`}>Início</Link>
          <Link href={"/reservar"} prefetch className={`font-medium hover:bg-[#00000007] transition transition-3 py-1 px-3 rounded-lg opacity-75 hover:opacity-100 cursor-pointer select-none hover:brightness-125 ${cn(pathname === "/reservar" ? "underline" : "")}`}>Realizar Solicitações</Link>
          <Link href={"/minhas-solicitacoes"} className={`font-medium hover:bg-[#00000007] transition transition-3 py-1 px-3 rounded-lg opacity-75 hover:opacity-100 cursor-pointer select-none hover:brightness-125 ${cn(pathname === "/minhas-solicitacoes" ? "underline" : "")}`}>Minhas Solicitações</Link>
        </ul>

        <div className="profile relative flex items-center justify-center ">
          <button onClick={() => setMenu(!menu)} className='rounded-md p-2 hover:bg-[#00000018] cursor-pointer opacity-75'><User /></button>
          {menu && (
            <div className='shadow-theme-lg dark:bg-gray-dark absolute right-0 top-full mt-[15px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-800'>
              <div className="profile">
                <div className='flex items-center gap-3 mb-3'>
                  <Image width={40} height={40} src="/profile.png" alt="Logo anhanguera" className='rounded-full' />
                  <div className='flex flex-col'>
                    <span className='text-gray-800 dark:text-white font-semibold'>{name}</span>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>
                      {email}
                    </span>
                  </div>
                </div>
              </div>

              <Link href={"/dashboard"} prefetch className={`block md:hidden font-medium hover:bg-[#00000007] transition transition-3 py-3 px-3 rounded-lg opacity-75 hover:opacity-100 cursor-pointer select-none hover:brightness-125}`}>Início</Link>
              <Link href={"/reservar"} prefetch className={`block md:hidden font-medium hover:bg-[#00000007] transition transition-3 py-3 px-3 rounded-lg opacity-75 hover:opacity-100 cursor-pointer select-none hover:brightness-125`}>Realizar Solicitações</Link>
              <Link href={"/minhas-solicitacoes"} className={`block md:hidden font-medium hover:bg-[#00000007] transition transition-3 py-3 px-3 rounded-lg opacity-75 hover:opacity-100 cursor-pointer select-none hover:brightness-125`}>Minhas Solicitações</Link>
              <li onClick={() => handleLogout(router)} className='font-medium hover:bg-red-100 flex items-center gap-2 rounded-md w-full list-none py-3 px-3 opacity-75 select-none cursor-pointer'><LogOut size={18} color='#ff0000' /> Logout</li>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default page