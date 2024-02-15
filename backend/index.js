import express from "express";
import dotenv from "dotenv";

import connectToMongoDB from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;
dotenv.config();

const app = express();
app.use(express.json());

app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});
