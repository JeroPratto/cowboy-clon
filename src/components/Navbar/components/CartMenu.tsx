import { useEffect, useRef, useState } from 'react'
import { NavbarCartIcon, NavbarCloseIcon } from './icons'
import styles from './styles/CartMenu.module.css'
import { closeModal, openModal } from '../../ConfigurationModal'
import { motion } from 'framer-motion'
import ClickOutside from './ClickOutside'

const CartMenu: React.FC = () => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [isOpen, setIsOpen] = useState(false)
	const toggleState = () => setIsOpen(!isOpen)

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
				<button className={styles.cartBtn} onClick={() => toggleState()}>
					<NavbarCartIcon />
				</button>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.35, ease: 'ease' }}
						className={styles.cartContainer}
					>
						<div className={styles.cartHeader}>
							<p>YOUR CART</p>
							<button
								onClick={() => toggleState()}
								className={styles.closeCart}
							>
								<NavbarCloseIcon />
							</button>
						</div>
						<div className={styles.detailCart}>
							<p>There's nothing here, but a test ride is nearby.</p>
						</div>
						<div className={styles.cartFooter}>
							<a href='#' className={styles.addBike}>
								Add a bike
							</a>
							<a href='#' className={styles.accessories}>
								Shop accessories
							</a>
						</div>
					</motion.div>
				)}
			</div>
		</ClickOutside>
	)
}

export default CartMenu
