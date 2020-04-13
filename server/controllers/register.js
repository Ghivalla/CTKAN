const redisClient = require('./signin').redisClient;
const jwt = require('jsonwebtoken');

const signToken = (email) => {
    const jwtPaylod = { email };
    return jwt.sign(jwtPaylod, 'JWT_SECRET', {expiresIn: '2 days'});
}

const setToken = (key, value) => {
    return Promise.resolve(redisClient.set(key,value))
}

const handleRegister = (req, res, db, bcrypt, saltRounds) => {
    const { email, password } = req.body;
    if(!email, !password) {
       return res.status(400).json('unable to register')
    }
    const hash = bcrypt.hashSync(password,saltRounds);
    db.transaction(trx=>{
        trx.insert({
            hash: hash,
            email: email
        }).into('login').returning('email').then(loginEmail => {
            return trx('users').returning('*').insert({
                email : loginEmail[0],
                joined: new Date()
            }).then(user => {
                const {email, id, joined } = user[0];
                const token = signToken(email);
                setToken(token, id).then(()=>(res.json({ email, id, joined, token })))
            })
        }).then(trx.commit).catch(trx.rollback)
    })
    .catch((err) => {
        res.status(400).json('unable to register')
    })
};

module.exports = { handleRegister };
