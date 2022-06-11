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


const port = 3001

app.listen(port, () => {
    console.log(`API running on port ${port}`);
})
// import Voter from './models/voter.js';
// import Candidate from './models/candidates.js';
// import Poll from './models/poll.js';
// import Organizer from './models/organizer.js';
// import sequelize from './models/base.js';
// sequelize.sync();
