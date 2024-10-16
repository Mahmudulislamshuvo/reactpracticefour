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
});
