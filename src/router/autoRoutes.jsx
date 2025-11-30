import React from "react";

function normalizePath(filePath) {
  // Remove "../app" prefix and "/page.jsx"
  let route = filePath
    .replace("../app", "")
    .replace("/page.jsx", "");

  // Convert Next.js dynamic routes: [id] → :id
  route = route.replace(/\[([^\]]+)\]/g, ":$1");

  // If route is empty = home route
  if (route === "") route = "/";

  return route;
}

export function importAllPages() {
  const modules = import.meta.glob("../../app/**/page.jsx", { eager: true });

  const routes = [];

  Object.entries(modules).forEach(([filePath, module]) => {
    const PageComponent = module.default;

    const path = normalizePath(filePath.replace("../../", "../"));

    routes.push({
      path,
      element: <PageComponent />,
    });
  });

  return routes;
}

export const autoRoutes = importAllPages();
