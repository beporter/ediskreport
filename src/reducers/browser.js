import readdir from "../lib/readdir";

export const CHANGE_LOCATION = "CHANGE_LOCATION";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_FILES = "SET_FILES";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const changeLocation = (payload) => ({ type: CHANGE_LOCATION, payload });
export const setIsLoading = (payload) => ({ type: SET_IS_LOADING, payload });
export const setErrorMessage = (payload) => ({ type: SET_ERROR_MESSAGE, payload });
export const setFiles = (payload) => ({ type: SET_FILES, payload });

export const scanPath = () => {
    return (dispatch, getState) => {
        const state = getState();
        const location = state.browser.location;
        console.log(location);
        dispatch(setIsLoading(true));
        readdir(location)
            .then(files => {
                dispatch(setFiles(files));
            })
            .catch(error => {
                dispatch(setErrorMessage(error));
            })
    };
}

const initialState = {
    root: '/Users/joeytrapp/Downloads/Testing',
    location: '/Users/joeytrapp/Downloads/Testing',
    results: [],
    errorMessage: "",
    isLoading: false
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_LOCATION:
            return { ...state, location: action.payload };
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case SET_ERROR_MESSAGE:
            return { ...state, isLoading: false, errorMessage: action.payload.toString() };
        case SET_FILES:
            return { ...state, isLoading: false, files: action.payload };
        default:
            return state;
    }
}
