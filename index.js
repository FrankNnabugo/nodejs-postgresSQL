const app = require("./app");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;




app.listen(process.env.PORT, (err)=>{
    console.log("server is listening for request on port", PORT);

    if(err){
        process.exit(1);
    }
});