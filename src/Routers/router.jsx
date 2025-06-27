import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Root from "../pages/Root/Root";
import EventDetailPage from "../pages/EventDetails/EventDetailPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "../provider/PrivateRoute";
import Login from "../pages/lgoin/Login";
import Singup from "../pages/SingUp/Singup";
import PublicRoute from "../provider/PublicRoute";
import MyProfile from "../pages/MyProfile/MyProfile";
import Terms from "../pages/Bottom/Terms";
import Cookies from "../pages/Bottom/Cookies";
import Policy from "../pages/Bottom/Policy";
import ForgetPassword from "../pages/ForgotPasswordPage/ForgetPassword";
import Loading from "../components/Loading/Loading";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddTask from "../pages/AddTask/AddTask";
import MyPostingTask from "../pages/MyPostingTask/MyPostingTask";
import BrowseTasks from "../pages/BrowseTasks/BrowseTasks";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import DashboardOverview from "../pages/Dashboard/DashboardOverview";

async function loadTaskData() {
  try {
    const response = await fetch("https://freeio-server.vercel.app/tasks");
    if (!response.ok) throw new Error("Failed to load event data");
    return await response.json();
  } catch (error) {
    console.error("Error loading event data:", error);
    throw new Response("Event data not found", { status: 500 });
  }
}
async function loadAllTaskData() {
  try {
    const response = await fetch("https://freeio-server.vercel.app/alltasks");
    if (!response.ok) throw new Error("Failed to load event data");
    return await response.json();
  } catch (error) {
    console.error("Error loading event data:", error);
    throw new Response("Event data not found", { status: 500 });
  }
}

const router = createBrowserRouter([
  //  Public Layout with Navbar & Footer
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: loadTaskData,
        element: <HomePage />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/home",
        loader: loadTaskData,
        element: <HomePage />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/tasks/:taskId",
        loader: async ({ params }) => {
          try {
            const data = await loadAllTaskData();
            const taskData = data.find((task) => task._id === params.taskId);
            if (!taskData) {
              console.error("Task data not found");
            }
            return taskData;
          } catch (error) {
            console.error("Error Task data:", error);
            throw new Response("Task data not found", { status: 404 });
          }
        },
        element: (
          <PrivateRoute>
            <EventDetailPage />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/auth",
        children: [
          {
            path: "login",
            element: (
              <PublicRoute>
                <Login />
              </PublicRoute>
            ),
            hydrateFallbackElement: <Loading />,
          },
          {
            path: "signup",
            element: (
              <PublicRoute>
                <Singup />
              </PublicRoute>
            ),
            hydrateFallbackElement: <Loading />,
          },
          {
            path: "forget-password",
            element: <ForgetPassword />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/all-tasks",
        loader: loadAllTaskData,
        element: <BrowseTasks />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/terms-conditions",
        element: <Terms />,
      },
      {
        path: "/cookies",
        element: <Cookies />,
      },
      {
        path: "/privacy",
        element: <Policy />,
      },
      {
        path: "/my-posted-task",
        loader: loadAllTaskData,
        element: (
          <PrivateRoute>
            <MyPostingTask />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },

  //  Dashboard Layout
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        loader: loadAllTaskData,
        element: <DashboardOverview />,
      },
      {
        path: "all-tasks",
        loader: loadAllTaskData,
        element: <BrowseTasks />,
      },
      {
        path: "my-posted-task",
        loader: loadAllTaskData,
        element: <MyPostingTask />,
      },
      {
        path: "add-task",
        element: <AddTask />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
    ],
  },

  // 404 route
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);


export default router;
