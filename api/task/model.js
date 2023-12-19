// build your `Task` model here
const db = require("../../data/dbConfig");

async function getAllTasksWithProjects() {
  return db("tasks as t")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    )
    .join("projects as p", "t.project_id", "p.project_id");
}

async function addTask(task) {
  const [taskId] = await db("tasks").insert(task);
  return getTaskById(taskId);
}

async function getTaskById(taskId) {
  return db("tasks").where({ task_id: taskId }).first();
}

async function doesProjectExist(projectId) {
  const result = await db("projects").where({ project_id: projectId }).first();
  return !!result;
}

module.exports = {
  getAllTasksWithProjects,
  addTask,
  doesProjectExist,
};
