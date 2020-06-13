const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique Id', ()=>{
    it('Should an unique Id', ()=>{
        expect(generateUniqueId()).toHaveLength(8);
    });
});