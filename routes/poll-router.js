import db from "../models/index.js";
import { Router } from "express";
import { body, validationResult } from 'express-validator';
import { DB_NAME } from "../config.js";


const router = new Router();

/**
 * Create a new poll.
 */
router.post("/",
    body('id').isString(),
    body('name').isString(),
    body('startDate').isString(),
    body('endDate').isString(),

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        db.poll.create(req.body)
            .then((poll) => {
                if (poll.pollType === 'Public') {
                    db.voter.findAll().then(voters => {
                        if (voters.length > 0) {
                            Promise.all(
                                voters.map(voter => {
                                    db.poll_voter.create({
                                        pollId: poll.id,
                                        voterId: voter.id
                                    })
                                }))
                                .then(() => res.json(poll))
                                .catch(err => res.json({
                                    success: true,
                                    messages: "error in registring voters"
                                }))
                        }
                    });
                }

            })
            .catch(err => res.status(500).json({
                success: false,
                messages: err.errors || "Poll not created, insufficient data!"
            }));
    });


/**
 * Get the list of all polls.
 */
router.get("/", (req, res) => {
    db.poll.findAll()
        .then(polls => res.json(polls))
        .catch(err => res.status(500).json({
            success: false,
            messages: err
        }));
});


/**
 * Find poll by id.
 */
router.get("/:id", (req, res) => {
    db.poll.findOne({
        include: [db.organizer, db.candidate, {
            model: db.voter,
            attributes: { exclude: ['password'] }
        }],
        where: {
            id: req.params.id
        }
    })
        .then(poll => res.json(poll))
        .catch(err => res.status(500).json({
            success: false,
            messages: err
        }));
});


/**
 * Update any field of poll.
 */
router.put("/:id", (req, res) => {
    db.poll.update({ ...req.body }, {
        where: { id: req.params.id }
    })
        .then(() => res.json({
            message: "poll updated successfully!",
        }))
        .catch(err => res.status(500).json({
            success: false,
            messages: err
        }));
});

/**
 * Add voter.
 */
router.post("/:id", (req, res) => {
    db.poll_voter.create({
        pollId: req.params.id,
        voterId: req.body.voterId
    })
        .then(() => res.json({
            message: "voter added successfully!",
        }))
        .catch(err => res.status(500).json({
            success: false,
            messages: err
        }));
});

/**
 * Validate vote.
 */
router.get("/:id/voter/:voterId/verify", (req, res) => {
    db.poll_voter.findOne({
        where: {
            pollId: req.params.id,
            voterId: req.params.voterId
        }})
        .then((result) => {
            res.json({
                isVoted : (result !== null) ? result.isVoted : false 
            })
        })
        .catch(err => res.status(500).json({
            success: false,
            messages: err
        }));
});


export default router;
