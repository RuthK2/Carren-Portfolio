// Configuration constants for Carren Kirwa's portfolio

export const PERSONAL_INFO = {
  name: "Carren Kirwa",
  title: "PhD Computational Chemist & Mathematical Modeller | AI Data Scientist | STEM Expert Evaluator",
  email: "carrenkirwa@gmail.com",
  location: "United Kingdom",
  github: "",
  linkedin: "",
  portfolio: "",
};

export const NAVIGATION = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Contact", path: "#contact" },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", url: PERSONAL_INFO.github, icon: "github" },
  { name: "LinkedIn", url: PERSONAL_INFO.linkedin, icon: "linkedin" },
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "mail" },
];
