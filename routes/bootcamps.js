const express = require('express');
const router = express.Router();
const { deleteBootcamp, postBootcamp, getBootcamp, getBootcamps, updateBootcamp } = require("../controllers/bootcamps")



router.route("/")
    .get(getBootcamps)
    .post(postBootcamp)

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .get(deleteBootcamp)




module.exports = router;