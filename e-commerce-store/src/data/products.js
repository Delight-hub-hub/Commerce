// src/data/products.js
import Laptop from "../assets/Laptop.png";
import Iphone14 from "../assets/Iphone14mini.png";
import Iphone11 from "../assets/Iphone11mini.png";
import Iphone11mini from "../assets/Iphone11mini-black.png";

const products = [
  {
    id: "1",
    image: Laptop,
    title: "Dell XPS 13",
    name: "Laptop",
    color: "White",
    price: 1799.99,
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    id: "2",
    image: Iphone14,
    title: "Iphone 11",
    name: "Iphone 14",
    color: "Navy Blue",
    price: 729.99,
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    id: "3",
    image: Iphone11,
    title: "Iphone 11",
    name: "Iphone 11",
    color: "Milky White",
    price: 619.99,
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    id: "4",
    image: Iphone11mini,
    title: "Iphone 11 Mini",
    name: "Iphone 11",
    color: "Black",
    price: 549.99,
    rating: 4.5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
];


export default products;
