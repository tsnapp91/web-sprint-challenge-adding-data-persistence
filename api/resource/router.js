// build your `/api/resources` router here
// build your `/api/projects` router here
const router = require("express").Router();
const Resources = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resources.getAllResources();

    if (resources) {
      res.status(200).json(resources);
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newResource = req.body;
    const addedResource = await Resources.addResource(newResource);
    res.status(201).json(addedResource);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
