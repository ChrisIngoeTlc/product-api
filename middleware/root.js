var ProductsProvider = require('../modules/ProductsProvider')

//Define the server API url for customer details
//Include versions as this is still a prototype
exports.setup = function ( server ) {
    server.get({path: '/Products', flags: 'i', version: '1.0.0'},ProductsProvider.ProductListV1),
    server.get({path: '/Products/:product_id', flags: 'i', version: '1.0.0'},ProductsProvider.ProductItemV1),
    server.get({path: '/Groups', flags: 'i', version: '1.0.0'},ProductsProvider.GroupListV1),
    server.get({path: '/Groups/:group_id', flags: 'i', version: '1.0.0'},ProductsProvider.GroupItemV1),
    server.get({path: '/Products/:product_id/Groups', flags: 'i', version: '1.0.0'},ProductsProvider.ProductGroupItemV1),
    server.get({path: '/Content', flags: 'i', version: '1.0.0'},ProductsProvider.ContentListV1),
    server.get({path: '/Content/:style_id', flags: 'i', version: '1.0.0'},ProductsProvider.ContentItemV1),
    server.get({path: '/Products/:product_id/Content', flags: 'i', version: '1.0.0'},ProductsProvider.ProductContentItemV1),
    server.get({path: '/Products/:product_id/Titles', flags: 'i', version: '1.0.0'},ProductsProvider.ProductTitlesV1),
    server.get({path: '/Products/:product_id/Classifications', flags: 'i', version: '1.0.0'},ProductsProvider.ProductClassificationsV1),
    server.get({path: '/Products/:product_id/Zones', flags: 'i', version: '1.0.0'},ProductsProvider.ProductEdzonesV1);
};
