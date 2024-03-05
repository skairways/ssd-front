import { createBrowserRouter, Navigate } from "react-router-dom"

import ArticlePage from "@/pages/example/id"
import ExamplePage from "@/pages/example/root"
import HomePage from "@/pages/home"
import NotFoundPage from "@/pages/not-found"

import { AppPages } from "@/shared/constants/routes"
import { ErrorBoundary } from "react-error-boundary";
import {CodeErrorComponent} from "@/shared/ui/errors";

export const router = createBrowserRouter([
	{
		element: <ErrorBoundary FallbackComponent={CodeErrorComponent}/>,
		children: [
			{
				path: AppPages.RootPage,
				element: <HomePage />,
			},
			{
				path: AppPages.ExamplePage,
				children: [
					{
						index: true,
						element: <ExamplePage />,
					},
					{
						path: ":id",
						element: <ArticlePage />,
					},
				],
			},
			{
				path: AppPages.NotFoundPage,
				element: <NotFoundPage />,
			},
			{
				path: AppPages.AnyPage,
				element: <Navigate replace to={AppPages.NotFoundPage} />,
			},
		]
	}
])
