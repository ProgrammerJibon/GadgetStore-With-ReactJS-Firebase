export default ({item = {}, updateUrl=()=>{}}) => {
    console.log(item)
    return (
        <div className="max-w-64 w-[100%] text-md rounded-lg overflow-hidden shadow-lg mb-8  max-h-96 bg-white border-[16px] border-white">
            <div className="bg-gray-200 h-48  rounded-lg overflow-hidden">
                <img src={item.product_image} className="h-full object-cover"/>
            </div>
            <div className="px-2 py-4">
                <div className="font-bold text-md mb-2 whitespace-nowrap overflow-hidden">{item.product_title}</div>
                <p className="text-gray-700 text-sm text-base">Price: ${item.price}</p>
            </div>
            <div className="px-2 pt-4 pb-2">
                <button onClick={(e)=>{updateUrl(e, "/product", "id="+item.product_id)}} className="bg-transparent hover:bg-purple-500 text-sm text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full">
                    <span>View Details</span>
                </button>
            </div>
        </div>
    );
};
