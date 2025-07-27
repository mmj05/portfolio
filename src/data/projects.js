// Import project images
import flipdotImg from '../assets/projects/flipdot/flipdot.png';
import libraryStoreImg from '../assets/projects/library-store/library-store.png';
import jammingImg from '../assets/projects/jamming/jamming.png';
import recipeAppImg from '../assets/projects/recipe-app/recipe-app.png';

export const projects = [
  {
    id: 1,
    title: "FlipDot Ecommerce Platform",
    category: "Full Stack",
    description:
      "A production-ready multi-role ecommerce platform with React and Spring Boot, featuring secure authentication, shopping cart functionality, and separate dashboards for customers, sellers, and administrators.",
    features: [
      "Multi-role authentication system (Customer, Seller, Admin)",
      "JWT-based secure authentication with 'Remember Me' functionality",
      "Advanced shopping cart with persistent state management",
      "Complete checkout process with address and payment management",
      "Seller dashboard for product and order management",
      "Admin panel for category and product oversight",
      "Real-time order tracking and status updates",
      "Responsive design optimized for all device sizes",
      "Product search and filtering capabilities",
      "Category-based product organization",
      "User profile management with order history",
      "Secure password encryption and validation",
      "Frontend deployed on Render.com with CI/CD pipeline",
      "Dockerized backend deployment on Render cloud platform",
      "AWS Aurora PostgreSQL database for enterprise-grade data persistence",
      "Full cloud infrastructure with scalable architecture"
    ],
    technologies: [
      "React",
      "Redux Toolkit", 
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "JWT Auth",
      "TailwindCSS",
      "Vite",
      "REST APIs"
    ],
    liveUrl: "https://flipdot.onrender.com/",
    githubUrls: {
      frontend: "https://github.com/mmj05/ecommerce-frontend",
      backend: "https://github.com/mmj05/ecommerce-backend"
    },
    image: flipdotImg,
    screenshots: [
      {
        id: 1,
        type: "desktop",
        description: "Homepage showcasing featured products and categories",
      },
      { id: 2, type: "desktop", description: "Product catalog with advanced filtering" },
      { id: 3, type: "desktop", description: "Shopping cart and checkout process" },
      { id: 4, type: "desktop", description: "Seller dashboard for order and product management" },
      { id: 5, type: "desktop", description: "Admin panel for system management" },
    ],
    challenges:
      "Implementing a secure multi-role authentication system, managing complex state across different user types, and deploying a full-stack application with proper cloud infrastructure while ensuring scalability and security.",
    solution:
      "Leveraged Redux Toolkit for efficient state management, implemented JWT-based authentication with role-based access control, containerized the backend with Docker for consistent deployments, and utilized cloud services (Render + AWS Aurora) for reliable, scalable infrastructure.",
  },
  {
    id: 2,
    title: "Library Store",
    category: "Full Stack",
    description:
      "A comprehensive library management system with React, TypeScript, and Spring Boot, featuring secure authentication, book management, and payment processing for library services.",
    features: [
      "User-centric interface for seamless book browsing and borrowing",
      "Secure user authentication with Okta to protect personal data",
      "Stripe integration for handling payments and fines",
      "Due date system with real-time reminders for timely returns",
      "User dashboard to access and review complete checkout history",
      "Administrator tools for managing inventory (add, delete, update books)",
      "Real-time status updates on borrowed books",
      "Efficient communication system between users and administrators",
      "Visual insights into reading habits and borrowing trends"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Okta",
      "Stripe API",
    ],
    liveUrl: "https://library-app-pearl.vercel.app/home",
    githubUrl: "https://github.com/mmj05",
    image: libraryStoreImg,
    screenshots: [
      {
        id: 1,
        type: "desktop",
        description: "Main screenshot of the library store dashboard",
      },
      { id: 2, type: "desktop", description: "Book browsing interface" },
      { id: 3, type: "desktop", description: "Checkout functionality" },
      {
        id: 4,
        type: "desktop",
        description: "Admin dashboard for managing books and users",
      },
    ],
    challenges:
      "Building secure and scalable user authentication and handling complex user-book relationships.",
    solution:
      "Used Okta for OAuth2-based authentication and leveraged Spring Boot JPA for relational mapping and data management.",
  },
  {
    id: 3,
    title: "Jamming",
    category: "Frontend",
    description:
      "Interactive web application built using React where users can search for songs by title, artist, or album name, thanks to seamless Spotify API integration.",
    features: [
      "Search functionality for songs by title, artist, or album",
      "Create personalized playlists from search results",
      "Seamless integration with Spotify Web API",
    ],
    technologies: ["React", "JavaScript", "Spotify API", "CSS3", "HTML5"],
    liveUrl: "https://jamming-mamming.netlify.app/",
    githubUrl: "https://github.com/mmj05/jamming",
    image: jammingImg,
    screenshots: [
      {
        id: 1,
        type: "desktop",
        description: "Home page displaying search interface",
      },
      { id: 2, type: "desktop", description: "Search results from Spotify" },
      { id: 3, type: "desktop", description: "Playlist creation interface" },
      { id: 4, type: "desktop", description: "Spotify authentication screen" },
    ],
    challenges:
      "Handling asynchronous Spotify API calls while managing playlist state.",
    solution:
      "Implemented clean separation of concerns using React hooks and efficient state management with controlled components.",
  },
  {
    id: 4,
    title: "Recipe Search App",
    category: "Frontend",
    description:
      "A comprehensive recipe discovery application that combines multiple food APIs to provide users with an extensive database of recipes searchable by ingredients or dish names.",
    features: [
      "Search recipes by dish name or available ingredients",
      "Seamlessly melds data from two disparate APIs",
      "Comprehensive and diverse recipe library",
      "Detailed recipe instructions and ingredient lists",
      "Responsive design for optimal mobile experience"
    ],
    technologies: ["jQuery", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    liveUrl: "https://mmj05.github.io/recipe-search-app/",
    githubUrl: "https://github.com/mmj05/recipe-search-app",
    image: recipeAppImg,
    screenshots: [
      { id: 1, type: "desktop", description: "Recipe search homepage" },
      {
        id: 2,
        type: "desktop",
        description: "Search results based on user query",
      },
      {
        id: 3,
        type: "desktop",
        description: "Recipe details page with ingredients and instructions",
      },
      {
        id: 4,
        type: "desktop",
        description: "Responsive layout for different screen sizes",
      },
    ],
    challenges:
      "Combining multiple APIs and presenting cohesive recipe results without duplication.",
    solution:
      "Used normalization techniques and conditional logic to merge API responses into a unified data format.",
  },
];
