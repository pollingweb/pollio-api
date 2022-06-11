import { Router } from "express";
import Poll from "../models/poll.js";
import { body, validationResult } from 'express-validator';

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

        Poll.create(req.body)
            .then((poll) => res.json(poll))
            .catch(err => res.status(500).json({
                messages: err.errors
            }));
    });


/**
 * Get the list of all polls.
 */
router.get("/", (req, res) => {
    Poll.findAll()
        .then(polls => res.json(polls))
        .catch(err => res.status(500).json({
            messages: err.errors
        }));
});


/**
 * Find poll by id.
 */
router.get("/:id", (req, res) => {
    Poll.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(poll => res.json(poll))
        .catch(err => res.status(500).json({
            messages: err.errors
        }));
});


/**
 * Update any field of poll.
 */
router.put("/:id", (req, res) => {
    Poll.update({ ...req.body }, {
        where: { id: req.params.id }
    })
        .then(() => res.json({
            message: "poll updated successfully!",
        }))
        .catch(err => res.status(500).json({
            messages: err.errors
        }));
});


export default router;
