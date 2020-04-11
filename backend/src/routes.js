const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileCOntroller = require("./controllers/ProfileCOntroller");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sesions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileCOntroller.index);

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
