import { v4 as uuidv4 } from "uuid";
import Police from "../images/projects/police.png";

const projects = [
  // ===== PROFESSIONAL PROJECTS =====
  {
    id: uuidv4(),
    name: "AI-Powered AdTech Deal Debugger",
    desc: "Production-grade GenAI system that automates root-cause analysis for ad delivery failures. Uses LangGraph state machines to model troubleshooting as deterministic states and transitions, with intent classification and diagnostic routing layers.",
    img: null, // Internal project - no public image
    tech: ["LangGraph", "FastAPI", "LLMs", "Python", "LangFuse", "ELK Stack"],
    url: null, // Internal PubMatic project
    featured: true,
    status: "Production",
    category: "GenAI",
    year: "2024-2025",
    highlights: [
      "50% reduction in customer support tickets",
      "Multi-step LLM workflow architecture",
      "1st Place - PubMatic Hackathon 2025",
      "Production-grade error handling & retries"
    ],
    isInternal: true
  },
  {
    id: uuidv4(),
    name: "High-Performance Spark Data Pipelines",
    desc: "Scalable Spark pipelines processing ~12 TB/day of Parquet data across 5 clusters. Implemented selective column reads and curated dataset generation from HDFS to S3, enabling data-driven ad optimizations.",
    img: null, // Internal project
    tech: ["Apache Spark", "Scala", "HDFS", "S3", "Parquet", "Oozie"],
    url: null, // Internal PubMatic project
    featured: true,
    status: "Production",
    category: "Data Engineering",
    year: "2023-2024",
    highlights: [
      "12 TB/day data processing",
      "$20K/day DSP spend increase",
      "50% faster deployments via modular architecture",
      "Multi-cluster data extraction"
    ],
    isInternal: true
  },
  {
    id: uuidv4(),
    name: "Redis Caching Layer for Production APIs",
    desc: "Designed and implemented intelligent caching layer after analyzing query access patterns. Significantly improved API performance and reduced database load for high-traffic production systems.",
    img: null, // Internal project
    tech: ["Redis", "Java", "Python", "REST APIs", "Performance Optimization"],
    url: null, // Internal PubMatic project
    featured: false,
    status: "Production",
    category: "Backend",
    year: "2024",
    highlights: [
      "90% reduction in database load",
      "Improved p99 latency",
      "Query pattern analysis",
      "Cache invalidation strategies"
    ],
    isInternal: true
  },
  
  // ===== OPEN SOURCE / PERSONAL PROJECTS =====
  {
    id: uuidv4(),
    name: "Police Staff Transfer Management System",
    desc: "Enterprise-grade web application built for Solapur Rural Police to streamline staff transfers across the district. Features real-time data synchronization, role-based access control, and automated workflow management.",
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
      "MoU formalized with Solapur Police",
      "Role-based authentication"
    ],
    isInternal: false
  }
];

// Helper functions for filtering and sorting
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProfessionalProjects = () => {
  return projects.filter(project => project.isInternal);
};

export const getPersonalProjects = () => {
  return projects.filter(project => !project.isInternal);
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
  const professionalProjects = getProfessionalProjects().length;
  const categories = [...new Set(projects.map(p => p.category))];
  const technologies = [...new Set(projects.flatMap(p => p.tech))];
  
  return {
    total: totalProjects,
    featured: featuredProjects,
    professional: professionalProjects,
    categories: categories.length,
    technologies: technologies.length,
    byCategory: categories.reduce((acc, cat) => {
      acc[cat] = getProjectsByCategory(cat).length;
      return acc;
    }, {})
  };
};

export default projects;
