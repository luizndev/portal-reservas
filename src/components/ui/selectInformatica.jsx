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

export function SelectScrollable({ onChange }) {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="w-full">
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


export function SelectSoftware({ onChange }) {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="w-full">
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
