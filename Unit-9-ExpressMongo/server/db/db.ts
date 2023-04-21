import { MongoClient } from 'mongodb';
//calls connnection string in the env file
const uri = process.env.MONGO_URI || "";

if (!uri) {
  console.error("ERROR: Missing environment variable MONGO_URI.");
}

let client:MongoClient = new MongoClient(uri);

export const getClient = async () => {
	await client.connect();

	let db = client.db('ClassDatabase2');
	return db;
};