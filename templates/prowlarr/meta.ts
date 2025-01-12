// Generated using "yarn build-templates"

export const meta = {
  name: "Prowlarr",
  description:
    "Prowlarr is an indexer manager/proxy built on the popular *arr .net/reactjs base stack to integrate with your various PVR apps. Prowlarr supports management of both Torrent Trackers and Usenet Indexers.",
  instructions: null,
  changeLog: [{ date: "2022-12-26", description: "first release" }],
  links: [
    { label: "Website", url: "https://prowlarr.com/" },
    { label: "Documentation", url: "https://wiki.servarr.com/prowlarr" },
    { label: "Github", url: "https://github.com/Prowlarr/Prowlarr/" },
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
        default: "prowlarr",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "linuxserver/prowlarr",
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
