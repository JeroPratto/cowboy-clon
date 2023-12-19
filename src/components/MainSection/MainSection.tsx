import React, { useEffect, useState } from 'react'
import { getBikes } from './components/getBikes'
import BikeSectionMobile from './components/BikeSectionMobile'
import BikeSectionDesktop from './components/BikeSectionDesktop'

export type MainSectionProps = {
	// types...
}

const MainSection: React.FC<MainSectionProps> = () => {
	const bikes = getBikes()
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)
	const update = () => {
		setIsDesktop(window.innerWidth > 1024)
	}
	useEffect(() => {
		window.addEventListener('resize', update)
		return () => window.removeEventListener('resize', update)
	})
	return (
		<>
			{isDesktop
				? bikes.map((bike, index) => (
						<BikeSectionDesktop bike={bike} key={index} index={index} />
				  ))
				: bikes.map((bike, index) => (
						<BikeSectionMobile bike={bike} key={index} />
				  ))}
		</>
	)
}

export default MainSection
