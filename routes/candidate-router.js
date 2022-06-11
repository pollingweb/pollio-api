import { Router } from "express";
import Candidate from "../models/candidates.js";
import { body, validationResult } from 'express-validator';

const router = new Router();

/**
 * Create a new candidate.
 */
router.post("/",
    body('id').isString(),
    body('name').isString(),
    body('imageUrl').isURL(),

    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        Candidate.create(req.body)
            .then((candidate) => res.json(candidate))
            .catch(err => res.status(500).json({
                messages: err.errors
            }));
    });


/**
 * Get the list of all candidates.
 */
router.get("/", (req, res) => {
    Candidate.findAll()
        .then(candidates => res.json(candidates))
        .catch(err => res.status(500).json({
            messages: err.errors
        }));
});


/**
 * Find candidate by id.
 */
router.get("/:id", (req, res) => {
    Candidate.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(candidate => res.json(candidate))
        .catch(err => res.status(500).json({
            messages: err.errors
        }));
});


/**
 * Update any field of candidate.
 */
router.put("/:id", (req, res) => {
    Candidate.update({ ...req.body }, {
        where: { id: req.params.id }
    })
        .then(() => res.json({
            message: "candidate updated successfully!",
        }))
        .catch(err => res.status(500).json({
            messages: err.errors
        }));
});


export default router;
