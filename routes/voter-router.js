import db from "../models/index.js";
import { Router } from "express";
import { body, validationResult } from 'express-validator';

const router = new Router();

/**
 * Create a new voter.
 */
router.post("/",
  body('id').isString(),
  body('name').isString(),
  body('photoUrl').isString().isURL(),
  body('email').isEmail(),
  (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    db.voter.create(req.body)
      .then((voter) => res.json(voter))
      .catch(err => res.status(500).json({
        success : false,
        messages: err.errors || "voter not created, insufficient data."
      }));
  });


/**
 * Get the list of all voters.
 */
router.get("/",
  (req, res) => {
    db.voter.findAll()
      .then(voters => res.json(voters))
      .catch(err => res.status(500).json({
        messages: err.errors
      }));
  });


/**
 * Find voter by id.
 */
router.get("/:id",
  (req, res) => {
    db.voter.findOne(
      {
        where: {
          id: req.params.id
        }
      })
      .then(voter => res.json(voter))
      .catch(err => res.status(500).json({
        messages: err.errors
      }));
  });


/**
 * Update any field of voter.
 */
router.put("/:id",
  (req, res) => {
    db.voter.update({ ...req.body }, {
      where: { id: req.params.id }
    })
      .then(() => res.json({
        message: "voter updated successfully!",
      }))
      .catch(err => res.status(500).json({
        messages: err.errors
      }));
  });


export default router;
