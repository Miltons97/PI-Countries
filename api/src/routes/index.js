
const { Router } = require('express');
const countriesRouter = require ("./country.js")
const activitiesRouter = require ("./activity.js")


const router = Router();

router.use("/countries", countriesRouter)
router.use("/activities", activitiesRouter)


module.exports = router;