import Sign_In from './Components/Sign-in'
import Login from './Components/Login';
import Error from './Components/Error-Page/Error';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/sign-up"}/>,
    errorElement: <Error />,
  },
  {
    path: "/sign-up",
    element: <Sign_In/>,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
