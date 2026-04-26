const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth.routes')
const interviewRouter = require('./routes/interview.routes')

const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}));

app.use("/api/auth", authRouter);

app.use("/api/interview", interviewRouter);


module.exports = app;