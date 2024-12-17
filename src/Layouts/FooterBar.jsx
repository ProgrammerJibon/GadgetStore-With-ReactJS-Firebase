export default ({ path }) => {
    return (
        <>
            <footer className="bg-gray-50 text-gray-700 py-8 z-10 relative" >
                <div className="container mx-auto px-4  w-10/12  py-8">
                    <div className="mx-auto w-6/12 text-center pb-8">
                        <h2 className="text-xl mb-4 font-bold text-slate-800">Gadget Heaven</h2>
                        <p className="text-sm opacity-90">Leading the way in cutting-edge technology and innovation.</p>
                    </div>
                    <hr />
                    <div className="lg:grid grid-cols-1 text-center w-6/12 mx-auto md:grid-cols-3 gap-8 pt-8">
                        <div className="mx-auto pb-4 text-sm">
                            <h2 className="text-lg text-slate-800 font-bold mb-4">Services</h2>
                            <ul>
                                <li><a href="#">Product Support</a></li>
                                <li><a href="#">Order Tracking</a></li>
                                <li><a href="#">Shipping & Delivery</a></li>
                                <li><a href="#">Returns</a></li>
                            </ul>
                        </div>
                        <div className="mx-auto pb-4 text-sm">
                            <h2 className="text-lg text-slate-800 font-bold mb-4">Company</h2>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="mx-auto pb-4 text-sm">
                            <h2 className="text-lg text-slate-800 font-bold mb-4">Legal</h2>
                            <ul>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}