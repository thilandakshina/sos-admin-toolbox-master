export default {
	map() {
		const kpg_types = update_form.formData.kpg_types || [];
		
		const result = {};
		
		kpg_types.map((type) => {
			result[type] = update_form.formData[type]
		});
		
		return JSON.stringify(result);
	}
}