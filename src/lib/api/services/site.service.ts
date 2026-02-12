import { getSingle } from "../client";
import { URLS } from "../urls";
import { SiteSettings } from "../types/site";

export const siteService = {
  get: () => getSingle<SiteSettings>(URLS.site),
};
