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

module.exports = {
  getAllTasksWithProjects,
};
