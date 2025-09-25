export default {
	writeToStore: () => {
		storeValue("product_uuid",`${uuid_min_js.UUID.generate()}`)
	}
};