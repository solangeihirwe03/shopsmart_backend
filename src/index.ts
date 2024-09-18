import express, {Response, Request} from "express";
import cors from "cors"
import httpStatus from "http-status";
import dotenv from "dotenv"
import "./database/config/database";
import router from "./router/userRoutes";

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json())
app.get("/", (req: Request, res: Response)=> {
    res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Welcome to our shopsmart backend"
    })
})

app.use("/api", router)

const port = process.env.PORT || 9090

app.listen(port, ()=> console.log(`Server is running on ${port}`))