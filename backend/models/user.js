const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'User can\'t be empty',
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength : [4,'Password must be atleast 4 character long']
    },
    type: {
        type: String,
        required: 'Type can\'t be empty',
    
    },
    saltSecret: String
});

userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});
userSchema.methods.verifyPassword = function(password)
{  return bcrypt.compareSync(password, this.password);

};
userSchema.methods.verifyType = function(type)
{  if(type==this.type)
     return true;
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id,type: this.type },
        process.env.JWT_SECRET,
        {  expiresIn: process.env.JWT_EXP

        });
}

mongoose.model('User', userSchema);