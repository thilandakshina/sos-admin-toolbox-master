export default {
	GoNext () {
		switch(Tabs1.selectedTab){
     	case 'Details':
				storeValue('insert_default_tab', 'ISO Certs')
     		break;
			case 'ISO Certs':
				storeValue('insert_default_tab', 'Social Media')
				break;
			case 'Social Media':
				storeValue('insert_default_tab', 'Images')
				break;
			case 'Images':
				removeValue('insert_default_tab');
				navigateTo('All Services');
				break;
     	default:
				storeValue('insert_default_tab', 'Details')
     		break;
     }
	}
}