const projects = [
  {
    project_name: "Sample Project ",
    project_description: "Description for Sample Project 1",
    project_completed: false,
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  // await knex("ingredients").insert(ingredients);
  // await knex("steps").insert(steps);
  // await knex("step_ingredients").insert(step_ingredients);
};
