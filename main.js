const express = require("express");
const apis = require("./api");
const cors = require("cors");

let app = express();
app.use(cors());
app.use(express.json());
app.use(apis.router);



app.listen(3000, (errors) => {
    if (errors) {
        console.log(errors);
    } else {
        console.log("Server is running on port 3000!");
    }
})
