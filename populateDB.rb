puts "seeding database"
db_name = ARGV[0]
collection_name = ARGV[1]
puts db_name
puts collection_name
command =  "mongoimport --db #{db_name} --collection #{collection_name}
 --type json --file ./seeds/Seed.json --jsonArray"
command.delete!("\n")
puts command

system command