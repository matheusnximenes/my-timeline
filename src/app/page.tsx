import Details from '@/components/details/details'
import Timeline from '@/components/timeline'
import Labels from '@/components/timeline/parts/labels'
import { useStateProvider } from '@/providers/StateProvider'
import styles from '../styles/main.module.scss'

export default function Home() {
	const { activeEvent } = useStateProvider()

	return (
		<div className={styles.root}>
			<header className={styles.header}>
				{/* <Image
					alt='logo'
					src='https://www.jw.org/assets/ct/5fbcfe1e6c/images/siteLogo-jworg-large.svg'
					width={90}
					height={90}
				/>
				<h1>Jehovah’s Witnesses</h1> */}
				header
			</header>
			<div className={styles.content}>
				<main className={`${styles.main} ${activeEvent ? styles.active_aside : ''}`}>
					<h1 className={styles.title}>Timeline</h1>
					<div className={styles.timeline}>
						<Timeline />
					</div>
				</main>
				<aside className={`${styles.aside} ${activeEvent ? styles.active_aside : ''}`}>
					<Details />
				</aside>
			</div>
			<footer className={styles.footer}>
				<Labels />
			</footer>
		</div>
	)
}
