const {createActivity, findActivities} =require ("../controllers/activityControllers")

const postActivities = async (req, res) => {
  const { name, difficulty, duration, season, idCountry } = req.body;

  try {
    if (!req.body) throw new Error("diligenciar los datos");

    if (!name) throw new Error("Nombre de la Actividad es un dato obligatorio");
    if (!difficulty)
      throw new Error("Dificultad de la Actividad es un dato obligatorio");
    if (!duration)
      throw new Error("Duración de la Actividad es un dato obligatorio");
    if (!season) throw new Error("Temporada es un dato obligatorio");
    if (!idCountry) throw new Error("Id del País es un dato obligatorio");

    const newActivTour = await createActivity(
      name,
      difficulty,
      duration,
      season,
      idCountry
    );
    res.send("Actividad creada exitosamente");
  } catch (error) {
    res.status(404).send(error.message);
  }
};

  
  
  const getActivities = async (req, res) => {
    try {
      const dbActivities = await findActivities();
      res.send(dbActivities);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  
  
  
  
  
  
  module.exports = {
    postActivities,
    getActivities,
    
  }
