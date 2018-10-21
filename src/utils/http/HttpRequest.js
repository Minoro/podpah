import axios from 'axios';
export default class HttpRequest {

	get(url) {
		return new Promise((resolve, reject) => {
			axios.get(url)
				.then(response => {
					resolve(response.data);
				}).catch(error => {
					reject(error.response.data);
				});
		});
	}

}