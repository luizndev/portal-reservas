import api from "../services/api";
import { getCookie } from "./cookie";

export const dataInformation = [];

export async function getEstatistics({ token, userID, email } = {}) {
    console.log('getEstatistics - email:', email, 'token:', token, 'userID:', userID);

    if (!email) {
        console.error('Email não fornecido para getEstatistics.');
        return null;
    }

    try {
        const response = await api.get(
            `/minhassolicitacoes/${email}`,
            { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = response.data;
        const allClasses = [
            ...(data.informatica || []),
            ...(data.multidisciplinar || []),
        ];

        const today = new Date();
        const pastClasses = allClasses
            .filter((item) => {
                const classDate = new Date(item.data);
                return classDate < today;
            })
            .sort((a, b) => new Date(b.data) - new Date(a.data));
        const futureClasses = allClasses
            .filter((item) => {
                const classDate = new Date(item.data);
                return classDate > today;
            })
            .sort((a, b) => new Date(a.data) - new Date(b.data));
        const nextReservation = allClasses
            .filter((item) => {
                const classDate = new Date(item.data);
                return classDate > today;
            })
            .sort((a, b) => new Date(a.data) - new Date(b.data))
            .slice(0, 1);

        dataInformation.push({
            allClasses,
            pastClasses,
            futureClasses,
            nextReservation,
        });
        return { data, pastClasses, futureClasses, allClasses, nextReservation };
    } catch (error) {
        if (error.response) {
            console.error('Erro na resposta da API:', error.response.status, error.response.data);
        } else {
            console.error('Erro ao fazer requisição:', error.message);
        }
        return null;
    }
}