import { useEffect, useState } from "react";

function useCurrencyInfo() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.coingecko.com/api/v3/exchange_rates`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch data");
                return res.json();
            })
            .then((res) => {
                setData(res.rates);  // Storing the entire rates object
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}

export default useCurrencyInfo;