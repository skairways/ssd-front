import {createBrowserRouter, Navigate, Outlet} from "react-router-dom"
import HomePage from "@/pages/home"
import NotFoundPage from "@/pages/not-found";
import { AppPages } from "@/shared/constants/routes"
import { ErrorBoundary } from "react-error-boundary";
import {CodeErrorComponent} from "@/shared/ui/errors";

const ErrorBoundaryLayout = () => (
	<ErrorBoundary FallbackComponent={CodeErrorComponent}>
		<Outlet />
	</ErrorBoundary>
);

export const router = createBrowserRouter([
	{
		element: <ErrorBoundaryLayout />,
		children: [
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
		]
	}
])