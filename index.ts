import { Page } from "./api.js";
import { HomePage } from "./pages/HomePage.js";
import { TestPage } from "./pages/TestPage.js";

interface Route {
  path: string;
  page: Page;
}

export class Router {
  private routeMap: Map<string, Page>;

  constructor(routes: Route[]) {
    this.routeMap = new Map(routes.map((route) => [route.path, route.page]));
  }

  init() {
    window.addEventListener("popstate", () => {
      this.handleRoute();
    });

    this.handleRoute();
  }

  navigate(path: string) {
    window.history.pushState({}, "", path);
    this.handleRoute();
  }

  private handleRoute() {
    const currentPath = window.location.pathname;
    const page = this.routeMap.get(currentPath);

    if (page == null) {
      throw new Error("No page exists.");
    }

    this.render(page);
  }

  private render(page: Page) {
    const rendered = page(this);

    document.body.innerHTML = "";
    document.body.appendChild(rendered);
  }
}

const routes: Route[] = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/test",
    page: TestPage,
  },
];

const router = new Router(routes);
router.init();
