export default {
	GoBack () {
		switch(Tabs1.selectedTab){
			case 'ISO Certs':
				storeValue('insert_default_tab', 'Details')
				break;
			case 'Social Media':
				storeValue('insert_default_tab', 'ISO Certs')
				break;
			case 'Images':
				storeValue('insert_default_tab', 'Social Media')
				break;
			default:
				storeValue('insert_default_tab', 'Details')
				break;
		}
	}
}