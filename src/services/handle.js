export async function handleReservationInformatica(e, selectedDate, selectLab, selectSoft) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if(data.terms !== "on") {
        alert("Você deve aceitar os termos de uso do Laboratório de Informática para prosseguir")
        return;
    }

    data.data = selectedDate;
    data.laboratorio = selectLab;
    if (selectSoft === "Outros") {
        data.software = formData.get('software');
    }else{
        data.software = selectSoft;
    }
    console.log("Formulário enviado", data);
}
