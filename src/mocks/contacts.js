const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Walber Vaz',
    email: 'email@email.com',
    phone: '123456789',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Pedro Miguel',
    email: 'email@email.com',
    phone: '987654321',
    category: v4(),
  },
];

module.exports = contacts;
