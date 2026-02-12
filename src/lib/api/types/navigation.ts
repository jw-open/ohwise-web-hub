export interface NavigationItem {
  id: number;
  title: string;
  path: string;
  type: "internal" | "external";
}
