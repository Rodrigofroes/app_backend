import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger_output.json'; 
const endpointsFiles = ['./src/routes/**/*.ts']; 

const doc = {
    info: {
        title: 'API Documentação',
        description: 'Documentação gerada automaticamente pela integração com Swagger',
    },
    host: 'localhost:3000',
    basePath: '/api',
    schemes: ['http'],
};

swaggerAutogen()(outputFile, endpointsFiles, doc);
