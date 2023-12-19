export type LinkList = {
	title: string
	list: string[]
}
const getLinkLists = (): LinkList[] => {
	const data: LinkList[] = [
		{
			title: 'Explore',
			list: [
				'Classic',
				'Cruiser',
				'Cruiser ST',
				'Connect',
				'Circular',
				'Accessories',
			],
		},
		{
			title: 'Services',
			list: [
				'Cowboy Care',
				'Theft Insurance',
				'Payment methods',
				'Leasing',
				'Warranty',
				'Business',
			],
		},
		{
			title: 'About Us',
			list: [
				'Reviews',
				'Press',
				'Blog',
				'Stores',
				'Careers',
				'Affiliate Program',
			],
		},
		{ title: 'Help', list: ['Contact', 'Support', 'Delivery', 'Returns'] },
	]
	return data
}

export default getLinkLists
