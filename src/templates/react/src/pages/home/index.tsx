import logo from "@/shared/assets/images/logo.png"

import s from "./styles.module.scss"

const HomePage = () => {
	return (
		<div className={s.wrapper}>
			<div>
				<a href="https://www.ssd.uz/" target="_blank" rel="noreferrer">
					<img src={logo} className={s.logo} alt="SSD logo" />
				</a>
			</div>
			<h1>React + Typescript + Vite</h1>
		</div>
	)
}

export default HomePage
