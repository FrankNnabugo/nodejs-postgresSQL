const express = require ("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const compression = require("compression");
const morgan = require("morgan");
const userRouter = require("./routes/UserRoute");

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan());
app.use(compression());
app.use((req, res, next)=>{
    console.log(req.method, req.path);
    next();
});


app.use("/api/user", userRouter)


module.exports = app;