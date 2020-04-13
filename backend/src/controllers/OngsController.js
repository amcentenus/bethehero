const db = require('../database/db');
const generateUniqueID = require('../Utils/generateUniqueID');

module.exports = {
  async index(req, res) {
    const ongs = await db('ongs').select('*');

    return res.json(ongs);
  },

  async store(req, res) {
    const { name, email, whatsapp, city, uf  } = req.body;
    const id = generateUniqueID();

    await db('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  },
};