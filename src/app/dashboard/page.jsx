'use client'

import React, { useEffect } from 'react'
import Header from "../../components/nui/Header"
import Metric from "../../components/nui/Metric"
import NextReservation from "../../components/nui/NextReservation"
import Footer from "../../components/Footer"
import Table from "../../components/nui/Table"
import { getCookie } from '../../lib/cookie'
import { getEstatistics } from '../../lib/getEstatistics'
import { formatData } from '../../lib/format'

const page = () => {
  const userID = getCookie('auth_userID');
  const token = getCookie('auth_token');
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  // futureClasses
  useEffect(() => {
    const fetchEstatistics = async () => {
      if (userID) {
        const data = await getEstatistics({ token, userID, email: getCookie('auth_email') });
        setData(data);
        console.log(JSON.stringify(data.pastClasses))
      }
    };
    fetchEstatistics().finally(() => {
      console.log('Estatísticas carregadas');
      setLoading(false)
    });
  }, [userID, token]);


  // console.log(data.data, data.pastClasses); // Aqui você tem acesso ao dado retornado

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <span className="text-lg font-semibold text-gray-700 dark:text-white/80">Carregando...</span>
  //     </div>
  //   );
  // }

  return (
    <div className='min-h-screen'>
      <Header />
      {loading ? (
        <div className='flex items-center justify-center min-h-screen'>
          <p className='text-lg font-semibold text-gray-700 dark:text-white/80'>Carregando...</p>
        </div>
      ) : (
        <div>
          <div id="welcome" className='px-7 md:px-20 pt-5'>
            <h1 className='text-2xl font-bold text-gray-800 dark:text-white/90'>Olá, {getCookie('auth_nome')} 👋</h1>
            <p className='mb-2.5'>Seja bem-vindo ao novo portal de reservas!</p>
            <p>Agora com mais transparência e agilidade em todo o processo desde a solicitação de laboratórios e equipamentos até a realização da sua aula ou evento.
              Abaixo, você confere suas estatísticas.</p>
          </div>
          <div className='px-7 md:px-20 flex flex-col pt-5'>
            <h1 className='text-xl font-semibold text-gray-800 dark:text-white/90'>Minhas estatísticas</h1>
            <div id="container" className='flex flex-col md:flex-row w-full gap-5 pt-3 flex-wrap'>
              <Metric name="Total de Reservas" value={Number(data && data.allClasses ? data.allClasses.length : 0)} icon="FlaskConical" />
              <Metric name="Pendentes" value={Number(data && data.futureClasses ? data.futureClasses.length : 0)} icon="Watch" />
              <Metric name="Concluídas" value={Number(data && data.pastClasses ? data.pastClasses.length : 0)} icon="BadgeCheck" />
              <Metric name="Minha Avaliação" value={7.5} icon="Sparkle" />
            </div>
            <div>
              {(data && Array.isArray(data.nextReservation) && data.nextReservation.length > 0) ? (
                data.nextReservation.map((reservation, index) => (
                  <NextReservation key={index} data={formatData(reservation.data)} ambiente={reservation.laboratorio} clock={"19h00 às 22h00"} status={reservation.status} />
                ))
              ) : null}
            </div>
            {data.pastClasses && data.pastClasses.length > 0 ? (
              <div>
                <Table data={data && data.pastClasses ? data.pastClasses : []} />
              </div>
            ) : ""}
          </div>
          <Footer />
        </div>
      )}
    </div>
  )
}

export default page