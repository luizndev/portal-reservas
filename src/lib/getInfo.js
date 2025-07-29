import api from "../services/api";
import { getCookie } from "./cookie";
import { getEstatistics } from "./getEstatistics";

export async function getInfo() {
    const token = getCookie('auth_token');
    const userID = getCookie('auth_userID');

    try {
        const data = await api.get(
            `/auth/${userID}`,
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((res) => res.data)
        .then((data) => {
            // console.log(data.user);
            if(data.user){
                const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();
                document.cookie = `auth_nome=${data.user.name}; expires=${expires}; path=/`;
                document.cookie = `auth_email=${data.user.email}; expires=${expires}; path=/`;
            }
            return data;
        });
    } catch (error) {
        console.error(error);
        return null;
    } finally {
        getEstatistics({ token, userID, email: getCookie('auth_email') });
    }
}


//  if (data?.token && data?.userId) {
//                     const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();
//                     document.cookie = `auth_token=${data.token}; expires=${expires}; path=/`;
//                     document.cookie = `auth_userID=${data.userId}; expires=${expires}; path=/`;
//                     router.push("/dashboard");
//                 }
