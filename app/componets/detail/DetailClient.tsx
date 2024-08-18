"use client";

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import Comment from "./Comment";
import Heading from "../general/Heading";
import UseCart from "@/hooks/useCart";
import Button from "../general/Button";

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};

const DetailClient = ({ product }: { product: any }) => {
  const { productCartQty, addToBasket, cartPrdcts } = UseCart();
  const [displayButton, setDisplayButton] = useState(false);

  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product?.id,
    name: product?.name,
    description: product?.description,
    price: product?.price,
    quantity: 1,
    image: product?.image,
    inStock: product?.inStock,
  });

  useEffect(() => {
    setDisplayButton(false);
    let controlPlay: any = cartPrdcts?.findIndex(
      (cart) => cart.id == product?.id
    );
    if (controlPlay > -1) {
      setDisplayButton(true);
    }
  }, [cartPrdcts]);

  const increaseFunc = () => {
    if (cardProduct.quantity == 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };
  const decreaseFunc = () => {
    if (cardProduct.quantity == 1) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };
  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.review?.lenght;
  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative w-[200px] md:w-[400px] h-[200px] md:h-[400px]">
            <Image src={product?.image} fill alt="" />
          </div>
          <div className="w-full md:w-1/2 space-y-3 mt-5">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-slate-500">{product?.description}</div>
            <div className="flex items-center gap-2">
              <div>STOK DURUMU:</div>
              {product.inStock ? (
                <div className="text-green-500">Ürün Stokta Mevcut</div>
              ) : (
                <div className="text-red-500"> Ürün Stokta Bulunmamakta</div>
              )}
            </div>
            <div className="text-lg md:text-2xl text-orange-600 font-bold">
              {product?.price}₺
            </div>

            {displayButton ? (
              <>
                {" "}
                <Button
                  text="Ürün Sepette Ekli"
                  small
                  outline
                  onClick={() => {}}
                />
              </>
            ) : (
              <>
                <Counter
                  increaseFunc={increaseFunc}
                  decreaseFunc={decreaseFunc}
                  cartProduct={cardProduct}
                />
                <Button
                  text="Sepette Ekle"
                  small
                  onClick={() => addToBasket(cardProduct)}
                />
              </>
            )}
          </div>
        </div>
        <Heading text="Yorumlar" />
        <div>
          {product?.reviews?.map((prd: any) => (
            <Comment key={prd.id} prd={prd} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
