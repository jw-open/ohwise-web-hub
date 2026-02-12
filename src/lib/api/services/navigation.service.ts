import { getCollection } from "../client";
import { URLS } from "../urls";
import { NavigationItem } from "../types/navigation";

export const navigationService = {
  getAll: () => getCollection<NavigationItem>(URLS.navigation),
};
