import cx from "clsx"
import { FC } from "react"

import rocketGif from "./images/rocket.gif"
import s from "./styles.module.scss"
import { IRocketLoader } from "./types"

export const RocketLoader: FC<IRocketLoader> = ({ fullWidth }) => {
	return (
		<div className={cx(s.loaderContainer, { [s.fullWidth]: fullWidth })}>
			<img src={rocketGif} alt="loading..." />
		</div>
	)
}
