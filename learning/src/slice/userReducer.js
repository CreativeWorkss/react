const initialState = {
  user: null, // Initial state for the user object
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return { ...state, isLoading: true, error: null };
    case "FETCH_USER_SUCCESS":
      return { ...state, isLoading: false, user: action.payload };
    case "FETCH_USER_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    case "UPDATE_USER_PROFILE":
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
};

export default userReducer;
