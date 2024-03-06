
const TredingCard = () => {
   return (
      <>
         <div className="col-span-2 mx-5px border-solid border-2 border-trendingCardBorder rounded-10px p-17px">
            <div className="flex items-center">
               <div className="h-26px w-26px rounded-full overflow-hidden">
                  <img src="/coinsIcon/bnb.png" alt="bnb.png" className="w-full" />
               </div>
               <h5 className="font-inter font-medium text-base text-navLinkColor leading-6 ml-2">BNB</h5>
               <span className="font-inter text-xm text-trendingGreen py-0.5 px-1 bg-[#EBF9F4] rounded ml-1">+0.52%</span>
            </div>
            <h3 className="font-inter font-medium text-xl text-[#171717] leading-6 mb-2 mt-3">$319.34</h3>
            <img src="/graph.png" alt="graph.png" className="w-full" />
         </div>
      </>
   )
}

export default TredingCard