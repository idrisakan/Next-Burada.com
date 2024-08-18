import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

interface AvatarProps {
    image?:string
}

const Avatar:React.FC<AvatarProps> = ({image}) => {
  if(image ) return  <img src={Image} alt="" />
    return <div><RxAvatar /></div>
}

export default Avatar