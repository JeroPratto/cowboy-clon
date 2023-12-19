import { BikeSectionType } from '../types/BikeSectionType'
import styles from './styles/BikeSectionMobile.module.css'
import img from '/mainSection/mobile/cruiser-sand.webp'
import shadow from '/mainSection/mobile/bike-default-shadow.webp'
import { cubicBezier, motion, useInView } from 'framer-motion'
import { useRef } from 'react'
type BikeSectionMobileProps = {
	bike: BikeSectionType
}

const BikeSectionMobile: React.FC<BikeSectionMobileProps> = ({ bike }) => {
	const containerRef = useRef(null)

	const easing = cubicBezier(0.28, 0.44, 0.49, 1)

	const isInView = useInView(containerRef, {
		margin: '0px 0px -10% 0px',
		once: true,
	})
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
		<div className={styles.container} style={{ background: bike.bgColor }}>
			<div className={styles.desc} ref={containerRef}>
				<motion.p
					{...getCommonMotionProps()}
					animate={isInView ? 'InView' : 'notInView'}
					className={styles.name}
				>
					{bike.name}
				</motion.p>
				<motion.h2
					{...getCommonMotionProps(0.2)}
					animate={isInView ? 'InView' : 'notInView'}
					className={styles.title}
				>
					{bike.title[0]}
					<br />
					{bike.title[1]}
				</motion.h2>
				<motion.p
					{...getCommonMotionProps(0.4)}
					animate={isInView ? 'InView' : 'notInView'}
					className={styles.price}
				>
					From ${bike.price} with free delivery
				</motion.p>
			</div>
			<motion.div
				{...getCommonMotionProps(0.6)}
				animate={isInView ? 'InView' : 'notInView'}
				className={styles.imgContainer}
			>
				<img src={img} alt={bike.name} className={styles.bike} />
				<img src={shadow} alt='' className={styles.shadow} />
			</motion.div>
			<motion.div
				className={styles.exploreContainer}
				{...getCommonMotionProps(0.8)}
				animate={isInView ? 'InView' : 'notInView'}
			>
				<a href='#' className={styles.explore}>
					Explore
				</a>
				<a href='#' className={styles.book}>
					Book a free test ride
				</a>
			</motion.div>
			<motion.div
				{...getCommonMotionProps(1)}
				animate={isInView ? 'InView' : 'notInView'}
				className={styles.footer}
			>
				{bike.footer.map((data, index) => (
					<div key={index}>
						<p className={styles.descFooter}>{data.desc}</p>
						<p className={styles.nameFooter}>{data.name}</p>
					</div>
				))}
			</motion.div>
		</div>
	)
}

export default BikeSectionMobile
