const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/items', async(req, res, next) => {
    const query = req.query;
    let categories = [];
    let itemsCollection = [];

    console.log(query.q);

    try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query.q}`);
        const data = response.data;

        if (data.filters.length > 0) {
            categories = data.filters[0].values[0].path_from_root.map(categories => {
                return categories.name;
            });
        }
        console.log(data.results.length);
        if (data.results.length > 0) {
            itemsCollection = data.results.map(item => {
                return {
                    "id": item.id,
                    "title": item.title,
                    "price": {
                    "currency": item.prices.prices[0].currency_id,
                    "amount": item.prices.prices[0].amount,
                    "decimals": 'decimal'
                    },
                    picture: item.thumbnail,
                    "condition": item.condition,
                    "free_shipping": item.shipping.free_shipping
                }
            });
        }

        console.log(categories);
        console.log(itemsCollection);
        
        // res.json(
        //     {
        //         "author": {
        //             "name": "JOSUE",
        //             "lastname": "MENDEZ"
        //         },
        //         "categories": categories,
        //         "items": itemsCollection
        //     }
        // );
        
    } catch (error) {
        res.status(500).json('Cannot get data, please be sure you are sending item query like: /items?q=item name');
    }

        // .then(response => {
        //     const data = response.data;

        //     const categories = data.filters.forEach(filter => {
        //         return filter.values.path_from_root.map(categories => categories.name);
        //     });

            // res.json(categories);

            
            
        // })
    
})

module.exports = router;