const express = require('express');
const router = express.Router();
const axios = require('axios');

// Get Products list
router.get('/items', async(req, res, next) => {
    const query = req.query.q;
    let categories = [];
    let itemsCollection = [];

    try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
        const data = response.data;

        if (data.filters.length > 0) {
            categories = data.filters[0].values[0].path_from_root.map(category => {
                return category.name;
            });
        }

        if (data.results.length > 0) {
            itemsCollection = data.results.map(item => {
                return {
                    "id": item.id,
                    "title": item.title,
                    "price": {
                    "currency": item.currency_id,
                    "amount": item.price,
                    "decimals": parseFloat((item.price - Math.floor(item.price)).toFixed(2))
                    },
                    "picture": item.thumbnail,
                    "condition": item.condition,
                    "free_shipping": item.shipping.free_shipping,
                    // "test": item.prices.prices[0].currency_id
                }
            });
        }
        
        res.json(
            {
                "author": {
                    "name": "JOSUE",
                    "lastname": "MENDEZ"
                },
                "categories": categories,
                "items": itemsCollection
            }
        );
        
    } catch (error) {
        res.status(500).json('Internal Server Error');
    }
})

// Get Single Product by ID
router.get('/items/:id', async(req, res, next) => {
    const id = req.params.id;
    let categories = [];

    try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        const data = response.data;

        const description_response = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
        const description_text = description_response.data;
        
        const category_id = data.category_id;
        const category_response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${category_id}`);
        const category_data = category_response.data;

        if (category_data.filters.length > 0) {
            categories = category_data.filters[0].values[0].path_from_root.map(category => {
                return category.name;
            });
        }

        res.json(
            {
                "author": {
                    "name": "JOSUE",
                    "lastname": "MENDEZ"
                },
                "categories" : categories,
                "item": {
                    "id": data.id,
                    "title": data.title,
                    "price": {
                        "currency": data.currency_id,
                        "amount": data.price,
                        "decimals": parseFloat((data.price - Math.floor(data.price)).toFixed(2)),
                    },
                    "picture": data.secure_thumbnail,
                    "condition": data.condition,
                    "free_shipping": data.shipping.free_shipping,
                    "sold_quantity": data.sold_quantity,
                    "description": description_text.plain_text
                }
            }
        );
    } catch (error) {
        res.status(500).json('Internal Server Error');
    }
});

module.exports = router;