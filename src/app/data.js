/*
Websites:

- https://github.com/pmdrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (GitHub Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github.com-readme-streak-stats.herokuapp.com (GitHub Readme Streak Stats)

*/

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FFFFB5
}

*/

export const projectsData = [
  {
    id: 1,
    name: "4-Bit ALU Design using Verilog HDL",
    description: "Implemented a 4-bit Arithmetic Logic Unit (ALU) using Verilog HDL for digital design applications. This project demonstrates RTL design principles with support for multiple arithmetic and logic operations.",
    image: "/project1.jpg",
    date: "2024-09-15",
    demoLink: "https://github.com/akashchechare1307",
    githubLink: "https://github.com/akashchechare1307",
  },
  {
    id: 2,
    name: "CMOS Inverter Design and Analysis",
    description: "Designed and simulated a CMOS inverter circuit using SPICE. Analyzed voltage-transfer characteristics, noise margins, and power consumption. Optimized for performance and energy efficiency in VLSI applications.",
    image: "/project2.jpg",
    date: "2024-08-20",
    demoLink: "https://github.com/akashchechare1307",
    githubLink: "https://github.com/akashchechare1307",
  },
  {
    id: 3,
    name: "VLSI Design Fundamentals",
    description: "Comprehensive study of VLSI design methodologies including circuit design, layout, simulation, and verification. Proficient in Verilog HDL for both behavioral and structural modeling.",
    image: "/project3.jpg",
    date: "2024-07-10",
    demoLink: "https://github.com/akashchechare1307",
    githubLink: "https://github.com/akashchechare1307",
  },
];

export const skillsData = [
  {
    name: "Verilog HDL",
    icon: "code",
  },
  {
    name: "RTL Design",
    icon: "cpu",
  },
  {
    name: "VLSI Design",
    icon: "zap",
  },
  {
    name: "Circuit Simulation",
    icon: "activity",
  },
  {
    name: "SystemVerilog",
    icon: "layers",
  },
  {
    name: "Analog Circuit Design",
    icon: "wave",
  },
  {
    name: "Digital Logic Design",
    icon: "grid",
  },
  {
    name: "C++",
    icon: "square",
  },
  {
    name: "Python",
    icon: "circle",
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    link: "https://github.com/akashchechare1307",
    icon: "github",
    newtab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/akash-chechare-40580b288/",
    icon: "linkedin",
    newtab: true,
  },
  {
    label: "X",
    link: "https://twitter.com/akashchechare",
    icon: "twitter",
    newtab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newtab: true,
  },
];

export const navLinks = [
  {
    label: "Home",
  },
  {
    label: "About",
  },
  {
    label: "Projects",
  },
  {
    label: "Contact",
  },
];

export const footerData = {
  name: "Akash Chechare",
  designation: "VLSI & Semiconductor Engineer",
  year: new Date().getFullYear(),
};
