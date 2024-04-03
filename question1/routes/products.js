const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:companyname/categories/:categoryname/products', async (req, res) => {
    try {
        const { companyname, categoryname } = req.params;
        const { top, minPrice, maxPrice } = req.query;
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU3OTU3LCJpYXQiOjE3MTIxNTc2NTcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE0YTJkNDQxLTU4MTMtNDA0Zi1hNmIxLTVhZmFiZDQ5NmZmZSIsInN1YiI6ImF2MzAwMkBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoic3JtaXN0IiwiY2xpZW50SUQiOiIxNGEyZDQ0MS01ODEzLTQwNGYtYTZiMS01YWZhYmQ0OTZmZmUiLCJjbGllbnRTZWNyZXQiOiJnWFJRWkhlWnF1aXdjZHNLIiwib3duZXJOYW1lIjoiQWthc2ggUyIsIm93bmVyRW1haWwiOiJhdjMwMDJAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IlJBMjExMTAwMzAxMDM2MSJ9.rUXsvlWy3cQeol57NMxTRrDjL2tszwQ3sx1hZuRu-2s';
        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:companyname/categories/:categoryname/products/:productid', async (req, res) => {
    try {
        const { companyname, categoryname, productid } = req.params;
        const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU3OTU3LCJpYXQiOjE3MTIxNTc2NTcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE0YTJkNDQxLTU4MTMtNDA0Zi1hNmIxLTVhZmFiZDQ5NmZmZSIsInN1YiI6ImF2MzAwMkBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoic3JtaXN0IiwiY2xpZW50SUQiOiIxNGEyZDQ0MS01ODEzLTQwNGYtYTZiMS01YWZhYmQ0OTZmZmUiLCJjbGllbnRTZWNyZXQiOiJnWFJRWkhlWnF1aXdjZHNLIiwib3duZXJOYW1lIjoiQWthc2ggUyIsIm93bmVyRW1haWwiOiJhdjMwMDJAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IlJBMjExMTAwMzAxMDM2MSJ9.rUXsvlWy3cQeol57NMxTRrDjL2tszwQ3sx1hZuRu-2s';
        const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products/${productid}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;