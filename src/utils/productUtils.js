import { products } from '../data/products';

export const getProducts = () => {
    // Always return fresh data during development to ensure updates are reflected immediately
    return products;
};

export const getProductById = (id) => {
    return products.find(p => p.id === id);
};
