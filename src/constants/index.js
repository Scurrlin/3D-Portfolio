import { neu, ga, propcard, gc } from "../assets/images";
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
        title: "Associate Web Developer",
        company_name: "GoingClear",
        icon: gc,
        iconBg: "#B6F2A1",
        date: "July 2024 - Present",
        points: [
            "Assisted in the deployment of Lee & Low Books’ e-commerce website, the largest multicultural children’s book publisher in the United States.",
            "Engaged in ideation and planning meetings with customers to finalize minimum viable product, tech stack and project plan.",
            "Conducted quality assurance testing on new features to identity and resolve issues pre-launch.",
            "Interviewed previous clients to record live testimonials for social media content."
        ],
    },
    {
        title: "Customer Support Engineer",
        company_name: "Propcard",
        icon: propcard,
        iconBg: "#C0C0C0",
        date: "January 2023 - May 2024",
        points: [
            "Expanded role scope to encompass custom website updates through HTML injection.",
            "Revamped data pipelines and ETL processes to enhance platform scalability.",
            "Implemented analytics tokens and tracking pixels for comprehensive web traffic data collection and analysis."
        ],
    },
    {
        title: "Student Software Engineer",
        company_name: "General Assembly",
        icon: ga,
        iconBg: "#fbc3bc",
        date: "July 2022 - October 2022",
        points: [
            "Completed 12-week, 500+ hour fully immersive full-time software engineering bootcamp.",
            "Gained expertise in product development fundamentals, object-oriented programming, and MVC frameworks.",
            "Developed skills in data modeling and team collaboration strategies.",
            "Received feedback from instructors and peers to refine coding techniques and project outcomes."            
        ],
    },
    {
        title: "Enrollment Operations Lead",
        company_name: "Northeastern University CPS",
        icon: neu,
        iconBg: "#FEF7DA",
        date: "February 2018 - May 2022",
        points: [
            'Promoted to Lead six months after being hired as an Enrollment Operations Assistant in August 2017.',
            'Key contributor to launch of "Student Hub" in April 2022, achieving 75% improvement in international transcript fulfillment.',
            'Implemented migration of external admissions email inbox to Salesforce ticketing system, cutting average response times by 50%, from 96 hours to 48 hours.'
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