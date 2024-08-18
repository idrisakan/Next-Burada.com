'use client'
import UseCart from "@/hooks/useCart";
import { MdShoppingBasket } from "react-icons/md";
import { useRouter } from "next/navigation";


const CardCount = () => {
  const { cartPrdcts } = UseCart()
  const router = useRouter()
  return (
    <div onClick={() => router.push('/cart')} className="hidden md:flex relative">
      <MdShoppingBasket size={30}/>
      <div className="absolute flex -top-1 -right-2 justify-center items-center text-xs bg-orange-900 rounded-full w-5 h-5">{cartPrdcts?.length}</div>

    </div>
  )
}

export default CardCount
