import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
   const [data, setData] = useState(null)

   useEffect(() => {
      axios.get(url).then((response) => {
         setData(response.data)
      }).catch((error) => {
         console.error("failed to fetch api", error)
      })
   }, [url])

   return { data }
}

export default useFetch