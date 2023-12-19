import { ReactNode, useEffect } from 'react'

export type ClickOutsideProps = {
	reference: React.MutableRefObject<HTMLDivElement | null>
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	children: ReactNode
}
const ClickOutside: React.FC<ClickOutsideProps> = ({
	reference,
	isOpen,
	setIsOpen,
	children,
}) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				reference.current &&
				!reference.current.contains(event.target as Node)
			) {
				if (isOpen) setIsOpen(false)
			}
		}
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isOpen])

	return <>{children}</>
}

export default ClickOutside
