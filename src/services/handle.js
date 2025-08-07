import { getCookie } from "../lib/cookie";
import api from "./api"


export async function handleReservationInformatica(e, selectedDate, selectLab, selectSoft, selectEquipament, setLoading, router) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  if (data.terms !== "on") {
    alert("Você deve aceitar os termos de uso do Laboratório de Informática para prosseguir");
    return;
  }

  // Campos que não vêm diretamente do formulário
  data.data = selectedDate;
  data.laboratorio = selectLab;
  data.equipamento = selectEquipament;
  data.token = generateTokenTI();
  data.status = "Pendente";

  if (selectSoft === "Outros") {
    data.software = `${formData.get("software")} - ${formData.get("link")} - ${formData.get("licenca")}`;
  } else {
    data.software = selectSoft;
  }

  data.professor = formData.get("professor");
  data.email = formData.get("email");
  data.modalidade = formData.get("modalidade");
  data.alunos = formData.get("alunos");
  data.observacao = formData.get("observacao");
  data.userID = getCookie('auth_userID');

  const requiredFields = ["professor", "email", "modalidade", "alunos", "observacao"];
  for (const field of requiredFields) {
    if (!data[field]) {
      alert(`Campo obrigatório não preenchido: ${field}`);
      return;
    }
  }

  try {
    setLoading(true);
    const response = await api.post("/informatica/register", data);

    if (response?.data?.token) {
      console.log("Formulário enviado", data);
      router.push(`/sucess?token=${response.data.token}`);
    } else {
      setLoading(false);
      alert("Erro ao registrar reserva.");
    }
  } catch (error) {
    setLoading(false);
    alert("Erro ao fazer a reserva. Tente novamente.");
    console.error(error);
  }

}
export async function handleReservationMulti(e, selectedDate, selectLab, selectTurn, setLoading, router) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const file = e.target.roteiro?.files?.[0];
    const pdf = await SendAnexo(file);

    if(data.terms !== "on") {
        alert("Você deve aceitar os termos de uso do Laboratório de Informática para prosseguir")
        return;
    }

    data.data = selectedDate;
    data.laboratorio = selectLab;
    data.turno = selectTurn;
    data.roteiro = pdf.id
    data.professor = formData.get("professor");
    data.email = formData.get("email");
    data.curso = formData.get("curso");
    data.disciplina = formData.get("disciplina");
    data.semestre = formData.get("semestre");
    data.tema = formData.get("tema");
    data.modalidade = formData.get("modalidade");
    data.alunos = formData.get("alunos");
    data.observacao = formData.get("observacao");
    data.userID = getCookie('auth_userID');
    data.token = generateTokenLab();

    try {
    setLoading(true);
    const response = await api.post("/multidisciplinar/register", data);

    if (response?.data?.token) {
      router.push(`/sucess?token=${response.data.token}`);
    } else {
      setLoading(false);
      alert("Erro ao registrar reserva.");
    }
  } catch (error) {
    setLoading(false);
    alert("Erro ao fazer a reserva. Tente novamente.");
    console.error(error);
  }

}


const SendAnexo = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('http://localhost:3001/upload-pdf', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) throw new Error("Falha ao enviar PDF");

  const result = await response.json();
  console.log(result)
  return result;
};



const generateTokenTI = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "IT-";
  for (let i = 0; i < 6; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};

const generateTokenEquipamento = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "EQP-";
  for (let i = 0; i < 6; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};

const generateTokenLab = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "LABS-";
  for (let i = 0; i < 6; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};







export async function handleReservationEquiment(e, selectedDate, selectEquipament, setLoading, router) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  if (data.terms !== "on") {
    alert("Você deve aceitar os termos de uso do Laboratório de Informática para prosseguir");
    return;
  }

  data.data = selectedDate;
  data.equipamento = selectEquipament;
  data.token = generateTokenEquipamento();
  data.professor = formData.get("professor");
  data.email = formData.get("email");
  data.ambiente = formData.get("ambiente");
  data.observacao = formData.get("observacao");
  data.userID = getCookie('auth_userID');

  const requiredFields = ["professor", "email"];
  for (const field of requiredFields) {
    if (!data[field]) {
      alert(`Campo obrigatório não preenchido: ${field}`);
      return;
    }
  }

  try {
    setLoading(true);
    const response = await api.post("/equipamento", data);

    if (response?.data?.token) {
      console.log("Formulário enviado", data);
      router.push(`/sucess?token=${response.data.token}`);
    } else {
      setLoading(false);
      alert("Erro ao registrar reserva.");
    }
  } catch (error) {
    setLoading(false);
    alert("Erro ao fazer a reserva. Tente novamente.");
    console.error(error);
  }

}