import db from "../models/index.js";
import { Router } from "express";
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import { createToken } from "../auth/jwt.js";

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

        const organizer = req.body;

        bcrypt.hash(organizer.password, 10, (err, hash) => {

            if (err) {
                res.status(500).json({
                    success: false,
                    messages: err
                })
            }

            db.organizer.create({
                ...organizer,
                password: hash
            })
                .then((organizer) => res.json(organizer))
                .catch(err => res.status(500).json({
                    success: false,
                    messages: err.errors || "organiser not created, insufficient data."
                }));
        })

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
router.get("/:id",  (req, res) => {

    db.organizer.findOne({
        include: [db.poll],
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


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const organiser = await db.organizer.findOne({ where: { email: email } });

    if (!organiser) res.status(400).json({ error: "Organiser Doesn't Exist" });

    const dbPassword = organiser.password;
    bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
            res
                .status(400)
                .json({ error: "Wrong Username and Password Combination!" });
        } else {
            const accessToken = createToken(organiser);

            // cookie will expire in a month.
            res.cookie("access-token", accessToken, {
                maxAge: 60 * 60 * 24 * 30 * 1000,
                httpOnly: true,
            });

            res.json("LOGGED IN");
        }
    });
});


export default router;
