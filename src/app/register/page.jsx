"use client"

import { useState } from "react";
import Image from "next/image"
import { Input } from "../../components/ui/input"
import { handleRegister } from "../../lib/integration"; // Assuming you have a handleRegister function to manage registration logic
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
 
const Page = () => {
  const [passwordView, setPasswordView] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   setLoading(true)
  // }
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <Image width={200} height={150} src="/Logotype.svg" alt="Logo Anhanguera" />

      <form onSubmit={(e) => handleRegister(e, setLoading, router)} className="shadow-sm p-6 rounded-xl bg-white box space-y-4 w-full max-w-sm mt-6">
       <div>
        <p className="leading-7 text-[#00000041]">Registre-se no</p>
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight ">Portal de Reservas</h2>   
       </div>

       <div className="flex flex-col space-y-2">
          <label htmlFor="nome" className="text-sm font-medium">Nome</label>
          <Input id="nome" name="nome" type="text" placeholder="Insira seu nome" />
        </div>
       <div className="flex flex-col space-y-2">
          <label htmlFor="sobrenome" className="text-sm font-medium">Sobrenome</label>
          <Input id="sobrenome" name="sobrenome" type="text" placeholder="Insira seu sobrenome" />
        </div>
       <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input id="email" name="email" type="email" placeholder="seuemail@kroton.com.br" />
        </div>

       <div className="flex flex-col space-y-2">
        <label htmlFor="password" className="text-sm font-medium">Senha</label>
        <div className="relative">
            <Input
            id="password"
            type={passwordView ? "text" : "password"}
            placeholder="••••••••"
            className="pr-10"
            name="senha"
            />
            <button
            type="button"
            onClick={() => setPasswordView(!passwordView)}
            className="absolute right-2 top-1/2 cursor-pointer -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
            {passwordView ? <Eye className="w-4 h-5" /> : <EyeOff className="w-4 h-5" />}
            </button>
        </div>
        </div>

        <Button type="submit" className={`w-full cursor-pointer ${loading ? 'opacity-80 pointer-events-none' : ''}`}>
          {loading ? (
           <LoaderCircle className="animate-spin h-5 w-5 " strokeWidth={2.4} />
          ): ("Entrar")}
        </Button>
      </form>
      <div className="flex flex-col items-center mt-5">
        <span>Já possui uma conta? <Link prefetch href="/login" className="font-semibold cursor-pointer">Fazer Login</Link></span>
      </div>
    </section>
  )
}

export default Page
