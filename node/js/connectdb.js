let mongoose = require('mongoose');

let dbURL = 'mongodb+srv://onesevening:cFRhe1VarxVmc5If@cluster0.dfe9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURL,{
	useNewUrlParser:true,
	useUnifiedTopology:true
});

mongoose.connection.on('connected',function(){
	console.log("connected to database.");
});
