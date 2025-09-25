export default {


	getOptionValues () {

		const categories_data = [
			{
				"category": "AV Equipment & Supplies",
				"subCategory": [
					"AV Controllers",
					"AV Systems",
					"AV Cables",
					"Cameras ",
					"Computers",
					"Devices",
					"Displays & Screens",
					"Microphones",
					"Network Equipment",
					"Other",
					"Projectors",
					"Speakers"
				]
			},
			{
				"category": "Administration Services",
				"subCategory": [
					"After Hours Contact Centre",
					"Administration Services: Other",
					"Office Administration",
					"Site Administration ",
					"Executive Administration",
					"Document Administration",
					"Business Administration"
				]
			},
			{
				"category": "Advertising & Marketing",
				"subCategory": [
					"Media",
					"Print",
					"Publishing",
					"Web Site Services & Design ",
					"Agency Services",
					"Other",
					"Television",
					"Radio & Broadcasting",
					"Copywriting & Editorial",
					"Billboards",
					"Branding",
					"Communications Advisory",
					"Copywriting & Editorial",
					"Marketing Services",
					"Public Relations Management ",
					"Digital Marketing & Media "
				]
			},
			{
				"category": "Advisory",
				"subCategory": [
					"Engineering",
					"Environmental & Sustainability",
					"Financial",
					"Information Technology (IT)",
					"Management Consulting",
					"Marketing & Sales",
					"Risk Management",
					"Social Procurement",
					"Strategic Advisory",
					"Taxation"
				]
			},
			{
				"category": "Aerial Surveillance Services",
				"subCategory": [
					"Aerial Surveys & Photographic Services"
				]
			},
			{
				"category": "Aggregates",
				"subCategory": [
					"Agricultural",
					"Crushed Stone",
					"Heavyweight",
					"Marine",
					"Recycled Asphalt Aggregate",
					"Sand & Gravel"
				]
			},
			{
				"category": "Agriculture",
				"subCategory": [
					"Farming & Land Management Services",
					"Farming & Animal Services",
					"Farming & Animal Equipment",
					"Farming & Animal Accessories",
					"Fishing & Fisheries Services"
				]
			},
			{
				"category": "Air Services",
				"subCategory": [
					"Air Traffic Control",
					"Aircraft & Aviation Services"
				]
			},
			{
				"category": "Arborist & Tree Services",
				"subCategory": [
					"Assessment",
					"Felling",
					"Management Consulting"
				]
			},
			{
				"category": "Architecture",
				"subCategory": [
					"Commercial ",
					"Drafting",
					"Industrial Design",
					"Interior Design",
					"Landscape",
					"Residential"
				]
			},
			{
				"category": "Art",
				"subCategory": [
					"Dance Performance",
					"Fine Arts",
					"Art Services",
					"Public Art",
					"Entertainment",
					"Sculpture",
					"Music & Musicians",
					"Professional Artists",
					"Paintings",
					"Entertainment"
				]
			},
			{
				"category": "Automotive",
				"subCategory": [
					"Buses",
					"Cars",
					"Light Trucks",
					"Motorcycles",
					"Off-Road Vehicles",
					"Trucks"
				]
			},
			{
				"category": "Aviation",
				"subCategory": [
					"Aerial Application Services",
					"Aircraft (Fixed Wing)",
					"Drone Services"
				]
			},
			{
				"category": "Builders and Contractors",
				"subCategory": [
					"Builders Clean",
					"Flooring",
					"Glazing",
					"HVAC (Heating, Ventilation, and Air Conditioning)",
					"Landscaping",
					"Paintings",
					"Plastering",
					"Tiling",
					"Building Management & Control Systems"
				]
			},
			{
				"category": "Building Products, Materials & Systems",
				"subCategory": [
					"Building Management & Control Systems",
					"Carpentry & Joinery Products",
					"Cooling Towers",
					"Building Surveyors & Certifiers ",
					"Air Conditioner Installation (Industrial & Commercial)",
					"Air Conditioning Maintenance & Services",
					"Blockwork",
					"Brickwork",
					"Building Management & Control Systems",
					"Building Repairs & Maintenance",
					"Carpentry & Joinery Fixtures & Fittings ",
					"Conduits",
					"Conveyor Systems",
					"Externals Cladding",
					"Film to Glazing",
					"Floor Finishes Coverings",
					"Glazing Systems",
					"Interior Fit-Out:",
					"Insulation",
					"Wall Finishes & Linings ",
					"Lockers",
					"Insulation Materials",
					"Paint Finishes",
					"Plumbing Products, Fittings & Supplies",
					"Prefabricated Building (Hire/Sales)",
					"Rubber & Foam Materials",
					"Timber Products",
					"Water Meters & Backflow Equipment & Services",
					"Welding Equipment and Consumables",
					"Window Security Film",
					"Window Tinting & Frosting"
				]
			},
			{
				"category": "Cabinet Making",
				"subCategory": [
					"Display Cabinets",
					"Metal Storage Cabinets",
					"Wooden Storage",
					"Workbenches and Tool Cabinets"
				]
			},
			{
				"category": "Carpentry & Joinery Services",
				"subCategory": []
			},
			{
				"category": "Catering & Hospitality",
				"subCategory": [
					"Furniture and & Even StagingSetup",
					"Event Managerment ",
					"Food and Beverages"
				]
			},
			{
				"category": "Chemical & Gas",
				"subCategory": [
					"Agricultural",
					"Biochemicals",
					"Laboratory",
					"Medical & Industrial Gas",
					"Water"
				]
			},
			{
				"category": "Civil and Earthworks",
				"subCategory": [
					"Bulk Earthworks",
					"Detailed Excavation",
					"Retention Systems",
					"Concrete Works",
					"Excavation and Site Preparation",
					"Civil Drainage Contractors",
					"Underground Services Installation",
					"Trenching and Excavation Contractors",
					"Civil Engineering",
					"Piling Services",
					"Pipeline Construction"
				]
			},
			{
				"category": "Cleaning Services",
				"subCategory": [
					"Commercial Cleaning",
					"Carpet & Floors",
					"Cleaning & Janitorial Products",
					"Equipment",
					"Gutters",
					"Hygiene Services",
					"Litter & Rubbish Removal",
					"Sanitary Services",
					"Vehicles",
					"Window Cleaning"
				]
			},
			{
				"category": "Cleaning Supplies",
				"subCategory": [
					"Paper Towel",
					"Paper Sheets",
					"Cloths",
					"Detergrents",
					"Refillable bottles and containers",
					"Waste/Garbage Bags",
					"Bin Liners"
				]
			},
			{
				"category": "Clothing & Workwear",
				"subCategory": [
					"Boots",
					"Design",
					"Hi Vis PPE",
					"Uniform & Corporate Wear",
					"Workwear"
				]
			},
			{
				"category": "Communications",
				"subCategory": [
					"Marketing communications ",
					"Telemarketing "
				]
			},
			{
				"category": "Concrete & Cement Products",
				"subCategory": [
					"Decorative Concrete",
					"Fiber-Reinforced Concrete",
					"High-Performance Concrete",
					"Precast Concrete",
					"Prestressed Concrete",
					"Reinforced Concrete",
					"Self-Compacting Concrete (SCC)",
					"Shotcrete",
					"Slab On Ground"
				]
			},
			{
				"category": "Construction Operations",
				"subCategory": [
					"Access Equipment & Platforms",
					"Cranes, Hoists & Winches",
					"Lifting & Rigging Equipment",
					"Material Handling Machinery & Equipment",
					"Picking, Packing & Packaging",
					"Rigging & Height Safety Apparatus",
					"Logistics & Transport"
				]
			},
			{
				"category": "Consulting Services",
				"subCategory": [
					"Architects",
					"Community Consultation & Planning",
					"Community & Stakeholder Engagement",
					"Building Surveyors & Certifiers",
					"Business & Strategic Services",
					"Policy Review & Evaluation",
					"Probity Services",
					"Risk Management",
					"Cultural Advisory Consultants",
					"Social Procurement Consultants",
					"Social Research",
					"Taxation",
					"Leagal Advisory and Consultants",
					"Insurance Services",
					"Management Advisory Services",
					"Management Consultants",
					"Change Management ",
					"Interior Designers"
				]
			},
			{
				"category": "Contractors & Trade Services",
				"subCategory": [
					"Air Conditioner Installation (Industrial & Commercial)",
					"Air Conditioning Maintenance & Services",
					"Brickwork & Blockwork Contractors",
					"Cabinet Making",
					"Carpentry ",
					"Electrical Services",
					"Fire Services",
					"Joinery",
					"Metal Fabrication Products & Services",
					"Inspection Services",
					"Maintenance services",
					"Plumbing Services ",
					"Refrigeration Installation, Repair & Servicing",
					"Roofing Contractors",
					"Planning & Scheduling",
					"Quantity Surveying",
					"Underground Services",
					"Welders"
				]
			},
			{
				"category": "Demolition Services",
				"subCategory": [
					"Contaminated & Hazardous Materials Demolition & Removal",
					"Soil Remediation",
					"Demolition Equipment",
					"Demolition Contractors",
					"Waste Management and Disposal"
				]
			},
			{
				"category": "Doors & Windows & Glass",
				"subCategory": [
					"Acoustic Doors",
					"Access Controls",
					"Door Hardware",
					"Door Frames ",
					"Door Seals ",
					"Glazing Systems",
					"Operable Doors & Walls",
					"Double Glazed Window Systems",
					"Triple Glazed Window Systems",
					"Roller Doors - Commercial",
					"Roller Doors - Residential ",
					"Roller Doors - Industrial",
					"Sliding Doors",
					"Window Frames",
					"Window Fixtures, Fittings, Locks & Latches",
					"Window Security Film",
					"Window Tinting & Frosting"
				]
			},
			{
				"category": "Earthworks",
				"subCategory": [
					"Bulk Excavation",
					"Clearing & Stripping",
					"Compaction",
					"Cut and Fill Operations",
					"Drainage Services",
					"Drilling & Boring Services",
					"Earthmoving Equipment",
					"Excavation",
					"Footings Excavation",
					"Geotechnical",
					"Grading and Leveling",
					"Site Investigation",
					"Trench Excavation",
					"Shoring & Retention Systems"
				]
			},
			{
				"category": "Electrical & Lighting Services",
				"subCategory": [
					"Electrical Lighting Maintenance",
					"Electrical Lighting Supply & Maintenance",
					"Automation and Control Systems Services",
					"Lighting & Lighting Control Engineering",
					"Electrical Engineers"
				]
			},
			{
				"category": "Electrical and Lighting Products",
				"subCategory": [
					"Aerials, Amplifiers and Amplification Devices",
					"Automation and Control Systems",
					"Batteries",
					"Bus Bars",
					"Cables",
					"Cable Trays",
					"Circuit Breakers & Fuses",
					"Clips, Fixtures, Fittings",
					"Components & Supplies",
					"Diodes",
					"Earthing Products and Services",
					"Electrical Distribution",
					"Electrical Equipment, Components & Supply",
					"Electrical Wire & Cable & Harness",
					"Electrical Wire Management Devices",
					"Electrical Interferrence and Radio Frequency Filters ",
					"Isolation Switches & Devices",
					"Lighting Fixtures",
					"Lighting & Light Poles",
					"Transformers & Converters",
					"Resistors",
					"Switchboards & Switchgear",
					"Distribution Switches and Devices ",
					"Adapters"
				]
			},
			{
				"category": "Energy",
				"subCategory": [
					"Energy Provider",
					"Engines & Motors",
					"Green",
					"Hydrogen",
					"Photovoltaic Systems",
					"Power Generation Systems",
					"Power Stations & Substation Design & Construct",
					"Solar",
					"Waste to Energy",
					"Wind Turbine"
				]
			},
			{
				"category": "Engineering",
				"subCategory": [
					"Acoustic Engineering",
					"Aeronaughtical Engineering",
					"Airport Engineering Services",
					"Biomedical Engineering",
					"Civil Engineering",
					"Civil Engineering - Bridges & Roads",
					"Civil Engineering - Dams",
					"Civil Engineering - Tunnels",
					"Earthquake Engineering",
					"Electrical Engineering",
					"Environmental Engineering",
					"Fire Engineering - Dry Fire",
					"Fire Engineering - Wet Fire",
					"Fire Engineering - Fire Safety",
					"Geotechnical Engineering",
					"Heavy Engineering",
					"Hydraulic Engineering Services",
					"Industrial Engineering",
					"Lighting & Lighting Control Engineering",
					"Manufacturing Engineering",
					"Marine Engineering",
					"Mechanical Engineering",
					"Research & Technical Services",
					"Structural Engineering",
					"Systems Engineering",
					"Traffic Engineering",
					"Water & Sanitation Engineering",
					"Wind Engineering"
				]
			},
			{
				"category": "Engineering Support Services",
				"subCategory": [
					"Project Management",
					"Drafting Services",
					"Programming"
				]
			},
			{
				"category": "Environmental & Conservation Services ",
				"subCategory": [
					"Archeology Survey & Assessments",
					"Bushfire Recovery and Resilience",
					"Bushland Maintenance and Monitoring",
					"Community Engagement and Education",
					"Consultancy and Advisory Services:",
					"Contaminated Land Assessment",
					"Contaminated Soil Remediation",
					"Detailed Site Investigation (DSI)",
					"Environmental Management",
					"Environmental Product",
					"Environmental Services",
					"Environmental & Heritage Services",
					"Environmental Engineering",
					"Environmental Impact Assessment",
					"Environmental Monitoring & Audit",
					"Environmental Testing Services",
					"Ecological Assessments",
					"Erosion Control and Soil Stabilization",
					"Feral Animal Management Services",
					"Habitat Enhancement and Fauna Management",
					"Heritage Advisory Services",
					"Native Plant Propagation and Revegetation",
					"Pest Control and Management ",
					"PFAS Remediation",
					"Remediation Action Plans",
					"Site Assessment and Planning",
					"Site Remediation",
					"Soil & Groundwater Assessment",
					"Sustainable Environmental Services",
					"Testing Services",
					"Water Resources Management",
					"Weed Control and Management",
					"Wildlife, Flora and Fauna Management",
					"Wildlife Management Plan"
				]
			},
			{
				"category": "Events Management",
				"subCategory": [
					"Venue Hire",
					"Community Events",
					"Corporate Events",
					"Cultural Event Services",
					"NAIDOC Services & Products",
					"Production Services"
				]
			},
			{
				"category": "Exterior Amenities",
				"subCategory": [
					"Landscaping",
					"Parking Structures",
					"Other",
					"Storage Units",
					"Site Amenities"
				]
			},
			{
				"category": "Facilities Management",
				"subCategory": [
					"Asset Management",
					"Building Maintenance",
					"Cleaning and Janitorial Services",
					"Contract Management",
					"Facilities Maintenance",
					"Facilities Operations",
					"Security Services",
					"Tenant Services",
					"Concierge ",
					"Waste Management Services",
					"Commercial Leasing ",
					"Leasing - Other"
				]
			},
			{
				"category": "Fencing Products & Services",
				"subCategory": [
					"Fencing Supplies",
					"Barriers - Temporary ",
					"Barriers - Permanent",
					"Barriers - Visual",
					"Barriers - Physical",
					"Gates - Manual",
					"Gates - Automatic",
					"Mesh",
					"Wire",
					"Barbed Wire",
					"Cyclone Mesh",
					"Black/PVC Coated",
					"Posts",
					"Bars and Bracing",
					"Hardware, Locks, Chains, Hinges and Latches",
					"Temporary Fence",
					"Fence Bays & Modules",
					"Traffic Barriers",
					"Boom Gates",
					"Boom Gate Hardware and Controlls "
				]
			},
			{
				"category": "Financial Services",
				"subCategory": [
					"Accounting & Auditing",
					"Budget & Financial Review",
					"Superannuation"
				]
			},
			{
				"category": "Finishing Trades",
				"subCategory": [
					"Externals Cladding",
					"Interior Fit-Out:",
					"Floor Coverings",
					"Paint Finishes"
				]
			},
			{
				"category": "Fire & Safety",
				"subCategory": [
					"Fire Products",
					"Personal Protective Equipment PPE",
					"Rescue & Safety Equipment",
					"Fire Equipment & Maintenance Services",
					"Fire Protection Systems",
					"Fire Safety & Security Systems",
					"Wet Fire Systems",
					"Dry Fire Equipment "
				]
			},
			{
				"category": "Food & Beverage",
				"subCategory": [
					"Catering",
					"Catering Services",
					"Dry Goods",
					"Fresh Fruit & Vegetables",
					"Water"
				]
			},
			{
				"category": "Formwork",
				"subCategory": [
					"Structural Formwork",
					"Non-Structural Fromwork",
					"Prefinished Formwork",
					"Column Forms ",
					"Formwork Systems",
					"Jump Form Systems",
					"Prefabricated & Preassembled Formwork System",
					"Formwork Consumables"
				]
			},
			{
				"category": "Fuels & Oils",
				"subCategory": [
					"Fuel",
					"Oils ",
					"Greases, Lubricants & Anti Corrosives"
				]
			},
			{
				"category": "Furniture & Finishings",
				"subCategory": [
					"Cabinets & Lockers",
					"Custom Built",
					"Indoor",
					"Office",
					"Office Fit Out",
					"Other",
					"Outdoor Furiture",
					"Custom Built & Specialist Furniture",
					"Healthcare & Aged Care  Furniture",
					"Anti-ligature Funiture"
				]
			},
			{
				"category": "Healthcare Systems & Services",
				"subCategory": [
					"Medical Equipment & Supplies",
					"Healthcare Services"
				]
			},
			{
				"category": "Heavy Industry ",
				"subCategory": [
					"Heavy Construction",
					"Heavy Engineering",
					"Heavy Industry Equipment",
					"Heavy Vehicles"
				]
			},
			{
				"category": "Horticulture & Arboriculture",
				"subCategory": [
					"Mulching",
					"Vegetation Control & Management",
					"Weed Control & Management"
				]
			},
			{
				"category": "Human Resource Services",
				"subCategory": [
					"Development",
					"Indigenous Labour Hire",
					"Labour Hire",
					"Occupational Health & Safety",
					"Other",
					"Payroll & HR Services",
					"Pre-Employment Screening Services",
					"Recruitment",
					"Salary Packaging",
					"Temporary Personnel"
				]
			},
			{
				"category": "Industrial Systems",
				"subCategory": [
					"Industrial Automation",
					"Industrial Automation & Process Control",
					"Industrial Filtering & Purification",
					"Industrial Production",
					"Industrial Pumps & Compressors"
				]
			},
			{
				"category": "Information & Communications Technology (ICT, IT)",
				"subCategory": [
					"Cloud Services",
					"Computer Hardware",
					"Computer Software",
					"Cyber Security",
					"Database Management",
					"Data Cabling Systems",
					"Digital Data",
					"Data Analytics",
					"Data Services",
					"Digital Transformation",
					"Document Scanning",
					"Digital Media",
					"Distribution Services",
					"GPS Products & Services",
					"Internet Services",
					"IT & ICT Services",
					"IT Peripherals",
					"Project Management",
					"Software Development",
					"Support & Maintenance",
					"System Software",
					"Website Development & Hosting",
					"Information Technology Systems & Services",
					"Communications Systems & Services",
					"Telecommunications Sytems and Services",
					"Other"
				]
			},
			{
				"category": "Interior Finishes",
				"subCategory": [
					"Interior Designers",
					"Ceiling Systems",
					"Flooring",
					"Partition Systems"
				]
			},
			{
				"category": "Landscaping",
				"subCategory": [
					"Mowing and Slashing Services",
					"Green Roofs and Living Walls",
					"Plant Propegation and Supply ",
					"Irrigation and Watering Systems",
					"Hard Landscaping Materials",
					"Soft Landscaping Materials"
				]
			},
			{
				"category": "Manufacturing & Industrial Production",
				"subCategory": [
					"Engraving",
					"Grinding & Machining",
					"Industrial Cleaning",
					"Industrial Laser Cleaning",
					"Industrial Production",
					"Metal Fabrication",
					"Other"
				]
			},
			{
				"category": "Mechanical Services & Installation",
				"subCategory": [
					"Condenser Units",
					"Air Conditioning Maintenance",
					"Air Conditioning Systems",
					"Ductwork",
					"Mechanical Plant",
					"Mechanical Plant Equipment",
					"Refrigeration Systems",
					"Mechanical Louvres ",
					"Mechanical Dampners",
					"Fans",
					"Cooling towers",
					"Ventilation Systems",
					"Mechanical Electrical Systems"
				]
			},
			{
				"category": "Mechanical Systems & Services",
				"subCategory": [
					"Air Handling Units",
					"Ductwork and Ventilation Systems"
				]
			},
			{
				"category": "Medical Equipment & Services - Specialist",
				"subCategory": [
					"Radio Frequency (RF) Sheilding",
					"Radio Frequency (RF) Consultancy",
					"Electo Magnetic Frequency (EMF) Sheilding",
					"Electo Magnetic Frequency (EMF) Consultancy"
				]
			},
			{
				"category": "Medical Supplies",
				"subCategory": [
					"Alcohol & Drug Testing",
					"Medical PPE",
					"Rapid Antigen Tests (RAT)",
					"First Aid Kits",
					"Defibrillator "
				]
			},
			{
				"category": "Metalwork",
				"subCategory": [
					"Bollards",
					"Handrails",
					"Fixtures & Fittings",
					"Outdoor Furniture"
				]
			},
			{
				"category": "Mining, Gas & Oil",
				"subCategory": [
					"Mining & Quarry Services",
					"Open Pit Mining Services",
					"Other",
					"Well Drilling Equipment",
					"Gas & Oil, Exploration Equipment",
					"Bore & Well Drilling Services",
					"Crushing & Screening Services",
					"Drilling & Blasting",
					"Mining & Quarry Machinery",
					"Strip Mining Services"
				]
			},
			{
				"category": "Modular Construction",
				"subCategory": [
					"Transportable & Demountable Buildings"
				]
			},
			{
				"category": "Office Supplies",
				"subCategory": [
					"Office Supplies and Services",
					"Branded Stationery",
					"Ink & Toner",
					"Managed Print Services",
					"Printers",
					"Printers & Multifunction Devices",
					"Promotional Items",
					"Stationery",
					"White Boards"
				]
			},
			{
				"category": "Painting Supplies & Services",
				"subCategory": [
					"Acrylic Paint",
					"Anti-Graffiti Paint",
					"Enamel Paint",
					"Epoxy Paint",
					"Fire-Retardant Paint",
					"Low VOC (Volatile Organic Compound) Paint",
					"Metallic Paint",
					"Primer Paint",
					"Specialty Paint Coatings",
					"Texture Paint Coatings"
				]
			},
			{
				"category": "Pavement Stabilisation",
				"subCategory": [
					"Pavement Stabilisation Services",
					"Pavement Stabilisation Materials"
				]
			},
			{
				"category": "Personal Protective Equipment (PPE)",
				"subCategory": [
					"Glasses",
					"Gloves",
					"Hi Vis Vests",
					"Hi Vis Shirts & Clothing",
					"Protective Workwear",
					"Safety Boots"
				]
			},
			{
				"category": "Pesticide & Herbicide Spraying",
				"subCategory": [
					"Organic Pesticides & Herbicides",
					"Environmentally Friendly Pesticides & Herbicides"
				]
			},
			{
				"category": "Photography",
				"subCategory": [
					"Photographic & Recording Media",
					"Drone & Aeiral Photography",
					"Building and Feature Photography"
				]
			},
			{
				"category": "Plant & Equipment",
				"subCategory": [
					"Ute Hire",
					"Ute Purchase",
					"Ute Lease/Finance",
					"Access Equipment Hire",
					"Access Equipment Purchase",
					"Access Equipment Lease/Finance",
					"Agricultural Machinery Hire",
					"Agricultural Machinery Purchase",
					"Agricultural Machinery Lease/Finance",
					"Bus Hire - Unchartered",
					"Bus Hire - Chartered",
					"Bus Purchase",
					"Bus Lease/Finance",
					"Concrete Pump Hire",
					"Concrete Pump Purchase",
					"Concrete Pump Lease/Finance",
					"Crane - Dry Hire",
					"Crane - Wet Hire",
					"Crane Purchase",
					"Crane Lease/Finance",
					"Excavation - Dry Hire",
					"Excavation - Wet Hire",
					"Excavation Purchase",
					"Excavation Lease/Finance",
					"Forklift - Dry Hire",
					"Forklift - Wet Hire",
					"Forklift Purchase",
					"Forklift Lease/Finance",
					"Grader - Dry Hire",
					"Grader - Wet Hire",
					"Grader Purchase",
					"Grader Lease/Finance",
					"Lighting Equipment Hire",
					"Lighting Equipment Purchase",
					"Lighting Equipment Lease/Finance",
					"Loader - Dry Hire",
					"Loader - Wet Hire",
					"Loader Purchase",
					"Loader Lease/Finance",
					"Rollers & Compactor - Dry Hire",
					"Rollers & Compactor - Wet Hire",
					"Rollers & Compactor Purchase",
					"Rollers & Compactor Lease/Finance",
					"Site Amenities Hire",
					"Site Amenities Purchase",
					"Site Amenities Finance",
					"Skid Steer Loader - Dry Hire",
					"Skid Steer Loader - Wet Hire",
					"Skid Steer Loader Purchase",
					"Skid Steer Loader Finance",
					"Telehandler Hire",
					"Telehandler Purchase",
					"Telehandler Finance",
					"Tip Truck - Dry Hire",
					"Tip Truck - Wet Hire",
					"Tip Truck Purchase",
					"Tip Truck Finance",
					"Traffic & Crowd Control Hire",
					"Traffic & Crowd Control Supply and Install",
					"Traffic & Crowd Control Consultancy & Services",
					"Truck - Dry Hire",
					"Truck - Wet Hire",
					"Truck Purchase",
					"Truck Lease/Finance",
					"Van, Utility Vehicle Hire",
					"Van, Utility Vehicle Purchase",
					"Van, Utility Vehicle Lease/Finance",
					"Water Tanker - Dry Hire",
					"Water Tanker - Wet Hire",
					"Water Tanker Purchase",
					"Water Tanker Lease/Finance"
				]
			},
			{
				"category": "Plumbing ",
				"subCategory": [
					"Maintenance Services ",
					"Pipes and Fittings",
					"Sanitary Fixtures and Fittings",
					"Water Heating Systems",
					"Plumbing and Sanitary",
					"Pump Specialists"
				]
			},
			{
				"category": "Power Supply",
				"subCategory": [
					"Power Generation & Transmission/Distribution",
					"Generators",
					"Batteries",
					"Solar Panels - Fixed",
					"Solar Panels - Portable",
					"Renewable Energy",
					"Hydrogen",
					"Electro Magnetic Energy"
				]
			},
			{
				"category": "Printing Services",
				"subCategory": [
					"Banners",
					"Books ",
					"Business Cards",
					"Other",
					"Promotional Merchandise",
					"Signs",
					"Stationary"
				]
			},
			{
				"category": "Recruitment",
				"subCategory": [
					"Apprentice Provider",
					"Labour Hire",
					"Employment Provider Services",
					"Employment Support Services"
				]
			},
			{
				"category": "Retail",
				"subCategory": [
					"Retail & Domestic Goods",
					"Imported Goods",
					"Corporate Merchandise",
					"Hampers & Gifts",
					"Other"
				]
			},
			{
				"category": "Road Building Products",
				"subCategory": [
					"Geogrids",
					"Geosynthetics",
					"Geotextiles",
					"Road Maintenance and Repair Products",
					"Patch Repair Materials",
					"Road Maintenance and Services",
					"Sealants and Crack Fillers",
					"Linemarking",
					"Sealants and Crack Fillers",
					"Roadway Signage",
					"Asphalting",
					"Underground Services",
					"Crossovers",
					"Kerb and Channeling",
					"Drainage Design ",
					"Pits and Culverts",
					"Other",
					"Road & Street Furniture"
				]
			},
			{
				"category": "Roofing & Cladding",
				"subCategory": [
					"Roofing & Cladding: Cladding Systems",
					"Roofing and Cladding: Metal Roofing"
				]
			},
			{
				"category": "Safety Equipment",
				"subCategory": [
					"Safety Harness",
					"Anchor Points",
					"Access Equipment"
				]
			},
			{
				"category": "Scaffolding",
				"subCategory": [
					"Supply",
					"Scaffold Supply, Install",
					"Scaffold Supply, Install, Certify & Maintain",
					"Scaffolding Access"
				]
			},
			{
				"category": "Security & Personal Safety ",
				"subCategory": [
					"Security & Personal Safety Systems",
					"Security & Personal Safety Devices",
					"Security & Personal Safety Services",
					"Temporary Crowd Control Systems",
					"Temporary Barriers",
					"Personal Alert Devices"
				]
			},
			{
				"category": "Security Services",
				"subCategory": [
					"Access Control",
					"Alarms",
					"Security Cameras",
					"CCTV Systems and Controls"
				]
			},
			{
				"category": "Sewerage Systems and Services",
				"subCategory": [
					"Sewage Contractors",
					"Sewage System Engineers and Advisors",
					"Recycled Water Engineers and Advisors"
				]
			},
			{
				"category": "Signs",
				"subCategory": [
					"Coreflute Signs",
					"Signage for Road & Rail",
					"Signage & Road Barriers",
					"Other",
					"Safety Signs",
					"Local Government Signage"
				]
			},
			{
				"category": "Site Services & Consumables",
				"subCategory": [
					"Vending Machines Hire - Food & Drink Purchase & Stocking",
					"Vending Machines Hire - PPE Purchase & Stocking",
					"Vending Machines Hire - Purchase & Stocking of Other",
					"Food Services Equipment - Hire",
					"Food Services Equipment - Purchase",
					"Site Safety Supplies",
					"Spill Kits",
					"Skip Bin Hire",
					"Paint Washout",
					"Coffee & Tea",
					"Drinks & Beverages",
					"Test & Tag",
					"Material Handling & Lifting Equipment"
				]
			},
			{
				"category": "Steel Products",
				"subCategory": [
					"Non-Structural Steel"
				]
			},
			{
				"category": "Structural Steel",
				"subCategory": [
					"Angles",
					"Composite Beams",
					"Corrosion Resistant Structural Steel",
					"High-Strength Structural Steel",
					"Square Hollow Sections (SHS)",
					"Parallel Flange Channels (PFC)",
					"Plates and Flats",
					"Pre-engineered Structural Steel",
					"tructural Tees (T-sections)",
					"Universal Beams (UB)",
					"Universal Columns (UC)"
				]
			},
			{
				"category": "Sustainable Products",
				"subCategory": [
					"Timber and Wood Products",
					"Plastics, Resins & Polymers",
					"Eco Site Safety Supplies"
				]
			},
			{
				"category": "Sustainable and Energy Efficient Products",
				"subCategory": [
					"Sustainable and Energy Efficient Products: Energy Efficient Windows",
					"Insulation Materials",
					"Solar Panels, Photo Voltaic (PV) Cells"
				]
			},
			{
				"category": "Telecommunications",
				"subCategory": [
					"Phones & Plans & Data",
					"Radio & Wireless Services and Devices",
					"Satellite Communication Products & Systems",
					"Telecommunications Services & Maintenance",
					"Telecoms & Digital",
					"Technical Services & Advisory "
				]
			},
			{
				"category": "Temporary Fence",
				"subCategory": [
					"Temporary Fence: Gates and Access Points",
					"Temporary Fence: Anti-Climb Fencing",
					"Temporary Fence: Chain Link Fencing",
					"Temporary Fence: Crowd Control Barriers",
					"Temporary Fence: Hoarding Panels",
					"Temporary Fence: Mesh Panels",
					"Temporary Fence: Plastic Barriers",
					"Temporary Fencing (Hire/Sales/Installation)",
					"Temporary Personnel Services"
				]
			},
			{
				"category": "Timber Products",
				"subCategory": [
					"Acoustic Panels",
					"Cladding and Facades",
					"Feature Timber",
					"Flooring and Decking",
					"Joinery and Interior Finishes",
					"Structural Timber Products",
					"Framing and Carpentry",
					"Reclaimed & Recycled Timber",
					"Timber - Virgin",
					"Timber - Forestry Sourced & Certified (FSC)",
					"Prefinished Timber",
					"Marine Timber"
				]
			},
			{
				"category": "Tools",
				"subCategory": [
					"Battries",
					"Drills",
					"Hand Tools",
					"Power Tools ",
					"Saws "
				]
			},
			{
				"category": "Traditional Owner Group",
				"subCategory": [
					"Cultural Awareness Training",
					"Traditional Owner Group Consultancy Services",
					"Reconciliation Action Plan Development & Implementation ",
					"Indigenous & Aboriginal support Services & Programs"
				]
			},
			{
				"category": "Traffic Engineering",
				"subCategory": [
					"Traffic Engineering",
					"Traffic Management & Control Equipment",
					"Traffic Management & Control Services",
					"Traffic Services"
				]
			},
			{
				"category": "Training & Development",
				"subCategory": [
					"Content Development & Instructional Design",
					"Cultural Awareness Training",
					"Employment Service Provider",
					"Video Production ",
					"Web-based Training ",
					"Registered Training Organisation",
					"Workplace Health & Safety",
					"Workplace Programs",
					"Training Aids & Equipment",
					"Training & Employment Services",
					"Training Delivery & Facilitation",
					"Training Provider",
					"Vocational Training"
				]
			},
			{
				"category": "Transport",
				"subCategory": [
					"Transport Planning",
					"Transport Infrastructure",
					"Fleet Servicing and Vehicle Repair"
				]
			},
			{
				"category": "Vertical Transport",
				"subCategory": [
					"Lifts and Elevators ",
					"Escalators",
					"Travelators",
					"Transportation Systems"
				]
			},
			{
				"category": "Waste Management ",
				"subCategory": [
					"Waste Management & Landfill",
					"Water & Sewer Mains Construction",
					"Water & Sewerage Pump Station Construction",
					"Water Treatment Services",
					"Water-Efficient Fixtures and Systems:"
				]
			},
			{
				"category": "Waterproofing",
				"subCategory": [
					"Membranes",
					"Sealants"
				]
			}
		];
		//	write code here
		const category = insert_form.formData.category;
		const subCategories = categories_data.find(c => c.category == category).subCategory.map(sc => ({label: sc, value: sc }));


		console.log(subCategories)

		return subCategories || [];
	}
}