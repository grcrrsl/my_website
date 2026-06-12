import deckImage from "../assets/images/deck_of_clothes.png";
import pharmacyImage from "../assets/images/Hospital_Pharmacy_System.png";
import effataImage from "../assets/images/EffataPOS.png";


const projects = [
  {
    id: 1,
    title: "Deck of Clothes Inventory System",
    category: "Desktop Application",

    image: deckImage,

    developers: ["Roselle Garcera"],

    year: 2025,

    status: "Completed",

    role: "Full-Stack Developer",

    description:
    "A desktop application for managing clothing inventory, sales, and customer purchases.",

    fullDescription:
      "ATM Clothing Store is a Java Swing-based desktop application designed to streamline clothing store operations through inventory management, product administration, shopping cart functionality, and transaction tracking. The system features dedicated customer and administrator interfaces for an efficient and user-friendly retail experience.",

    technologies: ["Java", "Java Swing", "Object-Oriented Programming (OOP)", "IntellJ IDE"],

    features: [
      "User Login System",
      "Customer and Admin Roles",
      "Product Categorization (Tops, Bottoms, Footwear, Accessories, Outerwear)",
      "Shopping Cart Management",
      "Inventory Management",
      "Inventory Management",
      "Product CRUD Operations",
      "Transaction Tracking",
      "Image-Based Product Display"
    ],

    challenges: [
      "Designing an intuitive Java Swing interface.",
      "Implementing inventory and transaction management.",
      "Managing role-based access for customers and administrators.",
      "Ensuring accurate shopping cart and stock updates.",
      "File Handling for Data Persistence",
      "Report Generation for Sales and Inventory",
      "Maintaining a structured and scalable codebase."
    ],

    lessons: [
      "Applied Object-Oriented Programming concepts in a real-world project.",
      "Strengthened Java Swing GUI development skills.t",
      "Improved debugging and problem-solving abilities.",
      "Learned the importance of modular system architecture.",
      "Gained experience in inventory and transaction data management."
    ],

    github: "https://github.com/grcrrsl/deck_of_clothes.git",
    demo: "https://drive.google.com/file/d/1XUBiJ_IQAGlH5ewIDCXV7C9AxO81nYC9/view?usp=drive_link",
  },

  {
    id: 2,
    title: "Hospital Pharmacy Inventory System",
    category: "Desktop Application",

    developers: ["Roselle Garcera"],

    image: pharmacyImage,

    year: 2025,

    status: "Completed",

    role: "Full-Stack Developer",

    description:
        "A desktop application for managing medicine inventory, stock levels, and expiration dates.",
    
    fullDescription:
      "Developed a Hospital Pharmacy Inventory Management System that streamlines medicine tracking, inventory monitoring, and stock management. The application helps pharmacy staff efficiently manage medicine records, monitor expiration dates, and maintain accurate inventory levels through an intuitive desktop interface.",

    technologies: ["Java", "Java Swing", "Object-Oriented Programming (OOP)", "IntellJ IDE"],

    features: [
      "Medicine Inventory Management",
      "Stock Monitoring",
      "Expiration Date Tracking",
      "Search and Filter Functionality",
      "CRUD Operations (Create, Read, Update, Delete)",
      "User-Friendly Java Swing Interface",
      "Report Generation for Inventory Status and Expired Medicines",
    ],

    challenges: [
      "Managing and organizing large medicine inventories.",
      "Implementing expiry date tracking and alerts.",
      "Developing search, sorting, and filtering functionality.",
      "Designing a user-friendly Java Swing interface.",
      "Maintaining data consistency and accuracy.",
      "Generating accurate reports",
    ],

    lessons: [
      "Strengthened Java Swing GUI development skills.",
      "Applied Object-Oriented Programming principles.",
      "Improved data management and organization techniques.",
      "Improved software architecture and code organization.",
      "Enhanced debugging and problem-solving abilities."
    ],

    github: "https://github.com/grcrrsl/hospital_pharmacy_inventory.git",
    demo: "https://drive.google.com/file/d/1OQky_TSzrDB8hMjZbechyCm8cET-0qDE/view?usp=drive_link",
  },

  {
    id: 3,
    title: "Effata Point of Sale System (POS)",
    category: "Desktop Application",

    developers: ["Roselle Garcera"],

    image: effataImage,

    year: 2026,

    status: "Completed",

    role: "Full-Stack Developer",

    description:
        "A desktop POS system for managing sales, inventory, and business operations efficiently.",

    fullDescription:
      "Effata POS System is a Java-based Point of Sale application designed to streamline sales transactions, inventory management, and business operations. The system enables staff to process orders efficiently while providing administrators with tools for product management, inventory tracking, employee management, reporting, and audit monitoring through a modern desktop interface.",

    technologies: ["Java", "Java Swing", "SSMS", "JDBC (Java Database Connectivity)", "Object-Oriented Programming (OOP)", "DAO (Data Access Object) Pattern", "VS Code IDE"],

    features: [
      "Point of Sale (POS) Transactions",
      "Product Management",
      "Inventory Tracking",
      "Employee Management",
      "User Authentication and Role-Based Access Control",
      "Order Management",
      "Sales Reporting and Analytics",
      "Audit Logs",
      "Payment Management",
      "Dashboard Overview"
    ],

    challenges: [
      "Designing an efficient POS workflow for fast transaction processing.",
      "Managing real-time inventory updates after sales.",
      "Integrating Java applications with a SQL Server database.",
      "Implementing role-based access and user authentication.",
      "Generating accurate sales reports and analytics.",
      "Organizing multiple modules while maintaining a scalable codebase."
    ],

    lessons: [
      "Improved UI/UX design skills.",
      "Strengthened Java Swing desktop application development skills.",
      "Learned database integration using JDBC and SQL Server.",
      "Applied Object-Oriented Programming principles in a large-scale project.",
      "Gained experience implementing the DAO pattern for data management.",
      "Improved problem-solving and debugging skills.",
      "Learned the importance of modular architecture for maintainability and scalability."
    ],

    github: "https://github.com/grcrrsl/effata_pos.git",
    demo: "https://drive.google.com/file/d/1FK0gRXuYgowOGtCp5ccZAcuNoAvsScV2/view?usp=drive_link",
  },

  {
    id: 4,
    title: "Mind Bloom Website",
    category: "Web Application",

    developers: ["Roselle Garcera"],

    year: 2026,

    status: "Completed",

    role: "Full-Stack Developer",

    description:
      "A platform for college students and young adult mental health awareness and support.",

    fullDescription:
        "Mind Bloom — A platform promoting student mental health and well-being. The website provides resources, support, and a community for students to thrive academically and emotionally.",

    technologies: ["Html", " CSS", "JavaScript"],

    features: [
      "Mental Health Awareness",
      "Self-Care Resources",
      "Educational Content",
      "User-Friendly Interface",
    ],

    challenges: [
      "Designing a clean and engaging interface for mental health content.",
      "Organizing educational resources in a way that is easy for users to navigate.",
      "Creating a responsive design that works across different devices and screen sizes.",
      "Ensuring accessibility and readability for diverse users.",
      "Balancing visual appeal with usability and performance.",
      "Structuring reusable React components to maintain a scalable codebase."
    ],

    lessons: [
      "Improved React development skillsImproved frontend development skills using React.js and modern web technologies.",
      "Learned how to create responsive and accessible user interfaces.",
      "Gained experience organizing content for better user engagement.",
      "Enhanced component-based development and code reusability.",
      "Strengthened problem-solving and debugging skills during development.",
      "Learned the importance of designing technology that addresses real-world social issues."
    ],

    github: "https://github.com/grcrrsl/mindbloom_website.git",
    demo: "https://drive.google.com/file/d/1a_WcvLVHugwf4aGHSV6aFwQEihYqOlLG/view?usp=drive_link",
    website: "https://mindbloom-website-r7qng50dj-grcrrsls-projects.vercel.app/",
  },
{
    id: 5,
    title: "Portfolio Website",
    category: "Web Application",

    year: 2026,

    status: "In Progress",

    developers: ["Roselle Garcera"],

    role: "Full-Stack Developer",

    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase projects and skills.",

    technologies: ["React", "Tailwind CSS", "JavaScript"],

    features: [
      "Responsive Design",
      "Project Showcase",
      "About Section",
      "Contact Form",
    ],

    challenges: [
      "Learning React Router",
      "Building reusable components",
    ],

    lessons: [
      "Improved React development skills",
      "Learned modern frontend practices",
    ],

    github: "#",
    demo: "#",
  },
];

export default projects;