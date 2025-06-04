export const projects = [
  {
    id: 1,
    title: "Library Store",
    category: "Full Stack",
    description:
      "Designed and implemented a user-centric, full-stack library system utilizing React, TypeScript, Spring Boot, PostgreSQL, and Okta authentication.",
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
    image: "/love-to-read.png",
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
    id: 2,
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
    image: "/jamming.png",
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
    id: 3,
    title: "Recipe Search App",
    category: "Frontend",
    description:
      "Application empowering users to effortlessly search for recipes by dish name or available ingredients, simplifying meal planning.",
    features: [
      "Search recipes by dish name or available ingredients",
      "Seamlessly melds data from two disparate APIs",
      "Comprehensive and diverse recipe library",
    ],
    technologies: ["jQuery", "JavaScript", "HTML5", "CSS3", "REST APIs"],
    liveUrl: "https://mmj05.github.io/recipe-search-app/",
    githubUrl: "https://github.com/mmj05/recipe-search-app",
    image: "/recipe-app.png",
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
