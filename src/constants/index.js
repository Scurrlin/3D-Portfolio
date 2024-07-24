import { neu, ga, propcard } from "../assets/images";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    spotify,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Customer Support Engineer",
        company_name: "Propcard",
        icon: propcard,
        iconBg: "#C0C0C0",
        date: "January 2023 - May 2024",
        points: [
            "At Propcard, from January 2023 to May 2024, I partnered with a senior developer to construct an enhanced Web API for specific CRMLS data points. I administered the SQL Database, executing maintenance and updates as required, and oversaw cron jobs for MLS connection tokens, ensuring seamless data integration."
        ],
    },
    {
        title: "Student Software Engineer",
        company_name: "General Assembly",
        icon: ga,
        iconBg: "#fbc3bc",
        date: "July 2022 - October 2022",
        points: [
            "At General Assembly, from July 2022 to October 2022, I created a professional portfolio showcasing my completed projects and technical skills. I learned and implemented various programming languages and tools, engaged in hands-on coding assignments and real-world projects, and collaborated with peers on group projects to simulate industry teamwork."            
        ],
    },
    {
        title: "Onboarding Specialist",
        company_name: "Propcard",
        icon: propcard,
        iconBg: "#C0C0C0",
        date: "May 2022 - July 2022",
        points: [
            "At Propcard, from May 2022 to July 2022, I responded to inbound client requests, initiating contact and scheduling meetings. I assisted clients in setting up and optimizing their accounts for better engagement and results, maintaining a high level of client satisfaction through attentive and personalized support. I also collaborated with the team to improve onboarding processes and enhance the overall client experience."
        ],
    },
    {
        title: "Enrollment Operations Lead",
        company_name: "Northeastern University CPS",
        icon: neu,
        iconBg: "#FEF7DA",
        date: "February 2018 - May 2022",
        points: [
            "At Northeastern University, from February 2018 to May 2022, I spearheaded the crafting and submission of an approved proposal to upgrade all team members’ laptops to 16 GB RAM, significantly boosting productivity. I assisted in training student workers and managed applicant caseloads across multiple populations. I also coordinated with various departments to streamline enrollment processes and resolve issues."
        ],
    }
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Scurrlin',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/seancurrlin',
    },
    {
        name: 'Spotify',
        iconUrl: spotify,
        link: 'https://open.spotify.com/artist/1yes1OaMmV9w58iMeggawH',
    },
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-red',
        name: 'Artofficial',
        description: 'A full MERN stack AI Image Generator powered by Cloudinary and DALL-E-3; built with React, MongoDB, Express, Node, and Hostinger.',
        link: 'https://github.com/Scurrlin/Artofficial',
        demo: 'https://www.artofficial.fun/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'SummarAIze',
        description: "An Article Summarizer powered by RapidAPI and OpenAI's GPT Model; built with React and styled with Tailwind CSS.",
        link: 'https://github.com/Scurrlin/AI_Article_Summarizer_Clone',
        demo: 'https://summaraize-jj5v.onrender.com/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Crypt0Watch',
        description: "A cryptocurrency tracking app ranking the top 50 coins by current market cap; built with React and CoinGecko's API.",
        link: 'https://github.com/Scurrlin/Crypt0Watch',
        demo: 'https://crypt0watch.onrender.com/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Lift Off',
        description: 'A full MERN stack exercise journal with full CRUD functionality; uses JSON Web Tokens to protect and authenticate user credentials.',
        link: 'https://github.com/Scurrlin/Lift-Off',
        demo: 'https://www.lift-off.fun/'
    }
];