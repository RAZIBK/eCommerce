import React, { useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BaseUrl } from "../../utils/BaseUrl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Dropzone from "react-dropzone";


const formikSchema = Yup.object({
    productName: Yup.string().required("product Name is required"),
    price: Yup.string().required("price is required"),
    // category: Yup.string().required("Category is required"),
    subcategory: Yup.string().required("subcategory is required"),
    image: Yup.string().required("image is required"),

    
});

function AddproductForm() {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [subCategory, setSubCategory] = useState();

  const formik = useFormik({
    initialValues: {
        productName: "",
        price: "",
        subcategory: "",
        image:'',
      
    },
    onSubmit: (values) => {
        AddProduct(values);
    },
    validationSchema: formikSchema,
  });

  useEffect(() => {
    allCategory();
  }, []);

  const allCategory = async () => {
    try {
      const { data } = await axios.get(`${BaseUrl}/api/category`);
      if (data.category) {
        setCategory(data.category);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getsubcategory = async (id) => {
    setSelectedCategory(id)
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


  const AddProduct = async (value) => {
    try {


      const formData = new FormData();
      formData.append("productName", value.productName);
      formData.append("price", value.price);
      formData.append("subcategory", value.subcategory);
      formData.append("image", value.image);
      formData.append("category", selectedCategory);
      const { data } = await axios.post(`${BaseUrl}/api/product`, formData);
      console.log(data);
      if (data) {
        toast.success(data.productName + " Added");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-slate-100 h-screen grid justify-items-stretch">
      <div className=" justify-self-center self-center w-full max-w-xs">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"

        >
          <h3 className="text-center font-bold">Add Product</h3>
          <div className="mb-4 mt-4">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Enter Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.productName}
              onChange={formik.handleChange("productName")}
              onBlur={formik.handleBlur("productName")}
              type="text"
              placeholder="Add Category"
            />
            <div className="mt-2 text-red-400 mb-2">
              {formik.touched.productName && formik.errors.productName}
            </div>
          </div>
          <div className="mb-4 mt-4">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Enter Product Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.price}
              onChange={formik.handleChange("price")}
              onBlur={formik.handleBlur("price")}
              type="number"
              placeholder="Enter product Price"
            />
            <div className="mt-2 text-red-400 mb-2">
              {formik.touched.price && formik.errors.price}
            </div>
          </div>
          <div className="mb-4 mt-4">
            <label
              for="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select a category
            </label>
            <select
              onChange={(e)=>{getsubcategory(e.target.value)}}
              id="subcategory"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            
            >
              <option value="" selected>
                Choose a Category
              </option>
              {category?.map((item) => (
                <option key={item._id} value={item?._id} className="text-black">
                  {item?.category}
                </option>
              ))}
            </select>
            <div className="mt-2 text-red-400 mb-2">
              {formik.touched.category && formik.errors.category}
            </div>
          </div>
          <div className="mb-4 mt-4">
            <label
              for="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select a sub category
            </label>
            <select
              onChange={formik.handleChange("subcategory")}
              onBlur={formik.handleBlur("subcategory")}
              id="subcategory"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="" selected>
                Choose a Sub Category
              </option>
              {subCategory?.map((item) => (
                <option key={item._id} value={item?._id} className="text-black">
                  {item?.subcategory}
                </option>
              ))}
            </select>
            <div className="mt-2 text-red-400 mb-2">
              {formik.touched.subcategory && formik.errors.subcategory}
            </div>
          </div>
          

          <div className="mb-4 mt-4">
            <label
              for=""
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Select a image
            </label>
            {/* <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.image}
              onChange={formik.handleChange("image")}
              onBlur={formik.handleBlur("image")}
              type="file"
              
              
            /> */}
             <div className="border-2 border-gray-500 ">
             <Dropzone
                    onBlur={formik.handleBlur("image")}
                    accept="image/jpeg, image/png"
                    onDrop={(acceptedFiles) => {
                      formik.setFieldValue("image", acceptedFiles[0]);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div className="container">
                        <div
                          {...getRootProps({
                            className: "dropzone",
                            onDrop: (event) => event.stopPropagation(),
                          })}
                        >
                          <input {...getInputProps()} />
                          <p className="text-gray-900 text-lg cursor-pointer hover:text-gray-500">
                            Click here to select image
                          </p>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                </div>


            <div className="mt-2 text-red-400 mb-2">
              {formik.touched.image && formik.errors.image}
            </div>
          </div>




          <div className="flex items-center justify-center">
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddproductForm;
