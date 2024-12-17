import React from "react";
import {ComposedChart, XAxis, YAxis, Tooltip, Legend, Area, Bar, Scatter, CartesianGrid, ResponsiveContainer} from "recharts";

export default function StatisticsPage({ products = [] }) {
    document.title = "Gadget Heaven | Statistics";

    const data = products.map(product => ({
        name: product.product_title,
        price: product.price,
        rating: product.rating,
    }));

    return (
        <>
            <div className="w-full">
                <div className="font-bold text-lg w-9/12 mx-auto py-16">
                    <span>Statistics</span>
                </div>
                <div className="w-9/12 mx-auto">
                    <ResponsiveContainer width="100%" height={400}>
                        <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" fontSize={9}/>
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="price" barSize={20} fill="#413ea0" />
                            <Scatter dataKey="rating" fill="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
}
