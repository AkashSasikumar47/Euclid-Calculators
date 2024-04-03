import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useClient } from 'next/data-client';

const AllProductsPage: React.FC = () => {
    const { client } = useClient();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await client.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Render your products here */}
        </div>
    );
};

export default AllProductsPage;