import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import SuburbPage from "./pages/SuburbPage";
import SuburbsIndexPage from "./pages/SuburbsIndexPage";

// Root route with Layout
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <FloatingWhatsApp />
      <Toaster position="top-right" />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: FAQPage,
});

// Suburbs routes
const suburbsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs",
  component: SuburbsIndexPage,
});

const suburbSydneyCbdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/sydney-cbd",
  component: () => <SuburbPage slug="sydney-cbd" />,
});

const suburbParramattaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/parramatta",
  component: () => <SuburbPage slug="parramatta" />,
});

const suburbBondiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/bondi",
  component: () => <SuburbPage slug="bondi" />,
});

const suburbNewtownRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/newtown",
  component: () => <SuburbPage slug="newtown" />,
});

const suburbChatswoodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/chatswood",
  component: () => <SuburbPage slug="chatswood" />,
});

const suburbLiverpoolRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/liverpool",
  component: () => <SuburbPage slug="liverpool" />,
});

const suburbPenrithRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/penrith",
  component: () => <SuburbPage slug="penrith" />,
});

const suburbManlyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/manly",
  component: () => <SuburbPage slug="manly" />,
});

const suburbHurstvilleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/hurstville",
  component: () => <SuburbPage slug="hurstville" />,
});

const suburbBlacktownRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/blacktown",
  component: () => <SuburbPage slug="blacktown" />,
});

const suburbCronullaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/cronulla",
  component: () => <SuburbPage slug="cronulla" />,
});

const suburbStrathfieldRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/strathfield",
  component: () => <SuburbPage slug="strathfield" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  faqRoute,
  suburbsRoute,
  suburbSydneyCbdRoute,
  suburbParramattaRoute,
  suburbBondiRoute,
  suburbNewtownRoute,
  suburbChatswoodRoute,
  suburbLiverpoolRoute,
  suburbPenrithRoute,
  suburbManlyRoute,
  suburbHurstvilleRoute,
  suburbBlacktownRoute,
  suburbCronullaRoute,
  suburbStrathfieldRoute,
]);

const hashHistory = createHashHistory();

const router = createRouter({
  routeTree,
  history: hashHistory,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
