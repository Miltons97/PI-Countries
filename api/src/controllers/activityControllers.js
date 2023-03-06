const { Country, Activity } = require("../db");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  idCountry
) => {
  const newAct = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  const findCountry = idCountry.map(async (idC) => {
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

// const modifyCountry = async ({ idActivity, idsCountries }) => {
//   const findActivity = await Activity.findByPk(idActivity);

//   if (!findActivity) throw new Error(`la actividad ${idActivity} no existe`);
//   await findActivity.addCountries(idsCountries);
//   return await findActivities();
// };

module.exports = { createActivity, findActivities };