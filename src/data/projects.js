// Import project images
import flipdotImg from "../assets/projects/flipdot/flipdot.png";
import libraryStoreImg from "../assets/projects/library-store/library-store.png";
import jammingImg from "../assets/projects/jamming/jamming.png";
import recipeAppImg from "../assets/projects/recipe-app/recipe-app.png";

// Import FlipDot screenshots
import flipdotHomepage from "../assets/projects/flipdot/homepage.png";
import flipdotProductCatalog from "../assets/projects/flipdot/product-catalog.png";
import flipdotCheckout from "../assets/projects/flipdot/checkout.png";
import flipdotOrderConfirmation from "../assets/projects/flipdot/order-confirmation.png";
import flipdotSellerDashboardOverview from "../assets/projects/flipdot/seller-dashboard-overview.png";
import flipdotSellerDashboardProducts from "../assets/projects/flipdot/seller-dashboard-products.png";
import flipdotSellerDashboardOrders from "../assets/projects/flipdot/seller-dashboard-orders.png";
import flipdotAdminDashboard from "../assets/projects/flipdot/admin-dashboard.png";
import flipdotUserAccountManagement from "../assets/projects/flipdot/user-account-management.png";

// Import Library Store screenshots
import libraryStoreHomepage from "../assets/projects/library-store/homepage.png";
import libraryStoreBookSearch from "../assets/projects/library-store/book-search.png";
import libraryStoreUserCurrentLoans from "../assets/projects/library-store/user-current-loans.png";
import libraryStoreUserDashboardHistory from "../assets/projects/library-store/user-dashboard-history.png";
import libraryStoreAdminPanel from "../assets/projects/library-store/admin-panel.png";
import libraryStoreAdminUserMessaging from "../assets/projects/library-store/admin-user-messaging.png";

// Import Jamming screenshots
import jammingHomepage from "../assets/projects/jamming/homepage.png";
import jammingSearchResults from "../assets/projects/jamming/search-results.png";
import jammingPlaylistCreation from "../assets/projects/jamming/playlist-creation.png";

