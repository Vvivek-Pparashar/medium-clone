import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomePage from "./BlogPage/HomePage/HomePage.jsx";
import OutletFeed from "./BlogPage/HomePage/OutletFeed";
import ArticleView from "./BlogPage/HomePage/ArticleView";
import WriteHere from "./BlogPage/WriteHere/WriteHere";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>404: Page not found</h1>,
    children: [
      {
        path: "/",
        element: <OutletFeed/>,
      },
      {
        path: "/:id",
        element: <ArticleView />,
      },
    ],
  },

  {
        path:"/write",
        element:<WriteHere/>
  }
]);

export default router;
