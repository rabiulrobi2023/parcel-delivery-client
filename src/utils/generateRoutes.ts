import type { ComponentType } from "react";

export interface IRouteItems {
  title: string;
  url: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export const generateRoutes = (routesItems: IRouteItems[]) => {
  const path = routesItems.map((item) => item.url);
  const children = routesItems[0].items.map((item) => ({
    path: item.url,
    Component: item.component,
  }));
  const result = {
    path: path[0],
    children: children,
  };
  return result;
};