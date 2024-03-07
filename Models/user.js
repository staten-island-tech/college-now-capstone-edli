const mongoose =  require("mongoose");
const slugify = require("slugify");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        trim:true, 
        required: "Please provide a username",
    },
    password: {
        type: String,
        trim: true,
        required: "Please provide a password",
    },
    favorites: {
        type: Array,
        trim:true,
    },

});

userSchema.pre('save', function (next) {
    if(!this.isModified("name")) {
        next();
        return;
    }
    this.slug=slugify(this.name);
    next();
});

module.exports = mongoose.model("User", userSchema); 