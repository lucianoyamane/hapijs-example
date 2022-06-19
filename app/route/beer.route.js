const { findBeerService } = require('../service/find.beer.service');
const { loadBeerService } = require('../service/load.beer.service');

module.exports.methods = [
    {
        path: '/beer/{id}',
        method: 'GET',
        handler: (request, h) => {
            let { id } = request.params;
            let result = findBeerService(id);
            if (result) {
                return result;
            }
            return h.response({message: 'not found'}).code(400);
        }
        
    },
    {
        path: '/beer/load',
        method: 'GET',
        handler: (request, h) => {
            return loadBeerService(request.query);
        }
        
    }
];