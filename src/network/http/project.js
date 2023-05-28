import { request } from "./request";

export const getAllProjects = async () => {
  return await request("/api/v1/projects", "GET");
};
