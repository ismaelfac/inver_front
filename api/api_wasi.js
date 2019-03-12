import axios from "axios";

const baseDomain = "https://api.wasi.co/v1/";
const baseURL = `${baseDomain}`;

export default axios.create({
	baseURL,
	headers: {
		WASI_TOKEN: "Hqw0_GuQJ_ggQS_20Lw",
		ID_COMPANY: "2426798"
	}
});
