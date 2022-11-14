import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Add Product", href: "/add-product", current: false },
  { name: "Add category", href: "/add-category", current: false },
  { name: "Add sub category", href: "/add-subcategory", current: false },
];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-300">
     
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center h-16">
                
              <div className="flex ">
              
                {/* <div className="flex-shrink-0 flex items-center">fdsj</div> */}
                <div className=" md:ml-6 md:flex md:items-center md:space-x-4 flex justify-center">
            
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-gray-800 border-2 rounded-md w-40 text-center mr-40 border-gray-700  hover:bg-gray-600 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center"></div>
            </div>
          </div>
        </>
     
    </Disclosure>
  );
};

export default Navbar;
