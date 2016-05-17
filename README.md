# node seed

##The easy way to seed a mongoDB

###Steps

1	Design the schema with schemaGenerater
	
-	run schemaGenerator.js followed by arguments that define your schema like
		
		node schemaGenerator.js f_name f_name l_name l_name
		// this populates the schema.json file with:
		{
			"f_name": "f_name",
			"l_name": "l_name"
		} 

2	Now run schemaToSeed.js followed by how many seeds you want to make
	
		node schemaToSeed.js 3
		// This populates the ./seeds/Seed.json file with:
		[
			{
				"title": "You can't synthesize the interface without backing up the open-source HTTP capacitor!",
				"content": "Id voluptatem quam consectetur sint tempore et. Aliquam rerum quis magnam. Officiis nobis dolorum nostrum repudiandae delectus dignissimos. Accusantium eius qui."
			},
			{
				"title": "The PNG firewall is down, index the cross-platform firewall so we can quantify the TCP microchip!",
				"content": "Rerum saepe eos et expedita rerum fuga voluptate distinctio. Sint quia dolorum labore nihil eligendi nobis. Explicabo ut accusamus vel voluptatem. Voluptatibus culpa porro maiores suscipit saepe atque et. Magni molestias culpa magnam et voluptates. Sint commodi inventore dolorem molestias autem dolore atque."
			},
			{
				"title": "navigating the card won't do anything, we need to reboot the online SMS transmitter!",
				"content": "Vel fugit consequuntur alias. Placeat ratione enim tenetur repellat. Maxime dignissimos enim amet voluptatem id velit blanditiis. Sit beatae delectus sapiente optio. Ipsa saepe ipsum quia id labore."
			}
    ]
3	Last step run populateDB.rb taking two arguments:

*	1: the name of database
*	2: the name of the collection
	
		ruby populateDB.rb blogDB user
		// this connects to the blodDB, targets the user collection and imports our Seed.json file

##Resources
-	Read [this](http://zaiste.net/2012/08/importing_json_into_mongodb/) article to get an idea of how populateDB.rb works:
	 