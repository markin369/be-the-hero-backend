const { Incident } = require('../models');

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;
        const incidents = await Incident.findAll({
            where: {
                OngId: ong_id
            }
        });

        return response.json(incidents);                    
    }
}