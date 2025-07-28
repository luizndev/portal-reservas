import api from "../services/api";
import { getInfo } from "./getInfo";
import { getCookie, deleteAllCookies, setCookie } from "./cookie";
export async function handleLogin(e, setLoading, router) {
    e.preventDefault();
    setLoading(true);
    try {
        const response = await api.post("/auth/login", { email: e.target.email.value, password: e.target.password.value, })
            .then((res) => res.data);
        if (response?.token && response?.userId) {
            setCookie("auth_token", response.token, 1)
            setCookie("auth_userID", response.userId, 1)
            setCookie("auth_email", response.user.email, 1)
            setCookie("auth_nome", response.user.email, 1)
            router.push("/dashboard");
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