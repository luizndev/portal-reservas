export function checkSession() {
    const token = document.cookie.split('; ').find(row => row.startsWith('auth_token='));
    const userID = document.cookie.split('; ').find(row => row.startsWith('auth_userID='));

    if (!token || !userID) {
        window.location.href = '/login';
        return false;
    }

    return true;
}