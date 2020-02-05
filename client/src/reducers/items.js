export default (state = [], { type, payload }) => {
	if (type === "NEW_ITEM") {
		return [...state, payload];
	}

	return state;
};
