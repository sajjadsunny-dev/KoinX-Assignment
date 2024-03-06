
const TrendingCoins = () => {
   return (
      <>
         <div className="bg-white rounded-lg p-6 mt-5">
            <h3 className="font-inter font-semibold text-2xl text-navLinkColor leading-7 mb-1">Trending Coins (24h)</h3>

            <div className="flex justify-between cursor-pointer mt-5">
               <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full overflow-hidden">
                     <img src="/coinsIcon/ETH.png" alt="ETH.png" className="w-full" />
                  </div>
                  <h5 className="font-inter font-medium text-base text-navLinkColor leading-6 ml-1.5">Ethereum(ETH)</h5>
               </div>
               <div className="flex items-center py-4.5 px-2.5 bg-[#EBF9F4] rounded">
                  <div className="poligon w-3 h-3 bg-trendingGreen mr-1.5"></div>
                  <span className="font-inter font-medium text-base text-trendingGreen">8.21%</span>
               </div>
            </div>

            <div className="flex justify-between cursor-pointer mt-5">
               <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full overflow-hidden">
                     <img src="/coinsIcon/BTC.png" alt="BTC.png" className="w-full" />
                  </div>
                  <h5 className="font-inter font-medium text-base text-navLinkColor leading-6 ml-1.5">Bitcoin (BTC)</h5>
               </div>
               <div className="flex items-center py-4.5 px-2.5 bg-[#EBF9F4] rounded">
                  <div className="poligon w-3 h-3 bg-trendingGreen mr-1.5"></div>
                  <span className="font-inter font-medium text-base text-trendingGreen">5.26%</span>
               </div>
            </div>

            <div className="flex justify-between cursor-pointer mt-5">
               <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full overflow-hidden">
                     <img src="/coinsIcon/MATIC.png" alt="MATIC.png" className="w-full" />
                  </div>
                  <h5 className="font-inter font-medium text-base text-navLinkColor leading-6 ml-1.5">Polygon (MATIC)</h5>
               </div>
               <div className="flex items-center py-4.5 px-2.5 bg-[#EBF9F4] rounded">
                  <div className="poligon w-3 h-3 bg-trendingGreen mr-1.5"></div>
                  <span className="font-inter font-medium text-base text-trendingGreen">4.32%</span>
               </div>
            </div>

         </div>
      </>
   )
}

export default TrendingCoins