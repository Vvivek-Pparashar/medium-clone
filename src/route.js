import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomePage from "./BlogPage/HomePage/HomePage.jsx";
import OutletFeed from "./BlogPage/HomePage/OutletFeed";
import ArticleView from "./BlogPage/HomePage/ArticleView";
import TextEditor from "./BlogPage/TextEditor/TextEditor";

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
        element:<TextEditor/>
  }
]);

export default router;
