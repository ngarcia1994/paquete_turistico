const Service = require('../models/services');

exports.getServices = async (req, res, next) => {
    const services = await Service.find();
    res.json(services);
};

exports.saveService = (req, res, next) => {
    const body = req.body;

    Service.create({
        name: body.name,
        description: body.description
    }).then((services) => {
        res.send(JSON.stringify(services), 201);
    }).catch((err) => {
        res.send('ha ocurrido un error', 400)
    })
};