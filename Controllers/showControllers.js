const Show = require("../Models/shows");
const path = require("path");
const multer = require("multer");
const multerOptions = {
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "Uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
  fileFilter: function (req, file, next) {
    //can also set limit in multer
    const isPhoto = file.mimetype.startsWith("image/");
    if (isPhoto) {
      next(null, true); //callback function, first value is error, second value gets passed on if no error
    } else
      ({
        message: "That filetype is not allowed",
      }),
        false;
  },
};
exports.upload = multer(multerOptions).single("photo");
exports.homePage = (req, res) => {

    try {
      console.log(req.name); //we get req.name from the middleware but WE MUST call it in index
      res.json([show, req.name]); //if we want to send multiple "things" back to the user we need to use an array or object. Can't simply use , as that denotes status codes
    } catch (error) {
      console.log(error);
    }
  };

//shows
exports.createShow = async (req,res) => {
        try {
            const kdrama = new Show(req.body);
            // kdrama.photo = req.file.path;
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

  exports.getShows = async (req, res)=> {
    try {
        const shows = await Show.find();
        res.json(shows);
    } catch (error) {
        console.log(error);
    }
};

