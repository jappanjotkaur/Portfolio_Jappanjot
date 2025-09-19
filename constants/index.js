import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ ML Expertise",
    icon: <FullStackIcon />,
  },
  {
    title: "Software Developer",
    icon: <FrontendIcon />,
  },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Innovative Collaborator",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/cna.png",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "C++",
      icon: "/assets/tech/cee.png",
      link: "https://en.cppreference.com/w/cpp.html",
    },
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    
  ],
  libraries: [
  {
    name: "TensorFlow",
    icon: "/assets/tech/TensorFlow.svg",
    link: "https://www.tensorflow.org/",
  },
  {
    name: "PyTorch",
    icon: "/assets/tech/PyTorch.svg",
    link: "https://pytorch.org/",
  },
  {
    name: "scikit-learn",
    icon: "/assets/tech/scikit-learn.svg",
    link: "https://scikit-learn.org/",
  },
  {
    name: "Streamlit",
    icon: "/assets/tech/Strealit.svg",
    link: "https://docs.streamlit.io/",
  },
  {
    name: "Pandas",
    icon: "/assets/tech/Pandas.svg",
    link: "https://pandas.pydata.org/",
  },
  {
    name: "NumPy",
    icon: "/assets/tech/NumPy.svg",
    link: "https://numpy.org/",
  },
  {
    name: "OpenCV",
    icon: "/assets/tech/OpenCV.svg",
    link: "https://opencv.org/",
  },
],

  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Django",
      icon: "/assets/tech/Django.svg",
      link: "https://docs.djangoproject.com/en/5.2/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
    {
      name: "Flask",
      icon: "/assets/tech/Flask.svg",
      link: "https://flask.palletsprojects.com/en/stable/",
    },
    {
      name: "WebSockets",
      icon: "/assets/tech/Socket.io.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
    },
  ],
  tools: [
    {
      name: "Jira",
      icon: "/assets/tech/Jira.svg",
      link: "https://confluence.atlassian.com/jira",
    },
    {
      name: "Ollama",
      icon: "/assets/tech/ollama.svg",
      link: "https://github.com/ollama/ollama/tree/main/docs",
    },
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      
      name: "Matlab",
      icon: "/assets/tech/MATLAB.svg",
      link: "https://nodejs.org/enhttps://www.mathworks.com/products/matlab.html",
    }

  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
    {
    title: "Data Science Intern",
    company_name: "Summer Intern at Celebal Technologies",
    icon: "/assets/company/celebal.png",
    iconBg: "#E6DEDD",
    date: "June 2025 - August 2025",
    points: [
      "Streamlined ML workflows with automated feature engineering, hyperparameter tuning, and advanced evaluation metrics, boosting predictive performance; built and deployed a RAG-based GenAI chatbot using LangChain with fine-tuned LLMs and context-aware quality evaluation.",
      "Built a production-grade Network Anomaly Detection System with FastAPI and React, leveraging advanced ML models, Docker/Kubernetes deployment, and Prometheus/Grafana monitoring for real-time reliability",
    ],
  },
  {
    title: "AI/ML Intern",
    company_name: "Summer Intern at Indian Meteorological Department, New Delhi",
    icon: "/assets/company/imd.png",
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
      "Analyzed meteorological data and forecasting patterns, focusing on the impact of heat terminal stress on wheat crops, improving prediction accuracy by 15%.",
      "Developed the Mausam Fasal Sathi, an AI/multilingual real-time chatbot for IMD, which provides district-based weather forecasts, rainfall summary reports, and crop advisories to empower over 5 lakh+ farmers.",
      "Upgraded the chatbot's NLP capabilities using Hugging Face Transformers and LLAMA 2, increasing user engagement by 25%.",
    ],
  },

  {
    title: "Freelance",
    company_name: "Freelancer at Igrow Solutions",
    icon: "/assets/company/igrow.png",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023, Nov 2024 - Dec 2024",
    points: [
      "Produced explainer content for an in-house program that strategically boosted YouTube impressions and engagement by 40%.",
      "Conducted outreach to 100+ YouTube creators, fostering collaborations that enhanced brand influence and increased subscriber count by 30%.",
      "Recognized with a ₹10,000 monthly stipend for impactful data-driven initiatives.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AlzCare—A Smart Assistance System for Daily Activities in Alzheimer’s Patients",
    description:
      "A real-time mobile application that detects human activities using MediaPipe Pose and a CNN-LSTM model. It includes emergency fall alerts, cognitive games, caregiver notifications, and journaling to support in-home Alzheimer’s care with over 92% accuracy.",
    tags: [
      {
        name: "mediapipe",
        color: "blue-text-gradient",
      },
      {
        name: "cnn-lstm",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "twilio",
        color: "yellow-text-gradient",
      },
    ],
    image:"/assets/projects/alzflo.png",
    source_code_link: "https://github.com/jappanjotkaur/AlzCare",
    // deployed_link: "https://quick-edit-app.vercel.app",
  },
  {
    name: "Real-Time Object Detection using YOLO Variants with Nature-Inspired Algorithm",
    description:
      "An object detection system combining YOLOv8, YOLOv11, and YOLO-World models with hybrid PSO-GWO optimization. Achieved 93.2% mAP@0.5 and 185+ FPS using advanced techniques like Canny edge refinement and SIFT keypoint localization.",
    tags: [
      {
        name: "yolov8",
        color: "blue-text-gradient",
      },
      {
        name: "yolov11",
        color: "green-text-gradient",
      },
      {
        name: "yoloworld",
        color: "pink-text-gradient",
      },
      {
        name: "opencv",
        color: "orange-text-gradient",
      },
      {
        name: "pytorch",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/letssee.png",
    source_code_link: "https://github.com/jappanjotkaur/AI-based-Compiler-for-Object-Detection-using-YOLO",
    // deployed_link: "https://fig-pro-github.vercel.app",
  },
  // {
  //   name: "GDSC Website",
  //   description:
  //     "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "styled-components",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/gdsc-website.png",
  //   source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
  //   deployed_link: "https://gdscmvjce.vercel.app/",
  // },
  {
    name: "Defending Social Networks Against Misinformation Using Graph-Theoretic Intervention Strategies",
    description:
      "A simulation-based framework to reduce misinformation on social networks using the Independent Cascade Model and hybrid edge/node intervention strategies. Lowered misinformation spread by over 95% on the OGBN-Arxiv graph dataset while preserving network integrity.",
    tags: [
      {
        name: "graph-theory",
        color: "blue-text-gradient",
      },
      {
        name: "cascade-model",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
      {
        name: "networkx",
        color: "orange-text-gradient",
      },
      {
        name: "community-detection",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/gg.png",
    source_code_link:
      "https://github.com/jappanjotkaur/Defending-Social-Networks-Against-Misinformation-via-Strategic-Edge-and-Node-Blocking",
    // deployed_link:
    //   "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/jappanjotkaur",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/jappanjot-kaur",
  },
  {
    id: "leetcode",
    icon: <img src="/assets/icons/leetcode.png" alt="LeetCode" className="w-6 h-6 inline-block align-middle" style={{ marginTop: "-3px"}} />,
    link: "https://leetcode.com/u/Jappanjot_Kaur/",
  },
];

const heroTexts = [
  "Aspiring Software Developer",
  500,
  "Full-Stack developer",
  500,
  "Problem solver",
  500,
  "Freelancer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
