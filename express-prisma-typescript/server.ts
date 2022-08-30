import express, {Express, Request, Response} from "express";
import cors, {CorsOptions} from "cors";
import dotenv from "dotenv";

dotenv.config();

import {PrismaClient, Prisma} from "@prisma/client";

const corsOptions: CorsOptions = {};

const app: Express = express();

app.use(cors(corsOptions));
app.use(express.json());

// Prisma Init
const prisma = new PrismaClient();

// ROUTES
app.get('/', (req: Request, res: Response) => {
    res.send("Hello, world!");
});

app.get('/json', (req: Request, res: Response) => {
    res.json({message: 'Tout va bien'});
});

/*app.post("/", (req: Request, res: Response) => {
    const {name} = req.body;
    res.send(`Bonjour ${name}`);
});*/

app.get('/users', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.get('/users/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    const users = await prisma.user.findUnique({
        where: {id: parseInt(id)},
        include: {posts: true},
    })
    res.json(users);
});

app.post("/users", async (req: Request, res: Response) => {
    const user: Prisma.UserCreateInput = await prisma.user.create({
        data: {
            name: "Toto",
            isSingle: true,
            admin: true
        },
    });
    res.json(user);
});

/*app.get('/:name/:age', (req: Request, res: Response) => {
    const {name, age} = req.params;
    res.send(`Bienvenue ${name}, vous avez ${age} ans.`);
});*/

// Lancement du serveur
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});