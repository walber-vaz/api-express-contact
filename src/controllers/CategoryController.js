import CategoriesRepository from '../repositories/CategoryRepository.js';

class CategoryController {
    async index(req, res) {
        const { orderBy } = req.query;
        const categories = await CategoriesRepository.findAll(orderBy);
        return res.status(200).json(categories);
    }

    async store(req, res) {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const isCategoryNameAlreadyExists = await CategoriesRepository.findByName(name);

        if (isCategoryNameAlreadyExists) {
            return res.status(400).json({ error: 'Category name already exists' });
        }

        const category = await CategoriesRepository.create({ name });
        return res.status(201).json(category);
    }

    async delete(req, res) {
        const { id } = req.params;
        await CategoriesRepository.delete(id);
        return res.sendStatus(204);
    }
}

export default new CategoryController();
