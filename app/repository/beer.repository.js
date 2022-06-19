const beerModel = require('../model/beer.model.json');

const findById = (id) => {
    return beerModel.find(beer => beer.id == id);
}

const filterMatchName = (name) => {
    return beerModel.filter(beer => beer.name.toLowerCase().includes(name.toLowerCase()));
}

const load = () => {
    return beerModel;
}


module.exports.beerRepository = {
    findById,
    filterMatchName,
    load
}