const { filterMatchName, load } = require('../repository/beer.repository').beerRepository;

module.exports.loadBeerService = (query) => {
    let { name } = query;
    if (name) {
        return filterMatchName(name);
    }
    return load();
};