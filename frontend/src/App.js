import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddproductForm from './components/AddProduct/AddproductForm';
import AddCategory from './components/Category/AddCategory';
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddSubCategory from './components/SubCategory/AddSubCategory';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/add-product" element={<AddproductForm />}/>
      <Route path="/add-category" element={<AddCategory />}/>
      <Route path="/add-subcategory" element={<AddSubCategory />}/>

      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>

  );
}

export default App;
