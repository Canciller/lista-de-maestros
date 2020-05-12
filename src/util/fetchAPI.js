import Config from 'Config';

function fetchAPI(endpoint, options = {}) {
    return fetch(`${Config.apiUrl}${endpoint}`, {
        credentials: 'include',
        ...options,
    })
        .then(res => res.json())
        .then(json => {
            if (json.error) throw new Error(json.error.message);
            else return json;
        });
}

export default fetchAPI;
