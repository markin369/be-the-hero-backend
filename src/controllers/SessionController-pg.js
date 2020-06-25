const { Ong } = require('../models');

module.exports = {
    async create(request, response){
        const { id } = request.body;
        console.log(id);
        const ong = await Ong.findOne({
            where: {
                id: id,                
            }, 
            attributes: ['name']
        });
                                
        if(!ong){
            return response.status(400).json({error: "Ong not found with this ID"});
        }               
        
        return response.json(ong);
    }

}