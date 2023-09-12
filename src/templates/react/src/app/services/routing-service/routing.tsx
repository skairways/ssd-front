import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import { Loader } from "@components/Loader"
import Login from "@views/login"
import MonitoringPage from "@views/monitoring"
import NotFoundPage from "@pages/not-found"
import { AppPages } from "@src/shared/constants/routes"

export const AppRoutes = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path={AppPages.RootPage} element={<Login />} />

				<Route path={AppPages.AboutPage} element={<MonitoringPage />} />

				<Route path={AppPages.NotFoundPage} element={<NotFoundPage />} />

				<Route
					path="*"
					element={<Navigate replace to={AppPages.NotFoundPage} />}
				/>
			</Routes>
		</Suspense>
	)
}
