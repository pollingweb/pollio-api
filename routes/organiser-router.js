import { Router } from "express";
import Organizer from "../models/organizer.js";
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

        Organizer.create(req.body)
            .then((organizer) => res.json(organizer))
            .catch(err => res.status(500).json({
                messages: err.errors
            }));
    });


/**
 * Get the list of all organizers.
 */
router.get("/", (req, res) => {
    Organizer.findAll()
        .then(organizers => res.json(organizers))
        .catch(err => res.status(500).json({
            messages: err.errors
        }));
});


/**
 * Find organizer by id.
 */
router.get("/:id", (req, res) => {
    Organizer.findOne({
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
    Organizer.update({ ...req.body }, {
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
