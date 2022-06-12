import jwt from "jsonwebtoken";
const { sign, verify } = jwt

const key = "mysupersecretkey";

export const createToken = (user) => {
    const accessToken = sign({
        email: user.email,
        password: user.password
    }, key)

    return accessToken
}

export const verifyToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];

    if (!accessToken)
        return res.status(400).json({ error: "User not Authenticated!" });

    try {
        const validToken = verify(accessToken, key);
        if (validToken) {
            req.authenticated = true;
            return next();
        }
    } catch (err) {
        return res.status(400).json({ error: err });
    }
}