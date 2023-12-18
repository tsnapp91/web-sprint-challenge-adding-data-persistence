// build your `/api/tasks` router here// build your `/api/resources` router here
// build your `/api/projects` router here
const router = require("express").Router();
const Tasks = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const allTasks = await Tasks.getAllTasksWithProjects();
    res.status(200).json(allTasks);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
