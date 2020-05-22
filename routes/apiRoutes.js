const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const db = require("../models");

router.post("/saveBook", function(req, res){
    let book = req.body;
    db.Book.create(book)
    .then(results=>{
        res.json(results);
    })
    .catch(err=>{
        throw err;
    })
});

// router.route("/saveBook")
// .post(controller.savebook)
// .get(controller.getbook)
  
module.exports = router;