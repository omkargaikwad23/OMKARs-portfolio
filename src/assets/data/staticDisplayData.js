export const ExperienceData = [
  {
    id: 1,
    role: "Software Engineer",
    duration: "January 2023 - Present",
    org: "PubMatic",
    loc: "Pune, India",
    tasks: [
      "Designed and led development of an AI-powered AdTech Deal Debugger using LangGraph state machines, FastAPI, and LLMs — automating root-cause analysis for ad delivery failures and reducing customer support tickets by 50%.",
      "Built the internal decision engine modeling intent classification and diagnostics as multi-step LLM workflows, enabling targeted analysis of auction drop-offs and deal misconfigurations.",
      "Improved observability in the GenAI platform by integrating LangFuse + ELK, building reusable logging and tracing pipelines that reduced debugging time and operational overhead.",
      "Led a P1 security incident response, coordinating 6 scrum teams to rotate S3 and Snowflake credentials — ensuring zero downtime and restoring platform security within hours.",
      "Designed and implemented a Redis-based caching layer after analyzing query access patterns, reducing database load by 90% and improving p99 latency for production APIs.",
      "Re-architected a monolithic Spark codebase into modular pipelines by identifying independent data flows — cutting deployment cycles by 50% and improving failure isolation.",
      "Engineered and optimized Spark pipelines (Scala) processing ~12 TB/day of Parquet data across 5 clusters, improving analytics latency and enabling data-driven ad optimizations that increased DSP spend by $20K/day."
    ],
    skills: ["Python", "Scala", "Java", "LangGraph", "FastAPI", "Apache Spark", "Redis", "HDFS", "S3", "Snowflake", "LangFuse", "Docker", "CI/CD"]
  },
  {
    id: 2,
    role: "Research Intern",
    duration: "June 2022 - January 2023",
    org: "Computational Linguistic Lab PICT",
    loc: "Pune, India",
    tasks: [
      "Co-authored an IEEE conference paper on Marathi–English code-mixed sentiment analysis, building and annotating a 1K+ social-media dataset.",
      "Benchmarked TF-IDF–based SVM vs Naive Bayes, demonstrating superior SVM performance on under-resourced Indian language data."
    ],
    skills: ["Machine Learning", "NLP", "Python", "Data Analysis", "Research", "IEEE Publication"]
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    duration: "September 2021 - December 2021",
    org: "Tech Mahindra",
    loc: "Pune, India",
    tasks: [
      "Built an internal system to manage startup data, automating workflows and reducing manual processing by ~20 hours per week.",
      "Contributed to full SDLC — requirements gathering, planning, design, implementation, testing, and deployment."
    ],
    skills: ["Full Stack Development", "Workflow Automation", "SDLC", "Database Design"]
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
      "Conducted online technical Special Interest Groups (SIGs) on web development, impacting 200+ students."
    ],
    skills: ["Leadership", "Web Development", "Teaching", "Community Building"]
  },
  {
    id: 2,
    role: "Problem Setter",
    duration: "April 2022 - March 2023",
    org: "iMocha",
    loc: "Remote",
    tasks: [
      "Created coding questions for data structures and algorithms assessments, generating test cases and solutions."
    ],
    skills: ["Algorithm Design", "Test Case Generation", "Problem Analysis", "Python", "Java"]
  }
];
