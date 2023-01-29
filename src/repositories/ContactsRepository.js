// const { v4 } = require('uuid');

const contacts = require('../mocks/contacts');
const db = require('../db');
class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(
      `SELECT * FROM contacts ORDER BY name ${direction}`,
    );
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [
      email,
    ]);
    return row;
  }

  delete(id) {
    return new Promise(resolve => {
      const index = contacts.findIndex(contact => contact.id === id);
      contacts.splice(index, 1);
      resolve();
    });
  }

  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(
      'INSERT INTO contacts (name, email, phone, category_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, phone, category_id],
    );

    return row;
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise(resolve => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      const index = contacts.findIndex(contact => contact.id === id);
      contacts[index] = updateContact;
      resolve(updateContact);
    });
  }
}

module.exports = new ContactsRepository();
