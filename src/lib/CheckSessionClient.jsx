'use client'

import { useEffect } from 'react';
import { checkSession } from './checkSession';
import { usePathname } from 'next/navigation';

export default function CheckSessionClient() {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname !== '/login' && pathname !== '/register') {
            checkSession();
        }
        const interval = setInterval(() => {
            if (pathname !== '/login' && pathname !== '/register') {
                checkSession();
            }
        }, 30000);

         if (pathname !== '/login' && pathname !== '/register') {
            checkSession();
        }
        
        return () => clearInterval(interval);
    }, [pathname]);



    return null;
}
