import { Router } from "express";
import Voter from "../models/voter.js";
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

    Voter.create(req.body)
      .then((voter) => res.json(voter))
      .catch(err => res.status(500).json({
        messages: err.errors
      }));
  });


/**
 * Get the list of all voters.
 */
router.get("/",
  (req, res) => {
    Voter.findAll()
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
    Voter.findOne(
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
    Voter.update({ ...req.body }, {
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
