export default {
	GoNext () {
		switch(Tabs1.selectedTab){
     	case 'Details':
				storeValue('insert_default_tab', 'Variations')
     		break;
			case 'Variations':
				storeValue('insert_default_tab', 'ISO Certs')
				break;
			case 'ISO Certs':
				storeValue('insert_default_tab', 'Social Media')
				break;
			case 'Social Media':
				storeValue('insert_default_tab', 'Images')
				break;
			case 'Images':
				storeValue('insert_default_tab', 'Modern Slavery Declaration')
				break;
			case 'Modern Slavery Declaration':
				removeValue('insert_default_tab');
				navigateTo('All Products');
				break;
     	default:
				storeValue('insert_default_tab', 'Details')
     		break;
     }
	}
}