// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import ProductDetailPage from './ProductDetailPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/products/:productId" element={<ProductDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
