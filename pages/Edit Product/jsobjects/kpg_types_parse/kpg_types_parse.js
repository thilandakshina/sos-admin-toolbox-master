export default {
	
	parse() {
		const kpg_types = JSON.parse(get_product.data[0].kpg_types);
		const values = Object.keys(kpg_types);
		return values || [];
	}
	
}