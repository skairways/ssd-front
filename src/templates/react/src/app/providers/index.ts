import compose from "compose-function"

import { WithReactquery } from "./with-react-query"
import { WithRouter } from "./with-router"

export const withHocs = compose(WithRouter, WithReactquery)
