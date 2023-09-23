const { Router } = require("express");
const { list, get, insert } = require("../../controllers");
const getCorrectData = require("../../middlewares/getCorrectData");

const router = Router();

router.get("/:model", getCorrectData, list);
router.get("/:model/:id", getCorrectData, get);
router.post("/:model", insert);

module.exports = router;
