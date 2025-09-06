// JusJax
import JusJaxLogo from "./assets/JusJax.svg";
import JusJaxBasket from "./assets/JusJax-Basket.png";
import JusJaxIndex from "./assets/JusJax-Index.png";
import JusJaxProductPage from "./assets/JusJax-Product-Page.png";
import JusJaxShop from "./assets/JusJax-Shop.png";

// PR App
import PRAppAnalytics from "./assets/Analytics.svg";
import PRAppWeight from "./assets/Weight_Select.svg";
import PRAppSport from "./assets/In_The_Sport.svg";
import PRAppPhoto from "./assets/Add_Photo.svg";

// Hi-Top Sneaker
import HiTopIndex from "./assets/Hi-Top_Sneakers.svg";
import HiTopInsideProduct from "./assets/Hi-Top_Sneakers_Inside_Product.svg"
import HiTopLogin from "./assets/Hi-Top_Sneakers_Login.svg"
import HiTopProfile from "./assets/Hi-Top_Sneakers_Sneaker_Profile.svg"

// Movie-Hub
import MovieHubIndex from "./assets/movie-hub-index.svg";
import MovieHubProfile from "./assets/movie-hub-profile.svg";
import MovieHubInsideMoviePage from "./assets/movie-hub-inside-movie.svg";
import MovieHubMovies from "./assets/movie-hub-movies.svg"

// JusJax Revamp
import OrganicMeRevampLogo from "./assets/Organic-Me-Revamp-Logo.svg";
import JusJaxRevampIndex from "./assets/JusJax-Revamp-Index.png";
import JusJaxRevampIndex2 from "./assets/JusJax-Revamp-Index-2.png";
import JusJaxRevampIndex3 from "./assets/JusJax-Revamp-Index-3.png";
import JusJaxRevampIndex4 from "./assets/JusJax-Revamp-Index-4.png";

// MobSter
import MobSterLogo from "./assets/MOB-STER.svg";
import MobSterIndex from "./assets/Mob-Ster-Index.png";
import MobSterIndex2 from "./assets/Mob-Ster-Index2.png";
import MobSterIndex3 from "./assets/Mob-Ster-Index3.png";
import MobSterIndex4 from "./assets/Mob-Ster-Index4.png";

// Steller
import StellerLogo from "./assets/Steller-Logo.svg";
import StellerIndex from "./assets/Steller-Index.png";
import StellerIndex1 from "./assets/Steller-Index1.png";
import StellerIndex2 from "./assets/Steller-Index2.png";
import StellerIndex3 from "./assets/Steller-Index3.png";

// 08-Quote-Generator
import QuoteGenerator from "./assets/08-Quote-Generator-1.png"
import QuoteGenerator2 from "./assets/08-Quote-Generator-2.png"


// Matt Sprint Game
import MathSprintGame from "./assets/Math_Sprint_Game.png"
import MathSprintGame1 from "./assets/Math_Sprint_Game1.png"
import MathSprintGame2 from "./assets/Math_Sprint_Game2.png"
import MathSprintGame3 from "./assets/Math_Sprint_Game3.png"

// React Playground
import ReactPlayground from "./assets/react_playground.png";
import ReactPlayground1 from "./assets/react_playground2.png";

// CampusCareer
import CampusCareer from "./assets/CampusCareer.svg";
import CampusCareerTable from "./assets/CampusCareerTable.svg";

// KanBan
import KanBan from "./assets/KanBan.png"
import KanBan1 from "./assets/KanBan1.png"
import KanBan2 from "./assets/KanBan2.png"
import KanBan3 from "./assets/KanBan3.png"

// Chatty
import ChattyIndex from "./assets/Chatty-Main.png"
import ChattyLogin from "./assets/Chatty-login.png"
import ChattyProfile from "./assets/Chatty-Profile.png"
import ChattyChat from "./assets/Chatty-Chat.png"

// Product Store
import ProductStoreAdd from "./assets/MERN-01-Add.png"
import ProductStoreUpdate from "./assets/MERN-01-Update.png"
import ProductStore from "./assets/MERN-01.png"
import ProductStoreWhite from "./assets/MERN-01-White.png"

// Coffee Machine
import CoffeeMachine from "./assets/coffee_machine.svg"
import CoffeeMachine1 from "./assets/coffee_machine1.svg"

