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
          endDate: "Nov, 2022",
          showDuration: false,
          achievements: [
            "Adding support for Safari",
            "Adding support for themes(ThemeUI)",
            "Introducing new components(DnD components, custom scrollbars, tooltip, …)",
          ],
          summary:
            "I joined On24 to help the team migrate a legacy BackboneJS codebase to React and while there I assisted with improving their existing ReactJS library, fixing bugs, adding support for Safari, building media player, DnD, and other web components.",
          role: "Senior Software Developer",
          description:
            "On24 is a public company building webcasting and virtual events software products.",
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
          showDuration: false,
          achievements: [
            "Worked on backend services that achieved OTP, SMS notifications, and approval of new businesses/merchants for the Safaricom merchant self-onboarding platform",
            "As Product Lead, I helped the team increase the number of merchants by 10% by fixing bugs and assisting to migrate UI and microservices from on-premise servers to AWS.",
          ],
          summary:
            "At Safaricom, I was part of a team working to deliver the mPesa-Self-Onboarding-Portal(https://m-pesaforbusiness.co.ke/). I built client applications and microservices using ReactJS, VueJS and SpringBoot(Java) and helped the team move the product from on-premise to AWS as product lead.",
          role: "Software Developer",
          description:
            "Safaricom is the biggest telecommunication company in East Africa, I joined them as a Sofware Developer and later became a Technical Product Lead.",
        },
        {
          id: cuid(),
          type: "Remote",
          name: "I&M Bank Ltd",
          short: "inm",
          location: "Kenya, Nairobi",
          industry: "Banking",
          startDate: "Mar, 2020",
          endDate: "Oct, 2020",
          showDuration: false,
          duration: "8mo",
          achievements: [
            "Built APIs(SpringBoot, Java) and web apps(ReactJS) for platforms used by the I&M team to monitor payments and adjust configurations",
            "Handle user management integrations and build APIs to manage configurations",
            "Come up with QA specifications and perform regression and load testing",
          ],
          summary:
            "I joined I&M Bank Payment Gateway as a QA Engineer and was charged with performing end-to-end and regression testing and later switched to a development role where I was using Springboot(Java) and ReactJS to build tools for their IT team.",
          role: "Software Developer + QA Engineer",
          description:
            "I&M Bank is one of the biggest banks in Africa, I joined their payment gateway team to assist deliver an MVP to handle cross-payments(mPesa, Pesalink, ...) in Kenya.",
        },
        {
          id: cuid(),
          type: "Remote",
          name: "Mobiliti",
          short: "mob",
          industry: "Automotive",
          startDate: "Oct, 2018",
          endDate: "Feb, 2020",
          showDuration: false,
          duration: "1yr, 5mo",
          achievements: [
            "Built their design system with ReactJS and StoryBook",
            "Developed and maintained Rest APIs(Python) that handled vehicle inventory and subscriptions",
            "Onboarded and managed a team of 3 developers to the frontend team",
            "Assisted on bugs in a legacy .NET/Webflow codebase and improved performance by 5%",
            "Implemented integrations with HelloSign, Paypal, and Stripe",
          ],
          summary:
            "Some of my achievements while at Mobiliti include building a component library using ReactJS and Storybook, helping the team launch their initial web app versions, assisting with building, testing and maintaining backend Rest Apis, and working on integrations for HelloSign, Paypal and Stripe.",
          role: "Software Developer",
          description:
            "Mobiliti was an automotive company building software to handle vehicle subscriptions as a service.",
        },
        {
          id: cuid(),
          type: "apprenticeship",
          name: "Andela Apprenticeship Program",
          industry: "",
          location: "Nairobi, Kenya",
          startDate: "Apr, 2018",
          achievements: [],
          showDuration: true,
          summary:
            "I worked on opensource projects(Wger, healthchecks.io) using Python, Django and jQuery",
          role: "Apprentice",
          duration: "3 months",
          description: "",
        },
        {
          id: cuid(),
          type: "fellowship",
          name: "Andela Fellowship Program",
          industry: "",
          location: "Nairobi, Kenya",
          startDate: "Nov, 2017",
          achievements: [],
          showDuration: true,
          role: "Trainee",
          duration: "6 months",
          summary:
            "I learned web development and programming skills including data structures, OOP, Api development(Python, Flask) and JavaScript.",
          description: "",
        },
      ],
    },
    // {
    //   id: cuid(),
    //   companyName: "Kuisoko",
    //   type: "opensource",
    //   industry: "Marketplace",
    //   startDate: "Nov, 2017",
    //   endDate: "Present",
    //   role: "Software Developer",
    //   comment: "",
    //   description: "",
    // },
  ],
  school: [
    {
      id: cuid(),
      name: "Adventist University of Central Africa",
      type: "school",
      location: "Kigali, Rwanda",
      startDate: "2015",
      endDate: "2017",
      fieldOfStudy: "Bachelor of Information Technology",
      icon: "",
      comment: "",
      description:
        "I attended AUCA for 2 years before joining the Andela Fellowship Program",
    },
    {
      id: cuid(),
      name: "St. Kizito Technical High School, Save",
      type: "school",
      location: "",
      startDate: "2012",
      endDate: "2014",
      fieldOfStudy: "Computer Science and Electronics",
      icon: "",
      comment: "",
      description: "",
    },
  ],
};

export default carreer;
