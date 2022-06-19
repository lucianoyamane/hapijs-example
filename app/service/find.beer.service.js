const { findById } = require('../repository/beer.repository').beerRepository;

module.exports.findBeerService = (id) => {
    return findById(id);
};