// Import Recipe App screenshots
import recipeAppHomepage from "../assets/projects/recipe-app/homepage.png";
import recipeAppSearchResults from "../assets/projects/recipe-app/search-results.png";

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
      "Full cloud infrastructure with scalable architecture",
    ],
    technologies: [
      "React",
      "Redux Toolkit",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Docker",
      "JWT Auth",
      "TailwindCSS",
      "Vite",
      "REST APIs",
    ],
    liveUrl: "https://flipdot.onrender.com/",
    githubUrls: {
      frontend: "https://github.com/mmj05/ecommerce-frontend",
      backend: "https://github.com/mmj05/ecommerce-backend",
    },
    image: flipdotImg,
    screenshots: [
      {
        id: 1,
        type: "desktop",
        image: flipdotHomepage,
        description: "Homepage showcasing featured products and categories",
      },
      {
        id: 2,
        type: "desktop",
        image: flipdotProductCatalog,
        description: "Product catalog with advanced filtering",
      },
      {
        id: 3,
        type: "desktop",
        image: flipdotCheckout,
        description: "Shopping cart and checkout process",
      },
      {
        id: 4,
        type: "desktop",
        image: flipdotOrderConfirmation,
        description: "Order confirmation page",
      },
      {
        id: 5,
        type: "desktop",
        image: flipdotSellerDashboardOverview,
        description: "Seller dashboard overview",
      },
      {
        id: 6,
        type: "desktop",
        image: flipdotSellerDashboardProducts,
        description: "Seller dashboard for product management",
      },
      {
        id: 7,
        type: "desktop",
        image: flipdotSellerDashboardOrders,
        description: "Seller dashboard for order management",
      },
      {
        id: 8,
        type: "desktop",
        image: flipdotAdminDashboard,
        description: "Admin panel for system management",
      },
      {
        id: 9,
        type: "desktop",
        image: flipdotUserAccountManagement,
        description: "User account management and profile settings",
      },
    ],
    challenges:
      "Implementing a secure multi-role authentication system, managing complex state across different user types, and deploying a full-stack application with proper cloud infrastructure while ensuring scalability and security.",
    solution:
      "Leveraged Redux Toolkit for efficient state management, implemented JWT-based authentication with role-based access control, containerized the backend with Docker for consistent deployments, and utilized cloud services (Render + AWS Aurora) for reliable, scalable infrastructure.",
  },
  {
    id: 2,
    title: "Library Management System",
    category: "Full Stack",
    description:
      "A comprehensive library management system built with React, TypeScript, and Spring Boot, featuring JWT authentication, complete book lifecycle management, Stripe payment integration, and administrative tools for modern library operations.",
    features: [
      "JWT-based secure authentication with user registration and login",
      "Complete book lifecycle: browsing, searching, checkout, returns, and renewals",
      "Stripe payment integration for late fees and fine management",
      "Real-time due date tracking with automated payment calculations",
      "User dashboard with loan history, current checkouts, and reading statistics",
      "Administrative panel for inventory management (add, update, delete books)",
      "Bidirectional messaging system between users and library staff",
      "Book review and rating system for community engagement",
      "Role-based access control (USER and ADMIN permissions)",
      "Responsive design optimized for desktop and mobile devices",
      "Docker containerization for consistent deployment environments",
      "Real-time book availability tracking and status updates",
      "Advanced search and filtering capabilities",
      "Automated fee calculation for overdue books",
      "Complete audit trail with checkout/return history",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "JWT Auth",
      "Stripe API",
      "Docker",
      "REST APIs",
    ],
    liveUrl: "https://love-to-read.onrender.com/home",
    githubUrls: {
      frontend: "https://github.com/mmj05/library-app-frontend",
      backend: "https://github.com/mmj05/library-app-backend",
    },
    image: libraryStoreImg,
    screenshots: [
      {
        id: 1,
        type: "desktop",
        image: libraryStoreHomepage,
        description: "Homepage showcasing featured books and library services",
      },
      {
        id: 2,
        type: "desktop",
        image: libraryStoreBookSearch,
        description:
          "Book search and browsing interface with detailed information",
      },
      {
        id: 3,
        type: "desktop",
        image: libraryStoreUserCurrentLoans,
        description:
          "User dashboard showing current loans and checkout status",
      },
      {
        id: 4,
        type: "desktop",
        image: libraryStoreUserDashboardHistory,
        description: "User dashboard displaying loan history",
      },
      {
        id: 5,
        type: "desktop",
        image: libraryStoreAdminPanel,
        description: "Admin panel for book inventory management",
      },
      {
        id: 6,
        type: "desktop",
        image: libraryStoreAdminUserMessaging,
        description: "Messaging system for user-admin communication",
      },
    ],
    challenges:
      "Implementing a robust book checkout system with complex business rules for due dates, fees, and inventory management, while migrating from Okta to custom JWT authentication and integrating Stripe for payment processing.",
    solution:
      "Developed a custom JWT authentication system with role-based access control, implemented Spring Boot services for business logic with JPA for data management, integrated Stripe API for secure payment processing, and containerized the backend with Docker for scalable deployment.",
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
        image: jammingHomepage,
        description: "Home page displaying search interface",
      },
      { 
        id: 2, 
        type: "desktop", 
        image: jammingSearchResults,
        description: "Search results from Spotify" 
      },
      { 
        id: 3, 
        type: "desktop", 
        image: jammingPlaylistCreation,
        description: "Playlist creation interface" 
      },
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
      "Responsive design for optimal mobile experience",
    ],
    technologies: ["jQuery", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    liveUrl: "https://mmj05.github.io/recipe-search-app/",
    githubUrl: "https://github.com/mmj05/recipe-search-app",
    image: recipeAppImg,
    screenshots: [
      { 
        id: 1, 
        type: "desktop", 
        image: recipeAppHomepage,
        description: "Recipe search homepage" 
      },
      {
        id: 2,
        type: "desktop",
        image: recipeAppSearchResults,
        description: "Search results based on user query",
      }
    ],
    challenges:
      "Combining multiple APIs and presenting cohesive recipe results without duplication.",
    solution:
      "Used normalization techniques and conditional logic to merge API responses into a unified data format.",
  },
];
