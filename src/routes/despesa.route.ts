import express from 'express';
import DespesaController from '../controllers/despesa.controller';

const router = express.Router();
const controller = new DespesaController();

router.post('/despesa', (req, res) => {
    // #swagger.tags = ['Despesa']
    // #swagger.summary = 'Endpoint para criar uma nova despesa'
    controller.create(req, res);
});

router.get('/despesa', (req, res) => {
    // #swagger.tags = ['Despesa']
    // #swagger.summary = 'Endpoint para buscar todas as despesas'
    controller.findAll(req, res);
});

router.get('/despesa/:uuid', (req, res) => {
    // #swagger.tags = ['Despesa']
    // #swagger.summary = 'Endpoint para buscar uma despesa pelo UUID'
    controller.findByUUID(req, res);
});

router.put('/despesa', (req, res) => {
    // #swagger.tags = ['Despesa']
    // #swagger.summary = 'Endpoint para atualizar uma despesa'
    controller.update(req, res);
});

router.delete('/despesa/:uuid', (req, res) => {
    // #swagger.tags = ['Despesa']
    // #swagger.summary = 'Endpoint para deletar uma despesa'
    controller.delete(req, res);
});

export default router;