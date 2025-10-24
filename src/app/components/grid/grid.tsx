import styles from './grid.module.scss'
interface GridProps {
	yearsNumber: number
	step: number
}

const Grid = ({ yearsNumber, step }: GridProps) => {
	const years = Array.from({ length: yearsNumber }, (_, i) => i + 1)
	return (
		<div
			className={styles.grid}
			style={{
				gridTemplateColumns: `repeat(${years.length}, 1fr)`
			}}
		>
			{years.map((_, index) => (
				<div key={index} className={styles.gridCell} style={{ marginRight: `${step}px` }} />
			))}
		</div>
	)
}

export default Grid
