import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    sql,
    git,
    ikea,
    quantangled,
    spaceescape,
    weatherapp,
    chimneysweep,
    threejs,
    python,
    java,
    Csharp,
    david
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "AI Devloper",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C#",
      icon: Csharp,
    },
  ];
  
  const experiences = [
    {
      title: "Checkout Assistant",
      company_name: "IKEA",
      icon: ikea,
      iconBg: "#383E56",
      date: "May 2021 - December 2023",
      points: [
        "Operations Supervision: Experience overseeing and managing day-to-day operations in fast-paced environments.",
        "Employee Training & Guidance: Skilled in mentoring new team members and onboarding processes.",
        "Communication: Experience in drafting monthly newsletters, delivering essential updates and notices to teams.",
        "Time Management: Proven ability to handle multiple responsibilities effectively and efficiently, averaging 60 customers per hour.",
        "Adaptability: Worked across two different store locations, demonstrating flexibility in diverse environments.",
        "First Aid Training: Certified in first aid, adding a unique skill to contribute to team safety and support.",
        "Team Collaboration: Strong collaborative experience, ensuring smooth workflow and operational success resulting in an increase in productivity.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Simplified my original website and made it more user-friendly, as well as removing unnecessary things.",
      name: "David O'Donnell",
      designation: "Business Owner",
      company: "ESSweeps",
      image: david,
    },
  ];
  
  const projects = [
    {
      name: "Chimney Sweep Website",
      description:
        "Static Webpage that allows users to find key information regarding chimney sweeping, and also contact information for this chimney sweep.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: chimneysweep,
      source_code_link: "https://essweeps.co.uk",
    },
    {
      name: "Weather App",
      description:
        "Web application developed for android devices. Shows key weather information in the user's location and allows them to search different locations.",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/Robert151003/WeatherApp",
    },
    {
      name: "Space Escape",
      description:
        "A puzzle game developed in Unity using C#. The player must navigate through a maze of obstacles to reach the spaceship.",
      tags: [
        {
          name: "C-Sharp",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
      ],
      image: spaceescape,
      source_code_link: "https://github.com/Robert151003/SpaceEscape",
    },
    {
      name: "Quantangled",
      description:
        "A platformer game developed in Unity using C#. This game was developed in a team of 8 and was submitted to the GMTK game jam 2024. The player has multiple obstacles to go through to complete the story.",
      tags: [
        {
          name: "C-Sharp",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
      ],
      image: quantangled,
      source_code_link: "https://github.com/eevrip/GMTK_Game_Jam_2024",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };