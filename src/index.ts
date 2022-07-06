import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import mongoose from "mongoose";
import Routes from "./routes";
dotenv.config();

(async function main() {
  const app = express();
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(json());

  Routes(app);
  const PORT = process.env.PORT;
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;

  const uri = `mongodb+srv://${username}:${password}@cluster0.z4nem.mongodb.net/?retryWrites=true&w=majority`;

  await mongoose
    .connect(uri)
    .then(() => {
      console.log("mongo connect success");
    })
    .catch((error) => {
      console.log("connect error: ", error.message);
      process.exit(1);
    });

  app.listen(PORT, () =>
    console.log(`Server listening on ${process.env.DEV_URL}`)
  );
})();
