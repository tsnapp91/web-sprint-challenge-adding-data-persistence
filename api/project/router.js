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

router.post("/", async (req, res, next) => {
  try {
    const { project_name } = req.body;
    if (!project_name) {
      return res.status(400).json({ message: "Project_name is required." });
    }
    const newProject = await Projects.createProject(req.body);
    const addedProjectWithBoolean = {
      ...newProject,
      project_completed: Boolean(newProject.project_completed),
    };
    res.status(201).json(addedProjectWithBoolean);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
