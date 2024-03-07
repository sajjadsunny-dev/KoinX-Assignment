import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import BarLoader from "react-spinners/BarLoader";

const Cryptocurrencies = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const isPageEmpty = () => {
         const bodyElements = document.body.children;

         if (bodyElements.length === 0) {
            setLoading(true);
         } else {
            setLoading(false)
         }
      };

      isPageEmpty();
   }, []);


   return (
      <>
         {
            loading ?
               <div className="flex flex-col justify-center items-center h-dvh">
                  <BarLoader
                     color="#0052FE"
                     height={6}
                     width={300}
                  />
               </div>
               :
               <div className="flex flex-col justify-center items-center h-dvh">
                  <img src="/KoinXLogo.svg" alt="KoinXLogo.svg" className="w-[300px] mb-9" />
                  <h1 className="font-inter text-5xl font-bold mb-3">Page Is Not Available Yet</h1>
                  <h3 className='font-inter text-2xl font-medium' >You can Visit <NavLink to={'/bitcoin'} className="underline font-bold text-primary">Bitcoin</NavLink> Page</h3>
               </div>
         }
      </>
   )
}

export default Cryptocurrencies