const levels = {
  BEGINNER: {
    val: "Beginner",
    color: "bg-pink-500",
  },
  INTERMEDIATE: {
    val: "Intermediate",
    color: "bg-yellow-600",
  },
  COMPETENT: {
    val: "Competent",
    color: "bg-blue-500",
  },
  EXPERT: {
    val: "Expert",
    color: "bg-green-500",
  },
};

export const skills = [
  {
    name: "languages",
    title: "Languages/Frameworks",
    talents: [
      {
        name: "JavaScript",
        icon: "https://skillicons.dev/icons?i=js",
        proficiency: levels.EXPERT,
      },
      {
        name: "TypeScript",
        icon: "https://skillicons.dev/icons?i=ts",
        proficiency: levels.EXPERT,
      },
      {
        name: "ReactJS",
        icon: "https://skillicons.dev/icons?i=react",
        proficiency: levels.EXPERT,
      },
      {
        name: "NextJS",
        icon: "https://skillicons.dev/icons?i=nextjs",
        proficiency: levels.EXPERT,
      },
      {
        name: "Redux",
        icon: "https://skillicons.dev/icons?i=redux",
        proficiency: levels.EXPERT,
      },
      {
        name: "Remix",
        icon: "https://skillicons.dev/icons?i=remix",
        proficiency: levels.COMPETENT,
      },
      {
        name: "GraphQL",
        icon: "https://skillicons.dev/icons?i=graphql",
        proficiency: levels.COMPETENT,
      },
      {
        name: "Jest",
        icon: "https://skillicons.dev/icons?i=jest",
        proficiency: levels.COMPETENT,
      },
      {
        name: "Python",
        icon: "https://skillicons.dev/icons?i=python",
        proficiency: levels.INTERMEDIATE,
      },
      // {
      //   name: "Java",
      //   icon: "https://skillicons.dev/icons?i=java",
      //   proficiency: levels.BEGINNER,
      // },
      // {
      //   name: "Rust",
      //   icon: "https://skillicons.dev/icons?i=rust",
      //   proficiency: levels.BEGINNER,
      // },
    ],
  },
  {
    name: "styling",
    title: "Styling",
    talents: [
      {
        name: "CSS",
        icon: "https://skillicons.dev/icons?i=css",
        proficiency: levels.EXPERT,
      },
      {
        name: "SASS",
        icon: "https://skillicons.dev/icons?i=sass",
        proficiency: levels.EXPERT,
      },
      {
        name: "CSS-in-JS",
        icon: "https://skillicons.dev/icons?i=styledcomponents",
        proficiency: levels.EXPERT,
      },
      {
        name: "TailwindCSS",
        icon: "https://skillicons.dev/icons?i=tailwind",
        proficiency: levels.COMPETENT,
      },
    ],
  },
  {
    name: "tooling",
    title: "Infra/Tooling",
    talents: [
      {
        name: "Git",
        icon: "https://skillicons.dev/icons?i=git",
        proficiency: levels.EXPERT,
      },
      {
        name: "Jenkins + CI/CD",
        icon: "https://skillicons.dev/icons?i=jenkins",
        proficiency: levels.COMPETENT,
      },
      {
        name: "Linux",
        icon: "https://skillicons.dev/icons?i=linux",
        proficiency: levels.COMPETENT,
      },
      {
        name: "Docker",
        icon: "https://skillicons.dev/icons?i=docker",
        proficiency: levels.INTERMEDIATE,
      },
      {
        name: "AWS",
        icon: "https://skillicons.dev/icons?i=aws",
        proficiency: levels.INTERMEDIATE,
      },
    ],
  },
  {
    name: "storage",
    title: "Storage",
    talents: [
      {
        name: "PostgreSQL",
        icon: "https://skillicons.dev/icons?i=postgres",
        proficiency: levels.COMPETENT,
      },
      {
        name: "MongoDB",
        icon: "https://skillicons.dev/icons?i=mongo",
        proficiency: levels.COMPETENT,
      },
      {
        name: "Firebase",
        icon: "https://skillicons.dev/icons?i=firebase",
        proficiency: levels.COMPETENT,
      },
      {
        name: "MySQL",
        icon: "https://skillicons.dev/icons?i=mysql",
        proficiency: levels.INTERMEDIATE,
      },
    ],
  },
  {
    name: "others",
    title: "Others",
    talents: [
      {
        name: "Jira/Linear/Scrum/Agile",
        icon: "",
        proficiency: levels.COMPETENT,
      },
      {
        name: "Product Management",
        icon: "",
        proficiency: levels.INTERMEDIATE,
      },
      {
        name: "Figma",
        icon: "https://skillicons.dev/icons?i=figma",
        proficiency: levels.INTERMEDIATE,
      },
      {
        name: "React Native",
        icon: "",
        proficiency: levels.INTERMEDIATE,
      },
    ],
  },
];
