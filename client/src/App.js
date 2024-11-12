import "./App.css";
import User from "./getuser/User";
import Update from "./updateuser/Update";
import Teacher from "./Teacher";
import AddUserAndTeacher from "./AddUserAndTeacher"; // Import new component
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUserAndTeacher />, // Combined form page route
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
    {
      path: "/teachers",
      element: <Teacher />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
