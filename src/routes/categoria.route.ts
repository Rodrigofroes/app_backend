import express from 'express';
import CategoriaController from '../controllers/categoria.controller';

const router = express.Router();
const crtl = new CategoriaController();

router.get('/categoria', (req, res) => {
    // #swagger.tags = ['Categoria']
    // #swagger.summary = 'Endpoint para listar todas as categorias'
    crtl.listar(req, res);
});

router.get('/categoria/:uuid', (req, res) => {
    // #swagger.tags = ['Categoria']
    // #swagger.summary = 'Endpoint para buscar uma categoria pelo UUID'
    crtl.findByUUID(req, res);
});

router.post('/categoria', (req, res) => {
    // #swagger.tags = ['Categoria']
    // #swagger.summary = 'Endpoint para criar uma nova categoria'
    crtl.criar(req, res);
});

router.put('/categoria', (req, res) => {
    // #swagger.tags = ['Categoria']
    // #swagger.summary = 'Endpoint para atualizar uma categoria'
    crtl.atualizar(req, res);
});

router.delete('/categoria/:uuid', (req, res) => {
    // #swagger.tags = ['Categoria']
    // #swagger.summary = 'Endpoint para deletar uma categoria'
    crtl.deletar(req, res);
});

export default router;