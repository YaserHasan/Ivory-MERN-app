import * as RequestUtils from '../utils/requestUtils';


export async function register(name, email, password) {
    const body = {
        name,
        email,
        password,
    };
    return await RequestUtils.post('/api/auth/register', body);
}

export async function login(email, password) {
    const body = {
        email,
        password,
    };
    return await RequestUtils.post('/api/auth/login', body);
}

export async function getUserData() {
    let userData = await getUserDataFromAccessToken();
    if (userData) {
        return userData;
    }
    if (await refershToken()) {
        return await getUserDataFromAccessToken();
    }
    return Promise.reject('an error occured!');
}

async function getUserDataFromAccessToken() {
    try {
        const userData = await RequestUtils.get('/api/auth/getUserData');
        return userData;
    } catch(e) {
        return false;
    }
}

async function refershToken() {
    try {
        await RequestUtils.post('/api/auth/refreshToken');
        return true;
    } catch(e) {
        return false;
    }
}

export async function logout() {
    return await RequestUtils._delete('/api/auth/logout');
}
       