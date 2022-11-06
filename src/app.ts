import express, { json, urlencoded } from "express";
import "dotenv/config";
import cors from "cors";
import { routes } from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

//config
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: false }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`server running in port: ${PORT}`);
});
