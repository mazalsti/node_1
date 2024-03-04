import express,{Request, Response}from "express"; // chamada do express
import dotenv from "dotenv"; // configurar var de ambiente
import mustache from "mustache-express"; // chamada do template
import path from "path"; //path e para pegar o arquivo da raiz
import mainRouter from "./routes/index";

dotenv.config();

const server = express();

//configuracao do mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//configurando a pasta public
server.use(express.static(path.join(__dirname, '../public')));

//routas
server.use(mainRouter);
server.use((req: Request,res: Response)=>{
    res.send('pagina nao encontrada');
});

