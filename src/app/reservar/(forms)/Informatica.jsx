import React, { useRef } from 'react'
import { toast } from "sonner"
import { Input } from "../../../components/ui/input"
import { Calendar22 } from "../../../components/ui/Calendar22"
import { Button } from "../../../components/ui/button"
import { Checkbox } from "../../../components/ui/checkbox"
import { Label } from "../../../components/ui/label"
import { getCookie } from '../../../lib/cookie'
import { Select } from 'react-day-picker'
import { SelectEquipament, SelectScrollable, SelectSoftware } from '../../../components/ui/selectInformatica'
import { handleReservationInformatica } from '../../../services/handle'
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

const Informatica = () => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false)
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectLab, setSelectLab] = React.useState("");
    const [selectEquipament, setSelectEquipament] = React.useState("");
    const [minDate, setMinDate] = React.useState(7);
    const [noSelect, setNoSelect] = React.useState(false);
    const [selectSoft, setSelectSoft] = React.useState("");
    const timeoutRef = useRef(null);
    const [errors, setErrors] = React.useState({});

    const handleLocalValidation = (e) => {
    setErrors({})
    e.preventDefault();

    const formData = new FormData(e.target);
    const newErrors = {};

    if (!formData.get("modalidade")) newErrors.modalidade = true;
    if (!formData.get("alunos")) newErrors.alunos = true;
    if (!selectLab) newErrors.laboratorio = true;
    if (!selectSoft) newErrors.software = true;
    if (!selectEquipament) newErrors.equipamento = true;

    if(selectedDate === null || selectedDate === "") newErrors.date = true;

    if (selectSoft === "Outros") {
        if (!formData.get("software")) newErrors.softwareOutros = true;
        if (!formData.get("licenca")) newErrors.licenca = true;
        if (!formData.get("link")) newErrors.link = true;
    }

    if (!formData.get("terms")) newErrors.terms = true;

    setErrors(newErrors);

     if (Object.keys(newErrors).length > 0) {
        toast.error("Preencha ou corrija os campos obrigatórios. Campos com erro estão marcados em vermelho.")
    }

    if (Object.keys(newErrors).length === 0) {
        setLoading(true)
        handleReservationInformatica(e, selectedDate, selectLab, selectSoft, selectEquipament, setLoading, router);
    }
};


    const HandleDate = () => {
        setNoSelect(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }


        timeoutRef.current = setTimeout(() => {
            setNoSelect(false);
            timeoutRef.current = null; 
        }, 2000);
    };
    React.useEffect(() => {
        if(selectSoft === "Outros"){
            setMinDate(10)
            HandleDate()
        }else{
            setMinDate(7)
        }
    }, [selectSoft])
    return (
        <form onSubmit={(e) => handleLocalValidation(e)} className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] px-5 py-4 sm:px-6 sm:py-5 mt-5">
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
                    <Calendar22 Deselect={noSelect} classNameInput={errors.date ? "border-red-500  focus:ring-red-500 w-full text-red-500" : "w-full"} classNameLabel={errors.date && "text-red-500"} DateMin={minDate} onChange={(date) => setSelectedDate(date ? date.toISOString().split('T')[0] : "")} />
                </div>
            </div>


            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="modalidade" className={`text-sm font-medium ${errors.modalidade ? "text-red-500 text-sm font-medium" : "text-sm font-medium"}`}>Modalidade</label>
                <Input id="modalidade" type="text" name="modalidade" placeholder="Digite a modalidade" className={errors.modalidade ? "border-red-500 text-red-500  focus:outline-red-500 " : ""} />
            </div>

            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="alunos"  className={`text-sm font-medium ${errors.alunos ? "text-red-500 text-sm font-medium" : "text-sm font-medium"}`}>Alunos</label>
                <Input id="alunos" type="number" name="alunos" placeholder="Digite a quantidade de alunos" className={errors.alunos ? "border-red-500 text-red-500  focus:outline-red-500 " : ""} />
            </div>

            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="laboratorio" className={`text-sm font-medium ${errors.laboratorio ? "text-red-500 text-sm font-medium" : "text-sm font-medium"}`}>Laboratório</label>
                {/* <Input id="laboratorio" type="select" name="laboratorio" placeholder="Selecione o laboratório" /> */}
                <SelectScrollable onChange={(lab) => setSelectLab(lab)} className={errors.laboratorio ? "border-red-500 text-red-500  focus:outline-red-500 " : ""}/>
            </div>



            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="software" className={`text-sm font-medium ${errors.software ? "text-red-500 text-sm font-medium" : "text-sm font-medium"}`}>Software</label>
                <SelectSoftware onChange={(soft) => setSelectSoft(soft)} className={errors.software ? "border-red-500 text-red-500  focus:outline-red-500 " : ""}/>
            </div>

            {selectSoft === "Outros" && (
                <>
                <Label className={"font-normal flex whitespace-wrap"} htmlFor="terms">Atenção: Você selecionou a opção "Outros", o que indica que o software solicitado não está instalado atualmente nos laboratórios. Por esse motivo, será necessário realizar a instalação previamente.
Para garantirmos o tempo hábil de preparo, o prazo mínimo de solicitação foi alterado para 10 dias de antecedência, permitindo o correto alinhamento e instalação do software.</Label>
                    <div className="flex flex-col space-y-2 mt-4">
                        <label htmlFor="software" className="text-sm font-medium">Especificar
                        </label>
                        <Input id="software" type="text" name="software" placeholder="Digite o nome do software" />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <label htmlFor="software" className="text-sm font-medium">Esse software é pago ou gratuito?
                        </label>
                        <Input id="licenca" type="text" name="licenca" placeholder="Digite pago ou gratuito" />
                    </div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <label htmlFor="software" className="text-sm font-medium">Link de download
                        </label>
                        <Input id="link" type="text" name="link" placeholder="Digite o link" />
                    </div>
                </>
            )}

            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="equipamento" className={`text-sm font-medium ${errors.equipamento ? "text-red-500 text-sm font-medium" : "text-sm font-medium"}`}>Equipamento</label>
                {/* <Input id="equipamento" type="text" name="equipamento" placeholder="Digite o nome do equipamento" /> */}
                <SelectEquipament onChange={(equipament) => setSelectEquipament(equipament)} className={errors.equipamento ? "border-red-500 text-red-500  focus:outline-red-500 " : ""}/>
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
                <Button type="submit" className={`cursor-pointer w-3xs ${loading ? 'opacity-80 pointer-events-none' : ''}`}>
                    {loading ? (
                        <LoaderCircle className="animate-spin h-5 w-5 " strokeWidth={2.4} />
                    ) : ("Reservar")}
                    </Button>
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