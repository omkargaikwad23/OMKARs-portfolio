import { v4 as uuidv4 } from "uuid";
import Police from "../images/projects/police.png";
import Tasker from "../images/projects/tasker.jpg";
import flipkart from "../images/projects/flipkart.png";
import Mybrary from "../images/projects/mybrary.png";
import Movie from "../images/projects/movie.png";

const projects = [
  {
    id: uuidv4(),
    name: "Mybrary",
    desc: "An ultimate library management system where users can add, update, delete the authors and their book details, cover image, etc.",
    img: Mybrary,
    tech: ["JSX", "Node.js", "Express.js", "MongoDB"],
    url: "https://github.com/omkargaikwad23/Mybrary",
  },
  {
    id: uuidv4(),
    name: "Solapur Police Transfer Website",
    desc: "Developed a Full Stack Web Application for the real-time problem for general transfer of Solapur Police Staff.",
    img: Police,
    tech: ["React JS", "Node.js", "Express.js", "Firebase"],
    url: "https://spstaffdata1.web.app",
  },
  {
    id: uuidv4(),
    name: "Flipkart-clone 2.0",
    desc: "Developed a website Flipkart-clone using React library. It has a voice assistant feature to navigate and filter the products by voice commands",
    img: flipkart,
    tech: ["React JS", "Material UI"],
    url: "https://flipkart-clone-20.web.app/",
  },
  {
    id: uuidv4(),
    name: "Movie Search App",
    desc: "This is a movie search app build using OMDB API",
    img: Movie,
    tech: ["React JS", "OMDB api"],
    url: "https://movie-search-app-by-omg.web.app/",
  },
  {
    id: uuidv4(),
    name: "Task Tracker",
    desc: "A simple react application to track your all tasks with reminder functionality",
    img: Tasker,
    tech: ["React JS", "Bootstrap"],
    url: "https://github.com/omkargaikwad23/task-tracker",
  },
];

export default projects;
