const Show = require("../Models/shows");
const User = require("../Models/user");

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
        await shop.save();
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

//users
exports.createUser = async (req,res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateUser = async (req, res)=> {
    try {
        const user = await User.findById(req.params.id);
        const updates = Object.keys(req.body);
        updates.forEach((update) => (user[update] = req.body[update])); 
        await shop.save();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteShow = async (req, res) => {
    try {
      const user = await Show.findByIdAndDelete(req.params.id);
      if (!user) {
        res.status(404).send();
      }
      res.send(`${user} was deleted from the DB`);
    } catch (error) {
      console.log(error);
    }
  };

exports.getUser = async (req, res)=> {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
};
