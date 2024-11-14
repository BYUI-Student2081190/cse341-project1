const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

const outputfile = "./swagger.json";
const endpointfile = ['./routes/index.js'];

swaggerAutogen(outputfile, endpointfile, doc);