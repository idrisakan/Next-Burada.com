import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
   /*  <div classNameNameName='flex justify-center items-center  w-full bg-orange-600 h-24 text-slate-100 mt-3 md:mt-10'>Burasını keyfine göre düzenle</div> */




<footer className="bg-white shadow dark:bg-orange-600 mt-5 h-25 flex justify-center items-center">
    <div className="w-full max-w-screen-xl mx-auto ">
        <div className="sm:flex sm:items-center sm:justify-between flex ">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            
                <span className="self-center text-2xl mt-2 ml-3 font-semibold whitespace-nowrap dark:text-white">Burada</span>
            </a>
            <ul className="flex flex-wrap items-center ml-20 justify-between text-sm font-medium text-gray-500 sm:mb-0 dark:text-slate-100  ">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Hakkımızda</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">İş Ortaklarımız</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Müşteri Hizmetleri</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">İletişim</a>
                </li>
            </ul>
        </div>
        <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-300 md:my-3" />
        <div className='flex justify-between mb-2'>

        <span className="block text-sm text-gray-500 sm:text-center dark:text-slate-100 ">© 2024 <a href="/" className="hover:underline">Burada™</a>. All Rights Reserved.</span>

        <ul className="flex flex-wrap items-center gap-2 mb-4 mr-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-slate-100 ">
                <li>
                    <a href="#" ><FaFacebook size={25}/>
                    </a>
                </li>
                <li>
                    <a href="#" ><FaTwitter size={25}/></a>
                </li>
                <li>
                    <a href="#" ><FaYoutube size={25}/></a>
                </li>
                <li>
                    <a href="#" ><FaInstagram size={25}/></a>
                </li>
            </ul>

        </div>
    </div>
</footer>




  )
}

export default Footer