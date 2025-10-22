'use client'

import { data } from '@/data/data'
import { useStateProvider } from '@/providers/StateProvider'
import { Era } from '@/types/timelineEvents'
import { getHighestBCOrLowestEC } from '@/utils'
import Baseline from './parts/baseline'
import Event from './parts/event'

const Timeline = () => {
	const { activeEvent, handleEvent } = useStateProvider()
	const currentYear = new Date().getFullYear()
	const start = getHighestBCOrLowestEC(data)
	const zoom = 1

	//TODO: Filtrar se nao estive inativo
	//TODO: Ativar Evento se clicado para mostrar na lateral
	//TODO: Melhorar Design

	return (
		<>
			<div>
				{data
					// .filter((t) => t.labels?.all((v) => activeLabels.includes(v)))
					.sort((a, b) => a.order - b.order)
					.map((t) => {
						const width =
							t.start.era === Era.EC
								? (t.end ? t.end.year : currentYear) - t.start.year
								: t.start.year - (t.end ? t.end.year : currentYear)

						const distance =
							t.start.era === Era.EC && start.era === Era.BC
								? start.year + t.start.year
								: start.year - t.start.year

						return (
							<Event
								key={t.id}
								event={t}
								distance={distance * zoom}
								width={width}
								activeEvent={activeEvent}
								handleEvent={handleEvent}
							/>
						)
					})}
			</div>
			<Baseline start={start.year} era={start.era} zoom={zoom} intermediaryYear={100} />
		</>
	)
}

export default Timeline
