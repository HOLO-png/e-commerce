const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected to MongoDB');
    },
);

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(morgan('common'));
app.use(cors({ origin: true, credentials: true }));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Backend server is running with Port ${PORT}`);
});
