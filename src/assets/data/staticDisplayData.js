import {
  SiCodechef,
  SiHackerrank,
  SiCodeforces,
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

export const ExperienceData = [
  {
    id: 1,
    role: "Problem Setter",
    duration: "April 2022 - March 2023",
    org: "iMocha",
    loc: "Remote",
    tasks: [
      "Created new coding questions related to data structures and algorithms, generating test cases and writing effective solutions for the problems."
    ],
    skills: ["Algorithm Design", "Test Case Generation", "Problem Analysis", "Python", "Java"]
  },
  {
    id: 2,
    role: "Web Development Intern",
    duration: "May 2021 - July 2021",
    org: "Solapur Rural Police Transfer",
    loc: "Remote",
    tasks: [
      "Worked on the project for a real-time problem for general transfer of Solapur Police Staff.",
      "Developed and implemented web applications using SCRUM Agile methods.",
      "Conducted testing & validation to ensure the software is working properly."
    ],
    skills: ["React.js", "Node.js", "Firebase", "Agile/SCRUM", "Testing"]
  },
  {
    id: 3,
    role: "Project Intern",
    duration: "September 2021 - December 2021",
    org: "Tech Mahindra",
    loc: "Remote",
    tasks: [
      "Developed a high-performance system to display and manage startup companies, reducing processing time by 20 hours per week.",
      "Contributed to requirements gathering, planning, design, implementation, testing, and deployment of the codebase."
    ],
    skills: ["Full Stack Development", "Performance Optimization", "SDLC", "Database Design"]
  },
  {
    id: 4,
    role: "Research Intern",
    duration: "June 2022 - January 2023",
    org: "Computational Linguistic Research Lab PICT",
    loc: "Pune, India",
    tasks: [
      "Analysed the sentiments of Marathi-English code-mixed social media data using machine learning techniques.",
      "Published a conference paper in IEEE conference conducted in March 2023."
    ],
    skills: ["Machine Learning", "NLP", "Python", "Data Analysis", "Research", "IEEE Publication"]
  },
  {
    id: 5,
    role: "Software Engineer",
    duration: "January 2023 - Present",
    org: "PubMatic",
    loc: "Pune, India",
    tasks: [
      "Developed Java API endpoints to fetch GenAI-generated summaries for the Deal Troubleshooting Dashboard, enabling seamless integration between the UI, middleware service, and GenAI agent.",
      "Transformed a monolithic Spark job repository into a modular, microservice-inspired architecture, enabling 50% faster deployments with independent CI/CD pipelines.",
      "Developed a robust Scala Spark pipeline to extract data from HDFS across multiple clusters and load it into S3, improving data accessibility and scalability.",
      "Automated daily HDFS monitoring for ETL paths across PubMatic clusters using Python scripts, enabling proactive disk usage tracking with scheduled alerts.",
      "Optimized mobile app inventory monetization through a feedback loop software solution, driving a DSP spend increase to $20K per day.",
      "Built a GenAI library for developing AI agents, driving GenAI adoption across PubMatic."
    ],
    skills: ["Java", "Scala", "Apache Spark", "GenAI", "HDFS", "S3", "Python", "ETL", "Microservices", "CI/CD"]
  }
];

export const SkillsData = [
  {
    id: 1,
    title: "Languages",
    items: ["C++", "Python", "Java", "Scala"],
  },
  {
    id: 2,
    title: "Big Data",
    items: ["Hadoop", "HDFS", "Apache Spark", "Oozie", "Snowflake"]
  },
  {
    id: 3,
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  {
    id: 4,
    title: "Backend",
    items: ["Node", "Express.js"],
  },
  {
    id: 5,
    title: "Database",
    items: ["NoSQL", "MongoDB"],
  },
  {
    id: 7,
    title: "Tools",
    items: ["Linux", "CI/CD", "Git", "Postman"],
  }
];

export const CodingHandles = [
  {
    id: 1,
    site: "Leetcode",
    handleName: "omg_pict_23",
    desc: "Solved more than 750 problems, highest rating is 1800",
    url: "https://leetcode.com/omg_pict_23/",
    icon: SiLeetcode,
  },
  {
    id: 2,
    site: "Codechef",
    handleName: "omg_pict_23",
    desc: "Highest Rated 1756 (3* coder)",
    url: "https://www.codechef.com/users/omg_pict_23",
    icon: SiCodechef,
  },
  {
    id: 3,
    site: "GeeksForGeeks",
    handleName: "omkargaikwad",
    desc: "Solved more than 200 problems",
    url: "https://auth.geeksforgeeks.org/user/omkargaikwad/practice/",
    icon: SiGeeksforgeeks,
  }
];

export const EducationData = [
  {
    id: 1,
    role: "BE in Computer Engineering",
    duration: "September 2021 - June 2023",
    org: "SCTR's Pune Institute of Computer Technology",
    loc: "Pune, India",
    tasks: [
      "Published a research paper in IEEE conference on sentiment analysis.",
      "Graduated with distinction in Computer Engineering program.",
      "Specialized in Machine Learning and Data Structures & Algorithms."
    ],
    skills: ["Computer Engineering", "Machine Learning", "Data Structures", "Algorithms", "Research"]
  },
  {
    id: 2,
    role: "HSC Science (Physics, Chemistry, Mathematics)",
    duration: "July 2017 - March 2019",
    org: "Rajarshi Shahu Junior Science College",
    loc: "Latur, India",
    tasks: [
      "Stood first in a batch of 130 students in MHT-CET exam with 99.31 percentile.",
      "Secured 77.23% in the HSC board exam.",
      "Specialized in Physics, Chemistry, and Mathematics."
    ],
    skills: ["Mathematics", "Physics", "Chemistry", "Problem Solving", "Analytical Thinking"]
  },
  {
    id: 3,
    role: "SSC School Education",
    duration: "July 2014 - March 2017",
    org: "Shri Sant Goroba Kaka Vidyalaya",
    loc: "Latur, India",
    tasks: [
      "Stood first in the school and exam center (among 7 schools) with 96.40% in SSC board exam.",
      "Demonstrated exceptional academic performance across all subjects."
    ],
    skills: ["Academic Excellence", "Multidisciplinary Learning", "Foundation Studies"]
  }
];

export const VolunteersData = [
  {
    id: 1,
    role: "Student Volunteer",
    duration: "September 2020 - June 2023",
    org: "PICT ACM Student Chapter",
    loc: "Pune, India",
    tasks: [
      "Conducted online technical Special Interest Groups (SIGs) on web development, which had an impact on over 200 students as part of the PICT ACM chapter."
    ],
    skills: ["Leadership", "Web Development", "Teaching", "Community Building"]
  },
  {
    id: 2,
    role: "Marketing Volunteer",
    duration: "October 2021 - December 2022",
    org: "PICT Entrepreneurship Development Cell",
    loc: "Pune, India",
    tasks: [
      "Involved in the marketing of The Original Pitch - The flagship event conducted by entrepreneurship cell."
    ],
    skills: ["Marketing", "Event Management", "Communication", "Entrepreneurship"]
  }
];