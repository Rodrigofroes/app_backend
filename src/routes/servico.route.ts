import express from 'express';
import ServicoController from '../controllers/servico.controller';

const router = express.Router();
const controller = new ServicoController();

router.post('/servico', (req, res) => {
    // #swagger.tags = ['Serviço']
    // #swagger.summary = 'Endpoint para criar um novo serviço'
    controller.create(req, res);
});

router.put('/servico', (req, res) => {
    // #swagger.tags = ['Serviço']
    // #swagger.summary = 'Endpoint para atualizar um serviço'
    controller.update(req, res);
});

router.delete('/servico/:uuid', (req, res) => {
    // #swagger.tags = ['Serviço']
    // #swagger.summary = 'Endpoint para deletar um serviço'
    controller.delete(req, res);
});

router.get('/servico', (req, res) => {
    // #swagger.tags = ['Serviço']
    // #swagger.summary = 'Endpoint para listar todos os serviços'
    controller.findAll(req, res);
});

router.get('/servico/:uuid', (req, res) => {
    // #swagger.tags = ['Serviço']
    // #swagger.summary = 'Endpoint para buscar um serviço pelo UUID'
    controller.findByUUID(req, res);
});

export default router;