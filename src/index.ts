import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app: Application = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy());

//setup static files and ejs template
app.use(express.static(path.join(__dirname, './public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req:Request, res:Response)=>{
  res.status(200).render('index')
})



export default app;
