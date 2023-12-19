import React from 'react'
import styles from './Hero.module.css'
import bikeImg from '/cowboy-3-black-hero.webp'
import bikeImgMobile from '/cowboy-3-black-hero-mobile.webp'
import { motion } from 'framer-motion'

export type HeroProps = {
	// types...
}

const Hero: React.FC<HeroProps> = () => {
	const initialText = { opacity: 0, translateY: 15 }
	const animateText = { opacity: 1, translateY: 0 }
	const transitionText = { duration: 0.85 }
	return (
		// cambiar distancia en la que desaparece el navbar / colision con hero
		<main className={styles.container}>
			<div className={styles.infoContainer}>
				<motion.p
					initial={initialText}
					animate={animateText}
					transition={transitionText}
				>
					Cowboy 3
				</motion.p>
				<motion.h1
					initial={initialText}
					animate={animateText}
					transition={{ transitionText, delay: 0.2 }}
				>
					Legendary
				</motion.h1>
				<motion.p
					initial={initialText}
					animate={animateText}
					transition={{ transitionText, delay: 0.4 }}
					className={styles.desc}
				>
					The iconic Cowboy 3 is back - but only for a limited time.
					<br />
					Order now, while stocks last.
				</motion.p>
				<motion.a
					href='#'
					initial={initialText}
					animate={animateText}
					transition={{ transitionText, delay: 0.6 }}
				>
					Shop from $1.290
				</motion.a>
			</div>
			<motion.div
				className={styles.imageContainer}
				initial={{ translateY: 40 }}
				animate={{ translateY: 0 }}
				transition={{ duration: 1.8, delay: 0.6 }}
			>
				<picture>
					<source srcSet={bikeImgMobile} media='(max-width:1024px)' />
					<img src={bikeImg} alt='Cowboy 3' height='130' width='240' />
				</picture>
			</motion.div>
		</main>
	)
}

export default Hero
