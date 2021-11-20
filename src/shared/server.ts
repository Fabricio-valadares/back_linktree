import "reflect-metadata";
import express, { Request, Response, NextFunction, request } from "express"
import { AppError } from "./error"
import { connectDB } from "./typeorm/index"

connectDB()
const app = express()
app.use(express.json())

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.status).json({
            status: "error",
            message: error.message
        })
    }

    return response.status(500).json({
        error: "error",
        message: "Interval error server"
    })
})

app.listen(3333, () => {
    console.log("run server!")
})

