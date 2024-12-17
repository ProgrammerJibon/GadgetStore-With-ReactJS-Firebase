import { useState } from 'react';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { HiMenu, HiX } from 'react-icons/hi';
import { toast } from 'react-toastify';

export default function NavBar({carts = [], path = "/" , updateUrl = ()=>{}, setCurrentDashBoardPage=()=>{}}) {
    const [menuOpen, setmenuOpen] = useState(false)

    return (
        <>
            <nav className={`${path == "/" ? "mx-auto bg-purple-700 text-white":"bg-white  text-slate-700"}   p-4 sticky top-0 z-20 shadow-lg`}>
                <div className="container w-9/12 mx-auto flex justify-between items-center">
                    <a href="/" className="text-xl font-bold">
                        Gadget Heaven
                    </a>
                    <ul className={`lg:flex ${menuOpen?'block':'hidden'} lg:space-x-4 lg:space-y-0 space-y-8 px-4 py-4 space-x-0 w-full lg:w-fit lg:relative absolute top-[100%] ${path != "/" && "bg-white"} left-0`}>
                        <li>
                            <a href='/' onClick={(e)=>updateUrl(e, "/")} className=' cursor-pointer no-underline'>Home</a>
                        </li>
                        <li>
                            <a href='/statistics' onClick={(e)=>updateUrl(e,"/statistics")} className=' cursor-pointer  no-underline'>Statistics</a>
                        </li>
                        <li>
                            <a href="/dashboard" onClick={(e)=>updateUrl(e,"/dashboard")} className='  no-underline'>Dashboard</a>
                        </li>
                    </ul>
                    <div className="flex space-x-2">
                        <button href="/dashboard" onClick={(e)=>{setCurrentDashBoardPage("cart");updateUrl(e,"/dashboard")}} className="  no-underline bg-slate-100 min-w-[40px] h-[40px] px-4 flex justify-center items-center rounded-full">
                            <span className='text-slate-950 font-bold text-2xl'>
                                <CiShoppingCart />
                            </span>
                            {carts.length > 0?(<span className='pl-1'>({carts.length})</span>):""}
                        </button>
                        <button href="/dashboard" onClick={(e)=>{setCurrentDashBoardPage("wishlist");updateUrl(e,"/dashboard")}} className="  no-underline bg-slate-100 w-[40px] h-[40px] flex justify-center items-center rounded-full">
                            <span className='text-slate-950 font-bold text-2xl'>
                                <CiHeart />
                            </span>
                        </button>
                        <button href="/dashboard" onClick={(e)=>{setmenuOpen(!menuOpen)}} className="lg:hidden   no-underline bg-slate-100 w-[40px] h-[40px] flex justify-center items-center rounded-full">
                            <span className='text-slate-950 font-bold text-2xl'>
                                {menuOpen ? <HiX /> : <HiMenu />}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}