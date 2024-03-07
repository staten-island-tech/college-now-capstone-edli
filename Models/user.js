const mongoose =  require("mongoose");
const slugify = require("slugify");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        trim:true, 
        required: "Please provide a username",
        unique: true
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
    tokens: [
        {
          token: {
            type: String,
            required: true,
          },
        },
      ],
    

});

// userSchema.pre('save', function (next) {
//     if(!this.isModified("name")) {
//         next();
//         return;
//     }
//     this.slug=slugify(this.name);
//     next();
// });

// module.exports = mongoose.model("User", userSchema); 

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
  
    next();
  });
  userSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };
  
  module.exports = mongoose.model("User", userSchema);