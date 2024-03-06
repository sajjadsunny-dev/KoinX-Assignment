import { useEffect, useState } from 'react';
// import axios from 'axios';

const useFetch = (url) => {
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
         } catch (error) {
            setError(error);
         } finally {
            setLoading(false);
         }
      };

      // axios.get(url).then((response) => {
      //    setData(response.data)
      // }).catch((error) => {
      //    console.error("failed to fetch api", error)
      // })

      fetchData();
   }, [url])

   return { data, loading, error }
}

export default useFetch