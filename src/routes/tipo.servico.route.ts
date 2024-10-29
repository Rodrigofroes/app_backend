import express from 'express';
import TipoServicoController from '../controllers/tipo.servico.controller';

const router = express.Router();
const controller = new TipoServicoController();

router.post('/tiposervico', (req, res) => {
    // #swagger.tags = ['Tipo de Serviço']
    // #swagger.summary = 'Endpoint para criar uma nova categoria de serviço'
    controller.create(req, res);
});

router.put('/tiposervico', (req, res) => {
    // #swagger.tags = ['Tipo de Serviço']
    // #swagger.summary = 'Endpoint para atualizar uma categoria de serviço'
    controller.update(req, res);
});

router.delete('/tiposervico/:uuid', (req, res) => {
    // #swagger.tags = ['Tipo de Serviço']
    // #swagger.summary = 'Endpoint para deletar uma categoria de serviço'
    controller.delete(req, res);
});

router.get('/tiposervico', (req, res) => {
    // #swagger.tags = ['Tipo de Serviço']
    // #swagger.summary = 'Endpoint para buscar todas as categorias de serviço'
    controller.findAll(req, res);
});

router.get('/tiposervico/:uuid', (req, res) => {
    // #swagger.tags = ['Tipo de Serviço']
    // #swagger.summary = 'Endpoint para buscar uma categoria de serviço por UUID'
    controller.findByUUID(req, res);
});



export default router;