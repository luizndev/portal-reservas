import api from "../services/api";
import { getInfo } from "./getInfo";
import { getCookie, deleteAllCookies } from "./cookie";

export async function handleLogin(e, setLoading, router) {
    e.preventDefault();
    setLoading(true);
    try {
        const response = await api.post("/auth/login", { email: e.target.email.value, password: e.target.password.value, })
            .then((res) => res.data);
        if (response?.token && response?.userId) {
            const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();
            document.cookie = `auth_token=${response.token}; expires=${expires}; path=/`;
            document.cookie = `auth_userID=${response.userId}; expires=${expires}; path=/`;
            router.push("/dashboard");
            // setTimeout(async () => {
            //     const info = await getInfo();
            //     const token = getCookie('auth_token');
            //     const userID = getCookie('auth_userID');
            //     if (info && token && userID) {
            //     } else {
            //         alert("Erro ao obter informações do usuário. Tente novamente.");
            //     }
            //     setLoading(false);
            // }, 100);
        } else {
            setLoading(false);
            alert("Usuário ou senha inválidos.");
        }
    } catch (error) {
        setLoading(false);
        alert("Erro ao fazer login. Tente novamente.");
        console.error(error);
    }
}

export async function handleRegister(e, setLoading, router) {
    e.preventDefault();
    setLoading(true);

    const newUser = {
        name: `${e.target.nome.value} ${e.target.sobrenome.value}`,
        email: e.target.email.value,
        password: e.target.password.value,
        confirmpassword: e.target.confirmpassword ? e.target.confirmpassword.value : e.target.password.value,
        role: "user",
    };

    try {
        const data = await api.post("/auth/register", newUser)
            .then((res) => res.data);
        if (data?.message) {
            alert(data.message);
            if (data.message.includes("sucesso")) {
                router.push("/login");
            }
        }
    } catch (error) {
        alert("Erro ao registrar. Tente novamente.");
        console.error(error);
    } finally {
        setLoading(false);
    }
}

export function handleLogout(router) {
    deleteAllCookies();
    router.push("/login");
    // window.location.href = "/login";
}