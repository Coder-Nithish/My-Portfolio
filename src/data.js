export const profileData = {
  name: "NITHISH P",
  role: "Software Developer | Backend Systems | Industrial Automation | MES Integration",
  location: "Erode, Tamil Nadu",
  phone: "+91 8248285226",
  email: "nithishprabha07@gmail.com",
  linkedin: "linkedin.com/in/nithish-p-271b2b279",
  summary: "Software Developer with 1+ year of experience designing and delivering high-performance backend systems, real-time data pipelines, and industrial automation solutions. Specialized in Go-based MQTT/OPC UA adapters, AVEVA MES ecosystem integration, and full-stack web applications using Node.js and React.js. Proven track record of replacing legacy message brokers, building custom TCP/MQTT brokers, and engineering scalable workflows for mission-critical manufacturing environments. Adapt at collaborating on architecture design, performance tuning, and MCP server development.",
  freelanceLanguages: ["Go", "Node.js", "Python", "Java", "C#"],
};

export const skillsData = [
  {
    category: "Languages",
    items: ["Go", "Node.js (JavaScript/TypeScript)", "Python", "Java", "C#", "VB.NET", "C", "PowerShell"]
  },
  {
    category: "Frontend",
    items: ["React.js", "ReactFlow", "HTML5", "CSS3", "JavaScript", "TypeScript", "OMI ViewApps"]
  },
  {
    category: "Messaging & Protocols",
    items: ["MQTT (QoS 0/1)", "NATS JetStream", "TCP/IP", "OPC UA", "REST APIs", "RabbitMQ"]
  },
  {
    category: "Databases",
    items: ["Microsoft SQL Server (MSSQL)", "MySQL", "PostgreSQL"]
  },
  {
    category: "AVEVA / Industrial",
    items: ["AVEVA MES", "WorkTask", "System Platform", "Historian", "Connect", "Enterprise Integration (EI)", "OMI ViewApps"]
  },
  {
    category: "Frameworks & Tools",
    items: [".NET", "Spring Boot", "Vite", "Git", "Postman", "VS Code", "Eclipse", "npm"]
  },
  {
    category: "AI & Integration",
    items: ["MCP Server Development", "Claude API (Anthropic)", "Multi-source data integration"]
  }
];

export const experienceData = [
  {
    role: "Software Developer",
    company: "Ficus IT Service Private Limited",
    location: "Erode, Tamil Nadu",
    period: "May 2025 – Present",
    highlights: [
      "Designed and developed a custom MQTT Adapter in Go that ingests data from MQTT protocol and publishes directly to AVEVA Connect, eliminating the RabbitMQ broker dependency and reducing infrastructure overhead.",
      "Built an OPC UA Adapter in Go to receive and process large-scale industrial tag data from plant floor systems, integrating with AVEVA System Platform and Historian.",
      "Developed an ERP-to-MES integration DLL using .NET (C#) to connect enterprise resource planning systems with AVEVA Enterprise Integration (EI), enabling seamless bidirectional data exchange.",
      "Engineered Cloud MES modules for Job Management and Work Order (WO) Management using Node.js, React.js, and MSSQL, deployed for AVEVA MES workflows.",
      "Built custom label widgets and AVEVA WorkTask custom widgets in JavaScript to enhance operational UI and streamline shop-floor task management.",
      "Built scalable MQTT pipelines in Go subscribing to and processing 100,000+ individual topics with low latency, supporting high-throughput industrial data streams.",
      "Implemented custom TCP and MQTT brokers supporting QoS 0 and QoS 1, optimized for concurrency and throughput using Go goroutines and channel-based concurrency patterns.",
      "Engineered batch-based message publishing to NATS JetStream, reducing CPU usage and improving system reliability under peak load conditions.",
      "Developed real-time data persistence services to store high-volume streaming data into Microsoft SQL Server with optimized write performance.",
      "Conducted Archive DB testing to validate data integrity and recovery mechanisms for mission-critical industrial data stores.",
      "Optimized system performance using buffer tuning, memory reuse, and concurrency control, improving throughput and stability across all services.",
      "Developed Workflow Activity backend and frontend using Node.js and ReactFlow library, enabling configurable process flow design, execution, and error handling for manufacturing operations.",
      "Created an MCP (Model Context Protocol) Server using Node.js, integrating multiple data sources including AVEVA MES DB and AVEVA Historian with the Claude API (Anthropic), enabling AI-assisted querying of industrial data.",
      "Built React-based and OMI ViewApp dashboards for workflow visualization, system monitoring, and operational control.",
      "Participated in architecture design, technology evaluation, and performance tuning for mission-critical industrial systems."
    ]
  },
  {
    role: "Python Full Stack Development Intern",
    company: "Techvolt Software Pvt Ltd",
    location: "Coimbatore, Tamil Nadu",
    period: "Dec 2024 – Mar 2025",
    highlights: [
      "Developed full-stack web applications using Python and modern frameworks, gaining hands-on experience in backend API development and frontend integration."
    ]
  }
];

export const projectsData = [
  {
    title: "High-Volume MQTT Streaming System",
    tech: "Go, MQTT, Aveva Connect, MSSQL",
    description: "Real-time Go services processing 100,000+ MQTT topics with custom broker, batch publishing to Aveva Connect, and optimized SQL Server persistence."
  },
  {
    title: "AVEVA MCP Server",
    tech: "Node.js, Claude API, AVEVA Historian, MSSQL",
    description: "Built an MCP server integrating AVEVA MESDB and Historian data sources with the Claude AI API, enabling natural language querying of industrial operational data."
  },
  {
    title: "Cloud MES Job & WO Management Module",
    tech: "Node.js, React.js, MSSQL",
    description: "Full-stack MES module for managing manufacturing jobs and work orders, with REST API backend and interactive React.js frontend."
  },
  {
    title: "ERP-to-MES Enterprise Integration DLL",
    tech: "C#, .NET, AVEVA EI",
    description: "Developed a .NET DLL for bidirectional ERP and AVEVA MES data synchronization using AVEVA Enterprise Integration middleware."
  },
  {
    title: "Agricultural Guidance Platform",
    tech: "Python CGI, MySQL",
    description: "Multi-role login system with crop advisory features, built using Python CGI and MySQL backend."
  },
  {
    title: "Shopping Mall Management System",
    tech: "Spring Boot, Angular, REST APIs",
    description: "RESTful backend with Spring Boot and Angular frontend for managing retail operations including tenants, inventory, and billing."
  }
];

export const educationData = [
  {
    degree: "B.E. Computer Science and Engineering (Hons – AI & ML)",
    institution: "Excel Engineering College, Namakkal",
    period: "2021 – 2025"
  }
];

export const certificationsData = [
  "Java Full Stack Development – TNSIF (6-month program, 2024–2025)"
];
