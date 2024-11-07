var { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://onesevening:cFRhe1VarxVmc5If@cluster0.dfe9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function test(UserName,UserPassword){
	try{
		const Accounts = client.db("Accounts");
		const Account = Accounts.collection("Account");
		const Users = {
			Name: UserName,
			Password: UserPassword
		}
		if(Users.Name = "null"){
			console.log("Error:The UserName is null.")
		}else{
			if(Users.Password = "null"){
				console.log("Error:The Password is null.")
				}else{
					await Account.insertOne(Users);
					console.log("insert successfully");
				}
		     }
		}
		finally{
			await client.close();
	}
}

test();