import ArteMockup from "../assets/images/featured/arte-mockup.webp";
import BooleanMockup from "../assets/images/featured/boolean_monk_mobile.webp";
import sockitupMockup from "../assets/images/featured/Sockit-up_mockup_web.webp";
import amazonMockup from "../assets/images/featured/amazone_clone.webp";
import netflixMockup from "../assets/images/featured/Netflix-Mackbook-Mockup.webp";
import jasmineMockup from "../assets/images/featured/jasmine_weddings.webp";

const featuredProjects = [
  {
    id: "01",
    title: "Arte Musica",
    image: ArteMockup,
    description:
      "A Carnatic music learning platform. The marketting site is blazingly fast static website built with React and Gatsby. The users can login using email and password or Google oauth popup. The logged in user is taken to a dashboard which is a single page application with React as the front end and Node as the backend. The css styling is made fuly resposive built from scratch using SASS and without any frameworks. ",
    stack: [
      "UI/UX Design - Adobe XD , HTML , SASS",
      "Front End - React , Gatsby",
      "Back End - Node , MongoDB",
      "Deployment - Work in progress",
    ],
  },
  {
    id: "02",
    title: "Boolean Monk",
    image: BooleanMockup,
    url: "/",
    description:
      "My personal portfolio website built in React and Gatsby and deployed to Netlify. The contents are loaded using Graphql using Contentfull - a headless CMS. The design is fully responsive and made with mobile first approach.",
    stack: [
      "UI/UX Design - Adobe XD , HTML , CSS",
      "Front End Development - React / Gatsby",
      "Backend - Contentfull",
      "Deployment - Netlify",
    ],
  },
  {
    id: "03",
    title: "Sock It Up",
    image: sockitupMockup,
    url: "https://sockitup-2b8e9.web.app/",
    description:
      "A mockup of an e-commerce platform. Sock It Up is an online portal for buying a wide variety of socks. Users can login using google authentication and add socks to cart. The application is developed using React and uses context api - reducer implementaion. The backend uses Firebase for authentication , inventory storage & depolyment.",
    stack: [
      "UI/UX Design - Adobe XD , HTML , CSS",
      "Front End Development - React , Context API - Reducers",
      "Backend - Firebase, Firestore",
      "Authentication - Google & email Authentication (Firebase)",
      "Deployment - Firebase",
    ],
  },
  {
    id: "04",
    title: "Netflix Clone",
    image: netflixMockup,
    url: "https://netflix-clone-dd233.web.app/",
    description:
      "A Netflix clone built using React & Firebase. The app uses hooks and context api for state management. The data is loaded dynamicaly using axios from 'themoviedb' api. The trailer on thumbnail click funcitonality is also inluded. This clone is deployed to Firebase using Firebase cli",
    stack: [
      "UI/UX Design - HTML , CSS",
      "Front End Development - React , Axios",
      "Backend - Firebase",
      "Authentication - None",
      "Deployment - Firebase",
    ],
  },
  {
    id: "05",
    title: "Jasmine Weddings",
    image: jasmineMockup,
    url: "https://disastrous-speeder.000webhostapp.com/",
    description:
      "A Wedding Photography & Videography website using Wordpress. The site is mobile responsive and built using Elementor. The design is made from the ground up and no templates have been used.",
    stack: ["UI/UX Design - Adobe XD", "Wordpress"],
  },
  {
    id: "06",
    title: "Amazon Clone",
    image: amazonMockup,
    url: "https://clone-75e5d.web.app/",
    description:
      "An Amazon Clone using React & Firebase. Th app uses hooks and context api for state management. Users can login using email authentication and add to cart. This clone is deployed to Firebase using Firebase cli. The application is developed using React and uses context api - reducer implementaion. The backend uses Firebase for authentication , inventory storage & depolyment.",
    stack: [
      "UI/UX Design - HTML , CSS",
      "Front End Development - React",
      "Backend - Firebase",
      "Authentication - Email Authentication (Firebase)",
      "Deployment - Firebase",
    ],
  },
];

export default featuredProjects;
