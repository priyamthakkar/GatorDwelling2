import { useState, useEffect } from 'react';

export default () => {
  const [dwellings, setDwellings] = useState([]);
  const [recovery, setRecovery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDwellings = async () => {
        const res = await fetch('https://react-app-fxy8.onrender.com/dwellings');
        const data = await res.json();
        setDwellings(data);
        setRecovery(data);
        setLoading(false);
    };

    if (loading) {
      fetchDwellings();
    }
  }, []);

  return [dwellings, loading, setDwellings, recovery];
};
