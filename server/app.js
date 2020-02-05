const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const schema = require("./schemas");

app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
app.use(
	"/graphql",
	graphqlHTTP({
		schema
	})
);

mongoose.connect(
	"mongodb://koko1304:gno654171@todos-shard-00-00-hkcgm.mongodb.net:27017,todos-shard-00-01-hkcgm.mongodb.net:27017,todos-shard-00-02-hkcgm.mongodb.net:27017/todos?ssl=true&replicaSet=todos-shard-0&authSource=admin&retryWrites=true",
	() => {
		console.log("Mongodb connecting");

		app.listen(3000, () => {
			console.log("Server is listening on port 3000");
		});
	}
);
