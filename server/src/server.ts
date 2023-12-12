import express, { Request, Response } from 'express';
import cors from "cors";
import citiesRoutes from "./api/city/routes/routes.city";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

app.use("/v1/cities", citiesRoutes);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
