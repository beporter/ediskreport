export const CHANGE_LOCATION = "CHANGE_LOCATION";

export const changeLocation = (payload) => ({ type: CHANGE_LOCATION, payload });

// example of a thunk:
/*
export const fetchLocationChildren = path => {
    return (dispatch, getState) => {\
        dispatch(setLoading()); // show a loading indicator
        execLS(path).then(children => {  // execLS returns a Promise.
            dispatch(noLoading()); // remove loading indicator
            dispatch(setResultsForPath(path, children));
        });
    };
};
*/

const initialState = {
    root: '~',
    location: '~',
    results: [],
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_LOCATION:
            return { ...state, location: action.payload };
        default:
            return state;
    }
}
