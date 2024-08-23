import sql from '../db/index.js';

class CategoriesRepository {
    async findAll(orderBy = 'ASC') {
        const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
        const rows = await sql`SELECT * FROM categories ORDER BY name ${direction}`;
        return rows;
    }

    async findByName(name) {
        const [row] = await sql`SELECT * FROM categories WHERE name = ${name}`;
        return row;
    }

    async create({ name }) {
        const [row] =
            await sql`INSERT INTO categories (name) VALUES (${name}) RETURNING *`;
        return row;
    }

    async delete(id) {
        // const deleteOp = await db.query('DELETE FROM categories WHERE id = $1', [id]);
        const [deleteOp] =
            await sql`DELETE FROM categories WHERE id = ${id} RETURNING *`;
        return deleteOp;
    }
}

export default new CategoriesRepository();
