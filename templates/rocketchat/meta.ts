// Generated using "yarn build-templates"

export const meta = {
  name: "Rocket.Chat",
  description:
    "Rocket.Chat is an open-source fully customizable communications platform developed in JavaScript for organizations with high standards of data protection. Real-time conversations between colleagues, with other companies or with your customers, regardless of how they connect with you. The result is an increase in productivity and customer satisfaction rates.Every day, tens of millions of users in over 150 countries and in organizations such as Deutsche Bahn, The US Navy, and Credit Suisse trust Rocket.Chat to keep their communications completely private and secure.",
  instructions: null,
  changeLog: [{ date: "2022-08-10", description: "first release" }],
  links: [
    { label: "Website", url: "https://rocket.chat/" },
    { label: "Documentation", url: "https://docs.rocket.chat/" },
    { label: "Github", url: "https://github.com/RocketChat/Rocket.Chat" },
  ],
  contributors: [
    { name: "Bedeoan Raul", url: "https://github.com/bedeoan" },
    { name: "Andrei Canta", url: "https://github.com/deiucanta" },
  ],
  schema: {
    type: "object",
    required: [
      "projectName",
      "appServiceName",
      "appServiceImage",
      "databaseServiceName",
    ],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "rocketchat",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "rocket.chat:5.2.0",
      },
      databaseServiceName: {
        type: "string",
        title: "Database Service Name",
        default: "rocketchat-db",
      },
    },
  },
  logo: "logo.png",
  screenshots: ["screenshot.jpg"],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;
export type DatabaseServiceName = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
  databaseServiceName: DatabaseServiceName;
}
