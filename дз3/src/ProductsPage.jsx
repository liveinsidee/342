// ProductsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=100')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products: ', error);
            });
    }, []);

    // Проверяем, является ли products массивом перед его использованием
    if (!Array.isArray(products)) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsPage;
