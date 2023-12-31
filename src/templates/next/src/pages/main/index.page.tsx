import { Inter } from "next/font/google"
import Head from "next/head"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./styles.module.scss"
import { PagePart } from "./ui"

const inter = Inter({ subsets: ["latin"] })

const HomePage = ({ stars }: { stars: number }) => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={inter.className}>
				<h1 className={s.wrapper}>HomePage</h1>
				<FilledButton>test</FilledButton>
				<PagePart />
				{stars}
			</main>
		</>
	)
}

export default HomePage
