import Chart from "../Chart/Chart"
import GetStarted from "../GetStarted/GetStarted";
import TrendingCoins from "../TrendingCoins/TrendingCoins";
import useFetch from './../../useFetch';

const FullBody = () => {
   const { data } = useFetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true");

   // console.log(data);
   return (
      <>
         <section className="w-full">
            <div className="max-w-container mx-auto px-2.5 grid grid-cols-12 gap-5">
               <div className="col-span-12 md:col-span-8 ">
                  <Chart />
               </div>

               <div className="col-span-12 md:col-span-4 ">
                  <GetStarted />
                  <TrendingCoins />
               </div>

            </div>
         </section>
      </>
   )
}

export default FullBody