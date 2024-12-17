import { GiSettingsKnobs } from "react-icons/gi"
import ProductBar from "./ProductBar";
import products from "../products.json";
import { useState } from "react";
import PopupModal from "../Layouts/PopupModal";

export default ({removeAllCart=()=>{}, currentDashBoardPage, ids = [], removeItem = () => { } }) => {

    document.title = "Gadget Heaven | Carts"

    let items = [];
    let totalPrice = 0;
    const [sortBy, setSortBy] = useState("date");

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    ids.map(item => {
        let tempProducts = products.filter(product => {
            return product.product_id == item;
        });
        if (tempProducts.length == 1) {
            items.push(tempProducts[0]);
            totalPrice += (parseFloat(tempProducts[0].price));
        }
    });

    if (sortBy == "l2h") {
        items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortBy == "h2l") {
        items.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }



    return (<>
        <PopupModal
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
        />
        <div className="container mx-auto p-4 w-9/12">
            <div className="lg:flex justify-between items-center py-8">
                <h1 className="text-lg font-bold mb-2">Cart ({items.length})</h1>
                <div className="lg:flex  mb-2">
                    <div className=" lg:flex items-center gap-4">
                        <div className="pb-4 lg:pb-0 text-lg font-semibold">Total cost: ${Math.round(totalPrice * 100) / 100}</div>
                        <button onClick={() => {
                            if (sortBy == "date") {
                                setSortBy("h2l");
                            } else if (sortBy == "h2l") {
                                setSortBy("l2h");
                            } else {
                                setSortBy("date");
                            }
                        }} 
                        disabled={items.length<1}
                        title="Click to change as displayed text"
                        className="mb-4 lg:mb-0 border-purple-700 border-2 flex  items-center text-purple-700 px-4 py-2 rounded-lg disabled:text-slate-300 disabled:border-slate-300">
                            <span>
                                {
                                    (sortBy == "l2h" ? "Default" : (sortBy == "h2l" ? "Short by Price (Low to High)" : "Short by Price (High to Low)"))
                                }
                            </span>
                            <span className="px-2">
                                <GiSettingsKnobs />
                            </span>
                        </button>
                        <button onClick={()=>{
                            if(items.length>0){
                                removeAllCart();
                                openModal();
                            }
                        }}
                        disabled={items.length<1}
                        className="bg-purple-700 text-white px-8 py-2 rounded-lg disabled:bg-slate-400">
                            <span>Purchase</span>
                        </button>
                    </div>
                </div>
            </div>
            {items.length<1?(<div className="text-lg text-center my-16">No items in cart!</div>):""}
            {items.map((item, index) => <ProductBar key={index} product={item} removeItem={removeItem} currentDashBoardPage={currentDashBoardPage} />)}
        </div>
    </>)
}