// ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetailPage() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productId}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details: ', error);
            });
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 style={{ marginBottom: '20px' }}>Product Detail</h2>
            <div style={{ marginBottom: '10px' }}>
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Description:</strong> {product.description}</p>
            </div>
        </div>
    );
}

export default ProductDetailPage;
