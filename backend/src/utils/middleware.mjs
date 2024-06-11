import jwt from "jsonwebtoken";
import settings from "../config/settings.mjs";


export const corseMiddleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
}

export const checkAuth = (req, res, next) => {
    console.log(req.headers);
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json({ message: "Пользователь не авторизован" })
        }
        const payload = jwt.verify(token, settings.SECRET_KEY)
        req.user = payload
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({ message: "Пользователь не авторизован" })
    }
}

