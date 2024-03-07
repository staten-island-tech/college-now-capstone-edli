const mongoose =  require("mongoose");
const slugify = require("slugify");

const shopSchema = new mongoose.Schema({
    name:{
        type: String,
        trim:true, 
        required: "Please enter a Kdrama name",
    },
    slug: String, 
    synopsis: {
        type: String,
        trim: true,
        required: "Please provide a synopsis",
    },
    tags: [String],
    genre: {
        type: Array,
        trim: true,
        required: "Please provide the genre",
    },
    releaseYear: String, 
    synopsis: {
        type: String,
        trim: true,
        required: "Please provide the show's release year",
    },
    cast: {
        type: Array,
        trim: true,
        required: "Please list the cast",
    },
    availability: {
        type: Array,
        trim: true,
        required: "Please provide where the show can be streamed",
    },
    rating: {
        type: Number,
        trim: true,
        required: "Please provide a rating out of 10",
    },


});

showSchema.pre('save', function (next) {
    if(!this.isModified("name")) {
        next();
        return;
    }
    this.slug=slugify(this.name);
    next();
});

module.exports = mongoose.model("Show", showSchema); 