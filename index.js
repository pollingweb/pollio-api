import cors from 'cors';
import express from "express";
import routerPoll from "./routes/poll-router.js";
import routerVoter from "./routes/voter-router.js";
import routerUpload from "./routes/image-upload-router.js";
import routerOrganiser from "./routes/organiser-router.js";
import routerCandidate from "./routes/candidate-router.js";


const app = express();

/** Middlewares goes here. */
app.use(cors());
app.use(express.json());
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


const port = 3000

app.listen(port, () => {
    console.log(`API running on port ${port}`);
})

