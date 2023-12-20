import React, { useState } from 'react'
import { useScroll, motion, useMotionValueEvent } from 'framer-motion'
import styles from './Navbar.module.css'
import MobileMenu from './components/MobileMenu'
import { NavbarLogoIcon, NavbarMenuIcon } from './components/icons'
import BikesMenu from './components/BikesMenu'
import { closeModal, openModal } from '../ConfigurationModal'
import CartMenu from './components/CartMenu'
export type NavbarProps = {
	// types...
}

const Navbar: React.FC<NavbarProps> = () => {
	const { scrollY } = useScroll()
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
	const [hidden, setHidden] = useState(false)
	const [atTop, setAtTop] = useState(true)

	const toggleMobileMenu = () => {
		if (!isOpenMobileMenu) {
			openModal()
			setIsOpenMobileMenu(true)
		} else {
			closeModal()
			setIsOpenMobileMenu(false)
		}
	}

	useMotionValueEvent(scrollY, 'change', (latest) => handleChangeScroll(latest))

	const handleChangeScroll = (latest: number) => {
		const prev = scrollY.getPrevious()
		if (latest > prev && latest > 50) {
			setHidden(true)
		} else {
			setHidden(false)
			setAtTop(latest <= 50)
		}
	}
	const navLinks = ['CONNECT', 'CIRCULAR', 'CARE', 'LEASING']
	const variants = {
		visible: { y: 0, opacity: 1 },
		hidden: { y: '-100%', opacity: 0 },
	}
	return (
		<>
			<motion.header
				animate={hidden ? 'hidden' : 'visible'}
				transition={{ duration: 0.35, ease: 'easeInOut' }}
				variants={variants}
				className={`${styles.header} ${atTop ? '' : styles.headerNotAtTop}`}
			>
				<motion.nav
					className={styles.navContainer}
					variants={variants}
					transition={{ duration: 0.35, ease: 'easeInOut' }}
				>
					<div className={styles.logoContainer}>
						<NavbarLogoIcon />
					</div>
					<ul className={styles.listContainer}>
						<li className={styles.itemList}>
							<BikesMenu className={styles.textNav} />
						</li>
						{navLinks.map((text, index) => (
							<li
								className={`${styles.textNav} ${styles.itemList}`}
								key={index}
							>
								<a href='#'>{text}</a>
							</li>
						))}
					</ul>
					<div className={styles.OrderAndCart}>
						<a href='#' className={`${styles.textNav} ${styles.book}`}>
							BOOK A TEST RIDE
						</a>
						<a href='#' className={`${styles.textNav} ${styles.orderNow}`}>
							ORDER NOW
						</a>
						<CartMenu />
						{/* mobile only */}
						<button
							className={styles.menuBtn}
							onClick={() => toggleMobileMenu()}
						>
							<NavbarMenuIcon />
						</button>
					</div>
				</motion.nav>
			</motion.header>
			<MobileMenu
				isOpen={isOpenMobileMenu}
				toggleMobileMenu={toggleMobileMenu}
			/>
		</>
	)
}

export default Navbar
