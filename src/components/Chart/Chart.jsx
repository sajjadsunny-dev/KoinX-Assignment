import useFetch from "../../useFetch";
import TradingViewWidget from "../TradingViewWidget/TradingViewWidget";

const Chart = () => {
  const { data, loading, error } = useFetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true");
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    console.error('fetching error', error);
    return <p>Error fetching data.</p>;
  }

  const bitcoinData = data.bitcoin;

  if (!bitcoinData) {
    return <p>No Bitcoin data available.</p>;
  }

  return (
    <>
      <div className="bg-transparent md:bg-white rounded-lg md:px-6 md:pt-6 md:pb-8">
        <div className="flex items-center mb-10">
          <div className="h-9 w-9 rounded-full overflow-hidden">
            <img
              className="w-full"
              src="/coinsIcon/BTC.png"
              alt="BTC.png"
            />
          </div>
          <h2 className="fot-inter font-semibold text-2xl text-[#0B1426] mx-2">Bitcoin</h2>
          <h3 className="fot-inter font-semibold text-base text-[#5D667B] leading-[19px] mr-10">BTC</h3>
          <h4 className="fot-inter font-medium text-base text-white leading-[126%] bg-[#768396] p-1 md:p-2.5 rounded-lg border-2 border-solid border-[#808A9D]">Rank <span className="">#1</span></h4>
        </div>

        <div className="md:bg-transparent bg-white rounded-lg p-6 md:p-0 border-[1px] md:border-0 border-solid border-[#DEE1E6]">
          <div className="flex items-start mb-6">
            <div className="mr-8">
              <h2 className="fot-inter font-semibold text-2xl text-[#0B1426]">${bitcoinData.usd}</h2>
              <h3 className="fot-inter font-medium text-base text-[#0B1426] leading-[27px]">₹ {bitcoinData.inr}</h3>
            </div>

            <div className="flex items-center mt-1">
              <div className={`flex items-center py-4.5 px-2.5 rounded mr-3 ${bitcoinData?.usd_24h_change < 0 ? 'bg-[#FFE4E4]' : 'bg-[#EBF9F4] '}`}>
                <div className={`poligon w-3 h-3 mr-1.5 ${bitcoinData?.usd_24h_change < 0 ? 'bg-[#EA3B3B] rotate-180' : 'bg-trendingGreen rotate-0'}`}></div>
                <span className={`font-inter font-medium text-base ${bitcoinData?.usd_24h_change < 0 ? 'text-[#EA3B3B]' : 'text-trendingGreen'}`}>
                  {`${parseFloat(bitcoinData?.usd_24h_change).toFixed(2)}%`}
                </span>
              </div>
              <p className="">(24H)</p>
            </div>

          </div>

          <div className="w-full pt-6 border-t-2 border-solid border-[#C9CFDD]">
            <TradingViewWidget />
          </div>
        </div>

      </div>
    </>
  )
}

export default Chart