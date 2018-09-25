export const ADD_ARTICLE_REQUEST = "articles/ADD_ARTICLE_REQUEST";
export const ADD_ARTICLE_SUCCESS = "articles/ADD_ARTICLE_SUCCESS";
export const ADD_ARTICLE_ERROR = "articles/ADD_ARTICLE_ERROR";

const initialState = {
    fetching: false,
    error: false,
    data: [],

};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_ARTICLE_REQUEST:
            return {
                ...state,
                fetching: true,

            };
        case ADD_ARTICLE_SUCCESS:
            return {
                ...state,
                fetching: false,
                data: [
                    ...state.data,
                    action.payload
                ]
            };
        case ADD_ARTICLE_ERROR:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};

export function addArticle() {
    return (dispatch) => {
        dispatch({
            type: ADD_ARTICLE_REQUEST
        });
        fetch('https://jsonplaceholder.typicode.com/comments/' + Math.floor((Math.random() * 500) + 1))
            .then(
                response => response.json())
            .then((json) => (
                dispatch({
                    type: ADD_ARTICLE_SUCCESS,
                    payload: json
                })
            ))
            .catch((err) => {
                console.error(err);
                return dispatch({
                    type: ADD_ARTICLE_ERROR
                });
            })
    };
}
