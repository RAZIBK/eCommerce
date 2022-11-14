import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../utils/BaseUrl";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Home() {
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [products, setproducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [open, setOpen] = useState();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    allCategory();
  }, []);
  useEffect(() => {
    getAllProducts();
  }, []);

  const allCategory = async () => {
    try {
      const { data } = await axios.get(`${BaseUrl}/api/category`);
      if (data.category) {
        setCategory(data.category);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(category);
  const getsubcategory = async (id) => {
    setSelectedCategory(id);
    try {
      const { data } = await axios.get(`${BaseUrl}/api/subcategory/${id}`);
      console.log(data);
      if (data) {
        setSubCategory(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async (id) => {
    console.log(id);
    try {
      const { data } = await axios.get(
        `${BaseUrl}/api/product?subcategory=${id}`
      );
      console.log(data);
      if (data) {
        setproducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${BaseUrl}/api/product`);
      console.log(data);
      if (data) {
        setproducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(selectedCategory);
  console.log(subCategory);
  return (
    <div className="h-full flex">
      <div className="w-1/5 bg-gray-200">
        <div className="text-center font-bold mt-3 text-lg">Home</div>
        <div>
          <div className="m-2 mr-5 ml-5 ">
            {category?.map((item, index) => (
              <Accordion key={item._id} open={open === index + 1}>
                <AccordionHeader
                  className="mt-3"
                  onClick={() => {
                    handleOpen(index+1);
                    getsubcategory(item._id);
                  }}
                >
                  {item?.category}
                </AccordionHeader>
                {/* {selectedCategory == item._id ? ( */}
                  {/* <> */}
                    {subCategory?.map((succat) => (
                      <AccordionBody
                        key={succat._id}
                        onClick={() => {
                          getProducts(succat._id);
                        }}
                      >
                        <h3 className="mt-2 ml-6">{succat.subcategory}</h3>
                      </AccordionBody>
                    ))}
                  {/* </>
                ) : (
                  <></>
                )} */}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      <div className="w-4/5">
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            {products?.map((item) => (
              <div
                key={item._id}
                class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              >
                <article class="overflow-hidden rounded-lg shadow-lg">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src={item.image}
                    />
                  </a>

                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        {item.productName}
                      </a>
                    </h1>
                    <p class="text-grey-darker text-sm">RS . {item.price}</p>
                  </header>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
