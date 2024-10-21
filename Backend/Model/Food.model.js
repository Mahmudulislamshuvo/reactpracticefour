const mongoose = require("mongoose");
const { Schema } = mongoose;

const FoodItemSchema = new Schema({
  ItemPicture: {
    type: File,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Model = mongoose.model(`Model`, FoodItemSchema);

module.exports = Model;
