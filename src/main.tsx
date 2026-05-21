import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ManageLeads from "./pages/ManageLeads/index.tsx";
import SidebarProvider from "./contexts/SidebarContext.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <SidebarProvider>
        <App />
      </SidebarProvider>
    ),
    children: [
      {
        path: "manage-leads",
        element: <ManageLeads />,
        handle: {
          title: "Manage Your Leads",
          subtitle:
            "Monitor lead status, assign tasks, and close deals faster.",
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routes} />,
);
