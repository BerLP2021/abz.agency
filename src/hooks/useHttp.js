import {useState} from 'react';
import ServerError from '../services/ServerError';

const useHttp =  () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = async (
        url, 
        method = 'GET', 
        body = null,
        headers
    ) => {
            setLoading(true);
        try {
            const res = await fetch(url, {method, body, headers});
            
            if (!res.ok) {
                if (res.status >= 400 && res.status < 500) {
                    const response = await res.json();
                    console.log(res, res.status, response)
                    throw new ServerError("Client Errors. Couldn't fetch/post data", res.status, {error: {message: {...response}}});
                } else {
                    throw new Error(`Couldn't fetch url ${url}, res.status: ${res.status}`);
                }
            };
            setLoading(false);
            return await res.json();
        } catch(e) {
            console.error(e)
            setError(true);
            setLoading(false);
            throw e;
        }
    }
    const clearError = () => {
        setError(false);
    }
    
    return {request, loading, error, clearError};
};

export default useHttp;