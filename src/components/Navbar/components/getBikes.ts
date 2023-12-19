export interface getBikeInterface {
	delivered: string
	name: string
	urlImage: string
	bgColor: string
}
const getBikes = (): getBikeInterface[] => {
	const bikes: getBikeInterface[] = [
		{
			delivered: 'Delivered from 6 weeks',
			name: 'Classic',
			urlImage: '/navBikes/classic-black.png',
			bgColor: 'linear-gradient(225deg,#e7eae7 30.32%,#f6f0e9 100.3%)',
		},
		{
			delivered: 'Delivered from 6 weeks',
			name: 'Cruiser',
			urlImage: '/navBikes/cruiser-sand.png',
			bgColor: 'linear-gradient(224deg,#eee5d3 20%,#fffaf4 81.18%)',
		},
		{
			delivered: 'Delivered from 6 weeks',
			name: 'Cruiser ST',
			urlImage: '/navBikes/cruiser-st-lavender.png',
			bgColor: 'linear-gradient(224deg,#e3e5fc 20%,#f8f9fc 81.18%)',
		},
	]
	return bikes
}
export default getBikes
