const express = require("express");
const cors = require("cors");
const path = require("path");
const { log } = require("node:console");
const app = express();
// const picture1 = require("../Backend/public/images/egg.png");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "/public/images")));

console.log(path.join(__dirname));

app.get("/", (req, res) => {
  const foodData = [
    {
      title: "Boilded Egg",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      ItemPicture: "/images/egg.png",
      type: "breakfast",
    },
    {
      title: "RAMEN",
      price: 25,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      ItemPicture: "/images/ramen.png",
      type: "lunch",
    },
    {
      title: "GRILLED CHICKEN",
      price: 45,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      ItemPicture: "/images/chicken.png",
      type: "dinner",
    },
    {
      title: "CAKE",
      price: 18,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      ItemPicture: "/images/cake.png",
      type: "breakfast",
    },
    {
      title: "BURGER",
      price: 23,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      ItemPicture: "/images/burger.png",
      type: "lunch",
    },
    {
      title: "PANCAKE",
      price: 25,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      ItemPicture: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

app.listen(3000, () => {
  console.log("server running port 3000");
});
