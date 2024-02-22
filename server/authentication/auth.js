import jwt from "jsonwebtoken";

export const verifytokenStudent = (req, res, next) => {
    try {
        const authHeader = req.header('authorization');

        if (!authHeader) {
            return res.status(401).json({ message: "Not authorized" });
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Forbidden" });
            }

            // Extract the user's role from the token
            const { role } = user;

            // Check if the user has the required role to access the route
            if (role !== 'student') {
                return res.status(403).json({ message: "Forbidden" });
            }

            // Attach the user object to the request for further processing
            req.user = user;
            next();
        });
    } catch (err) {
        console.log({ message: err.message });
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export const verifytokenTeacher = (req, res, next) => {
    try {
        const authHeader = req.header('authorization');

        if (!authHeader) {
            return res.status(401).json({ message: "Not authorized" });
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Forbidden" });
            }

            // Extract the user's role from the token
            const { role } = user;

            // Check if the user has the required role to access the route
            if (role !== 'teacher') {
                return res.status(403).json({ message: "Forbidden" });
            }

            // Attach the user object to the request for further processing
            req.user = user;
            next();
        });
    } catch (err) {
        console.log({ message: err.message });
        return res.status(500).json({ message: "Internal Server Error" });
    }
}