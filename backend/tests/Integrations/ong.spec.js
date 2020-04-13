const request = require('supertest');
const app = require('../../src/app');
const db = require('../../src/database/db');

describe('ONG', () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });

  afterAll(async () => { 
    await db.destroy();
   });

  it('Should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "AMCentenus3",
        email: "contato@amcentenus.com.br",
        whatsapp: "51980111978",
        city: "Gravataí",
        uf: "RS"
      });
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);

  });
});