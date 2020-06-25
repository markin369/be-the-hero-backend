const { Ong, Incident } = require('../models');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index(request, response){
        const ongs = await Ong.findAll({
            include: [{
                model: Incident
            }]
        });
        return response.json(ongs);
    },
    async create(resquest, response) {
        const {name, email, whatsapp, city, uf} = resquest.body;
        
        const id = generateUniqueId()
        
        const ong = await Ong.create({
            id: id,
            name: name,
            email: email,
            whatsapp: whatsapp,
            city: city,
            uf: uf
        });
        
        return response.json({ id: ong.id });
    }
}