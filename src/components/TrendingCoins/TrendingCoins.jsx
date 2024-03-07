import useFetch from "../../useFetch";

const TrendingCoins = () => {
   // fatching api for get trending coins
   const { data } = useFetch("https://api.coingecko.com/api/v3/search/trending");

   // slicing them for get top 3 coins
   const slicedData = data?.coins?.slice(0, 3) || []

   return (
      <>
         <div className="bg-white rounded-lg p-6 mt-5">
            <h3 className="font-inter font-semibold text-2xl text-navLinkColor leading-7 mb-1">Trending Coins (24h)</h3>

            {
               (slicedData ?? []).map(({ item }) => (
                  <div key={item?.coin_id} className="flex justify-between cursor-pointer mt-5">
                     <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full overflow-hidden">
                           <img src={item?.thumb} alt={item?.thumb} className="w-full" />
                        </div>
                        <h5 className="font-inter font-medium text-base text-navLinkColor leading-6 ml-1.5">{`${item?.name} (${item?.symbol})`}</h5>
                     </div>
                     <div className={`flex items-center py-4.5 px-2.5 rounded ${item?.data.price_change_percentage_24h.usd < 0 ? 'bg-[#FFE4E4]' : 'bg-[#EBF9F4] '}`}>
                        <div className={`poligon w-3 h-3 mr-1.5 ${item?.data.price_change_percentage_24h.usd < 0 ? 'bg-[#EA3B3B] rotate-180' : 'bg-trendingGreen rotate-0'}`}></div>
                        <span className={`font-inter font-medium text-base  ${item?.data.price_change_percentage_24h.usd < 0 ? 'text-[#EA3B3B]' : 'text-trendingGreen'}`}>
                           {`${parseFloat(item?.data.price_change_percentage_24h.usd).toFixed(2)}%`}
                        </span>

                     </div>
                  </div>
               ))
            }
         </div>
      </>
   )
}

export default TrendingCoins