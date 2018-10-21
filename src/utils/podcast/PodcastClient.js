import HttpRequest from '../http/HttpRequest.js';

export default class PodcastClient {

	constructor(){
		this._client_name = 'gpodder.net';
		this._client_url = 'https://gpodder.net'; 
		this._api_url = 'https://gpodder.net/api/2/';
		this._request = new HttpRequest();
	}

	search(query){
		let url = this._client_url + '/search.json?q=' + query;

		return new Promise((resolve, reject) =>{
				resolve([
					{
						url : "http://jovemnerd.ig.com.br/?feed=rss2&cat=42",
						title : "Nerdcast – Jovem Nerd",
						description : "O mundo pop vira piada no Jovem Nerd",
						subscribers:	18,
						subscribers_last_week:	18,
						logo_url : "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
						scaled_logo_url : "http://gpodder.net/logo/64/a65/a6506120fa3e6fe4ae9ea9f689a22412d9a11f31",
						website : "https://jovemnerd.com.br",
						mygpo_link : "http://gpodder.net/podcast/74730",
					},
					{
						url : "http://feeds.feedburner.com/coverville",
						title : "Coverville: The Cover Music Show",
						description : "Coverville presents the best in cover songs every week, showcasing independent\nartists and labels, with ASCAP, BMI and SESAC licensing.",
						subscribers:	61,
						subscribers_last_week:	61,
						logo_url : "http://www.coverville.com/art/Coverville_Album_Art_2016_final.jpg",
						scaled_logo_url : "http://gpodder.net/logo/64/123/123833a1e62ee86cb07ba41662e8aee74175ad08",
						website : "http://coverville.com",
						mygpo_link : 	"http://gpodder.net/podcast/coverville",
					}
				]);

			// this._request.get(url)
			// 	.then(response => {
			// 		resolve(response)
			// 	}).catch(error => {
			// 		reject(error);
			// 	});
		});
	}

}