const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();
    return res.status(200).json(contacts);
  }
  async show(req, res) {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    return res.status(200).json(contact);
  }
  async store(req, res) {
    const { name, email, phone, category_id } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const isContactEmailAlreadyExists = await ContactsRepository.findByEmail(
      email,
    );

    if (isContactEmailAlreadyExists) {
      return res.status(400).json({ error: 'Contact email already exists' });
    }

    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    return res.status(201).json(contact);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, phone, category_id } = req.body;

    const isContactExists = await ContactsRepository.findById(id);
    if (!isContactExists) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const isContactEmailAlreadyExists = await ContactsRepository.findByEmail(
      email,
    );
    if (isContactEmailAlreadyExists && isContactEmailAlreadyExists.id !== id) {
      return res.status(400).json({ error: 'Contact email already exists' });
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    return res.status(200).json(contact);
  }

  async delete(req, res) {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    await ContactsRepository.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new ContactController();
