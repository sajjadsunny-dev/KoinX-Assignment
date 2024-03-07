
export const Navbar = () => {
   return (
      <>
         <section className="w-full py-5 bg-white drop-shadow-navbarShadow fixed">
            <div className="max-w-container mx-auto px-2.5 flex items-center justify-between">
               <img src="/KonixLogo.png" alt="KonixLogo.png" />
               <div className="flex">
                  <ul className="flex items-center">
                     <li className=""><a className="font-inter font-semibold text-base text-navLinkColor py-2 px-1 mr-8" href="#">Crypto Taxes</a></li>
                     <li className=""><a className="font-inter font-semibold text-base text-navLinkColor py-2 px-1 mr-8" href="#">Free Tools</a></li>
                     <li className=""><a className="font-inter font-semibold text-base text-navLinkColor py-2 px-1 mr-8" href="#">Resource Center</a></li>
                  </ul>
                  <button className="font-inter font-semibold text-base text-white rounded-lg py-2.5 px-6 bg-primary  border-2 border-primary border-solid duration-300 hover:bg-transparent hover:text-black" type="button">Get Started</button>
               </div>
            </div>
         </section>
      </>
   )
}
