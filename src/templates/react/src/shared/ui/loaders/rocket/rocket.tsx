import styles from "./index.module.scss"

export const RocketLoader = () => {
	return (
		<div className={styles.loaderContainer}>
			<img src="./rocket.gif" alt="loading..." />
		</div>
	)
}
