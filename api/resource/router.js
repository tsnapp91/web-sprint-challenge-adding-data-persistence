// build your `/api/resources` router here
// build your `/api/projects` router here
const router = require("express").Router();

router.get("/", (req, res, next) => {
  return res.status(200).send("got it resources connected");
});

module.exports = router;
