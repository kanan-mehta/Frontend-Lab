import fmLogo from "../assets/fm-logo.svg";
import personalProjectLogo from "../assets/personal-project-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import typescriptLogo from "../assets/typescript-logo.svg";

export const labItems = [
  {
    title: "Frontend Mentor Challenges",
    description:
      "Practising HTML, CSS, JavaScript, responsive design, accessibility, and React through Frontend Mentor challenges.",
    icon: fmLogo,
    href: "/frontend-mentor",
  },
  {
    title: "React Challenges",
    description:
      "Small projects focused on React components, state, events, and practical React concepts.",
    icon: reactLogo,
    href: "/react-challenges",
  },
  {
    title: "JavaScript / TypeScript Katas",
    description:
      "Coding exercises for strengthening JavaScript and TypeScript fundamentals and problem-solving.",
    icon: typescriptLogo,
    href: "/js-ts-kata",
  },
  {
    title: "Personal Projects",
    description:
      "Larger projects where I bring together the concepts I'm learning and experiment with frontend and full-stack technologies.",
    icon: personalProjectLogo,
    href: "/personal-projects",
  },
] as const;
