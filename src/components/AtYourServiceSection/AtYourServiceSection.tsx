import React from 'react'
import styles from './AtYourService.module.css'
import ArrowIcon from './icon/ArrowIcon'

export type AtYourServiceSectionProps = {
	// types...
}

const AtYourServiceSection: React.FC<AtYourServiceSectionProps> = () => {
	const images = [
		{
			desktop: '/AtYourServiceSection/cowboy-services-included_desktop.webp',
			mobile: '/AtYourServiceSection/cowboy-services-included-mobile.webp',
		},
		{
			desktop: '/AtYourServiceSection/cowboy-services-care-desktop.webp',
			mobile: '/AtYourServiceSection/cowboy-services-care-mobile.webp',
		},
		{
			desktop:
				'/AtYourServiceSection/cowboy-services-theft-insurance-desktop.webp',
			mobile:
				'/AtYourServiceSection/cowboy-services-theft-insurance-mobile.webp',
		},
	]
	return (
		<div className={styles.container}>
			<div className={styles.descContainer}>
				<p>Cowboy at your service</p>
				<h3>A network of support at the ready and on the road</h3>
				<a href='#'>Learn more</a>
			</div>
			<div className={styles.carouselContainer}>
				<ul className={styles.listContainer}>
					{images.map((link, index) => (
						<li className={styles.item} key={index}>
							<div className={styles.linkContainer}>
								<a href='#' className={styles.includedLink}>
									What's included
									<ArrowIcon />
								</a>
							</div>
							<picture>
								<source srcSet={link.desktop} media='(min-width: 900px)' />
								<img src={link.mobile} alt='' />
							</picture>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default AtYourServiceSection
