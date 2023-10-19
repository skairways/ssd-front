import compose from "compose-function"

import { WithReactquery } from "./with-react-query"
import { WithRouter } from "./with-router"
import { WithToastify } from "./with-toastify"

export const withHocs = compose(WithReactquery, WithToastify, WithRouter)
