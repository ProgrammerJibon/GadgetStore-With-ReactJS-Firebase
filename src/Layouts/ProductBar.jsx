import { BiCross } from "react-icons/bi"
import { GiSettingsKnobs } from "react-icons/gi"
import { IoMdCloseCircleOutline } from "react-icons/io"
import ProductBar from "./ProductBar"

export default ({ addCartItem, currentDashBoardPage ="", product = {}, removeItem=(id)=>{}}) => {
    return (<>
        <div className="grid grid-cols-1 gap-4 my-8">
            <div className="bg-white border-gray-200 border-2 p-4  rounded-lg shadow-lg">
                <div className="flex h-full justify-between items-center">
                    <div className="w-72 h-full bg-white rounded-md overflow-hidden">
                        <img src={product.product_image} className="" />
                    </div>
                    <div className="w-full pl-4">
                        <div className="text-md pt-4 font-semibold">
                            <span>{product.product_title}</span>
                        </div>
                        <div className="text-xs pt-1">
                            <b>Description: </b>
                            <span>{product.description}</span>
                        </div>
                        <div className="text-gray-600 text-sm pt-1">
                            <span>Price: ${product.price}</span>
                        </div>
                        {currentDashBoardPage!="cart"?(<div>
                            <button onClick={()=>{
                                addCartItem(product.product_id)
                                removeItem(product.product_id);
                            }} className="bg-purple-700 text-white text-sm hover:bg-purple-500 border-2 px-8  flex  items-center my-4 py-2 rounded-lg">
                                <span>Add to cart</span>
                            </button>
                        </div>):(<div className="p-2"></div>)}
                    </div>
                    <button onClick={()=>{
                        return removeItem(product.product_id);
                    }} className="text-red-500 hover:text-red-700 text-3xl m-4 rounded-full ">
                        <span>
                            <IoMdCloseCircleOutline />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </>)
}