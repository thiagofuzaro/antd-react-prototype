import axios, { AxiosResponse } from "axios";
import { multiClientMiddleware } from "redux-axios-middleware";

const baseURL = process.env.REACT_APP_BASE_URL;

const clients = {
	default: {
		client: axios.create({ baseURL }),
		options: {
			interceptors: {
				response: [
					{
						error: (_: any, error: { response: AxiosResponse }) => {
							console.log("TCL: _", _);
							let code;
							if (error && error.response) {
								({
									response: { status: code }
								} = error);
							}

							if (code === 403) {
								return window.location.replace("/forbidden");
							}

							if (code === 404) {
								return window.location.replace("/not-found");
							}

							return Promise.reject(error);
						}
					}
				]
			}
		}
	}
};

export default multiClientMiddleware(clients);
