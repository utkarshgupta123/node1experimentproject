const express = require('express'); // we are importing a express module
const app = express();// we are storing in a variable
const data = require("../Controllers/bollywood"); //we are importing a backing logic whatever we have created



const dataRouter = express.Router()
dataRouter.route('/bollywood')
.get(data.bollywoodData)

module.exports = dataRouter;