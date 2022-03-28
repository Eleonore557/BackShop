const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    let token = req.headers['authorization'];
    if (!token) {
        return res.send(403).send({
            auth: false,
            token: null,
            message:"Missing token"
        })
    }
    jwt.verify(token, process.env.JWT_SECRET,
        function (error, jwtdecoded) {
            if (error) {
                return res.status(401).send({
                    auth: false,
                    token: null,
                    message:"not authorized"
                })
            }
            req.user = jwtdecoded;
            next();
        }
    )
}

module.exports= verifyToken;