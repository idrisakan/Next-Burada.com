import { CardProductProps } from "../detail/DetailClient"


interface CounterProps {
    cartProduct: CardProductProps,
    increaseFunc:() => void,
    decreaseFunc:() => void,
}

const Counter:React.FC<CounterProps> = ({cardProduct,increaseFunc,decreaseFunc}:CounterProps) => {

const buttonStyle = 'w-8 h-8 flex justify-center item-center rounded-md border text-lg'

  return (
    <div className=" flex items-center justify-center text-center gap-2">
      <div className={buttonStyle} onClick={decreaseFunc}>-</div>
      <div className="text-lg md:text-xl">{cardProduct?.quantity}</div>
      <div className={buttonStyle} onClick={increaseFunc }>+</div>
    </div>
  )
}

export default Counter
