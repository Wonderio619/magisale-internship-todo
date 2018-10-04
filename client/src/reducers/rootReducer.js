const initState = {
    list: [
        {
            title: 'Cup cleaning',
            todo: "Wash and take away the Kurzhiy's cup from WC"
        },
        {
            title: 'Smoking rollton',
            todo: 'Do some rollton and cigarettes'
        },
        {
            title: 'Curious dream',
            todo: 'Build a time machine'
        }
    ],
};

const rootReducer = (state = initState, action) => {

    switch (action.type) {

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