export default {
	writeToStore: () => {
		storeValue("project_uuid",`${uuid_min_js.UUID.generate()}`)
	}
};