import express from "express";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import categoriaRoute from "./routes/categoria.route";
import usuarioRoute from "./routes/usuario.route";

import outputFile from '../swagger_output.json';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputFile));
app.use("/api", categoriaRoute);
app.use("/api", usuarioRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
