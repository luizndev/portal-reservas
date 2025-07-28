import React from 'react'
import { Input } from "../../../components/ui/input"
import { Calendar22 } from "../../../components/ui/Calendar22"
import { Button } from "../../../components/ui/button"
import { Checkbox } from "../../../components/ui/checkbox"
import { Label } from "../../../components/ui/label"
import { getCookie } from '../../../lib/cookie'
import { Select } from 'react-day-picker'
import { SelectScrollable, SelectSoftware } from '../../../components/ui/selectInformatica'
import { handleReservationInformatica } from '../../../services/handle'

const Informatica = () => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectLab, setSelectLab] = React.useState("");
    const [selectSoft, setSelectSoft] = React.useState("");
    return (
        <form onSubmit={(e) => handleReservationInformatica(e, selectedDate, selectLab, selectSoft)} className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] px-5 py-4 sm:px-6 sm:py-5 mt-5">
            <h2 className='text-lg font-semibold text-gray-800 dark:text-white/90'>Reserva de Informática</h2>

            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="professor" className="text-sm font-medium">Nome do Professor</label>
                <Input id="professor" type="text" name="professor" placeholder="Digite seu nome" value={getCookie('auth_nome')} readOnly />
            </div>

            <div className='flex items-center gap-2.5 justify-between rounded-lg mt-4'>
                <div className="flex w-full flex-col space-y-2 mt-4">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" name="email" placeholder="seuemail@kroton.com.br" value={getCookie('auth_email')} readOnly />
                </div>


                <div className="flex flex-col space-y-2 mt-4 w-fit">
                    <Calendar22 className="w-full" onChange={(date) => setSelectedDate(date ? date.toISOString().split('T')[0] : "")} />
                </div>
            </div>


            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="modalidade" className="text-sm font-medium">Modalidade</label>
                <Input id="modalidade" type="text" name="modalidade" placeholder="Digite a modalidade" />
            </div>

            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="alunos" className="text-sm font-medium">Alunos</label>
                <Input id="alunos" type="number" name="alunos" placeholder="Digite a quantidade de alunos" />
            </div>

            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="laboratorio" className="text-sm font-medium">Laboratório</label>
                {/* <Input id="laboratorio" type="select" name="laboratorio" placeholder="Selecione o laboratório" /> */}
                <SelectScrollable onChange={(lab) => setSelectLab(lab)} />
            </div>



            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="software" className="text-sm font-medium">Software</label>
                <SelectSoftware onChange={(soft) => setSelectSoft(soft)} />
            </div>

            {selectSoft === "Outros" && (
                <div className="flex flex-col space-y-2 mt-4">
                    <label htmlFor="software" className="text-sm font-medium">Especificar
                    </label>
                    <Input id="software" type="text" name="software" placeholder="Digite o nome do software" />
                </div>
            )}

            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="equipamento" className="text-sm font-medium">Equipamento</label>
                <Input id="equipamento" type="text" name="equipamento" placeholder="Digite o nome do equipamento" />
            </div>

            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="observacao" className="text-sm font-medium">Observação</label>
                <Input id="observacao" type="text" name="observacao" placeholder="Digite suas observações" />
            </div>

            <div className="flex flex-row items-center gap-2 mt-4">
                <Checkbox className={"flex items-center justify-center"} id="terms" name="terms" />
                <Label className={"font-normal flex whitespace-wrap"} htmlFor="terms">Aceito o termo de uso do Laboratório de Informática. Ao solicitar a reserva, não será possível adicionar softwares ou equipamentos posteriormente.</Label>
            </div>

            <div className="flex flex-row items-center justify-between mt-4">
                <Button type="submit" className="cursor-pointer">Reservar</Button>
            </div>
            {/* <div className='mt-4'>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>Nome do Professor</label>
            <input type='text' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white' placeholder='Digite o nome do laboratório' />
        </div>                                                                              
        <div className='mt-4'>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300'>Data da Reserva</label>
            <input type='date' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white' />
        </div>       */}
        </form>
    )
}

export default Informatica