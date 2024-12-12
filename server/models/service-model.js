const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  service: {
    type: String,
    require: true,
  },
  discription: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  provider: {
    type: String,
    require: true,
  },
});

const Service = new model("Service", serviceSchema);
module.exports = Service;
