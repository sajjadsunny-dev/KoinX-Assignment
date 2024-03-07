import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const hambergerMenu = () => {
      if (isOpen) {
         setIsOpen(false)
      } else {
         setIsOpen(true)
      }
   }

   return (
      <>
         <section className="w-full bg-white drop-shadow-navbarShadow fixed z-50">
            <div className="max-w-container mx-auto py-5 px-2.5 flex items-center justify-between bg-white relative z-40">
               <img src="/KonixLogo.png" alt="KonixLogo.png" />

               <div className="hidden md:flex">
                  <ul className="flex items-center">
                     <li className=""><a className="font-inter font-semibold text-base text-navLinkColor py-2 px-1 mr-8" href="#">Crypto Taxes</a></li>
                     <li className=""><a className="font-inter font-semibold text-base text-navLinkColor py-2 px-1 mr-8" href="#">Free Tools</a></li>
                     <li className=""><a className="font-inter font-semibold text-base text-navLinkColor py-2 px-1 mr-8" href="#">Resource Center</a></li>
                  </ul>
                  <button className="font-inter font-semibold text-base text-white rounded-lg py-2.5 px-6 bg-primary  border-2 border-primary border-solid duration-300 hover:bg-transparent hover:text-black" type="button">Get Started</button>
               </div>

               <div onClick={hambergerMenu} className="md:hidden py-1.5 px-1 rounded bg-white absolute top-1/2 right-0 -translate-x-2.5 -translate-y-1/2 cursor-pointer z-50">
                  {
                     isOpen ?
                        <IoCloseSharp className="text-2xl" />
                        :
                        <GiHamburgerMenu className="text-2xl" />
                  }
               </div>
            </div>


            <div className={`md:hidden bg-white pl-6 pb-10 w-full absolute left-0 duration-300 ${isOpen ? '' : 'top-0 -translate-y-full'}`}>
               <ul className="">
                  <li className="py-1.5"><a className="font-inter font-semibold text-base text-navLinkColor px-1 mr-8" href="#">Crypto Taxes</a></li>
                  <li className="py-1.5"><a className="font-inter font-semibold text-base text-navLinkColor px-1 mr-8" href="#">Free Tools</a></li>
                  <li className="py-1.5"><a className="font-inter font-semibold text-base text-navLinkColor px-1 mr-8" href="#">Resource Center</a></li>
               </ul>
               <button className="mt-6 font-inter font-semibold text-base text-white rounded-lg py-2.5 px-6 bg-primary  border-2 border-primary border-solid duration-300 hover:bg-transparent hover:text-black" type="button">Get Started</button>
            </div>
         </section>
      </>
   )
}
