import { Link } from "react-router-dom"

import logo from "@/shared/assets/logo.png"
import { AppPages } from "@/shared/constants/routes"

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
			<Link to={AppPages.ExamplePage}>
				<h2>Example</h2>
			</Link>
		</div>
	)
}

export default HomePage
