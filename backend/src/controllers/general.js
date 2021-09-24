const Service = require('../models/Service');
const User = require('../models/User');

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

exports.editService = async (req, res, next) => {
    const body = req.body;
    const service = req.params.services;

    console.log(body);

    if (!body.token) {
        throw new Error('Token no especificado');
    }
    try {
        const user = await User.findOne({token: body.token});
        retrieveClass(service).findByIdAndUpdate(body._id, {
            name: body.name,
            description: body.description,
            url: body.url
        }).then((service) => {
            res.send(JSON.stringify(service), 200);
        }).catch((err) => {
            console.log(err);
            res.send('ha ocurrido un error', 400)
        })

    } catch (e) {
        throw new Error('Usuario no encontrado');
    }

};