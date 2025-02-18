//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import IMGORVITX from "../styles/projects/Tapa-1.jpg";

export const userinfo = {
  logoText: "Guastalli Alexis", //This text is visible on your navbar and footer like your logo.
  contact: {
    email: "alexisguastalli@gmail.com", //It is always a good idea to mention your email on your website. Good platform to communicate.
    phone: "2914435198", //Phone number is optional, if you dont want it, consider leaving it blank .
    countrycode: "+54", //It is advisable to add the country code incase you mention your contact number.
  },
  socials: [
    //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
    //more icons are imported above, use as you like them.
    {
      type: "github",
      link: "https://github.com/ADGuastalli",
      icon: faGithubAlt,
    },
    {
      type: "linkedin",
      link: "https://www.linkedin.com/in/alexis-guastalli/",
      icon: faLinkedinIn,
    },
  ],
  greeting: {
    //this text goes on your landing page
    title: "¡ Hola, soy Alexis Dante Guastalli !",
    subtitle:
      "Soy desarrollador web Full Stack con especialización en Frontend. Mi experiencia abarca tecnologías como React, Next.js, JavaScript, TypeScript, CSS, Tailwind y Bootstrap. Además, cuento con conocimientos en Testing QA Manual y BDD relacionales y no relacionales.",
  },
  capabilities: [
    //this text goes on your home page in table format.
    //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
    //For aesthetics, it is advisable for you to keep similar number of skills in each category
    {
      category: "Front-end", // eg.frontend, backend, devops etc
      skills: ["HTML", "CSS", "NextJS", "React", "Tailwind CSS", "Bootstrap"], //eg. react, html, python etc.
    },
    {
      category: "Back-end",
      skills: ["NodeJS", "Express", "JWT (JSON Web Tokens)", "OAuth", "Auth0"],
    },
    {
      category: "Lenguajes de Programación",
      skills: ["JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Bases de Datos",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
  ],
  about: {
    //this text goes at the bottom of your home page.
    content:
      "Lo que más me motiva es crear soluciones innovadoras y visualmente atractivas. Siempre estoy en busca de nuevas herramientas y tecnologías para seguir aprendiendo y perfeccionando mis habilidades. Mi objetivo es contribuir al éxito de los proyectos y ofrecer experiencias excepcionales a los usuarios.",
    resume: "/", //link your resume here. it can be drive link or any other link
  },
  education: {
    visible: true, //set this to false if you want to omit this section
    educationList: [
      {
        time: "Febrero 2025", //timespan
        title: "SQL y Bases de Datos", //eg. BTech in Compuster Engineering
        organization: "Coderhouser", //eg. VJTI, Mumbai
        description: `Aprende a diseñar, gestionar y optimizar bases de datos relacionales. Domina consultas SQL avanzadas para generar reportes y toma de decisiones empresariales.`, //eg. secured a cgpa of 9.25 in all sems appeared in so far
      },
      {
        time: "Agosto 2024", //timespan
        title: "Desarrollo Web Full Stack", //eg. BTech in Compuster Engineering
        organization: "Henry", //eg. VJTI, Mumbai
        description: `Ser Full Stack significa tener un perfil híbrido en el ámbito del
      desarrollo web y trabajar tanto en el front-end (parte visual)
      como en el back-end (parte lógica) de un proyecto.`, //eg. secured a cgpa of 9.25 in all sems appeared in so far
      },
      {
        time: "Julio 2024",
        title: "Testing QA Manual",
        organization: "CorderHouse",
        description: `Durante este emocionante viaje, tuve la oportunidad de sumergirme
      en el mundo de las pruebas de calidad y aseguramiento de software.
      Desde desarrollar ciclos de pruebas hasta buscar y reportar
      errores, cada paso fue un desafío gratificante. Ejecutamos pruebas
      de estrés en aplicaciones web y móviles, evaluando su rendimiento,
      funcionalidad y SEO. Además, exploramos los diversos estados de
      los códigos de respuesta HTTP.`,
      },
      {
        time: "Mayo 2018",
        title: "Profesor de Educación Física",
        organization: "I.S.F.D. n°86",
        description: `Además de estar inmerso en el mundo de la tecnología, previamente
      obtuve mi título como Profesor de Educación Física. Durante más de
      10 años, ejercí esta profesión en diversos niveles educativos.`,
      },
      {
        time: "Diciembre 2008",
        title: "Técnico en Informática",
        organization: "E.E.T n°3",
        description: `Me gradué de la Escuela Secundaria Técnica con orientación en
      Informática. Durante este período, adquirí conocimientos básicos en el manejo de software y hardware.`,
      },
    ],
  },
  experience: {
    visible: true, //set this to false if you want to omit this section
    experienceList: [
      {
        company: "Orvitx", //company name eg.Microsoft
        companylogo: IMGORVITX, //companylogo
        position: "Full Stack", //post you held eg.Senior SDE
        time: "Octubre 2024 - Actual", //timespan
        description:
          "En mi rol actual, me encargo del desarrollo y la gestión de aplicaciones personalizadas utilizando AppSheet, integrando datos y automatizando flujos de trabajo a través de Google Sheets, Google Apps Script, y Firebase. Trabajo en la creación de soluciones completas para la automatización de procesos y la optimización de la experiencia del usuario.", //eg. spearheaded the graphics team in designing SASS product UIs
      },
      {
        company: "Henry",
        companylogo: "",
        position: "Teaching Assistants",
        time: "Junio 2024 - Septiembre 2024",
        description:
          "Durante mi tiempo en Henry, tuve la oportunidad de liderar equipos de estudiantes, fomentando la sinergia y la colaboración. Aprendí a abordar desafíos de manera eficiente y a proponer soluciones que impactaron positivamente en el Bootcamp.",
      },
      {
        company: "Dirección General de CyE de la Prov. de BA",
        companylogo: "",
        position: "Profesor de Educación Física",
        time: "Abril 2017 - Abril 2024",
        description:
          "Soy un profesional apasionado por la salud, el bienestar y el rendimiento físico, con experiencia en educación física, entrenamiento y preparación deportiva. He desarrollado programas educativos en escuelas, promoviendo hábitos saludables y la actividad física. Como coordinador y entrenador de hockey, he liderado equipos en competencias locales e internacionales, planificando estrategias y mejorando el rendimiento de los jugadores. Además, diseño planes de acondicionamiento físico personalizados, enfocados en resistencia, fuerza y prevención de lesiones, aplicando conocimientos en biomecánica y nutrición para optimizar el desempeño deportivo.",
      },
    ],
  },
  blogs: {
    //set this to false if you want to omit this section
    visible: true,
  },
};

export const headings = {
  //you can customise all the headings here.
  workHomePage: "Experiencia laboral",
  workMainPage: "Mis Proyectos",
  capabilities: "Mis Habilidades",
  about: "Sobre mí",
  education: "Educación",
  experience: "Experiencias",
  blogs: "¡Escribo!",
  contact: "Contáctame",
};

export const ctaTexts = {
  //you can customise all the cta texts here.
  landingCTA: "Mi trabajo",
  workCTA: "Ver más",
  capabCTA: "Ponte en contacto",
  educationCTA: "Sobre mí",
  resumeCTA: "Resumen",
  submitBTN: "Enviar",
};
