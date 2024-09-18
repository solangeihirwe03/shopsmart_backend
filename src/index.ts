import express, {Response, Request} from "express";
import cors from "cors"
import httpStatus from "http-status";
import dotenv from "dotenv"
import "./database/database"

dotenv.config()
const app = express();

app.use(cors());
app.get("/", (req: Request, res: Response)=> {
    res.status(httpStatus.OK).json({
        status: httpStatus.OK,
        message: "Welcome to our shopsmart backend"
    })
})

const port = process.env.PORT || 9090

app.listen(port, ()=> console.log(`Server is running on ${port}`))