import React from 'react'
import styles from './VideoSection.module.css'
import videoDesktop from '/video-section.mp4'
import videoMobile from '/video-section-mobile.mp4'
export type VideoSectionProps = {
	// types...
}

const VideoSection: React.FC<VideoSectionProps> = () => {
	return (
		<div className={styles.container}>
			<div className={styles.videoContainer}>
				<video
					className={styles.video}
					muted
					playsInline
					autoPlay
					loop
					disablePictureInPicture
					controlsList='nodownload noplaybackrate nofullscreen noremoteplayback'
				>
					<source
						src={videoDesktop}
						media='only screen and (min-device-width: 1024px)'
					/>
					<source
						src={videoMobile}
						media='only screen and (max-device-width: 1024px)'
					/>
				</video>
			</div>
			<div className={styles.linkContainer}>
				<button className={styles.goToWatch}>
					<svg
						viewBox='0 0 12 14'
						fill='#1d1d1d'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M11.2004 5.88909C12.1741 6.40107 12.1741 7.79529 11.2004 8.30725L2.00159 13.1436C1.09197 13.6218 -0.000108564 12.9622 -0.000108577 11.9345L-0.000108692 2.26156C-0.000108704 1.23387 1.092 0.574217 2.00162 1.05248L11.2004 5.88909Z'
							fill='currentColor'
						></path>
					</svg>
					Watch film
				</button>
			</div>
		</div>
	)
}

export default VideoSection
