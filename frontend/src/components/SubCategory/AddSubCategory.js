import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BaseUrl } from "../../utils/BaseUrl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const formikSchema = Yup.object({
  category: Yup.string().required("Category is required"),
  subcategory: Yup.string().required("sub Category is required"),
});

function AddSubCategory() {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const formik = useFormik({
    initialValues: {
      category: "",
      subcategory: "",
    },
    onSubmit: (values) => {
     
      AddSubCategory(values);
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

  const AddSubCategory = async (value) => {
    console.log(value);
    try {
      console.log(value.category);
        const { data } = await axios.post(`${BaseUrl}/api/subcategory`, {
            subcategory: value.subcategory,
            category:value.category,
        });
        if (data.subcategory) {
          toast.success(data.subcategory + " Added");
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
          <h3 className="text-center font-bold">Add Sub Category</h3>
          <div className="mb-4 mt-4">
            <label
              for="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select a category
            </label>
            <select
              onChange={formik.handleChange("category")}
              onBlur={formik.handleBlur("category")}
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
              {formik.touched.subcategory && formik.errors.category}
            </div>
          </div>

          <div className="mb-4 mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.subcategory}
              onChange={formik.handleChange("subcategory")}
              onBlur={formik.handleBlur("subcategory")}
              type="text"
              placeholder="Add Sub Category"
            />
            <div className="mt-2 text-red-400 mb-2">
              {formik.touched.subcategory && formik.errors.subcategory}
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

export default AddSubCategory;
