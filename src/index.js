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
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <ModalsProvider>
            <RouterProvider router={router} />
        </ModalsProvider>
    </React.StrictMode>
)
