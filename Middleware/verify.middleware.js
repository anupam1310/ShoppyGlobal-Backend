import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {

    const authHeader = req.headers['authorization'];
    const token = (authHeader.split(" ")[0] === "BEARER" && authHeader) && authHeader.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, "SecretKey", (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        console.log("token verified"+ ` User ID: ${user.id}`);
        next();
    });
}
