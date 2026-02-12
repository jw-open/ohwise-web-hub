import { getSingle } from "../client";
import { URLS } from "../urls";
import { About } from "../types/about";

export const aboutService = {
  get: () => getSingle<About>(URLS.about),
};
