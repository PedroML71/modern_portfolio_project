import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import "../index.css";

const RootLayout = () => (
  <>
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>

    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
