import AboutBitcoinCard from "../../core/AboutBitcoinCard/AboutBitcoinCard"

const AboutBitcoin = () => {
   return (
      <>
         <div className="px-6 pt-6 pb-60px bg-white rounded-lg my-5">
            <h2 className="font-inter font-semibold text-2xl text-navLinkColor mb-2.5">Tokenomics</h2>

            <div className="py-15px border-b-2 border-solid border-[#C9CFDD]">
               <h3 className="font-inter font-bold text-lg text-navLinkColor mb-2.5">What is Bitcoin?</h3>

               <p className="font-inter font-medium text-base text-navLinkColor leading-[160%]">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
            </div>

            <div className="py-15px border-b-2 border-solid border-[#C9CFDD]">
               <h3 className="font-inter font-bold text-lg text-navLinkColor mb-2.5">Lorem ipsum dolor sit amet</h3>

               <p className="font-inter font-medium text-base text-navLinkColor leading-[160%]">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.<br /><br />

                  Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.<br /><br />

                  Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
            </div>

            <h2 className="font-inter font-semibold text-2xl text-navLinkColor mb-2 mt-15px">Already Holding Bitcoin?</h2>

            <div className="grid grid-cols-2 gap-6 mb-15px">
               <AboutBitcoinCard
                  image="/holdingBitcoinBanner.png"
                  bgStyle="linear-gradient(160deg, rgba(121,241,164,1) 0%, rgba(14,92,173,1) 100%)"
                  heading="Calculate your Profits"
               />
               <AboutBitcoinCard
                  image="/holdingBitcoinBanner2.png"
                  bgStyle="linear-gradient(160deg, rgba(255,152,101,1) 0%, rgba(239,48,49,1) 100%)"
                  heading="Calculate your tax liability"
               />
            </div>

            <p className="font-inter font-medium text-base text-navLinkColor leading-[160%] pt-15px border-t-2 border-solid border-[#C9CFDD]">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>

         </div>
      </>
   )
}

export default AboutBitcoin