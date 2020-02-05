const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
const ItemModel = require("../models/item");

const ItemType = new GraphQLObjectType({
	name: "Item",
	fields: () => ({
		id: { type: GraphQLString },
		todo: { type: GraphQLString },
		status: { type: GraphQLString }
	})
});

const Query = new GraphQLObjectType({
	name: "Query",
	fields: {
		item: {
			type: ItemType,
			args: {
				id: { type: GraphQLString }
			},
			resolve(parent, args) {
				return ItemModel.findById(args.id);
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		item: {
			type: ItemType,
			args: {
				todo: { type: GraphQLString }
			},
			resolve(parent, args) {
				const newItem = new ItemModel({
					todo: args.todo,
					status: "Active"
				});

				return newItem.save();
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: Query,
	mutation: Mutation
});
