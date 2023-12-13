import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import Details from "./pages/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "explore",
          element: <ExplorePage />,
        },
        {
          path: "detail/:id",
          element: <Details />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
