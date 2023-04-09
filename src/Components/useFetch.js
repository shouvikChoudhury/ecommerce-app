import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [products, setproducts] = useState([]);

    const getproducts = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setproducts(data);
    };
    useEffect(() => {
        getproducts();
    }, []);

    return { products }
}

export default useFetch