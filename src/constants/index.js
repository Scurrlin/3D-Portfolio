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
        title: "Enrollment Operations Lead",
        company_name: "Northeastern University CPS",
        icon: neu,
        iconBg: "#FEF7DA",
        date: "February 2018 - May 2022",
        points: [
            "Promoted to Lead 6 months after being hired as an Enrollment Operations Assistant in August 2017.",
            "Played a vital role in orchestrating the launch of the “Student Hub” in April 2022 which resulted in a 75% improvement in international transcript condition fulfillment.",
            "Implemented migration of external admissions email inbox to a Salesforce ticketing system which cut average response times by 50%, from 96 hours to 48 hours.",
            "Spearheaded the crafting and submission of an approved proposal for upgrading all team members’ laptops with 16 GB RAM; productivity increased substantially.",
            "Assisted in training student workers and managed applicant caseloads across multiple populations."
        ],
    },
    {
        title: "Onboarding Specialist",
        company_name: "Propcard",
        icon: propcard,
        iconBg: "#C0C0C0",
        date: "May 2022 - July 2022",
        points: [
            "Responded to inbound client requests for meetings with initial outreach.",
            "Effectively pitched the benefits of Propcard to potential clients, highlighting it’s unique value proposition.",
            "Added relevant media copy to the custom Propcard CMS, ensuring high quality content presentations.",
            "Guided clients through the Propcard platform, providing insights to maximize their usage and benefits."
        ],
    },
    {
        title: "Student Software Engineer",
        company_name: "General Assembly",
        icon: ga,
        iconBg: "#fbc3bc",
        date: "July 2022 - October 2022",
        points: [
            "Software Engineering Bootcamp: Full-Time Immersive Program.", 
            "12-week, 500+ hour Immersive Full Stack Software Engineering bootcamp. This intensive program covered product development fundamentals, object-oriented programming, MVC frameworks, data modeling, team collaboration strategies, and the creation of a professional portfolio."
            
        ],
    },
    {
        title: "Customer Support Engineer",
        company_name: "Propcard",
        icon: propcard,
        iconBg: "#C0C0C0",
        date: "January 2023 - May 2024",
        points: [
            "Expanded previous role to include custom website updates via HTML injection.",
            "Collaborated with a senior developer to build an updated Web API tailored for specific CRMLS data points.",
            "Modernized data pipelines and ETL processes to improve platform scalability.",
            "Installed analytics tokens and tracking pixels to collect and analyze web traffic data.",
            "Managed SQL Database, performing maintenance and updates as needed.",
            "Monitored cron jobs for MLS connection tokens."

        ],
    },
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