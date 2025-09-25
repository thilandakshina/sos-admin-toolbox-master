export default {
	map() {
		const kpg_types = insert_form.formData.kpg_types || [];
		
		const result = {};
		
		kpg_types.map((type) => {
			result[type] = insert_form.formData[type]
		});
		
		return JSON.stringify(result);
	}
}