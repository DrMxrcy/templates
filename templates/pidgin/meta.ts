// Generated using "yarn build-templates"

export const meta = {
  name: "Pidgin",
  description:
    "Pidgin is a chat program which lets you log into accounts on multiple chat networks simultaneously.",
  instructions:
    "use abc:abc to login. To access the login interface, add ?login=true to your URL.",
  changeLog: [{ date: "2022-11-23", description: "first release" }],
  links: [
    {
      label: "Documentation",
      url: "https://docs.linuxserver.io/images/docker-pidgin",
    },
    { label: "Github", url: "https://github.com/linuxserver/docker-pidgin" },
  ],
  contributors: [
    { name: "Supernova3339", url: "https://github.com/Supernova3339" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "appServiceName", "appServiceImage"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "pidgin",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "lscr.io/linuxserver/pidgin:latest",
      },
    },
  },
  logo: "logo.png",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
}
