import express from "express";
import userRoutes from "./routes/users.js"
import cors from "cors";

const app = express();

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    next();
});

app.use(express.json());
app.use(cors());

app.use("/", userRoutes)

app.listen(8800);