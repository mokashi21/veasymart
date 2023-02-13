import React from "react";
import Image from "next/image";
function ProductFeed(props) {
  return (
    // grid gap-4 grid-cols-3 grid-rows-3
    <div className="  grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-white pl-6 md:mt-40 xl:mt-90 absolute object-fill ">
      {props?.data?.products?.map((user) => (
        <div>
          <h1 className="text-500">
            {user.title} {user.brand}
          </h1>
          <h1>$ - {user.price}</h1>
          <h1 className="text-yellow-500 ">rating - {user.rating}</h1>

          <Image
            src={user.images}
            height={200}
            width={200}
            objectFit="contain"
            alt={"product"}
          />
          <h1>{user.category}</h1>
          <div className=" ">
            <h1 className="text-xs pt-2 pr-3line-clamp-2 ">
              {" "}
              {user.description}
            </h1>

            <p className="">FREE Today Delivery</p>
          </div>

          <button className="p-2 text-xs md:text-sm bg-gradient-to-b from-green-200 to-green-400 border border-green-300 rounded-sm   ">
            Add to Basket
          </button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default ProductFeed;

// {
//   /* {props.data.products &&
//         props.data.products.map(
//           ({ id, title, price, description, category, image }) => {
//             <Product
//               key={id}
//               id={id}
//               title={title}
//               price={price}
//               description={description}
//               category={category}
//               image={image}
//             />;
//           }
//         )} */
// }
