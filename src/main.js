import App from './App.svelte';
import {siteData} from './data.js'

const app = new App({
	target: document.body,
	props: {
		siteData
	}
});

export default app;