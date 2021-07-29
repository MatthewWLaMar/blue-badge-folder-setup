let express = require("express");
let app = express();

app.use("/test", function(req, res){

    let response = {message: "this is a test"};

    res.json(response);
})

app.listen(3000, function(){
    console.log("app is listening on port 4000");
});

