import db from "../models/index.js";
import { Router } from "express";
import { body, validationResult } from 'express-validator';

const router = new Router();

/**
 * Create a new organizer.
 */
router.post("/",
    body('id').isString(),
    body('name').isString(),
    body('address').isString(),
    body('phone').isMobilePhone(),
    body('email').isEmail(),


    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        db.organizer.create(req.body)
            .then((organizer) => res.json(organizer))
            .catch(err => res.status(500).json({
                success : false,
                messages: err.errors || "organiser not created, insufficient data."
            }));
    });


/**
 * Get the list of all organizers.
 */
router.get("/", (req, res) => {
    db.organizer.findAll()
        .then(organizers => res.json(organizers))
        .catch(err => res.status(500).json({
            messages: err.errors
        }));
});


/**
 * Find organizer by id.
 */
router.get("/:id", (req, res) => {
    db.organizer.findOne({
        include : [db.poll],
        where: {
            id: req.params.id
        }
    })
        .then(organizer => res.json(organizer))
        .catch(err => res.status(500).json({
            messages: err.errors
        }));
});


/**
 * Update any field of organizer.
 */
router.put("/:id", (req, res) => {
    db.organizer.update({ ...req.body }, {
        where: { id: req.params.id }
    })
        .then(() => res.json({
            message: "organizer updated successfully!",
        }))
        .catch(err => res.status(500).json({
            messages: err.errors
        }));
});


export default router;
