// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAllProjects() {
  const projects = await db("projects").select(
    "project_id",
    "project_name",
    "project_description",
    db.raw("(project_completed = 1) AS project_completed")
  );

  return projects.map((project) => ({
    ...project,
    project_completed: Boolean(project.project_completed),
  }));
}

async function createProject(project) {
  const [newProjectId] = await db("projects").insert(project);
  const newProject = await db("projects")
    .where({ project_id: newProjectId })
    .select(
      "project_id",
      "project_name",
      "project_description",
      "project_completed"
    );

  return newProject;
}

module.exports = {
  getAllProjects,
  createProject,
};
