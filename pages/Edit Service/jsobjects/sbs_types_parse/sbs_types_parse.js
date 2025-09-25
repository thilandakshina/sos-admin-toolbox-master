export default {
	
	parse() {
		const sbs_types = JSON.parse(get_service.data[0].sbs_types);
		const values = Object.keys(sbs_types);
		return values || [];
	}
	
}