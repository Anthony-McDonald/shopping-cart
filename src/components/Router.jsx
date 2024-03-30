import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Games from "./Games";
import ErrorPage from "./ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App/>,
          errorElement: <ErrorPage/>,
        },
        {
            path: "games",
            element: <Games />
        },
      ]);
      return <RouterProvider router={router}/>
};

export default Router;