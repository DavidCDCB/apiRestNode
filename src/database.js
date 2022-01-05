// https://noviello.it/es/como-instalar-mongodb-en-ubuntu-20-04-lts/
// https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2
// https://www.bezkoder.com/mongoose-one-to-many-relationship/
// https://www.bezkoder.com/mongodb-many-to-many-mongoose/

import { connect } from 'mongoose';

(async ()=>{
	try {
		const db = await connect(process.env.URLDB);
		console.log("Database ",db.connection.name);
	}catch(err){
		console.log(err);
	}
})();