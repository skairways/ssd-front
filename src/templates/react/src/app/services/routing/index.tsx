import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import HomePage from "@pages/home"
import NotFoundPage from "@pages/not-found"
import { AppPages } from "@src/shared/constants/routes"
import { RocketLoader } from "@src/shared/ui/loaders"

export const AppRoutes = () => {
	return (
		<Suspense fallback={<RocketLoader />}>
			<Routes>
				<Route path={AppPages.RootPage} element={<HomePage />} />

				<Route path={AppPages.AboutPage} element={<NotFoundPage />} />

				<Route path={AppPages.NotFoundPage} element={<NotFoundPage />} />

				<Route
					path="*"
					element={<Navigate replace to={AppPages.NotFoundPage} />}
				/>
			</Routes>
		</Suspense>
	)
}
