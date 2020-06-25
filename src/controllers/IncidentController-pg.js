const { Ong, Incident } = require('../models');

module.exports = {
    async index(request, response){
        const {page=1} = request.query;
        const incidents = await Incident.findAll({
            include: [{
                model: Ong,
                attributes: ['name', 'email', 'whatsapp', 'city', 'uf'],
            }],
            limit: 5,
            offset: (page - 1)*5
        });
        await Incident.count().then(c => {
            response.header('X-Total-Count', c);
        });             

        return response.json(incidents);
    },
    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;
        console.log(ong_id);
        const incident = await Incident.create({
             title: title,
             description: description,
             value: value,
             OngId: ong_id,
         });

         return response.json( incident.get('id') )
    },
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await Incident.findOne({
            where: {
                id: id
            },
            select: {
                ongid: ong_id
            }
        });
        //console.log("Ong id "+ong_id+" Incident "+incident.OngId);
        if(incident.OngId != ong_id){
            return response.status(401).json({ error: "operation not permission"});
        }    

        await Incident.destroy({
            where: {
                id: id
            }
        });
        return response.status(204).send();
    }
}