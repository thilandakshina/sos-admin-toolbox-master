export default {
	map() {
		const sbs_types = update_form.formData.sbs_types;
		const result = {};
		sbs_types.map((type) => {
			result[type] = update_form.formData[type];
		});
		
		return JSON.stringify(result);
	}
}