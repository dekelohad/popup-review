import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
    const [data, setData] = useState<any>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    useEffect(() => {
        setLoading(true)
        setData([]);
        setError('');
        const source = axios.CancelToken.source();
        setTimeout(() => {
            axios.get(url, { cancelToken: source.token })
                .then((res: any) => {
                    setLoading(false);
                    res.data && setData(res.data);
                })
                .catch(err => {
                    setLoading(false)
                    setError('An error occured. Awkward..')
                })
        }, 1000)
        return () => {
            source.cancel();
        }
    }, [url])

    return { data, loading, error }
}

export default useFetch;