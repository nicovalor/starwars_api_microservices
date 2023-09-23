const { Router } = require("express");
const { list, get, insert } = require("../../controllers");

const router = Router();

router.get("/:model", list);
router.get("/:model/:id", get);
router.post("/:model", insert);

module.exports = router;
