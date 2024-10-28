import express from 'express';
import UsuarioController from '../controllers/usuario.controller';

const router = express.Router();
const crtl = new UsuarioController();

router.post('/usuario', (req, res) => {
    // #swagger.tags = ['Usuário']
    // #swagger.summary = 'Endpoint para criar um novo usuário'
    crtl.create(req, res);
});

router.get('/usuario/:uuid', (req, res) => {
    // #swagger.tags = ['Usuário']
    // #swagger.summary = 'Endpoint para listar um usuário pelo UUID'
    crtl.findByUUID(req, res);
});

router.get('/usuario', (req, res) => {
    // #swagger.tags = ['Usuário']
    // #swagger.summary = 'Endpoint para listar todos os usuários'
    crtl.findAll(req, res);
});

router.put('/usuario', (req, res) => {
    // #swagger.tags = ['Usuário']
    // #swagger.summary = 'Endpoint para atualizar um usuário pelo UUID'
    crtl.update(req, res);
});

router.delete('/usuario/:uuid', (req, res) => {
    // #swagger.tags = ['Usuário']
    // #swagger.summary = 'Endpoint para deletar um usuário pelo UUID'
    crtl.delete(req, res);
});

export default router;