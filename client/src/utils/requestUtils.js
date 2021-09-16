import axios from 'axios';

const client = axios.create({
    headers: {
      common: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  })

async function handleRequestErrors(request) {
    try {
        const response = await request();
        return response.data;
    } catch(e) {
        return Promise.reject(e.response?.data.message || 'an error occured!');
    }
}

export async function get(url, body, headers) {
    const request = async () => await client.get(url, body, { headers });
    return await handleRequestErrors(request);
}

export async function post(url, body, headers) {
    const request = async () => await client.post(url, body, { headers });
    return await handleRequestErrors(request);
}

export async function put(url, body, headers) {
    const request = async () => await client.put(url, body, { headers });
    return await handleRequestErrors(request);
}

export async function _delete(url, body, headers) {
    const request = async () => await client.delete(url, body, { headers });
    return await handleRequestErrors(request);
}