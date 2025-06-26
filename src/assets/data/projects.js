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
    name: "Solapur Police Transfer System",
    desc: "Enterprise-grade web application streamlining police staff transfers across Solapur district. Reduced manual processing time by 80% while managing 400-500+ personnel records with real-time data synchronization and role-based access control.",
    img: Police,
    tech: ["React.js", "Node.js", "Express.js", "Firebase", "Real-time DB"],
    url: "https://spstaffdata1.web.app",
    featured: true,
    status: "Live",
    category: "Full Stack",
    year: "2021",
    highlights: [
      "80% reduction in processing time",
      "400+ staff records managed",
      "Real-time data synchronization",
      "Role-based authentication"
    ]
  },
  {
    id: uuidv4(),
    name: "StartStock - Virtual Trading Platform",
    desc: "Comprehensive fintech platform for virtual stock market learning. Features interactive quizzes, real-time market data, educational articles, and community Q&A system for aspiring traders and investors.",
    img: Startstock,
    tech: ["React.js", "Node.js", "MongoDB", "Bootstrap", "Chart.js", "RESTful APIs"],
    url: "https://startstock.netlify.app",
    featured: false,
    status: "Live",
    category: "FinTech",
    year: "2021",
    highlights: [
      "Virtual trading simulation",
      "Real-time market data integration",
      "Interactive learning modules",
      "Community-driven Q&A system"
    ]
  },
  { 
    id: uuidv4(),
    name: "Virtual Farmers Market",
    desc: "B2B marketplace connecting farmers directly with retailers, eliminating middlemen and ensuring fair pricing. Built with modern React architecture and real-time messaging for seamless farmer-retailer communication.",
    img: Vfm,
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Express.js"],
    url: "https://krishimitra.netlify.app",
    featured: true,
    status: "Live",
    category: "E-commerce",
    year: "2021",
    highlights: [
      "Direct farmer-retailer connection",
      "Real-time messaging system",
      "Inventory management",
      "Price comparison tools"
    ]
  },
  {
    id: uuidv4(),
    name: "Flipkart Clone 2.0 with Voice AI",
    desc: "Advanced e-commerce platform featuring voice-controlled navigation and product filtering. Implemented voice recognition APIs and modern UI/UX patterns for hands-free shopping experience.",
    img: flipkart,
    tech: ["React.js", "Material-UI", "Web Speech API", "Voice Recognition"],
    url: "https://flipkart-clone-20.web.app/",
    featured: false,
    status: "Live",
    category: "E-commerce",
    year: "2020",
    highlights: [
      "Voice-controlled navigation",
      "AI-powered product filtering",
      "Modern Material Design",
      "Responsive user interface"
    ]
  },
  {
    id: uuidv4(),
    name: "Smart Movie Discovery Engine",
    desc: "Intelligent movie search and recommendation system powered by OMDB API. Features advanced filtering, personalized recommendations, and detailed movie analytics with responsive design.",
    img: Movie,
    tech: ["React.js", "OMDB API", "Context API", "Local Storage"],
    url: "https://movie-search-app-by-omg.web.app/",
    featured: false,
    status: "Live",
    category: "Entertainment",
    year: "2020",
    highlights: [
      "Advanced search algorithms",
      "Personalized recommendations",
      "Detailed movie analytics",
      "Offline favorites storage"
    ]
  },
  {
    id: uuidv4(),
    name: "Iron Man Helmet Designer",
    desc: "Interactive Python GUI application for creating custom Iron Man helmet designs. Demonstrates advanced graphics programming with Tkinter and geometric calculations for precise design rendering.",
    img: IronMan,
    tech: ["Python", "Tkinter", "Graphics Programming", "Mathematical Modeling"],
    url: "https://github.com/omkargaikwad23/Iron-Man-Helmet-Design-Tkinter",
    featured: false,
    status: "Open Source",
    category: "Graphics",
    year: "2020",
    highlights: [
      "Custom design algorithms",
      "Interactive GUI interface",
      "Mathematical precision",
      "Graphics programming showcase"
    ]
  }
];

// Helper functions for filtering and sorting
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByTech = (technology) => {
  return projects.filter(project => 
    project.tech.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getProjectStats = () => {
  const totalProjects = projects.length;
  const featuredProjects = getFeaturedProjects().length;
  const categories = [...new Set(projects.map(p => p.category))];
  const technologies = [...new Set(projects.flatMap(p => p.tech))];
  
  return {
    total: totalProjects,
    featured: featuredProjects,
    categories: categories.length,
    technologies: technologies.length,
    byCategory: categories.reduce((acc, cat) => {
      acc[cat] = getProjectsByCategory(cat).length;
      return acc;
    }, {})
  };
};

export default projects;
