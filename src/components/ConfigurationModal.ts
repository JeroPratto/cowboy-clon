export const openModal = () => {
	document.documentElement.style.setProperty('--nav-background-color', '#fff')
	document.documentElement.style.setProperty('--nav-text-color', '#1d1d1d')
	document.documentElement.style.setProperty('--order-now-text-color', '#fff')
	const element = document.querySelector('html')
	document.body.style.overflowY = 'hidden'
	element?.classList.toggle('display-before')
}

export const closeModal = () => {
	document.documentElement.style.setProperty(
		'--nav-background-color',
		'transparent',
	)
	document.documentElement.style.setProperty('--nav-text-color', '#fff')
	document.documentElement.style.setProperty(
		'--order-now-text-color',
		'#1d1d1d',
	)
	const element = document.querySelector('html')
	document.body.style.overflowY = 'auto'
	element?.classList.toggle('display-before')
}
