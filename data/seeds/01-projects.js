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

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  // await knex("steps").insert(steps);
  // await knex("step_ingredients").insert(step_ingredients);
};
