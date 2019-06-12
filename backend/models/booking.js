const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    payment: {
        type: String,
        required: 'FirstName can\'t be empty',
    },
    reserveddate: {
        type: Date,
        default: Date.now
    },
    bookingdate: {
        type: Date,
        default: Date.now
    },
    closedate: {
        type: Date,
        default: Date.now
    },
    contact: String,
        guidename: {
        type: String,
        default: "Not Assigned"
    },
    guestcount: Number,
        duration: Number,
        status: {
        type: String,
        default: "active"
    },
    lastname: {
        type: String,
        required: 'LastName can\'t be empty',
    },
    address: {
        type: String,
        required: 'address can\'t be empty',
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

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET,
        {  expiresIn: process.env.JWT_EXP

        });
}

mongoose.model('Cashier', userSchema);



var reservationSchema = new mongoose.Schema({
    clientid: String,
    clientname: String,
    packageid: String,
    price: Number,
    packagename: String,
    payment: {
      type: Boolean,
      default: true
    },
    reserveddate: {
      type: Date,
      default: Date.now
    },
    tourdate: {
      type: Date,
      default: Date.now
    },
    contact: String,
    guidename: {
      type: String,
      default: "Not Assigned"
    },
    guestcount: Number,
    duration: Number,
    status: {
      type: String,
      default: "active"
    },
    imgurl: String,
    email: String
  });