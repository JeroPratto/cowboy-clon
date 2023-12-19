import { cubicBezier, motion, useInView } from 'framer-motion'
import { BikeSectionType } from '../types/BikeSectionType'
import { useRef } from 'react'
import styles from './styles/BikeSectionDesktop.module.css'

export type BikeSectionDesktopProps = {
	bike: BikeSectionType
	index: number
}

const BikeSectionDesktop: React.FC<BikeSectionDesktopProps> = ({
	bike,
	index,
}) => {
	const containerRef = useRef(null)

	const easing = cubicBezier(0.28, 0.44, 0.49, 1)
	const imgEasing = cubicBezier(0.42, 0, 0.002, 1)

	const isInView = useInView(containerRef, {
		margin: '0px 0px -10% 0px',
		once: true,
	})

	const imgVariants = {
		InView: { scale: 1, translateY: 0 },
		notInView: { scale: 0.95, translateY: 40 },
	}

	const getCommonMotionProps = (delay: number = 0) => {
		return {
			variants: {
				InView: { opacity: 1, y: 0 },
				notInView: { opacity: 0, y: 50 },
			},
			transition: { duration: 0.85, ease: easing, delay: delay },
		}
	}

	return (
		<div
			className={`${styles.container} ${index === 1 ? styles.noGap : ''}`}
			style={{ background: bike.bgColor }}
		>
			<div className={styles.imgContainer}>
				<motion.img
					variants={imgVariants}
					animate={isInView ? 'InView' : 'notInView'}
					transition={{ duration: 1.4, ease: imgEasing }}
					src={bike.urlImage}
					alt={bike.name}
				/>
			</div>
			<div className={styles.descContainer}>
				<motion.p
					{...getCommonMotionProps()}
					animate={isInView ? 'InView' : 'notInView'}
					className={styles.nameAndDelivery}
				>
					{bike.name}{' '}
					<span style={{ background: bike.bgColorDelivery }}>
						Free delivery
					</span>
				</motion.p>
				<motion.h2
					ref={containerRef}
					{...getCommonMotionProps(0.2)}
					animate={isInView ? 'InView' : 'notInView'}
				>
					{bike.title[0]} <br />
					{bike.title[1]}
				</motion.h2>
				<motion.div
					className={styles.exploreContainer}
					{...getCommonMotionProps(0.4)}
					animate={isInView ? 'InView' : 'notInView'}
				>
					<a href='#' className={styles.explore}>
						Explore
					</a>
					<p className={styles.price}>From ${bike.price}</p>
					<a href='#'>Book a free test ride</a>
				</motion.div>
				<motion.div
					className={styles.footer}
					{...getCommonMotionProps(0.6)}
					animate={isInView ? 'InView' : 'notInView'}
				>
					{bike.footer.map((data, index) => (
						<div key={index}>
							<p className={styles.descFooter}>{data.desc}</p>
							<p className={styles.nameFooter}>{data.name}</p>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	)
}

export default BikeSectionDesktop
