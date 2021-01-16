const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/items', async(req, res, next) => {
    const query = req.query.q;
    let categories = [];
    let itemsCollection = [];

    try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
        const data = response.data;

        if (data.filters.length > 0) {
            categories = data.filters[0].values[0].path_from_root.map(categories => {
                return categories.name;
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
                    "decimals": item.price - Math.floor(item.price)
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
        res.status(500).json('Cannot get data, please be sure you are sending item query like: /items?q=item name');
    }
})

module.exports = router;