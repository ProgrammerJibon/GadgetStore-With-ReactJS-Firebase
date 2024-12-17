export default ({updateUrl, path, currentDashBoardPage, setCurrentDashBoardPage}) => {
    let headTitle = "";
    switch (path) {
        case "/":
            headTitle = (<div className="text-4xl py-4">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</div>)
            break;
        case "/statistics":
            headTitle = "Statistics"
            break;
        case "/dashboard":
            headTitle = "Dashboard"
            break;
        case "/product":
            headTitle = "Product Details"
            break;
        default:
            headTitle = "Page not found"
            break;
    }
    const headDesc = "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!";

    const activePageClassList = "text-sm bg-white font-bold border-2 text-purple-700 rounded-full px-8 py-2 hover:bg-purple-600 hover:text-white";
    const inactivePageClassList = "text-sm bg-purple-700 text-white border-2 rounded-full px-8 py-2 hover:bg-purple-900 hover:text-white";
        

    return(
        <>
            <div className={` relative w-full  text-center bg-purple-700 text-white py-8 `}>
                <div className="container mx-auto w-7/12">
                    <div className="text-lg font-bold">
                        <span>{headTitle}</span>
                    </div>
                    <div className="w-10/12 mx-auto opacity-90 py-3">
                        <span>{headDesc}</span>
                    </div>
                    {path == "/dashboard" && (<div className="flex gap-4 items-center align-middle justify-center w-full pt-4">
                        <button onClick={()=>setCurrentDashBoardPage("cart")} className={currentDashBoardPage == "cart"?activePageClassList:inactivePageClassList}>Cart</button>
                        <button onClick={()=>setCurrentDashBoardPage("wishlist")} className={currentDashBoardPage == "wishlist"?activePageClassList:inactivePageClassList}>Wishlist</button>
                    </div>)}
                    {path == "/" && (
                        <>
                            <div>
                                <a href="/dashboard" onClick={(e)=>updateUrl(e,"/dashboard")} className={[activePageClassList]}>
                                    <span>Shop Now</span>
                                </a>
                            </div>
                        </>
                    )}
                </div>   
            </div>
        </>
    )
}