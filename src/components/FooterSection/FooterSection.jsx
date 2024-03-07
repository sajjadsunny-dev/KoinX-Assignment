import MoreTreding from './../MoreTreding/MoreTreding';

const FooterSection = () => {

   return (
      <>
         <section className="bg-white mt-5 md:mt-14 py-5 md:py-68px">
            <div className="max-w-container mx-auto px-2.5">
               <MoreTreding heading="You May Also Like" />
               <MoreTreding heading="Trending Coins" />
            </div>
         </section>
      </>
   )
}

export default FooterSection