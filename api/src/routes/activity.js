
// module.exports = newActivities;
const { Router } = require('express');
const server = require('../app');
const { postActivities, getActivities} = require('../handelrs/activityHandlers')


const activitiesRouter = Router();

activitiesRouter.post("/", postActivities)
activitiesRouter.get("/", getActivities)
// activitiesRouter.put("/",CountryForActivity)

module.exports = activitiesRouter



