'use client'

import React from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import { CalendarCheck } from 'lucide-react';
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { cn } from '../../lib/utils';
import { buttonVariants } from "../../components/ui/button";

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    return (
        <div className='w-full h-screen flex flex-col gap-4 items-center justify-center text-center'>
            <Image width={150} height={100} src="/Logotype.svg" alt="Logo Anhanguera" />
            <Card className={'max-w-lg w-lg'}>
                <CardContent>
                    <CardHeader className={'flex flex-col items-center'}>
                        <CalendarCheck size={40} className='text-green-500' />
                        <CardTitle className={'text-2xl font-bold'}>Reserva confirmada!</CardTitle>
                        <CardDescription>Sua reserva foi registrada com sucesso! O token gerado foi: {token}.</CardDescription>
                    </CardHeader>
                    <div className='flex flex-col items-center gap-2 mt-5'>
                        <p className='text-muted-foreground text-sm'>
                            Entraremos em contato em até 72 horas ou, se for uma solicitação da área de TI, com até 1 semana de antecedência da aula. <br />
                            Você pode acompanhar sua solicitação na aba "Minhas Solicitações" ou visualizá-la na dashboard, junto com suas próximas reservas e estatísticas.
                        </p>
                        <button
                            className={cn(buttonVariants(), 'w-full mt-12 cursor-pointer')}
                            onClick={() => router.push("/dashboard")}
                        >
                            Ir para dashboard
                        </button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;
