import { useEffect, useRef, useState } from 'react'
import getBikes from './getBikes'
import { NavbarArrow } from './icons'
import styles from './styles/BikesMenu.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { closeModal, openModal } from '../../ConfigurationModal'
import ClickOutside from './ClickOutside'

export type BikesMenuProps = {
	className: CSSModuleClasses[string]
}
const BikesMenu: React.FC<BikesMenuProps> = ({ className }) => {
	const bikes = getBikes()
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [isOpen, setIsOpen] = useState(false)
	const toggleStateMenu = () => setIsOpen(!isOpen)

	useEffect(() => {
		if (isOpen) openModal()
		else closeModal()
	}, [isOpen])

	return (
		<ClickOutside
			isOpen={isOpen}
			reference={containerRef}
			setIsOpen={setIsOpen}
		>
			<div ref={containerRef}>
				<button
					className={`${styles.bikeMenuBtn} ${className}`}
					onClick={() => toggleStateMenu()}
				>
					E-BIKES
					<NavbarArrow />
				</button>
				{/* Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.ul
							className={styles.bikeMenuContainer}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.35, ease: 'ease' }}
						>
							<li className={styles.firstItem}>
								<div className={styles.firstInfo}>
									<small>OUR E-BIKES</small>
									<p className={styles.threeModels}>
										Three models to
										<br />
										choose from
									</p>
								</div>
								<p className={styles.bookTest}>Book a test ride</p>
							</li>
							{bikes.map((bike, index) => (
								<li
									className={styles.itemBike}
									key={index}
									style={{ background: bike.bgColor }}
								>
									<div className={styles.info}>
										<small>{bike.delivered}</small>
										<p>{bike.name}</p>
									</div>
									<div className={styles.imgContainer}>
										<img src={bike.urlImage} alt={bike.name} />
									</div>
								</li>
							))}
						</motion.ul>
					)}
				</AnimatePresence>
			</div>
		</ClickOutside>
	)
}

export default BikesMenu
