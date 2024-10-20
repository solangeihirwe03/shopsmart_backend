import express, {Response, Request} from "express";
import cors from "cors"
import httpStatus from "http-status";
import dotenv from "dotenv"
import SwaggerUi from "swagger-ui-express"
import Document from "../swagger.json"
import router from "./router/index"
import "./database/config/db.config"

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json())
app.get("/", (req: Request, res: Response)=> {
    res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Welcome to our shopsmart backend"
    })
});

app.use("/api", router)
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(Document))

const port = process.env.PORT || 9090

app.listen(port, ()=> console.log(`Server is running on ${port}`))