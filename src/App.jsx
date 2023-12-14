import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import Details from "./pages/Details";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AuthorPage from "./pages/AuthorPage";
import { AuthProvider } from "./context/AuthContext";

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
        {
          path: "author/:name",
          element: <AuthorPage />,
        },
      ],
    },
    { path: "signup", element: <SignUpPage /> },
    { path: "login", element: <LoginPage /> },
  ]);
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
