import cors from 'cors';
import express from "express";
import { PORT } from './config.js';

import routerPoll from "./routes/poll-router.js";
import routerVoter from "./routes/voter-router.js";
import routerUpload from "./routes/image-upload-router.js";
import routerOrganiser from "./routes/organiser-router.js";
import routerCandidate from "./routes/candidate-router.js";
import cookieParser from 'cookie-parser';

const app = express();


/** Middlewares goes here. */
app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.static("public"));


/** Default greet. */
app.get('/', (req, res) => {
    res.render('index.html');
});


/** Routes goes here */
app.use("/api/voter", routerVoter);
app.use("/api/poll", routerPoll);
app.use("/api/organizer", routerOrganiser);
app.use("/api/candidate", routerCandidate);
app.use("/api/upload", routerUpload);


app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
})
