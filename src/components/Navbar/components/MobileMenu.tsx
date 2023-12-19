import { AnimatePresence, motion } from 'framer-motion'
import NavbarCloseIcon from './icons/NavbarCloseIcon'
import NavbarLogoIcon from './icons/NavbarLogoIcon'
import styles from './styles/MobileMenu.module.css'

export type MobileMenuProps = {
	isOpen: boolean
	toggleMobileMenu: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({
	isOpen,
	toggleMobileMenu,
}) => {
	const list = [
		'Classic',
		'Cruiser',
		'Cruiser ST',
		'Connect',
		'Circular',
		'Accessories',
		'Cowboy Care',
		'Theft Insurance',
		'Leasing',
	]

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={styles.mobileListContainer}
				>
					<div className={styles.mobileLogoContainer}>
						<NavbarLogoIcon />
					</div>
					<button
						className={styles.mobileClose}
						onClick={() => toggleMobileMenu()}
					>
						<NavbarCloseIcon />
					</button>
					<ul>
						{list.map((text, index) => (
							<li key={index}>{text}</li>
						))}
					</ul>
					<div className={styles.mobileFooter}>
						<p>Book a test ride</p>
						<a>ORDER NOW</a>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default MobileMenu
