import { CiHeart, CiShoppingCart } from "react-icons/ci";
import ReactStars from "react-rating-stars-component";
import products from "../products.json";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function showError(text = "Something went wrong!") {
    return (<>
        <div className="w-full bg-gray-100 py-16 text-lg">
            <div className="w-9/12 mx-auto ">
                <span>{text}</span>
            </div>
        </div>
    </>)
}

export default function HomePage({ openModal=()=>{}, path, query, removeCartItem=(id)=>{}, addCartItem=(id)=>{}, carts = [], wishlist=[], addWishlistItem=()=>{}, removeWishlistItem=()=>{}}) {
    
    if (!query.get("id")) {
        return (showError("No Product is selected"));
    } else {
        let product_id = query.get("id");

        const items = products.filter(item => item.product_id == product_id);
        let item = {};

        if (items.length == 1) {
            item = items[0];
            console.log(item)
        } else {
            return (showError("Invalid Product Id"))
        }

        const [isCarted, setIsCarted] = useState(carts.includes(item.product_id));
        const [isInWishlist, setIsInWishlist] = useState(wishlist.includes(item.product_id));
    
        
        return (
            <>
                
                <div className="w-full bg-gray-100 pb-16">
                    <div className="w-full h-[150px] bg-purple-700 absolute z-0"></div>
                    <div className="flex-wrap lg:flex-nowrap flex lg:h-[500px]  w-9/12 mx-auto z-10 relative overflow-hidden shadow-lg rounded-lg">

                        <div className="bg-white p-6 lg:w-[500px] h-[500px] ">

                            <div className="bg-gray-300 h-full w-full rounded-lg overflow-hidden">
                                <img src={item.product_image}  />
                            </div>
                        </div>
                        <div className="py-6 pr-6 w-full bg-white pl-8 lg:pl-0">

                            <div className="text-lg font-bold mb-2">
                                <span>{item.product_title}</span>
                            </div>
                            <div className="text-lg text-gray-700 mb-4">Price: $999.99</div>
                            <div className={item.availability?"inline-block border-2 border-green-800 bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide":"inline-block border-2 border-red-800 bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide"}>
                                <span>{item.availability?"In Stock":"Out of Stock"}</span>
                            </div>
                            <p className="mt-4 text-gray-600">
                                <span>{item.description}</span>
                            </p>
                            <div className="mt-4">

                                <h3 className="text-lg font-semibold mb-2">Specification:</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    {item.specification.map((spec, index)=>(<li key={index}>{spec}</li>))}
                                </ul>
                            </div>
                            <div className="mt-4 items-center">

                                <div className="flex items-center">

                                    <span className="text-lg">
                                        <ReactStars
                                            count={5}
                                            value={item.rating}
                                            edit={false}
                                            isHalf={true}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </span>
                                    <span className="ml-2 text-gray-600">({item.rating})</span>
                                </div>
                                <div className="py-4 flex items-center">
                                    <button onClick={()=>{
                                        if(isCarted){
                                            setIsCarted(!removeCartItem(item.product_id));
                                        }else{
                                            setIsCarted(addCartItem(item.product_id));
                                        }
                                        
                                    }} className="bg-purple-500 inline-flex  items-center justify-center text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                                        <span>{!isCarted?"Add To Cart":"Remove from Cart"}</span>
                                        <span className="pl-2 font-bold text-lg"><CiShoppingCart /></span>
                                    </button>
                                    <button onClick={()=>{
                                        if(isInWishlist){
                                            setIsInWishlist(!removeWishlistItem(item.product_id));
                                        }else{
                                            setIsInWishlist(addWishlistItem(item.product_id));
                                        }    
                                        // console.log(wishlist, isInWishlist);
                                                                            
                                    }} className="ml-2 rounded-full border-2 bg-gray-50 border-purple-200 w-[50px] h-[50px] inline-flex  items-center justify-center  text-purple-700 hover:text-gray-700">
                                        <span className="font-bold text-lg">{!isInWishlist?(<CiHeart />):(<FaHeart/>)}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}
