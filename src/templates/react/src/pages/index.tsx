import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { ArticlePage } from "@/pages/example/id"
import ExamplePage from "@/pages/example/root"
import HomePage from "@/pages/home"
import NotFoundPage from "@/pages/not-found"

import { AppPages } from "@/shared/constants/routes"
import { RocketLoader } from "@/shared/ui/loaders"

export const AppRoutes = () => {
	return (
		<Suspense fallback={<RocketLoader />}>
			<Routes>
				<Route path={AppPages.RootPage} element={<HomePage />} />

				<Route path={`${AppPages.ExamplePage}/:id`} element={<ArticlePage />} />

				<Route path={AppPages.ExamplePage} element={<ExamplePage />} />

				<Route path={AppPages.NotFoundPage} element={<NotFoundPage />} />

				<Route
					path="*"
					element={<Navigate replace to={AppPages.NotFoundPage} />}
				/>
			</Routes>
		</Suspense>
	)
}
