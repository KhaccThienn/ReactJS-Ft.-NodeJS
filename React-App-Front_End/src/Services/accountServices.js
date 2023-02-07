import https from "../http-common";

const getAll = () => {
    return https.get("/api/accounts")
}

const register = (data) => {
    return https.post("/api/register", data);
}

const login = (data) => {
    return https.post("/api/login", data);
}

const refresh_token = (token) => {
    return https.post("/api/token", token);
};

const AccountServices = {
    getAll, register, login, refresh_token
};

export default AccountServices;