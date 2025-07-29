import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./select"
import { cn } from "../../lib/utils"

export function SelectScrollable({ onChange, className }) {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className={cn("w-full", className)}>
                <SelectValue placeholder="Selecione um laboratório" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Informática Básica</SelectLabel>
                    <SelectItem value="Laboratório de Informática 1">Laboratório de Informática 1</SelectItem>
                    <SelectItem value="Laboratório de Informática 2">Laboratório de Informática 2</SelectItem>
                    <SelectItem value="Laboratório de Informática 5">Laboratório de Informática 5</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Informática Avançada</SelectLabel>
                    <SelectItem value="Laboratório de Informática 8">Laboratório de Informática 8</SelectItem>
                    <SelectItem value="Laboratório de Informática 9">Laboratório de Informática 9</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


const listMultidisciplinar = [
  // Saúde
  { nomeLab: "Analises Clinicas e Parasitologia e Líquidos Corporais", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Anatomia I", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Anatomia II", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Bioquímica / Microbiologia", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Clinica de Estética", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Clinica de Farmacia", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Clinica de Nutrição", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Clinica de Odontologia", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Clinica de Piscologia", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Enfermagem", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Estética Facial e Corporal", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Fisioterapia I", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Fisioterapia  II", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Microscopia I", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Microscopia II", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Pré-clínico de Odontologia", alunos: 0, categoria: "Saúde" },
  { nomeLab: "Tecnologia Farmacêutica / Cosmetologia", alunos: 0, categoria: "Saúde" },

  // Arquitetura e Engenharias
  { nomeLab: "Construção Civil", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Desenho Técnico I", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Desenho Técnico II", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Elétrica e Eletrônica", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Física e Resistencia de Materiais I", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Física e Resistencia de Materiais II", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Hardware e Telecomunicações", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Hidráulica", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Maquetaria", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Motores e Tecnologia de Soldagem", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Processos Químicos", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Química I", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Química II", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Química III", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Sementes", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Sistemas Térmicos", alunos: 0, categoria: "Arquitetura e Engenharias" },
  { nomeLab: "Solos e Topografia", alunos: 0, categoria: "Arquitetura e Engenharias" },

  // Diversos
  { nomeLab: "Auditorio", alunos: 0, categoria: "Diversos" },
  { nomeLab: "Biodiversidade e Biotecnologia", alunos: 0, categoria: "Diversos" },
  { nomeLab: "Cozinha Pedagógica / Tecnologia de alimentos", alunos: 0, categoria: "Diversos" },
  { nomeLab: "Ciências Morfofuncionais", alunos: 0, categoria: "Diversos" },
  { nomeLab: "Imagem Pessoal", alunos: 0, categoria: "Diversos" },
  { nomeLab: "NPJ", alunos: 0, categoria: "Diversos" },
  { nomeLab: "Pista de Atletismo", alunos: 0, categoria: "Diversos" },
  { nomeLab: "Quadra Poliesportiva", alunos: 0, categoria: "Diversos" },
  { nomeLab: "Sala de Dança", alunos: 0, categoria: "Diversos" },
  { nomeLab: "Viveiro", alunos: 0, categoria: "Diversos" }
];

export function SelectMulti({ onChange, className }) {
  const categorias = [...new Set(listMultidisciplinar.map(lab => lab.categoria))];

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder="Selecione um laboratório" />
      </SelectTrigger>
      <SelectContent>
        {categorias.map((categoria) => (
          <SelectGroup key={categoria}>
            <SelectLabel>{categoria}</SelectLabel>
            {listMultidisciplinar
              .filter(lab => lab.categoria === categoria)
              .map(lab => (
                <SelectItem key={lab.nomeLab} value={lab.nomeLab}>
                  {lab.nomeLab}
                </SelectItem>
              ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  )
}


export function SelectSoftware({ onChange, className }) {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className={cn("w-full", className)}>
                <SelectValue placeholder="Selecione um software" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Saúde</SelectLabel>
                    <SelectItem value="ImageScope">Laminário Digital</SelectItem>
                    <SelectItem value="Algetec">Algetec</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Tecnologia</SelectLabel>
                    <SelectItem value="Visual Studio Code">Visual Studio Code</SelectItem>
                    <SelectItem value="Apenas Internet">Apenas Internet</SelectItem>
                    <SelectItem value="XAMPP">XAMPP</SelectItem>
                    <SelectItem value="Office">Office</SelectItem>
                    <SelectItem value="MySQL">MySQL</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Engenharias, Agronomia & Arquitetura</SelectLabel>
                    <SelectItem value="AutoCAD">AutoCAD</SelectItem>
                    <SelectItem value="Revit">Revit</SelectItem>
                    <SelectItem value="SketchUp">SketchUp</SelectItem>
                    <SelectItem value="MD Solids">MD Solids</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Caso não encontre o software desejado</SelectLabel>
                    <SelectItem value="Outros">Outros</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


export function SelectEquipament({ onChange, className }) {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className={cn("w-full", className)}>
                <SelectValue placeholder="Selecione um equipamento" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Informática</SelectLabel>
                    <SelectItem value="Datashow (Projetor, Cabo de Força e cabo VGA">Datashow (Projetor, Cabo de Força e cabo VGA)</SelectItem>
                    <SelectItem value="Caixa de Som">Caixa de Som</SelectItem>
                    <SelectItem value="Notebook">Notebook</SelectItem>
                    <SelectItem value="Nenhum">Nenhum</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export function SelectTurno({ onChange, className }) {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className={cn("w-full", className)}>
                <SelectValue placeholder="Selecione um turno" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Turnos</SelectLabel>
                    <SelectItem value="Matutino">Matutino</SelectItem>
                    <SelectItem value="Vespertino">Vespertino</SelectItem>
                    <SelectItem value="Noturno">Noturno</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

