export default {
	GoNext () {
		switch(Tabs1.selectedTab){
     	case 'Details':
				storeValue('update_default_tab', 'Variations')
     		break;
			case 'Variations':
				storeValue('update_default_tab', 'ISO Certs')
				break;
			case 'ISO Certs':
				storeValue('update_default_tab', 'Social Media')
				break;
			case 'Social Media':
				storeValue('update_default_tab', 'Images')
				break;
			case 'Images':
				storeValue('update_default_tab', 'Modern Slavery Declaration')
				break;
			case 'Modern Slavery Declaration':
				removeValue('update_default_tab');
				navigateTo('All Products');
				break;
     	default:
				storeValue('update_default_tab', 'Details')
     		break;
     }
	}
}