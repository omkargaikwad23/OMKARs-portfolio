import { v4 as uuidv4 } from "uuid";
import Police from "../images/projects/police.png";
import flipkart from "../images/projects/flipkart.png";
import Movie from "../images/projects/movie.png";
import Startstock from "../images/projects/startstock.png";
import IronMan from "../images/projects/ironman.jpg";
import Vfm from "../images/projects/vfm.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "Solapur Police Transfer Website",
    desc: "A full stack Web application for general transfer of Solapur Police Staff. This website helps to transfer records of 400-500 policemen, completing the process 80% faster than manual human effort.",
    img: Police,
    tech: ["ReactJS", "Node.js", "Express.js", "Firebase"],
    url: "https://spstaffdata1.web.app",
  },
  {
    id: uuidv4(),
    name: "StartStock",
    desc: "A website which helps to learn the stock market virtually by reading articles, different case studies, playing quizzes, etc. User can read FAQs orregisterto ask their doubts.",
    img: Startstock,
    tech: ["HTML", "CSS", "ReactJS", "Bootstrap", "MongoDB"],
    url: "https://startstock.netlify.app"
  },
  { 
    id: uuidv4(),
    name: "Virtual Farmers Market",
    desc: "Created a website that connects farmers to sell theirfruits and vegetables, to the retailers. It helps both the interested parties to make a deal and directly communicate with each other.",
    img: Vfm,
    tech: ["ReactJS", "Node.js", "MongoDB"],
    url: "https://krishimitra.netlify.app"
  },
  {
    id: uuidv4(),
    name: "Flipkart-clone 2.0",
    desc: "Developed a website Flipkart-clone using React library. It has a voice assistant feature to navigate and filter the products by voice commands.",
    img: flipkart,
    tech: ["ReactJS", "Material UI"],
    url: "https://flipkart-clone-20.web.app/",
  },
  {
    id: uuidv4(),
    name: "Movie Search App",
    desc: "This is a movie search app build using OMDB API.",
    img: Movie,
    tech: ["ReactJS", "OMDB api"],
    url: "https://movie-search-app-by-omg.web.app/",
  },
  {
    id: uuidv4(),
    name: "Iron Man Mask",
    desc: "Created helmet design using Python GUI - tkinter package.",
    img: IronMan,
    tech: ["Python GUI - Tkinter"],
    url: "https://github.com/omkargaikwad23/Iron-Man-Helmet-Design-Tkinter"
  }
];

export default projects;
