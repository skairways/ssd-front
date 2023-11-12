import compose from "compose-function"

import { WithMantine } from "./with-mantine"

// import { WithToastify } from "./with-toastify"

export const withHocs = compose(/* WithToastify */ WithMantine)
