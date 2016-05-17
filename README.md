# node seed

##The easy way to seed a mongoDB

###Steps

1	Design the schema with schemaGenerater
	
-	run schemaGenerator.js followed by arguments that define your schema like
		
		node schemaGenerator.js f_name f_name l_name l_name username username password passwordDefault
		// this populates the schema.json file with:
		{
		  "f_name": "f_name",
		  "l_name": "l_name",
	      "username": "username",
	      "password": "passwordDefault"
		} 

2	Now run schemaToSeed.js followed by how many seeds you want to make
	
		node schemaToSeed.js 3
		// This populates the ./seeds/Seed.json file with:
	[
	  {
	    "f_name": "Osbaldo",
	    "l_name": "Feil",
	    "username": "Rosamond.Kshlerin",
	    "password": "password"
	  },
	  {
	    "f_name": "Emmitt",
	    "l_name": "Bashirian",
	    "username": "Liliane_Harris",
	    "password": "password"
	  },
	  {
	    "f_name": "Tracy",
	    "l_name": "Hoppe",
	    "username": "Yoshiko_Little",
	    "password": "password"
	  }
	]
3	Last step run populateDB.rb taking two arguments:

*	1: the name of database
*	2: the name of the collection
	
		ruby populateDB.rb blogDB user
		// this connects to the blodDB, targets the user collection and imports our Seed.json file

##Resources
-	Read [this](http://zaiste.net/2012/08/importing_json_into_mongodb/) article to get an idea of how populateDB.rb works:
	 