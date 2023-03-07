const { Country, Activity } = require("../db");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countryId
) => {
  const newAct = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  const findCountry = countryId.map(async (idC) => {
    const country = await Country.findByPk(idC);
    country.addActivity(newAct);
  });

  return newAct;
};

const findActivities = async () => {
  return await Activity.findAll({
    include: [
      {
        model: Country,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    ],
  });
};


module.exports = { createActivity, findActivities };
// const modifyCountry = async ({ idActivity, idsCountries }) => {
//   const findActivity = await Activity.findByPk(idActivity);

//   if (!findActivity) throw new Error(`la actividad ${idActivity} no existe`);
//   await findActivity.addCountries(idsCountries);
//   return await findActivities();
// };