const Lokka = require("lokka").Lokka;
const Transport = require("lokka-transport-http").Transport;

const client = new Lokka({
	transport: new Transport("http://localhost:3000/graphql")
});

export const createItem = todo => async dispatch => {
	const newTodo = await client.mutate(`
		{
			item(todo: "${todo}") {
				todo,
				status
			}
		}
	`);

	dispatch({
		type: "NEW_ITEM",
		payload: newTodo
	});
};
