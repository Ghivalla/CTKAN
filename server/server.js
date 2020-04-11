require('dotenv').config();
const express = require("express");
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const morgan = require('morgan');

const saltRounds = 10;

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        user: process.env.DB_USER,
	password: process.env.DB_PW,
        database: process.env.DB_NAME
    }
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/profile/:id', (req,res) => { profile.handleProfileGet(req, res, db) });
app.post('/signin', (req,res) => { signin.handleSignin(req, res, db, bcrypt) });
app.post('/register', (req,res) => { register.handleRegister(req, res, db, bcrypt, saltRounds) });

app.listen(3001, ()=>{
    console.log('running at port: 3001');
});

