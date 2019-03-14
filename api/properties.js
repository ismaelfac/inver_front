import webserviceInversiones from "./api_inversiones";
const resource = "/properties";

const _properties = [
	{
		id: "1",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/b15905320181029122958.jpg"
			}
		]
	},
	{
		id: "2",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/g15905220181029122955.jpg"
			}
		]
	},
	{
		id: "3",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/g15905220181029122955.jpg"
			}
		]
	},
	{
		id: "4",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/g15905220181029122955.jpg"
			}
		]
	},
	{
		id: "5",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/g15905220181029122955.jpg"
			}
		]
	},
	{
		id: "6",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/g15905220181029122955.jpg"
			}
		]
	},
	{
		id: "7",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/g15905220181029122955.jpg"
			}
		]
	},
	{
		id: "8",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/g15905220181029122955.jpg"
			}
		]
	},
	{
		id: "9",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/g15905220181029122955.jpg"
			}
		]
	},
	{
		id: "10",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/g15905220181029122955.jpg"
			}
		]
	},
	{
		id: "11",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/g15905220181029122955.jpg"
			}
		]
	},
	{
		id: "12",
		title: "Oficinas Centro Comercial",
		area: "105",
		for: "rent",
		private_area: "80",
		sale_price: "2300000",
		rent_price: "0",
		bedrooms: "2",
		bathrooms: "1",
		stratum: "2",
		observations:
			"<p>Excelente casa comercial de esquina, ubicada en el sector corporativo y financiero de mayor proyecci&oacute;n en la ciudad de Baranquilla.&nbsp; La casa tiene uso comercial autorizado&nbsp; actividades de comercializacion de bienes y servicios, cuenta con 9 parqueaderos propios para visitantes.&nbsp; La negociaci&oacute;n es directa con el propietario.</p>\n",
		assessment: "3",
		available: true,
		main_image: [
			{
				url:
					"https://images.wasi.co/inmuebles/b15905120181029122950.jpg"
			},
			{
				url:
					"https://images.wasi.co/inmuebles/g15905220181029122955.jpg"
			}
		]
	}
];

export default {
	getPropertiesGeneral(cb) {
		setTimeout(() => cb(_properties), 100);
	},
	/*async getProperties() {
		const response = await webserviceInversiones.get(`${resource}`);
		return response.data;
	},*/
	async SearchProerties(query) {
		const response = await webserviceInversiones.get(
			`${resource}?title=${query}`
		);
		return response.data;
	}
};
