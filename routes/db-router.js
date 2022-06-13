import db from "../models/index.js";
import { Router } from "express";

const router = new Router();

router.post("/drop", (req, res) => {
    db.sequelize.drop().then(() => {
        return res.json({
            success: true,
            message: "All tables are droped"
        })
    }).catch(err => {
        return res.status(500).json({
            success: false,
            message: err
        })
    })
})

router.post("/sync", (req, res) => {
    db.sequelize.sync({ alter: true }).then(() => {
        return res.json({
            success: true,
            message: "All tables are altered"
        })
    }).catch(err => {
        return res.status(500).json({
            success: false,
            message: err
        })
    })
})

export default router;