// Higher or Lower
import HighorLower from "./assets/Higher-or-Lower.svg"
import HighorLower1 from "./assets/Higher-or-Lower1.svg"

// BlackJack
import BlackJack from "./assets/BlackJack.svg"
import BlackJack1 from "./assets/BlackJack1.svg"



export const TIMELINE = [
  // ---------- September 2025 ----------
  {
    date: "September 2025",
    projects: [
      {
        title: "React Components Playground",
        tags: ["Frontend"],
        logo: "react",
        techStack: [
          { name: "React", color: "#61DAFB" },
          { name: "Vite", color: "#646CFF" },
        ],
        links: [
          { label: "Repo", href: "https://github.com/JordanGrieve/React-Complete-Course/tree/master/01-starting-project", color: "#181717" },
        ],
        description:
          "A small playground to practice React components, props/state, and basic tests.",
        images: [ReactPlayground, ReactPlayground1],
        details: { period: "Sep 2025", role: "Frontend" },
      },
    ],
  },

  // ---------- August 2025 ----------
  {
    date: "August 2025",
    projects: [
        {
          title: "Chatty",
          tags: ["Frontend", "Backend"],
          logo: "react",
          techStack: [
            { name: "React", color: "#61DAFB" },
            { name: "Tailwind", color: "#06B6D4" },
            { name: "Express", color: "#494949" },
            { name: "MongoDB", color: "#47A248" },
            { name: "Cloudinary", color: "#F38020" },
            { name: "JWT", color: "#D97706" },
          ],
          links: [
            { label: "Repo", href: "https://github.com/JordanGrieve/MERN-Course/tree/main/01_MERN-Crash-Course", color: "#181717" }
          ],
          description:
            "Chatty is a full-stack real-time messaging platform inspired by WhatsApp. Built with React, TailwindCSS, Express, and MongoDB, the app supports secure JWT-based authentication, online/offline status tracking, and real-time conversations. Cloudinary integration powers profile image storage, while react-hot-toast provides instant feedback throughout the user experience. Features include user profiles, secure login, presence detection, and a clean UI built with Chakra UI and Tailwind. Designed to replicate the scalability and responsiveness of a production-ready chat system.",
          images: [ChattyLogin, ChattyIndex, ChattyChat, ChattyProfile],
          details: { period: "Aug 2025" },
        },
      {
        title: "Math Sprint Game",
        tags: ["Frontend"],
          logo: "javascript",
        techStack: [
          { name: "JavaScript", color: "#F7DF1E" },
          { name: "HTML", color: "#E34F26" },
          { name: "CSS", color: "#1572B6" },
        ],
        links: [{ label: "Repo", href: "https://github.com/JordanGrieve/js-mini-projects/tree/main/12_math-sprint-game", color: "#181717" }],
        description:
          "Vanilla JS math sprint game where players choose from four different question set sizes, aiming to finish as quickly as possible. Each round presents equations that must be marked as correct or incorrect, and final scores are calculated based on completion time plus penalty seconds for wrong answers. Results are tracked locally, allowing players to compare and improve their best scores over time. A lightweight but engaging project focused on logic, speed, and UI responsiveness.",
        images: [MathSprintGame, MathSprintGame1, MathSprintGame2, MathSprintGame3],
        details: { period: "Aug 2025" },
      },
        {
          title: "Coffee Machine (CLI)",
          tags: ["Backend"],
          logo: "python",
          techStack: [
            { name: "Python", color: "#EAB308" }
          ],
          links: [
            { label: "Repo", href: "https://github.com/JordanGrieve/python-mini-projects/blob/main/coffee_machine_program_requirements/main.py", color: "#181717" }
          ],
          description:
            "Console-based coffee machine that manages stock, takes coin inputs, validates transactions, and dispenses drinks. Users can order espresso, latte, or cappuccino, and the program checks ingredient availability before proceeding. Coins (quarters, dimes, nickels, pennies) are processed with automatic change calculation, and transactions are validated with refunds when necessary. Inventory levels are deducted for each drink, while a report mode displays current resources and total profit. This lightweight CLI project highlights key backend logic including menu-driven input, resource tracking, transaction validation, and reporting.",
          images: [CoffeeMachine, CoffeeMachine1],
          details: { period: "Aug 2025" }
        },
        {
          title: "Product Store",
          tags: ["Frontend", "Backend"],
          logo: "react",
          techStack: [
            { name: "React", color: "#61DAFB" },
            { name: "Tailwind", color: "#06B6D4" },
            { name: "Express", color: "#494949" },
            { name: "MongoDB", color: "#47A248" },
            { name: "Cloudinary", color: "#F16529" }
          ],
          links: [
            { label: "Repo", href: "https://github.com/JordanGrieve/product-store", color: "#181717" },
          ],
          description:
            "A simple full-stack e-commerce application featuring light and dark mode, product CRUD functionality, and Cloudinary image storage. Users can create, update, and delete products with live image previews. Built with React, Tailwind, Express, and MongoDB, the app focuses on a clean UI, seamless state management, and integration of external media hosting for images. While it doesn’t include authentication or JWT, it demonstrates key e-commerce fundamentals with a lightweight stack and responsive design.",
          images: [ProductStore, ProductStoreUpdate, ProductStoreAdd, ProductStoreWhite],
          details: { period: "Aug 2025" },
        },
      {
        title: "Quote Generator",
        tags: ["Frontend"],
          logo: "javascript",
        techStack: [
          { name: "JavaScript", color: "#F7DF1E" },
          { name: "HTML", color: "#E34F26" },
          { name: "CSS", color: "#1572B6" },
        ],
        links: [{ label: "Repo", href: "https://github.com/JordanGrieve/js-mini-projects/tree/main/08_quote_generator", color: "#181717" }],
        description:
          "Basic quote generator in vanilla JS with a clean card UI and tweet/share button.",
        images: [QuoteGenerator, QuoteGenerator2],
        details: { period: "Aug 2025" },
      },
              {
        title: "KanBan",
        tags: ["Frontend"],
          logo: "javascript",
        techStack: [
          { name: "JavaScript", color: "#F7DF1E" },
          { name: "HTML", color: "#E34F26" },
          { name: "CSS", color: "#1572B6" },
        ],
        links: [{ label: "Repo", href: "https://github.com/JordanGrieve/js-mini-projects/tree/main/11_drag-and-drop", color: "#181717" }],
        description:
          "A Kanban board application inspired by Trello, built to manage tasks through a drag-and-drop interface. Users can create boards, add lists, and move cards between columns to track progress visually. Each card supports editing, reordering, and status changes, making the tool flexible for both personal and team workflows. The project focused on replicating Trello’s intuitive experience while learning how to implement state management, persistence, and smooth drag-and-drop interactions.",
        images: [KanBan, KanBan1, KanBan2, KanBan3],
        details: { period: "Aug 2025" },
      },
      {
        title: "Steller (Agency Site)",
        tags: ["Design"],
        logo: StellerLogo,
        techStack: [{ name: "Figma", color: "#E04E9F" }],
        links: [{ label: "Figma", href: "https://www.figma.com/design/pG6meAtVNura4dcznpse0V/Hi-Top-Sneakers?node-id=980-3&t=KhNpV1OSRjJKFo76-1", color: "#E04E9F" }],
        description:
          "Space-themed agency landing page concept built around a bold hero section, service grid, and clear CTAs. The design emphasizes modern gradients, cosmic illustrations, and strong visual hierarchy to engage users from the start. Focus was placed on crafting a memorable brand identity, improving scannability with sectioned layouts, and ensuring that CTAs stand out across the page. The project was an exploration of UI creativity and storytelling through theme-driven design.",
        images: [StellerIndex, StellerIndex1, StellerIndex2, StellerIndex3],
        details: { period: "Aug 2025" },
      },
    ],
  },

  // ---------- June 2025 ----------
  {
    date: "June 2025",
    projects: [
      {
        title: "MobSter (Mobile Store)",
        tags: ["Design", "Frontend"],
        logo: MobSterLogo,
        techStack: [{ name: "Figma", color: "#E04E9F" }],
        links: [{ label: "Figma", href: "https://www.figma.com/design/rWeMfLvUgRmzryLFrWTYM3/Untitled?node-id=2-7904&t=30QM6xPYTkVgHzTf-1", color: "#E04E9F" }],
        description:
          "Mobile e-commerce storefront design featuring a hero device promo, featured product carousel, trust logos, and a clean footer. This was a team project where I initially contributed to the design phase before transitioning into one of two frontend developers. I collaborated closely with the backend team to deliver a seamless shopping experience, enabling users to browse, add products to the basket, and complete a fully functional purchase flow.",
        images: [MobSterIndex, MobSterIndex2, MobSterIndex3, MobSterIndex4],
        details: { period: "Jun 2025" },
      },
        {
          title: "Higher–Lower (Followers Game)",
          tags: ["Backend"],
          logo: "python",
          techStack: [{ name: "Python", color: "#EAB308" }],
          links: [
            { label: "Repo", href: "https://github.com/JordanGrieve/python-mini-projects/tree/main/higher_or_lower", color: "#181717" }
          ],
          description:
            "CLI guessing game where you compare two celebrities/brands and guess who has more Instagram followers. Each round prints a formatted description (name, role, country) for A and B. If you guess correctly, your score increments and **B becomes the next A**, and a fresh B is drawn (avoiding duplicates). The game continues until you guess wrong. Includes utility functions for data formatting, correctness checks, screen ‘clear’, and a simple game loop with persistent score. ASCII art banners (logo & VS) make it feel arcade-y.",
          images: [HighorLower, HighorLower1],
          details: { period: "June 2025" }
        },
    ],
  },

  // ---------- May 2025 ----------
  {
    date: "May 2025",
    projects: [
              {
        title: "CampusCareer",
        tags: ["FullStack"],
        logo: "react",
        techStack: [
          { name: "React", color: "#61DAFB" },
          { name: "Python", color: "#EAB308" },
          { name: "MySQL", color: "#4479A1" },
            { name: "Figma", color: "#E04E9F" },
        ],
        links: [
          { label: "Figma", href: "https://www.figma.com/design/WSwlPFvMomo7pcxsiCkX9H/Honours-Project?node-id=242-3516&t=jifAjiSpCkGlbGZ0-1", color: "#E04E9F" },
          { label: "Live", href: "https://campuscareer-frontend-production.up.railway.app/dashboard", color: "#22C55E" },
          { label: "Repo", href: "https://github.com/JordanGrieve/campuscareer-frontend", color: "#181717" },
        ],
        description:
          "Student productivity and job-tracking platform designed as a one-stop career management tool. CampusCareer features a customizable widget-based dashboard, allowing users to arrange layouts to fit their workflow. It includes a full job application pipeline with status updates and scoring, plus project analytics displayed through weekly, monthly, and yearly charts. Additional functionality includes task reminders, file uploads, and secure authentication through a custom API, making it a complete productivity hub tailored for students.",
        images: [CampusCareer, CampusCareerTable],
        details: {
          role: "Full-stack Developer",
          period: "Sep 2025 · Ongoing",
        },
      },
        {
          title: "Blackjack (CLI)",
          tags: ["Backend"],
          logo: "python",
          techStack: [{ name: "Python", color: "#EAB308" }],
          links: [
            { label: "Repo", href: "https://github.com/JordanGrieve/python-mini-projects/tree/main/BlackJack", color: "#181717" }
          ],
          description:
            "Console Blackjack in Python with a minimal deck (A=11 with downgrade to 1 when busting). Deals two cards to the player and computer, handles hits/stands, auto-draws the dealer until 17+, and compares with clear outcomes (Blackjack=0, bust checks, ties). Includes ASCII art logo, reusable helpers (deal, scoring with Ace adjustment, round comparison), and a replay loop. Built ~4 months ago.",
          images: [BlackJack, BlackJack1],
            details: { period: "May 2025" }
        },
      {
        title: "OrgamicMe Revamp",
        tags: ["Design"],
        logo: OrganicMeRevampLogo,
        techStack: [{ name: "Figma", color: "#F24E1E" }],
        links: [{ label: "Figma", href: "https://www.figma.com/design/PvJsOOS8Mr7bH8jiL3jt46/OrganicME-Updatee?node-id=0-1&t=vZa9BR7ZvzmY6TNa-1", color: "#F24E1E" }],
        description:
          "Brand & UI refresh for OrganicMe: introduced a warmer color palette, softer card components, and enhanced product storytelling. Focused on improving visual hierarchy, modernizing typography, and creating a more inviting, consumer-friendly browsing experience while keeping the family-run organic brand identity intact.",
        images: [JusJaxRevampIndex, JusJaxRevampIndex2, JusJaxRevampIndex3, JusJaxRevampIndex4],
        details: { period: "May 2025" },
      },
    ],
  },

  // ---------- February 2025 ----------
  {
    date: "February 2025",
    projects: [
      {
        title: "MovieHub",
        tags: ["FullStack"],
        logo: "python",
        techStack: [
          { name: "Python", color: "#EAB308" },
          { name: "Bootstrap", color: "#7952B3" },
          { name: "HTML", color: "#E34F26" },
          { name: "CSS", color: "#1572B6" },
        ],
        links: [
          { label: "Figma", href: "https://www.figma.com/design/ewFPUX2KiQciyYePKkHZLH/MovieHub?node-id=0-1&t=QcJrXK4gg7BKDlV3-1", color: "#E04E9F" },
          { label: "Repo", href: "#", color: "#181717" },
        ],
       description:
  "Full-stack movie discovery platform built with Python (Flask) and Bootstrap. Features dynamic top-rated and trending movie lists, search with pagination, and a responsive grid layout. Implemented server-side rendering with Python and designed an accessible UI using HTML, CSS, and Bootstrap.",
        images: [MovieHubIndex, MovieHubProfile, MovieHubInsideMoviePage, MovieHubMovies],
        details: { period: "Feb 2025" },
      },
    ],
  },

  // ---------- January 2025 ----------
    {
      date: "January 2025",
      projects: [
        {
          title: "Hi-Top Sneakers",
          tags: ["FullStack"],
          logo: "php",
          techStack: [
            { name: "PHP", color: "#777BB4" },
            { name: "MySQL", color: "#4479A1" },
            { name: "HTML", color: "#E34F26" },
            { name: "CSS", color: "#1572B6" },
          ],
          links: [
            { label: "Figma", href: "https://www.figma.com/design/pG6meAtVNura4dcznpse0V/Hi-Top-Sneakers?node-id=0-1&m=dev&t=0vHOWc0tDT30aiTx-1", color: "#E04E9F" },
          ],
          description:
            "Full-stack e-commerce application with product catalog, cart system, and admin dashboard. Built as a CRUD application using PHP and MySQL, featuring user authentication, product management, and order tracking. Designed and developed both frontend and backend from scratch to deliver a functional and visually engaging shopping experience.",
            images: [HiTopIndex, HiTopProfile, HiTopInsideProduct, HiTopLogin],
          details: { period: "Jan 2025", role: "Full-stack Developer" },
        },
      ],
    },


  // ---------- November 2024 ----------
    {
      date: "November 2024",
      projects: [
        {
          title: "PR Fitness App (Concept)",
          tags: ["Design", "Frontend"],
          logo: "react",
          techStack: [
            { name: "Figma", color: "#E04E9F" },
            { name: "React Native", color: "#61DAFB" }
          ],
          links: [{ label: "Figma", href: "https://www.figma.com/design/LQNEPpd3qayOa8NE5GMpt4/PR-App?node-id=0-1&m=dev&t=G6WrGXbCngqtpmAd-1", color: "#E04E9F" }],
          description:
            "A university project sponsored for research into gym data tracking. The PR Fitness App was designed to calculate personal records and provide analytics for athletes and coaches. I led the design process, creating an intuitive mobile UI, while also contributing to development in React Native. The project was completed in just three months, from the initial sponsor meeting through to a fully polished product and final presentation.",
           images: [PRAppWeight, PRAppSport, PRAppPhoto, PRAppAnalytics],
          details: { role: "Lead Designer, Supporting Developer", period: "Nov 2024" }
        },
                {
        title: "JusJax (Original)",
        tags: ["Design"],
        logo: JusJaxLogo,
        techStack: [{ name: "Figma", color: "#E04E9F" }],
        links: [{ label: "Figma", href: "#", color: "#E04E9F" }],
        description: "JusJax was a university project where I designed a website for a small, family-run organic shop. The focus was on creating a warm, natural aesthetic that reflects the brand’s values of sustainability, quality, and healthy living. The site highlights product ranges, customer reviews, and an approachable brand identity while keeping the design simple, clean, and user-friendly.",
        images: [JusJaxBasket, JusJaxIndex, JusJaxProductPage, JusJaxShop],
        details: { period: "Aug 2024" },
      },
      ],
    },


  // ---------- August 2024 ----------
  {
    date: "August 2024",
    projects: [

    ],
  },

];
