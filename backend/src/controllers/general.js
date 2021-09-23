const Service = require('../models/services');

const retrieveClass = function (service) {
    switch (service) {
        case 'service':
            return Service;
    }
}

exports.getServices = async (req, res, next) => {
    const service = req.params.services;
    let services = [];

    services = await retrieveClass(service).find();

    res.json(services);
};

exports.saveService = (req, res, next) => {
    const body = req.body;
    const service = req.params.services;

    retrieveClass(service).create(body).then((services) => {
        res.send(JSON.stringify(services), 201);
    }).catch((err) => {
        res.send('ha ocurrido un error', 400)
    })
};