const Axios = require('axios');

const axios = Axios.default.create({
	headers: {
		"Content-Type": "application/json",
		"Authorization": "Bearer 020gdJswzwyJgNGfyGal2AlbNtCHOJ"
	}
});

// const API_URL = 'http://localhost:8000';
const API_URL = 'https://api-connect-ops.herokuapp.com';
const API_UPLOAD = API_URL + '/upload';
const API_DEPLOY = API_URL + '/workspace/lauch';
const API_STATUS = API_URL + '/workspace/description';
// const API_DEPLOY = 'http://3.212.192.22/api/v2/job_templates/10/launch/';

export const uploadFile = async (file) => {
	try {
		const form = new FormData();
		form.append('file', file, "create-workspaces.csv");
		form.append('fileType', file.type);
		const result = await axios.post(API_UPLOAD, form)
		return result;
	}
	catch (error) {
		console.log(error)
		return null;
	}
}

export const deploy = async () => {
	try {
		const result = await axios.post(API_DEPLOY)
		return result;
	}
	catch (error) {
		console.log(error)
		return null;
	}
}

export const getStatus = async (filter) => {
	try {
		const result = await axios.post(API_STATUS, { filter })
		return result;
	}
	catch (error) {
		console.log(error)
		return null;
	}
}