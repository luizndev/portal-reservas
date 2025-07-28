// RECEBE aaaa-mm-dd RETORNA dd/mm/aaaa
export function formatData(dataString) {
    const dataParts = dataString.split('-');
    if (dataParts.length !== 3) {
        throw new Error('Formato de data inválido. Use aaaa-mm-dd.');
    }
    const [ano, mes, dia] = dataParts;
    return `${dia}/${mes}/${ano}`;
}

// RECEBE aaaa-mm-dd RETORNA dd/mm
export function formatData2(dataString) {
    const dataParts = dataString.split('-');
    if (dataParts.length !== 3) {
        throw new Error('Formato de data inválido. Use aaaa-mm-dd.');
    }
    const [ano, mes, dia] = dataParts;
    return `${dia}/${mes}`;
}