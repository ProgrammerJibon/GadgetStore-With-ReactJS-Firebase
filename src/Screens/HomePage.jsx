import NavBar from "../Layouts/NavBar";
import HeadBar from "../Layouts/HeadBar";
import FooterBar from "../Layouts/FooterBar";
import ProductCard from "../Layouts/ProductCard";
import banner from "../assets/banner.jpg";
import { useState } from "react";


export default function HomePage({ products=[], path, updateUrl = () => { } }) {

    let commonCategoryClassNames = "w-full py-3 px-4 my-3 rounded-full text-left"
    let activeCategoryClassNames = commonCategoryClassNames + " " + "text-white bg-purple-500";
    let inactiveCategoryClassNames = commonCategoryClassNames + " " + "text-gray-700 bg-gray-200";

    const [selectedCategory, setSelectedCategory] = useState("");

    document.title = "Gadget Heaven | Home"

    return (
        <>
            <div className="pb-8 bg-slate-100">
                <div className="w-full h-[150px] bg-purple-700 absolute z-0"></div>
                <div className="flex h-[300px] lg:h-[500px] bg-white bg-opacity-50 backdrop-blur-[1px] p-8 w-7/12 mx-auto z-10 relative overflow-hidden shadow-lg rounded-lg">
                    <div className="h-full w-full">
                        <img className="h-full w-full object-cover" src={banner} />
                    </div>
                </div>
            </div>
            <div className="bg-slate-100">
                <div className="container w-full lg:pl-32 lg:pr-4 mx-auto py-16">
                    <div className="text-center font-bold py-8">
                        <span>Explore Cutting-Edge Gadgets</span>
                    </div>
                    <div className="flex lg:flex-nowrap flex-wrap">
                        <div className="flex-[25%] mb-8 lg:sticky lg:top-16 block h-fit py-8 px-4 text-sm bg-white rounded-lg shadow-md">
                            <button onClick={()=>setSelectedCategory("")} className={selectedCategory==""?activeCategoryClassNames:inactiveCategoryClassNames}>
                                <span>All Product</span>
                            </button>
                            <button onClick={()=>setSelectedCategory("Laptops")} className={selectedCategory=="Laptops"?activeCategoryClassNames:inactiveCategoryClassNames}>
                                <span>Laptops</span>
                            </button>
                            <button onClick={()=>setSelectedCategory("Phones")} className={selectedCategory=="Phones"?activeCategoryClassNames:inactiveCategoryClassNames}>
                                <span>Phones</span>
                            </button>
                            <button onClick={()=>setSelectedCategory("Accessories")} className={selectedCategory=="Accessories"?activeCategoryClassNames:inactiveCategoryClassNames}>
                                <span>Accessories</span>
                            </button>
                            <button onClick={()=>setSelectedCategory("Smart Watches")} className={selectedCategory=="Smart Watches"?activeCategoryClassNames:inactiveCategoryClassNames}>
                                <span>Smart Watches</span>
                            </button>
                            <button onClick={()=>setSelectedCategory("MacBook")} className={selectedCategory=="MacBook"?activeCategoryClassNames:inactiveCategoryClassNames}>
                                <span>MacBook</span>
                            </button>
                            <button onClick={()=>setSelectedCategory("Iphone")} className={selectedCategory=="Iphone"?activeCategoryClassNames:inactiveCategoryClassNames}>
                                <span>Iphone</span>
                            </button>
                        </div>
                        <div className="flex-[75%] mx-8 w-full">
                            <div className="flex flex-wrap items-center justify-between">
                                {products.map((item)=>{
                                    if(selectedCategory == "" || selectedCategory.toLowerCase() == item.category.toLowerCase()){
                                        return <ProductCard key={item.product_id} updateUrl={updateUrl} item={item} />  
                                    }                                    
                                })}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
