import sql from '../db/index.js';

class ContactsRepository {
    async findAll(orderBy = 'ASC') {
        const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
        const rows = await sql`
            SELECT contacts.*, categories.name AS category_name
            FROM contacts
            LEFT JOIN categories ON contacts.category_id = categories.id
            ORDER BY contacts.name ${sql.raw(direction)}
        `;

        return rows;
    }

    async findById(id) {
        const [row] = await sql`
            SELECT contacts.*, categories.name AS category_name
            FROM contacts
            LEFT JOIN categories ON contacts.category_id = categories.id
            WHERE contacts.id = ${id}
        `;

        return row;
    }

    async findByEmail(email) {
        const [row] = await sql`
            SELECT contacts.*, categories.name AS category_name
            FROM contacts
            LEFT JOIN categories ON contacts.category_id = categories.id
            WHERE contacts.email = ${email}
        `;

        return row;
    }

    async create({ name, email, phone, category_id }) {
        const [row] = await sql`
            INSERT INTO contacts (name, email, phone, category_id)
            VALUES (${name}, ${email}, ${phone}, ${category_id})
            RETURNING *
        `;

        return row;
    }

    async update(id, { name, email, phone, category_id }) {
        const [row] = await sql`
            UPDATE contacts
            SET name = ${name}, email = ${email}, phone = ${phone}, category_id = ${category_id}
            WHERE id = ${id}
            RETURNING *
        `;

        return row;
    }

    async delete(id) {
        const [deleteOp] = await sql`
            DELETE FROM contacts
            WHERE id = ${id}
            RETURNING *
        `;
        return deleteOp;
    }
}

export default new ContactsRepository();
