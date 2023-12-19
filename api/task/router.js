// build your `/api/tasks` router here// build your `/api/resources` router here
// build your `/api/projects` router here
const router = require("express").Router();
const Tasks = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const allTasks = await Tasks.getAllTasksWithProjects();
    const tasksWithBoolean = allTasks.map((task) => ({
      ...task,
      task_completed: Boolean(task.task_completed),
    }));
    res.status(200).json(tasksWithBoolean);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newTask = req.body;

    if (!newTask.task_description) {
      return res.status(400).json({ message: "Task_description is required." });
    }

    if (!newTask.project_id) {
      return res.status(400).json({ message: "Project_id is required." });
    }

    const projectExists = await Tasks.doesProjectExist(newTask.project_id);
    if (!projectExists) {
      return res.status(400).json({ message: "Invalid project_id." });
    }

    // if (newTask.task_completed === 0) {
    //   newTask.task_completed = false;
    // } else if (newTask.task_completed === 1) {
    //   newTask.task_completed = true;
    // }

    const addedTask = await Tasks.addTask(newTask);

    const addedTaskWithBoolean = {
      ...addedTask,
      task_completed: Boolean(addedTask.task_completed),
    };

    res.status(201).json(addedTaskWithBoolean);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
