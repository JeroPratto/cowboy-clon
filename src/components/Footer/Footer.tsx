import React from 'react'
import getLinkLists from './getLinkLists'
import styles from './Footer.module.css'

export type FooterProps = {
	// types...
}

const Footer: React.FC<FooterProps> = () => {
	const linkLists = getLinkLists()
	return (
		<div className={styles.container}>
			<div className={styles.listsContainer}>
				{linkLists.map((list, listIndex) => (
					<ul key={`list-${listIndex}`} className={styles.list}>
						<li className={styles.title}>{list.title}</li>
						{list.list.map((text, itemIndex) => (
							<li className={styles.item} key={`item-${itemIndex}`}>
								{text}
							</li>
						))}
					</ul>
				))}
			</div>
			<div className={styles.logoContainer}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 159 25'
					width='159'
					height='25'
				>
					<title>Cowboy</title>
					<g fill='currentColor'>
						<path d='M12.397 20.746c-2.345 0-4.322-.771-5.897-2.348-1.575-1.577-2.345-3.556-2.345-5.937 0-2.382.77-4.36 2.345-5.937 1.575-1.577 3.552-2.381 5.897-2.381 2.58 0 4.724.939 6.4 2.851l2.848-2.449C19.199 1.761 16.116.352 12.397.352c-3.451 0-6.4 1.14-8.812 3.455C1.206 6.12 0 9.007 0 12.46c0 3.455 1.206 6.34 3.585 8.654 2.412 2.281 5.361 3.422 8.812 3.422 3.652 0 7.003-1.577 9.281-4.26l-2.814-2.45c-1.642 1.946-3.82 2.919-6.467 2.919'></path>
						<path d='M154.57 20.994a.736.736 0 1 1 1.472.002.736.736 0 0 1-1.473-.002m-1.289-.764l-1.898.514c-.01.166-.008.334.003.504l1.895.513c.146.04.223.2.163.338l-.78 1.801c.125.113.258.217.396.313l1.584-1.16a.249.249 0 0 1 .366.084l.923 1.73c.083-.013.166-.025.25-.044.083-.018.162-.044.243-.068l.08-1.958a.248.248 0 0 1 .293-.234l1.93.358c.083-.147.158-.297.222-.453l-1.486-1.286a.248.248 0 0 1 0-.375l1.484-1.284a4.02 4.02 0 0 0-.216-.455l-1.934.359a.248.248 0 0 1-.293-.234l-.08-1.96a3.938 3.938 0 0 0-.492-.114l-.923 1.733a.249.249 0 0 1-.367.084l-1.587-1.161c-.138.096-.27.202-.393.314l.78 1.802a.248.248 0 0 1-.163.338'></path>
						<path d='M42.446 18.432c-1.575 1.576-3.518 2.381-5.83 2.381-2.312 0-4.289-.805-5.863-2.381-1.575-1.577-2.346-3.556-2.346-5.938 0-2.347.771-4.326 2.346-5.936 1.574-1.61 3.551-2.415 5.863-2.415 2.312 0 4.255.805 5.83 2.415 1.575 1.61 2.379 3.589 2.379 5.936 0 2.348-.804 4.327-2.38 5.938M36.617.352c-3.451 0-6.366 1.174-8.745 3.522-2.379 2.314-3.585 5.2-3.585 8.62 0 3.422 1.206 6.307 3.585 8.621s5.294 3.488 8.745 3.488c3.451 0 6.4-1.174 8.778-3.488 2.38-2.314 3.585-5.2 3.585-8.62 0-3.422-1.206-6.307-3.618-8.62-2.379-2.35-5.294-3.523-8.745-3.523'></path>
						<path d='M74.056 16.884L68.829 1H65.18l-5.227 15.884L54.361 1H50l8.04 23h3.775l5.184-15.82L72.152 24h3.808L84 1h-4.351zm22.99 3.387h-4.779v-6.533h4.745c2.185 0 3.755 1.385 3.755 3.233 0 1.881-1.57 3.3-3.72 3.3zM92.267 4.73h3.79c1.774 0 3.038 1.155 3.038 2.706 0 1.683-1.264 2.838-3.073 2.838h-3.755zm7.954 6.765c1.912-.693 3.038-2.409 3.038-4.62 0-1.683-.648-3.102-1.946-4.19C100.05 1.56 98.48 1 96.603 1H88v23h9.763c2.083 0 3.79-.627 5.155-1.914 1.4-1.287 2.082-2.937 2.082-4.884 0-2.937-1.741-5.18-4.78-5.708z'></path>
						<path d='M126.365 18.432c-1.575 1.576-3.518 2.381-5.83 2.381-2.312 0-4.289-.805-5.863-2.381-1.575-1.577-2.346-3.556-2.346-5.938 0-2.347.771-4.326 2.346-5.936 1.574-1.61 3.551-2.415 5.863-2.415 2.312 0 4.255.805 5.83 2.415 1.575 1.61 2.379 3.589 2.379 5.936 0 2.348-.804 4.327-2.38 5.938M120.536.352c-3.452 0-6.366 1.174-8.746 3.522-2.379 2.314-3.585 5.2-3.585 8.62 0 3.422 1.206 6.307 3.585 8.621s5.294 3.488 8.745 3.488c3.451 0 6.4-1.174 8.779-3.488s3.585-5.2 3.585-8.62c0-3.422-1.206-6.307-3.62-8.62-2.378-2.35-5.293-3.523-8.744-3.523'></path>
						<path d='M151.315 1l-6.838 11.34L137.612 1H133l9.13 14.985L137.296 24h4.693l4.633-7.606L156 1z'></path>
					</g>
				</svg>
			</div>
		</div>
	)
}

export default Footer
