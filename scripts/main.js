import {json} from 'd3-fetch'

import App from './App.svelte';

json('./data/gironde-finance-data.json')
.then(data => {
	console.log('data', data)

	const data2020 = data.aggregations.find(agg => agg.year === 2020).aggregation.children

	console.log('data2020', data2020)

	const app = new App({
		target: document.querySelector('.svelte-main'),
		props: {
			groupes: data2020
		}
	});
})

