// build your `/api/projects` router here
const router = require("express").Router();
const Projects = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Projects.getAllProjects();

    if (projects) {
      res.status(200).json(projects);
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;
