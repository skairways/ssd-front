import { RouterProvider } from "react-router-dom"

import { RocketLoader } from "@/shared/ui/loaders"

import { router } from "./routing"

export const WithRouter = () => () => (
	<RouterProvider router={router} fallbackElement={<RocketLoader />} />
)
