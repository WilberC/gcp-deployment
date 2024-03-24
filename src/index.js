import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {router} from "./routes.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors(), bodyParser.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Health endpoint: http://localhost:${PORT}/health`);
});
