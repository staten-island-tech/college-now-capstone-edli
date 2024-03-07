const Show = require("../Models/shows");


//shows
exports.createShow = async (req,res) => {
        try {
            const kdrama = new Show(req.body);
            await kdrama.save();
            res.json(kdrama);
        } catch (error) {
            res.status(500).json(error);
        }
    };

exports.updateShow = async (req, res)=> {
    try {
        const kdrama = await Show.findById(req.params.id);
        const updates = Object.keys(req.body);
        updates.forEach((update) => (kdrama[update] = req.body[update])); 
        await kdrama.save();
        res.json(kdrama);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteShow = async (req, res) => {
    try {
      const kdrama = await Show.findByIdAndDelete(req.params.id);
      if (!kdrama) {
        res.status(404).send();
      }
      res.send(`${kdrama} was deleted from the DB`);
    } catch (error) {
      console.log(error);
    }
  };

  exports.getShow = async (req, res)=> {
    try {
        const shows = await Show.find();
        res.json(shows);
    } catch (error) {
        console.log(error);
    }
};

