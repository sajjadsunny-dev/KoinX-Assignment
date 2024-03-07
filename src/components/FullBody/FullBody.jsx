import AboutBitcoin from "../AboutBitcoin/AboutBitcoin";
import Chart from "../Chart/Chart"
import GetStarted from "../GetStarted/GetStarted";
import Team from "../Team/Team";
import Tokenomics from "../Tokenomics/Tokenomics";
import TrendingCoins from "../TrendingCoins/TrendingCoins";
import Breadcrumb from './../Breadcrumb/Breadcrumb';

const FullBody = () => {

   return (
      <>
         <section className="w-full">
            <div className="max-w-container mx-auto px-2.5 grid grid-cols-12 gap-x-5">
               <Breadcrumb />

               <div className="col-span-12 md:col-span-8 ">
                  <Chart />
                  <AboutBitcoin />
                  <Tokenomics />
                  <Team />
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