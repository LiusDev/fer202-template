import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./pages"
import ModalsProvider from "./context/ModalsContext"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    // Add more routes here, eg:
    // {
    //     path: "/about",
    //     element: <AboutPage />,
    // }
    // Dynamic routes can be added using the : syntax, eg:
    // {
    //     path: "/users/:id", // the id will use for useParams hook: const { id } = useParams()
    //     element: <UserPage />,
    // }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <ModalsProvider>
            <RouterProvider router={router} />
        </ModalsProvider>
    </React.StrictMode>
)
