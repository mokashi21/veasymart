import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { useState } from "react";
import { useEffect } from "react";

export default function Home({ products }) {
  // useState
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async function () {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();
      setData(data);
    };
    getData();
  }, []);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* header */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        <ProductFeed data={data} />
      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const products = await fetch("https://dummyjson.com/products").then((res) =>
//     res.json()
//   );
//   return {
//     props: {
//       products,
//     },
//   };
// }

// export async function getServerSideProps(context) {
//   let resp = await fetch("https://fakestoreapi.com/products");
//   let data = await resp.json();

//   return { props: { data } };
// }
