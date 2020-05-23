import Config from 'Config';

function fetchAPI(endpoint, options = {}) {
    return fetch(`${Config.apiUrl}${endpoint}`, {
        credentials: 'include',
        ...options,
    })
        .then(res => {
            const contentType = res.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1)
                return res.json();
            else return {};
        })
        .then(json => {
            if (json.error) throw json.error;
            else return json;
        });
}

export default fetchAPI;
