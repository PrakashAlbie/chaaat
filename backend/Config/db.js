const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.Mongo_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(
			`MongoDB Connected: ${conn.connection.host}`.cyan.underline,
		);
	} catch (err) {
		console.log(`Error: ${err.message}`.red.bold);
		process.exit(); // what does this line do
	}
};

module.exports = connectDB;
