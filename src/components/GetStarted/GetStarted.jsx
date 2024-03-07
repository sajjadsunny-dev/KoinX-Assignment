import { FaArrowRight } from "react-icons/fa6";

const GetStarted = () => {
   return (
      <>
         <div className="bg-primary pt-8 pb-12 flex flex-col items-center rounded-2xl">
            <h2 className="font-inter font-bold text-2xl text-white w-64 text-center">Get Started with KoinX for FREE</h2>
            <p className="font-inter font-medium text-sm leading-6 text-GetStartedPara w-327 text-center mt-14px mb-10">With our range of features that you can equip for free,
               KoinX allows you to be more educated and aware of your tax reports.</p>

            <img
               className="mb-5"
               src="/Frame.png"
               alt="/Frame.png"
            />

            <button
               className="font-inter font-semibold text-base leading-7 text-[#0F1629] rounded-lg bg-white py-2.5 px-6 flex items-center"
               type="button"
            >Get Started for FREE <FaArrowRight className="ml-1.5 text-xl" /></button>
         </div>
      </>
   )
}

export default GetStarted