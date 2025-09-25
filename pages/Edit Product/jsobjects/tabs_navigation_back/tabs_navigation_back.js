export default {
	GoBack () {
		switch(Tabs1.selectedTab){
			case 'Variations':
				storeValue('update_default_tab', 'Details')
				break;
			case 'ISO Certs':
				storeValue('update_default_tab', 'Variations')
				break;
			case 'Social Media':
				storeValue('update_default_tab', 'ISO Certs')
				break;
			case 'Images':
				storeValue('update_default_tab', 'Social Media')
				break;
			case 'Modern Slavery Declaration':
				storeValue('update_default_tab', 'Images')
				break;
			default:
				storeValue('update_default_tab', 'Details')
				break;
		}
	}
}