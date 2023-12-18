const projects = [
  {
    project_name: "Sample Project ",
    project_description: "Description for Sample Project ",
    project_completed: false,
  },
  {
    project_name: "Sample Project 2 ",
    project_description: "Description for Sample Project 2 ",
    project_completed: true,
  },
];

const resources = [
  { resource_name: "Internet", resource_description: " World Wide Web" },
];

const tasks = [
  {
    task_notes: "sample task",
    task_description: "sample description",
    task_completed: false,
    project_id: 1,
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
  // await knex("step_ingredients").insert(step_ingredients);
};
