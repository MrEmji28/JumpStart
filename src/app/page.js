"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";


export default function Home() {
  const {isAuthUser} = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts(){
    const res = await getAllAdminProducts()

    if(res.success){
      setProducts(res.data)
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);



return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <section className="">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          JumpStart!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
          Where Quality Meets Convenience in Every Click!
          </p>

          <button
            type="button"
            onClick={() => router.push("/product/listing/all-products")}
            className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
          >
            Explore Shop Collection
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://2.bp.blogspot.com/-wdUSi55uvao/XBp4R1IPcTI/AAAAAAAACD8/1tmNqPZhsOgVp6Ph8oJ_uzZX1ouCc67HwCLcBGAs/s1600/Family-christmas-shopping.jpg"
            //src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Explore Shop Collection"
          />
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <div>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Summer Sale Collection
                </h2>
              </div>
              <button
                onClick={() => router.push("/product/listing/all-products")}
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Shop ALL
              </button>
            </div>
          </div>
          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              {products && products.length
                ? products
                    .filter((item) => item.onSale === "yes")
                    .splice(0, 2)
                    .map((productItem) => (
                      <li
                        onClick={() =>
                          router.push(`/product/${productItem._id}`)
                        }
                        className="cursor-pointer"
                        key={productItem._id}
                      >
                        <div>
                          <img
                            src={productItem.imageUrl}
                            alt="Sale Product Item"
                            className="object-cover w-full rounded aspect-square"
                          />
                        </div>
                        <div className="mt-3">
                          <h3 className="font-medium text-gray-900">
                            {productItem.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-800">
                            ${productItem.price}{" "}
                            <span className="text-red-700">{`(-${productItem.priceDrop}%) Off`}</span>
                          </p>
                        </div>
                      </li>
                    ))
                : null}
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-950 sm:text-3xl">
            SHOP BY CATEGORY
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <div className="relative block group">
              <img
                src="https://i5.walmartimages.com/asr/8f2c2183-f7bc-438c-90ac-ba9c8d9b7519_1.5f6fe5a7d168bebbc999fb443e02471c.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"
                //src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="object-cover w-full aspect-square"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-black">KIDS</h3>
                <button
                  onClick={() => router.push("/product/listing/kids")}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="relative block group">
              <img
              src="https://i.pinimg.com/originals/84/fe/9b/84fe9b8793e3c03d49164ed5f492cb9e.png"
                //src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="object-cover w-full aspect-square"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-black">WOMEN</h3>
                <button
                  onClick={() => router.push("/product/listing/women")}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </li>
          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="relative block group">
              <img
                src="https://i.pinimg.com/736x/ee/c8/3d/eec83d3fee14584619b46dbda5612324.jpg"
                //src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                className="object-cover w-full aspect-square"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-black">MEN</h3>
                <button
                  onClick={() => router.push("/product/listing/men")}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <section className="bg-amazon-black text-white py-12">
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-xl font-bold mb-4 sm:text-3xl">About JumpStart!</h2>
      <p className="mb-8 text-gray-400">JumpStart: Your premier online shopping destination, where quality meets convenience. <br></br>Explore a curated collection 
      of products, experience exclusive deals, and elevate your retail journey with us.</p>
      <div className="flex justify-center space-x-4">
        <a href="mailto:support@jumpstart.com" className="hover:text-gray-500">support@jumpstart.com</a>
        <span>|</span>
        <a href="tel:+1234567890" className="hover:text-gray-500">+1 (234) 567-890</a>
      </div>
    </div>
  </section>
    </section>

  </main>
);
}
