export default {
	writeToStore: () => {
		storeValue("service_uuid",`${uuid_min_js.UUID.generate()}`)
	}
};