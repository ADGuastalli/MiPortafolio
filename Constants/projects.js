// import project demo images as follows.
import PROJECT1_1 from "../styles/projects/Project1_1.png";
import PROJECT1_2 from "../styles/projects/Project1_2.png";
import PROJECT1_3 from "../styles/projects/Project1_3.png";
import PROJECT2_1 from "../styles/projects/Project2_1.png";
import PROJECT2_2 from "../styles/projects/Project2_2.png";
import PROJECT2_3 from "../styles/projects/Project2_3.png";
import PROJECT3_1 from "../styles/projects/Project3_1.png";
import PROJECT3_2 from "../styles/projects/Project3_2.png";
import PROJECT3_3 from "../styles/projects/Project3_3.png";

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
  //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
  //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
  {
    name: "CRM", //project name
    description:
      "Centralizar la información de tus clientes: Almacena todos los datos importantes de tu relación con los clientes en un solo lugar, desde datos de contacto hasta historial de interacciones. Organizar tus oportunidades de venta: Gestiona tus oportunidades de venta de forma eficaz, desde la calificación hasta el cierre. Automatizar tareas: Ahorra tiempo automatizando tareas repetitivas, como el envío de correos electrónicos o la creación de recordatorios. Mejorar la colaboración: Comparte información y colabora con tu equipo para brindar un mejor servicio a tus clientes. Tomar decisiones informadas: Accede a informes y análisis para comprender mejor a tus clientes y tomar decisiones estratégicas. ", //project description
    githubLink: "", //github repo link
    projectLink: "", //deployed project link
    tech: ["Appsheet", "AppSript", "MySQL"], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
    photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
  },
  {
    name: "CashIn Bot",
    description:
      "CashIn es una aplicación de diagnóstico financiero personalizado permite a los usuarios subir sus datos financieros para recibir un análisis detallado y recomendaciones personalizadas en tiempo real. Desarrollada utilizando un stack tecnológico moderno, la plataforma combina interfaces web responsivas con potentes algoritmos de aprendizaje automático y procesamiento de lenguaje natural para ofrecer una experiencia intuitiva y eficaz.",
    githubLink: "https://github.com/ADGuastalli/CashIn",
    projectLink: "https://test.cashinbot.com/",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
  },
  {
    name: "FitHub",
    description: `FitHub es una plataforma integral diseñada para fomentar un estilo
      de vida activo y saludable. A través de una combinación de
      funcionalidades y recursos, FitHub ofrece una experiencia completa
      para los entusiastas del fitness y aquellos que buscan mejorar su
      bienestar. FitHub se construyó utilizando tecnologías avanzadas,
      como React, Next.js, Tailwind CSS, MercadoPago, Google Maps,
      Auth0, NodeMailer y TypeScript. Esto garantiza una experiencia de
      usuario fluida y segura.`,
    githubLink: "https://github.com/ADGuastalli/FitHub-FinalHenry",
    projectLink: "https://fit-hub-front-end.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
  },
];
