# node seed

##The easy way to seed a mongoDB

###TODO

- Create Schema template for seed data
	- 	specify each field
	- 	specify faker type or hard-coded value for each field
	-	specify how many seeds you want to make
-	Convert Schema template into Json file
	-  takes in each field and what its datatype should be
	-  creates a user specified amount of seeds
	-  writes all records onto a Json file
-	Populate a mongoDB collection useing the generated JSON file
	- Drop the DB each time you reseed	