// build your `Resource` model here
const db = require("../../data/dbConfig");

async function getAllResources() {
  return db("resources");
}

async function addResource(resource) {
  const [resourceId] = await db("resources").insert(resource);
  return getResourceById(resourceId);
}

async function getResourceById(resourceId) {
  return db("resources").where({ resource_id: resourceId }).first();
}
module.exports = {
  getAllResources,
  addResource,
};
