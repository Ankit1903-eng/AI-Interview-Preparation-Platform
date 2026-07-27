const dns = require("dns");
require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

dns.setServers(["8.8.8.8", "8.8.4.4"]);
connectToDB()

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})