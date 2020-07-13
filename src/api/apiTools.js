import axios from 'axios';
import { api } from './api';

class AxiosInstance {
	axios;
	token = null;

	constructor(token) {
		if (token) {
			this.axios = axios.create({ headers: { Authorization: token } });
			this.token = token;
		} else {
			this.axios = axios;
		}
	}

	request = (url, method, data) => {
		return this.axios[method](`${ api.BASE_API_URL }${ url }`, data)
			.then(response => {
				return response;
			})
			.catch(error => {
				throw error.response;
			});
  };

	get = (url) => this.request(url, 'get');
	post = (url, data) => this.request(url, 'post', data);
  put = (url, data) => this.request(url, 'put', data);
	delete = (url) => this.request(url, 'delete');
}

export const apiTools = new AxiosInstance(localStorage.getItem('token'));
