import { useEffect, useState } from 'react';

function useApiData(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [url]);

    return data;
}

export default useApiData;