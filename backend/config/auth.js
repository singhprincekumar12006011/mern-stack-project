import jwt from "jsonwebtoken";


export const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) {
            return res.status(401).json({
                success : false,
                message : "Unauthorized"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : error.message
        })
    }
}