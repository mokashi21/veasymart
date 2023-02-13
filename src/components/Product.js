import React, { useState } from "react";
import Image from "next/image";

function Product({
  brand,
  title,
  price,
  description,
  category,
  discountPercentage,
  images,
}) {
  return (
    <div>
      <p>{brand}</p>
      <p>{title}</p>
      <p>{category}</p>
      <p>{images}</p>
      {Array(photos)
        .fill()
        .map((_, i) => {
          <Image src={images} height={200} width={200} objectFit="contain" />;
        })}

      <p>{price}</p>
      <p>{description}</p>
      <p>{discountPercentage}</p>
      <StarIcon className="h-5" />
    </div>
  );
}

export default Product;
