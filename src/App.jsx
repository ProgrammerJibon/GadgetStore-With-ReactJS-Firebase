import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./Screens/HomePage";
import ProductDetailsPage from "./Screens/ProductDetailsPage";
import NavBar from "./Layouts/NavBar";
import HeadBar from "./Layouts/HeadBar";
import DashboardPage from "./Screens/DashboardPage";
import FooterBar from "./Layouts/FooterBar";
import StatisticsPage from "./Screens/StatisticsPage";
import NotFoundPage from "./Screens/404";
import products from "./products.json";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
    const localStorageCartName = "carts", localStorageWishlistName = "wishlist";
    const [path, setPath] = useState(window.location.pathname);
    const [query, setQuery] = useState(new URLSearchParams(window.location.search));
    const [carts, setCarts] = useState(JSON.parse(localStorage.getItem(localStorageCartName) || "[]"));
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem(localStorageWishlistName) || "[]"));
    const [currentDashBoardPage, setCurrentDashBoardPage] = useState("cart");

    const navigate = useNavigate();

    function updateUrl(e, new_url, queries = "") {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        const fullUrl = new_url + (queries !== "" ? "?" + queries : "");
        navigate(fullUrl); // Use navigate to avoid page reload
        setPath(new_url);
        setQuery(new URLSearchParams(queries));
    }

    function addCartItem(id) {
        if (!carts.includes(id)) {
            const tempCarts = [...carts, id];
            setCarts(tempCarts);
            localStorage.setItem(localStorageCartName, JSON.stringify(tempCarts));
            toast.success("Item added to cart!");
            return true;
        }
        return false;
    }

    function addWishlistItem(id) {
        if (!wishlist.includes(id)) {
            const tempWishlist = [...wishlist, id];
            setWishlist(tempWishlist);
            localStorage.setItem(localStorageWishlistName, JSON.stringify(tempWishlist));
            toast.success("Item added to wishlist!");
            return true;
        }
        return false;
    }

    function removeCartItem(id) {
        if (carts.includes(id)) {
            const updatedCarts = carts.filter(item => item !== id);
            setCarts(updatedCarts);
            localStorage.setItem(localStorageCartName, JSON.stringify(updatedCarts));
            toast.success("Item removed from cart!");
            return true;
        }
        return false;
    }

    function removeAllCart() {
        if (true) {
            const updatedCarts = carts.filter(item => false);
            setCarts(updatedCarts);
            localStorage.setItem(localStorageCartName, JSON.stringify(updatedCarts));
            toast.success("Purchase is successfull!");
            return true;
        }
    }

    function removeWishlistItem(id) {
        if (wishlist.includes(id)) {
            const updatedWishlist = wishlist.filter(item => item !== id);
            setWishlist(updatedWishlist);
            localStorage.setItem(localStorageWishlistName, JSON.stringify(updatedWishlist));
            toast.success("Item removed from Wishlist!");
            return true;
        }
        return false;
    }

    return (
        <>
            <NavBar carts={carts} path={path} updateUrl={updateUrl} setCurrentDashBoardPage={setCurrentDashBoardPage} />
            <HeadBar path={path} updateUrl={updateUrl} currentDashBoardPage={currentDashBoardPage} setCurrentDashBoardPage={setCurrentDashBoardPage} />
            <Routes>
                <Route path="/" element={<HomePage updateUrl={updateUrl} path={path} query={query} products={products} />} />
                <Route path="/product" element={<ProductDetailsPage wishlist={wishlist} addWishlistItem={addWishlistItem} removeWishlistItem={removeWishlistItem} removeCartItem={removeCartItem} carts={carts} addCartItem={addCartItem} path={path} query={query} />} />
                <Route path="/statistics" element={<StatisticsPage products={products} path={path} query={query} />} />
                <Route path="/dashboard" element={<DashboardPage wishlist={wishlist} removeAllCart={removeAllCart} addWishlistItem={addWishlistItem} removeWishlistItem={removeWishlistItem} removeCartItem={removeCartItem} carts={carts} addCartItem={addCartItem} currentDashBoardPage={currentDashBoardPage} setCurrentDashBoardPage={setCurrentDashBoardPage} path={path} query={query} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <FooterBar path={path} />
            <ToastContainer />
        </>
    );
}

export default App;
