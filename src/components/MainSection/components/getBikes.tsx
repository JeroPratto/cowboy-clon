import { BikeSectionType } from '../types/BikeSectionType'

export const getBikes = (): BikeSectionType[] => {
	const data: BikeSectionType[] = [
		{
			urlImage: '/mainSection/cruiser-sand.webp',
			bgColor: 'linear-gradient(224deg,#eee5d3 20%,#fffaf4 81.18%)',
			bgColorDelivery: '#e8ddc9',
			name: 'Cruiser',
			title: ['Rise up to ride', 'in comfort'],
			price: '2.699',
			footer: [
				{ desc: 'Find My Bike', name: 'Theft Detection' },
				{ desc: 'AdaptivePower™', name: 'Automatic assistance' },
				{ desc: 'Cowboy Mobile Service', name: 'At-home repairs' },
			],
		},
		{
			urlImage: '/mainSection/cruiser-st-lavender.webp',
			bgColor:
				'linear-gradient(247.2deg,#e3e5fc 8.64%,#f7f8fc 52.48%,#efeeeb 86.51%)',
			bgColorDelivery: '#e7e7f2',
			name: 'Cruiser ST',
			title: ['Step through to', 'a new colorway'],
			price: '2.699',
			footer: [
				{ desc: 'Find My Bike', name: 'Theft Detection' },
				{ desc: 'AdaptivePower™', name: 'Automatic assistance' },
				{ desc: 'Cowboy Mobile Service', name: 'At-home repairs' },
			],
		},
		{
			urlImage: '/mainSection/classic-black-front.webp',
			bgColor: 'linear-gradient(259.28deg,#fcfaf4 15.32%,#d6dbd2 100.3%)',
			bgColorDelivery: '#e7e5de',
			name: 'Classic',
			title: ['Step over to', 'the agile ride'],
			price: '2.699',
			footer: [
				{ desc: 'Find My Bike', name: 'Theft Detection' },
				{ desc: 'AdaptivePower™', name: 'Automatic assistance' },
				{ desc: 'Cowboy Mobile Service', name: 'At-home repairs' },
			],
		},
	]
	return data
}
