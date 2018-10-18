const initState = {
    list: [],
};

const rootReducer = (state = initState, action) => {

    switch (action.type) {

        case "FETCH_TODOS_SUCCESS":
            let listFromDB = action.list;
            return {
                ...state,
                list: listFromDB
            }

        case "DELETE_TODO":
            let newList = state.list.filter((todo, index) => action.id !== index)
            return {
                ...state,
                list: newList
            }

        case "CREATE_TODO":
            const title = action.title;
            const todo = action.todo;

            let createdList = [
                ...state.list,
                {
                    title,
                    todo
                }
            ]
            return {
                ...state,
                list: createdList
            }

        default:
            return state;

    }
}

export default rootReducer;