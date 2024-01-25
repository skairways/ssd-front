import { createBrowserRouter, Navigate } from "react-router-dom"

import HomePage from "@/pages/home"
import NotFoundPage from "@/pages/not-found"

import { AppPages } from "@/shared/constants/routes"

export const router = createBrowserRouter([
	{
		path: AppPages.RootPage,
		element: <HomePage />,
	},
	{
		path: AppPages.NotFoundPage,
		element: <NotFoundPage />,
	},
	{
		path: AppPages.AnyPage,
		element: <Navigate replace to={AppPages.NotFoundPage} />,
	},
])
