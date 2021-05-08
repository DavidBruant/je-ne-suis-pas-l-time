import {json} from 'd3-fetch'

import App from './App.svelte';

json('./data/gironde-finance-data.json')
.then(data => {
	console.log('data', data)

	const data2019 = data.aggregations.find(agg => agg.year === 2019).aggregation.children

	console.log('data2019', data2019)

	const app = new App({
		target: document.querySelector('.svelte-main'),
		props: {
			groupes: data2019
		}
	});
})

