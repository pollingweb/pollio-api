import jwt from "jsonwebtoken";
import db from "../models/index.js";
const { sign, verify } = jwt;

const key = "mysupersecretkey";

export const createToken = (user) => {
    const accessToken = sign({
        email: user.email,
        password: user.password
    }, key)

    return accessToken
}

export const verifyTokenVoter = (req, res, next) => {
    const accessToken = req.cookies["access-token"];

    if (!accessToken)
        return res.status(400).json({
            verified: false,
            error: "User not Authenticated!"
        });

    const voter = verify(accessToken, key);

    db.voter.findOne({
        where: {
            email: voter.email
        }
    }).then(dbVoter => {

        if (dbVoter !== null && (voter.password === dbVoter.password)) {
            next();
        } else {
            return res.status(400).json({
                verified: false,
                message: "Not a valid voter"
            })
        }
    })

}

export const verifyTokenOrganiser = (req, res, next) => {
    const accessToken = req.cookies["access-token"];

    if (!accessToken)
        return res.status(400).json({
            verified: false,
            error: "User not Authenticated!"
        });

    const organizer = verify(accessToken, key);

    db.organizer.findOne({
        where: {
            email: organizer.email
        }
    }).then(dbOrg => {

        if (dbOrg !== null && (organizer.password === dbOrg.password)) {
            next();
        } else {
            return res.status(400).json({
                verified: false,
                message: "Not a valid organiser."
            })
        }
    })

}