export default {
	GoBack () {
		switch(Tabs1.selectedTab){
			case 'Variations':
				storeValue('insert_default_tab', 'Details')
				break;
			case 'ISO Certs':
				storeValue('insert_default_tab', 'Variations')
				break;
			case 'Social Media':
				storeValue('insert_default_tab', 'ISO Certs')
				break;
			case 'Images':
				storeValue('insert_default_tab', 'Social Media')
				break;
			case 'Modern Slavery Declaration':
				storeValue('insert_default_tab', 'Images')
				break;
			default:
				storeValue('insert_default_tab', 'Details')
				break;
		}
	}
}