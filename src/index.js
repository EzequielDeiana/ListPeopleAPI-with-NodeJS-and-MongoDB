import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const userRoutes = router;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

// routes
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to the MongoDB Atlas"))
.catch((err) => { console.error(err)});

app.listen(port, () => console.log(`server listen on port http://localhost:${port}`));