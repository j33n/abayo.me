import cuid from "cuid";

export const carreer = {
  work: [
    {
      id: cuid(),
      companyName: "Andela",
      industry: "Software Company",
      location: "New York, United States",
      workType: "Hybrid",
      type: "work",
      startDate: "Nov, 2017",
      endDate: "Present",
      role: "Software Developer",
      comment:
        "I joined Andela as a trainee/apprentice and worked on open-source projects, internal projects, and Andela partner companies presented below.",
      description:
        "Andela connects global talent to opportunities to create high-performing technology teams.",
      journey: [
        {
          id: cuid(),
          type: "contract",
          name: "On24",
          short: "ontf",
          location: "",
          workType: "Remote",
          duration: "9mo",
          industry: "Video Conferencing software",
          startDate: "Feb, 2022",
          achievements: [],
          role: "Senior Software Developer",
          description: "",
        },
        {
          id: cuid(),
          type: "contract",
          name: "Safaricom PLC",
          short: "saf",
          location: "Nairobi, Kenya",
          industry: "Telecommunications",
          duration: "1yr, 1mo",
          startDate: "Oct, 2020",
          endDate: "Oct, 2021",
          achievements: [],
          role: "Software Developer",
          description: [
            "Joined Safaricom as a Sofware Developer",
            "Technical Product Lead at Safaricom",
          ],
        },
        {
          id: cuid(),
          type: "Remote",
          name: "I&M Bank Ltd",
          short: "inm",
          location: "Kenya, Nairobi",
          industry: "Banking",
          startDate: "Nov, 2017",
          duration: "8mo",
          endDate: "Present",
          achievements: [],
          role: "Software Developer + QA Engineer",
          description:
            "Joined I&M Bank as QA Engineer on the Payment Gateway team",
        },
        {
          id: cuid(),
          type: "Remote",
          name: "Mobiliti",
          short: "mob",
          industry: "Automotive",
          startDate: "Oct, 2018",
          duration: "1yr, 5mo",
          achievements: [],
          role: "Software Developer",
          description:
            "Mobiliti was an automotive company building software to handle vehicle subscription as a service.",
        },
        {
          id: cuid(),
          type: "apprenticeship",
          name: "Andela Apprenticeship Program",
          industry: "",
          location: "Nairobi, Kenya",
          startDate: "Apr, 2018",
          achievements: [],
          role: "Apprentice",
          duration: "3 months",
          description: "Started the Andela Apprenticeship Program",
        },
        {
          id: cuid(),
          type: "fellowship",
          name: "Andela Fellowship Program",
          industry: "",
          location: "Nairobi, Kenya",
          startDate: "Nov, 2017",
          achievements: [],
          role: "Trainee",
          duration: "6 months",
          description:
            "Dropped out of college to join the Andela Fellowship Program",
        },
      ],
    },
    // {
    //   id: cuid(),
    //   companyName: "Kuisoko",
    //   type: "opensource",
    //   industry: "HR Company",
    //   startDate: "Nov, 2017",
    //   endDate: "Present",
    //   role: "Software Developer",
    //   icon: "https://media.licdn.com/dms/image/C560BAQHOiEePQQlQ8g/company-logo_100_100/0/1656607039747?e=1688601600&v=beta&t=Dxb0BRZlob8zA4qSeiHOf4e_LxR0hI2N4LFFKavwChc",
    //   comment: "",
    //   description: "",
    // },
  ],
  school: [
    {
      name: "Adventist University of Central Africa",
      type: "school",
      location: "Kigali, Rwanda",
      startDate: "",
      endDate: "",
      fieldOfStudy: "Bachelor of Information Technology, Software Engineering",
      icon: "",
      comment: "",
      description: "Attended AUCA",
    },
    {
      name: "Ecole Technique St Kizito, Save",
      type: "school",
      location: "",
      startDate: "",
      endDate: "",
      fieldOfStudy: "",
      icon: "",
      comment: "",
      description: "",
    },
  ],
};

export default carreer;