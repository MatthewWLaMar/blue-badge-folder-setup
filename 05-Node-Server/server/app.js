let express = require("express");
const app = express();
const sequelize = require("./db");
let journal = require("./controllers/journalController")


sequelize.sync();
// sequelize.sync({force: true})

app.use("/journal", journal)
app.listen(3000, function(){
    console.log("app is running on port 3000");
});