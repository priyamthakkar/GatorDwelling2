import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default () => {
  const [dwelling, setDwelling] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [scores, setScores] = useState({
    overall: 0,
    cleanliness: 0,
    value: 0,
    location: 0,
    management: 0,
    noise: 0,
    parking: 0, 
    busRoutes: 0,
    safety: 0,
    waterPressure: 0,
    internet: 0
  })
  const {id} = useParams();

  useEffect(() => {
    const fetchDwelling = async () => {
        const res = await fetch(`https://react-app-fxy8.onrender.com:10000/dwellings/${id}`);
        const data = await res.json();
        setDwelling(data);
        setLoading(false);
    };

    const fetchReviews = async () => {
      const res = await fetch(`https://react-app-fxy8.onrender.com:10000/reviews/${id}`);
      const data = await res.json();
      let ov = 0, cl = 0, va = 0, lo = 0, ma = 0, no = 0, pa = 0, bu = 0, sa = 0, wa = 0, itn = 0;
      let len = data.length;
      for (let i = 0; i < data.length; i++) {
        ov += data[i].score.overall;
        cl += data[i].score.cleanliness;
        va += data[i].score.value;
        lo += data[i].score.location;
        ma += data[i].score.management;
        no += data[i].score.noise;
        pa += data[i].score.parking;
        bu += data[i].score.busRoutes;
        sa += data[i].score.safety;
        wa += data[i].score.waterPressure;
        itn += data[i].score.internet;
      }
      setScores({
        overall: ov/len,
        cleanliness: cl/len,
        value: va/len,
        location: lo/len,
        management: ma/len,
        noise: no/len,
        parking: pa/len,
        busRoutes: bu/len,
        safety: sa/len,
        waterPressure: wa/len,
        internet: itn/len
      });
      setReviews(data);
      setLoading(false);
  };

    if (loading) {
      fetchDwelling();
      fetchReviews();
    }
  }, []);

  return [dwelling, scores, reviews, loading];
};
