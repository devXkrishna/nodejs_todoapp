import express from "express";
import router from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
export const app = express();
import cors from "cors";

config({
    path: "./data/config.env",
});
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", router);
app.use("/api/v1/task", taskRouter);
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}))


app.use(errorMiddleware);

