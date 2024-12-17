import { BiCross } from "react-icons/bi"
import { GiSettingsKnobs } from "react-icons/gi"
import { IoMdCloseCircleOutline } from "react-icons/io"
import ProductBar from "./ProductBar"
import products from "../products.json";

export default ({currentDashBoardPage,addCartItem, ids=[], removeItem=()=>{}}) => {

    document.title = "Gadget Heaven | Wishlist"

    let items = [];
    ids.map(item=>{
        let tempProducts = products.filter(product=>{
            return product.product_id == item;
        });
        if(tempProducts.length == 1){
            items.push(tempProducts[0]);
        }
    });

    return (<>
        <div className="container mx-auto p-4 w-9/12">
            <div className="flex justify-between items-center pt-16">
                <h1 className="text-lg font-bold mb-4">Wishlist ({items.length})</h1>
            </div>
            {items.length<1?(<div className="text-lg text-center my-16">No items in wishlist!</div>):""}
            {items.map((item, index)=><ProductBar addCartItem={addCartItem} key={index} product={item} removeItem={removeItem} currentDashBoardPage={currentDashBoardPage}/>)}
        </div>
    </>)
}