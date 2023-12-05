require("dotenv").config();
const express = require('express');
const cors = require('cors');
var app = express();

//Betölti a CORS támogatást 
app.use(cors({origin: '*'}));

//lehetővé teszi a POST kérések elküldött adatainak (body) elérését
app.use(express.json());
app.use(require("../router/router"));
app.use('/api',require("../user/router"));
app.use('/api',require("../login/router"));




module.exports = app