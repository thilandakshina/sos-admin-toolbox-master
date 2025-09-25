export default {
	suburbs() {
		
	const results = get_regions.data.filter(r => insert_form.formData.applicable_postcode.includes(r.postcode)).map(r => r.suburb);
		
		return [...new Set(results)].map((v) => ({ value: v, label: v}));
	}
}