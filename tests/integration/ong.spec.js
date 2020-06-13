const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll(async ()=>{
        await connection.destroy();
    });
    it('Should be able to create new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({                
                name: "canil abençoado",
                email: "contato@canil.com",
                whatsapp: "85991679477",
                city: "São gonçalo",
                uf: "CE"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);    
    });
})