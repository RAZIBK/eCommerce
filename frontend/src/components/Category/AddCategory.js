import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { BaseUrl } from "../../utils/BaseUrl";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify'

const formikSchema = Yup.object({
  category: Yup.string().required("Category is required"),
});

function AddCategory() {
    const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      category: "",
    },
    onSubmit: (values) => {

      AddCategory(values)
    },
    validationSchema: formikSchema,
  });

  const AddCategory = async (value) => {
    try {
        console.log(value.category);
    const { data } = await axios.post(`${BaseUrl}/api/category`,{
      category: value.category,
    });
    if(data.category){
        toast.success(data.category+ ' Added');
        navigate('/')
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
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-56"
        >
          <h3 className="text-center font-bold">Add Category</h3>

          <div className="mb-4 mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formik.values.category}
              onChange={formik.handleChange("category")}
              onBlur={formik.handleBlur("category")}
              type="text"
              placeholder="Add Category"
            />
            <div className="mt-2 text-red-400 mb-2">
              {formik.touched.category && formik.errors.category}
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

export default AddCategory;
