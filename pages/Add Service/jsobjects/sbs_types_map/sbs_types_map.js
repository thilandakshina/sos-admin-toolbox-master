export default {
	map() {
		const sbs_types = insert_form.formData.sbs_types || [];
		const result = {};
		sbs_types.map((type) => {
			result[type] = insert_form.formData[type];
		});
		
		return JSON.stringify(result);
	}
}